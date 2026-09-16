"use client";

import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { useId, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { TransitionLink } from "@/components/transitions/transition-link";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils/cn";
import type {
  NEWSLETTER_HONEYPOT_FIELD,
  NewsletterInput,
  NewsletterResponse,
} from "@/lib/validation/newsletter";

type ValidationModule = typeof import("@/lib/validation/newsletter");
type NewsletterSchema = ValidationModule["newsletterSchema"];
type Status = "idle" | "submitting" | "success" | "error";

const endpoint = "/api/newsletter";

/** A hung connection should end in a retry prompt, not an endless "Sending". */
const REQUEST_TIMEOUT_MS = 15_000;

/** `AbortSignal.timeout` is missing before Safari 16; without it the request simply has no deadline. */
function timeoutSignal() {
  return "timeout" in AbortSignal ? AbortSignal.timeout(REQUEST_TIMEOUT_MS) : undefined;
}

/** Typed against the shared constant, so renaming it there fails type-checking here. */
const honeypotField: typeof NEWSLETTER_HONEYPOT_FIELD = "website";

let validationModule: Promise<ValidationModule> | null = null;

/**
 * The footer renders on every page, so zod is fetched on first interaction
 * with the form rather than shipped in every route's initial bundle.
 */
function loadSchema() {
  validationModule ??= import("@/lib/validation/newsletter");
  return validationModule.then((module) => module.newsletterSchema);
}

const messages = {
  success: "Thank you — you are on the list. Our next letter arrives with the change of season.",
  error: "We could not add you just now. Please try again in a moment.",
} as const;

/**
 * The raw error token is too dark to read on ink, so it is lifted towards
 * ivory. The `color:` hint stops tailwind-merge mistaking it for a font size.
 */
const errorTone = {
  text: "text-[color:color-mix(in_oklab,var(--color-error)_40%,var(--color-ivory))]",
  border: "border-[color:color-mix(in_oklab,var(--color-error)_40%,var(--color-ivory))]",
  bg: "bg-[color:color-mix(in_oklab,var(--color-error)_40%,var(--color-ivory))]",
} as const;

/** Validates on the client; the only message shown belongs to the visible email field. */
function validate(schema: NewsletterSchema, input: NewsletterInput) {
  const result = schema.safeParse(input);
  if (result.success) return { data: result.data, message: null };
  const issue = result.error.issues.find((item) => item.path[0] === "email");
  return { data: null, message: issue?.message ?? messages.error };
}

interface NewsletterFormProps {
  className?: string;
}

export function NewsletterForm({ className }: NewsletterFormProps) {
  const id = useId();
  const inputId = `${id}-email`;
  const errorId = `${id}-error`;
  const consentId = `${id}-consent`;
  const honeypotId = `${id}-${honeypotField}`;

  const inputRef = useRef<HTMLInputElement>(null);
  const schemaRef = useRef<NewsletterSchema | null>(null);
  /**
   * Set synchronously on submit. `status` is state, so two quick submits (a
   * double Enter while zod is still loading) would both read "idle".
   */
  const pendingRef = useRef(false);

  const [status, setStatus] = useState<Status>("idle");
  const [fieldError, setFieldError] = useState<string | null>(null);
  /** Remounts the error node per failed submit so a repeated message is announced again. */
  const [attempt, setAttempt] = useState(0);

  async function ensureSchema() {
    if (schemaRef.current) return schemaRef.current;
    try {
      schemaRef.current = await loadSchema();
      return schemaRef.current;
    } catch {
      validationModule = null;
      return null;
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (status === "success" || status === "error") setStatus("idle");
    // "Reward early": once an error shows, clear it the moment the value becomes valid.
    const schema = schemaRef.current;
    if (!fieldError || !schema) return;
    setFieldError(validate(schema, { email: event.target.value }).message);
  }

  function showFieldError(message: string) {
    setFieldError(message);
    setAttempt((value) => value + 1);
    setStatus("idle");
    inputRef.current?.focus();
  }

  async function submit(form: HTMLFormElement) {
    const formData = new FormData(form);
    const input: NewsletterInput = {
      email: String(formData.get("email") ?? ""),
      [honeypotField]: String(formData.get(honeypotField) ?? ""),
    };

    // If the validation chunk cannot load (flaky network, new deploy), the
    // raw input still goes to the server, which validates it anyway.
    const schema = await ensureSchema();
    let payload: NewsletterInput = input;
    if (schema) {
      const { data, message } = validate(schema, input);
      if (!data) {
        showFieldError(message);
        return;
      }
      payload = data;
    }

    setFieldError(null);
    setStatus("submitting");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: timeoutSignal(),
      });
      const body = (await response.json().catch(() => null)) as NewsletterResponse | null;

      if (response.ok && body?.ok) {
        form.reset();
        setStatus("success");
        return;
      }

      const serverMessage = body && !body.ok ? body.fieldErrors?.email?.[0] : undefined;
      if (serverMessage) showFieldError(serverMessage);
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pendingRef.current) return;
    pendingRef.current = true;
    try {
      await submit(event.currentTarget);
    } finally {
      pendingRef.current = false;
    }
  }

  const isSubmitting = status === "submitting";
  const announcement = status === "success" || status === "error" ? status : null;

  return (
    <form
      noValidate
      // Only used if the form is submitted before hydration: a POST keeps the
      // address out of the page URL, history and analytics.
      method="post"
      action={endpoint}
      onSubmit={handleSubmit}
      onFocus={() => void ensureSchema()}
      onPointerEnter={() => void ensureSchema()}
      className={cn("relative", className)}
    >
      <label htmlFor={inputId} className="eyebrow block text-ivory/55">
        Email address
      </label>

      <div
        className={cn(
          "group/field relative mt-1 flex items-center gap-4 border-b transition-colors duration-500",
          fieldError ? errorTone.border : "border-ivory/25",
        )}
      >
        <input
          ref={inputRef}
          id={inputId}
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          autoCapitalize="none"
          spellCheck={false}
          enterKeyHint="send"
          placeholder="name@example.com"
          aria-invalid={fieldError ? true : undefined}
          aria-describedby={fieldError ? `${errorId} ${consentId}` : consentId}
          onChange={handleChange}
          className="h-16 min-w-0 flex-1 bg-transparent font-serif text-heading-sm font-light text-ivory caret-bronze-light outline-none placeholder:text-ivory/40 focus-visible:outline-none"
        />

        <button
          type="submit"
          aria-disabled={isSubmitting || undefined}
          className="group/submit relative -mr-1 flex h-12 shrink-0 items-center gap-4 pl-2 text-ivory"
        >
          {/* Both labels share one grid cell so swapping them never changes the input width. */}
          <span className="eyebrow grid justify-items-end">
            <span
              aria-hidden={isSubmitting || undefined}
              className={cn(
                "col-start-1 row-start-1 transition-opacity duration-500",
                isSubmitting && "opacity-0",
              )}
            >
              Subscribe
            </span>
            <span
              aria-hidden={!isSubmitting || undefined}
              className={cn(
                "col-start-1 row-start-1 text-ivory/70 transition-opacity duration-500",
                !isSubmitting && "opacity-0",
              )}
            >
              Sending
            </span>
          </span>
          <span
            aria-hidden
            className="relative flex size-11 items-center justify-center overflow-hidden rounded-full border border-ivory/30 transition-colors duration-700 ease-out-expo group-hover/submit:border-ivory group-hover/submit:bg-ivory group-hover/submit:text-ink"
          >
            {status === "success" ? (
              <Icon name="check" size={16} />
            ) : (
              <>
                <Icon
                  name="arrow-right"
                  size={16}
                  className="transition-transform duration-700 ease-out-expo group-hover/submit:translate-x-[220%] motion-reduce:transition-none"
                />
                <Icon
                  name="arrow-right"
                  size={16}
                  className="absolute -translate-x-[220%] transition-transform duration-700 ease-out-expo group-hover/submit:translate-x-0 motion-reduce:transition-none"
                />
              </>
            )}
          </span>
        </button>

        {/* Focus line draws across the hairline in place of a boxy outline. */}
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 transition-transform duration-1000 ease-out-expo group-focus-within/field:scale-x-100 motion-reduce:transition-none",
            fieldError ? errorTone.bg : "bg-ivory",
            // Step aside while sending so the progress sweep reads against the dim hairline.
            isSubmitting && "opacity-0",
          )}
        />

        <AnimatePresence>
          {isSubmitting ? (
            <m.span
              key="progress"
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pointer-events-none absolute inset-x-0 -bottom-px h-px overflow-hidden"
            >
              <m.span
                className="block h-full w-1/3 bg-bronze-light"
                initial={{ x: "-100%" }}
                animate={{ x: "300%" }}
                transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1], repeat: Infinity }}
              />
            </m.span>
          ) : null}
        </AnimatePresence>
      </div>

      {/*
       * One polite region for every outcome. Pressing Enter keeps focus in the
       * field, where a changed description alone is not read out, so field
       * errors are announced here as well as linked by aria-describedby.
       */}
      <div role="status" className="mt-3 min-h-5">
        {fieldError ? (
          <p key={attempt} id={errorId} className={cn("text-caption", errorTone.text)}>
            {fieldError}
          </p>
        ) : null}

        <AnimatePresence mode="wait" initial={false}>
          {announcement ? (
            <m.p
              key={announcement}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4, transition: { duration: 0.3 } }}
              transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
              className={cn(
                "flex items-start gap-3 text-caption",
                announcement === "success" ? "text-ivory/80" : errorTone.text,
              )}
            >
              <Icon
                name={announcement === "success" ? "check" : "close"}
                size={14}
                className="mt-[0.2rem] shrink-0"
              />
              <span>{messages[announcement]}</span>
            </m.p>
          ) : null}
        </AnimatePresence>
      </div>

      <p id={consentId} className="mt-4 max-w-sm text-caption text-pretty text-ivory/55">
        By subscribing you agree to our{" "}
        <TransitionLink
          href="/legal/privacy"
          className="text-ivory/80 underline decoration-ivory/30 underline-offset-4 transition-colors duration-500 hover-fine:text-ivory hover-fine:decoration-ivory"
        >
          Privacy Policy
        </TransitionLink>
        . Unsubscribe at any time.
      </p>

      {/* Honeypot: clipped and inert, so sighted visitors, keyboards and assistive tech never reach it. */}
      <div
        aria-hidden
        inert
        className="pointer-events-none absolute top-0 left-0 size-px overflow-hidden opacity-0 [clip-path:inset(50%)]"
      >
        <label htmlFor={honeypotId}>Leave this field empty</label>
        <input
          id={honeypotId}
          type="text"
          name={honeypotField}
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>
    </form>
  );
}
