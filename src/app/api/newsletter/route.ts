import {
  getNewsletterFieldErrors,
  isNewsletterHoneypotFilled,
  NEWSLETTER_HONEYPOT_FIELD,
  newsletterSchema,
  type NewsletterResponse,
} from "@/lib/validation/newsletter";

/** A signup is a few dozen bytes; anything far larger is not a genuine request. */
const MAX_BODY_BYTES = 4_096;

function respond(body: NewsletterResponse, status = 200) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * Reads the body as text, giving up as soon as it passes the byte limit. A
 * missing or dishonest Content-Length (chunked uploads) cannot make the
 * server buffer an arbitrarily large payload first.
 */
async function readBody(request: Request): Promise<string | null> {
  if (!request.body) return "";
  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let bytes = 0;
  let text = "";

  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    bytes += value.byteLength;
    if (bytes > MAX_BODY_BYTES) {
      await reader.cancel();
      return null;
    }
    text += decoder.decode(value, { stream: true });
  }

  return text + decoder.decode();
}

/**
 * Newsletter signup. Only POST is exported, so Next.js answers every other
 * method with 405 automatically.
 */
export async function POST(request: Request) {
  const declaredLength = Number(request.headers.get("content-length") ?? 0);
  if (declaredLength > MAX_BODY_BYTES) {
    return respond({ ok: false, error: "payload_too_large" }, 413);
  }

  let payload: unknown;
  try {
    const raw = await readBody(request);
    if (raw === null) {
      return respond({ ok: false, error: "payload_too_large" }, 413);
    }
    payload = JSON.parse(raw);
  } catch {
    return respond({ ok: false, error: "invalid_json" }, 400);
  }

  // Valid JSON that is not an object (null, an array, a string) carries no
  // fields, so it is validated as an empty submission and reports the email.
  const fields = isRecord(payload) ? payload : {};

  // Checked before validation so automated fillers always receive the same
  // quiet success and never learn which inputs the server would reject.
  if (isNewsletterHoneypotFilled(fields[NEWSLETTER_HONEYPOT_FIELD])) {
    return respond({ ok: true });
  }

  const result = newsletterSchema.safeParse({ ...fields, [NEWSLETTER_HONEYPOT_FIELD]: undefined });
  if (!result.success) {
    return respond(
      { ok: false, error: "validation_error", fieldErrors: getNewsletterFieldErrors(result.error) },
      400,
    );
  }

  // Hand-off point for the email provider. The address itself is never
  // logged: server logs are not a place for personal data.
  console.info("[newsletter] Subscription request accepted");

  return respond({ ok: true });
}
