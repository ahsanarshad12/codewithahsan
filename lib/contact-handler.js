const { validateContact } = require("./contact-validation");

const MAX_BYTES = 32768;
const WINDOW_MS = 10 * 60 * 1000;

// Baseline protection for a single Node process. Use a shared store or edge/WAF
// rate limit when deploying multiple instances / serverless (see README).
function createRateLimiter() {
  const entries = new Map();
  let globalWindow = { count: 0, reset: 0 };
  return (key, now = Date.now()) => {
    if (globalWindow.reset <= now)
      globalWindow = { count: 0, reset: now + 60000 };
    for (const [id, entry] of entries)
      if (entry.reset <= now) entries.delete(id);
    const entry = entries.get(key) || { count: 0, reset: now + WINDOW_MS };
    if (globalWindow.count >= 20 || entry.count >= 5) {
      const reset = globalWindow.count >= 20 ? globalWindow.reset : entry.reset;
      return Math.max(1, Math.ceil((reset - now) / 1000));
    }
    // Bound memory even if an explicitly trusted proxy supplies many distinct IPs.
    if (entries.size >= 10000 && !entries.has(key)) return 60;
    entry.count += 1;
    globalWindow.count += 1;
    entries.set(key, entry);
    return 0;
  };
}

function json(data, status = 200, headers = {}) {
  return Response.json(data, {
    status,
    headers: { "Cache-Control": "no-store", ...headers },
  });
}

async function readPayload(request) {
  const length = Number(request.headers.get("content-length") || 0);
  if (length > MAX_BYTES) throw new Error("TOO_LARGE");
  const reader = request.body?.getReader();
  if (!reader) throw new Error("INVALID_JSON");
  let total = 0;
  const chunks = [];
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      total += value.byteLength;
      if (total > MAX_BYTES) {
        await reader.cancel();
        throw new Error("TOO_LARGE");
      }
      chunks.push(Buffer.from(value));
    }
  } finally {
    reader.releaseLock();
  }
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

function sameOrigin(request, siteUrl) {
  try {
    const origin = new URL(request.headers.get("origin"));
    if (siteUrl) return origin.origin === new URL(siteUrl).origin;
    const host = request.headers.get("host") || new URL(request.url).host;
    return (
      ["http:", "https:"].includes(origin.protocol) && origin.host === host
    );
  } catch {
    return false;
  }
}

function createContactHandler({
  sendEmail,
  env = process.env,
  limit = createRateLimiter(),
  logger = console,
}) {
  return async function POST(request) {
    if (!sameOrigin(request, env.SITE_URL))
      return json(
        { error: "Please send your note from the portfolio website." },
        403,
      );
    if (
      !request.headers
        .get("content-type")
        ?.toLowerCase()
        .startsWith("application/json")
    ) {
      return json({ error: "Please submit JSON form data." }, 415);
    }
    // Only trust forwarding headers if your platform overwrites them at the edge.
    const key =
      env.CONTACT_TRUST_PROXY === "true"
        ? request.headers
            .get("x-forwarded-for")
            ?.split(",")[0]
            .trim()
            .slice(0, 100) || "shared"
        : "shared";
    const retryAfter = limit(key);
    if (retryAfter)
      return json(
        {
          error:
            "Too many attempts. Please wait a few minutes or email me directly.",
        },
        429,
        { "Retry-After": String(retryAfter) },
      );

    let input;
    try {
      input = await readPayload(request);
    } catch (error) {
      const large = error.message === "TOO_LARGE";
      return json(
        {
          error: large
            ? "Your message is too large."
            : "Invalid form data. Please try again.",
        },
        large ? 413 : 400,
      );
    }
    const { data, error } = validateContact(input);
    if (error) return json({ error }, 400);

    try {
      await sendEmail(data);
      // Only report success after the SMTP server accepts the message.
      // SMTP acceptance is not a guarantee of inbox placement.
      return json({ ok: true });
    } catch (error) {
      // Avoid logging credentials, visitor data, or SMTP message bodies.
      logger.error("Contact mail failed", { code: error.code || "MAIL_ERROR" });
      const unconfigured = error.code === "MAIL_NOT_CONFIGURED";
      return json(
        {
          error: unconfigured
            ? "Email delivery isn’t configured yet. Please email ahsanarshad291@gmail.com directly."
            : "Your note could not be sent. Please try again or email ahsanarshad291@gmail.com directly.",
        },
        unconfigured ? 503 : 502,
      );
    }
  };
}

module.exports = { createContactHandler, createRateLimiter };
