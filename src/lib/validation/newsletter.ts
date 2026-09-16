import { z } from "zod";

/**
 * Newsletter signup contract, shared by the footer form (client-side feedback)
 * and `POST /api/newsletter` (the authority), so both always agree on what a
 * valid submission is and which messages a visitor sees.
 */

/**
 * Honeypot field name. It is visually hidden and removed from the
 * accessibility tree, so only automated form fillers ever give it a value.
 */
export const NEWSLETTER_HONEYPOT_FIELD = "website";

const emailRequired = "Please enter your email address.";

export const newsletterSchema = z.object({
  email: z
    .string({ error: emailRequired })
    .trim()
    .min(1, { error: emailRequired })
    // RFC 5321 caps a forward path at 254 characters.
    .max(254, { error: "That email address is too long." })
    .pipe(z.email({ error: "Please enter a valid email address." })),
  // No length rule: a filled honeypot is answered before validation, so a
  // limit here could only surface a validation message to a bot.
  [NEWSLETTER_HONEYPOT_FIELD]: z.string().optional(),
});

export type NewsletterInput = z.input<typeof newsletterSchema>;
export type NewsletterData = z.output<typeof newsletterSchema>;

export type NewsletterFieldErrors = Partial<Record<keyof NewsletterInput, string[]>>;

export type NewsletterResponse =
  | { ok: true }
  | {
      ok: false;
      error: "invalid_json" | "payload_too_large" | "validation_error";
      fieldErrors?: NewsletterFieldErrors;
    };

/** True when the honeypot holds anything other than an empty or blank string. */
export function isNewsletterHoneypotFilled(value: unknown) {
  if (value === undefined || value === null) return false;
  return typeof value !== "string" || value.trim().length > 0;
}

/** Collapses zod issues into per-field message arrays (the shape the API returns). */
export function getNewsletterFieldErrors(
  error: z.ZodError<NewsletterInput>,
): NewsletterFieldErrors {
  return z.flattenError(error).fieldErrors;
}
