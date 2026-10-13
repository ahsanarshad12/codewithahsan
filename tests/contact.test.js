const test = require("node:test");
const assert = require("node:assert/strict");
const nodemailer = require("nodemailer");
const {
  validateContact,
  SERVICES,
  BUDGETS,
} = require("../lib/contact-validation");
const { buildContactEmail } = require("../lib/email-template");
const { buildMailOptions, getMailConfig } = require("../lib/mailer");
const {
  createContactHandler,
  createRateLimiter,
} = require("../lib/contact-handler");

const good = {
  name: "Alex Miller",
  email: "alex@example.com",
  phone: "+1 (555) 000-0000",
  service: SERVICES[0],
  budget: BUDGETS[2],
  message: "I’d love to discuss a new Next.js website.\nLaunch in six weeks.",
  website: "",
};
function request(body = good, headers = {}) {
  return new Request("http://localhost:3000/api/contact", {
    method: "POST",
    headers: {
      origin: "http://localhost:3000",
      host: "localhost:3000",
      "content-type": "application/json",
      ...headers,
    },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}
function handler(sendEmail = async () => {}, extra = {}) {
  return createContactHandler({
    sendEmail,
    env: {},
    logger: { error() {} },
    ...extra,
  });
}

test("validates the exact form options and trims values", () => {
  const result = validateContact({ ...good, name: "  Alex Miller  " });
  assert.equal(result.data.name, "Alex Miller");
  assert.equal(result.data.website, undefined);
  for (const service of SERVICES)
    assert.ok(validateContact({ ...good, service }).data);
  for (const budget of BUDGETS)
    assert.ok(validateContact({ ...good, budget }).data);
});

test("rejects oversized, non-string, missing and header-injection input", () => {
  for (const bad of [
    null,
    [],
    { ...good, name: "" },
    { ...good, name: "Alex\r\nBcc: victim@example.com" },
    { ...good, email: "alex@example.com\r\nBcc: victim@example.com" },
    { ...good, email: "invalid" },
    { ...good, email: "a@example.com,b@example.com" },
    { ...good, name: "x".repeat(101) },
    { ...good, phone: {} },
    { ...good, service: "unknown" },
    { ...good, budget: "unknown" },
    { ...good, message: "" },
    { ...good, message: "x".repeat(6001) },
    { ...good, website: "spam" },
  ]) {
    assert.ok(validateContact(bad).error);
  }
});

test("template escapes submitted HTML and provides a plain-text alternative", () => {
  const result = buildContactEmail({
    ...good,
    name: '<img src=x onerror="alert(1)">',
    message: "<script>alert(1)</script>\nA & B",
  });
  assert.ok(!result.html.includes("<script>"));
  assert.ok(!result.html.includes("<img src=x"));
  assert.ok(
    result.html.includes("&lt;script&gt;alert(1)&lt;/script&gt;<br>A &amp; B"),
  );
  assert.ok(result.html.includes("#3f2b96"));
  assert.ok(result.text.includes("PROJECT DETAILS"));
  assert.ok(!result.html.includes("<script src="));
});

test("waits for mail acceptance before success", async () => {
  let accepted = false;
  const post = handler(async (data) => {
    assert.equal(data.email, good.email);
    accepted = true;
  });
  const response = await post(request());
  assert.ok(accepted);
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true });
});

test("validation fails without sending", async () => {
  let called = false;
  const response = await handler(async () => {
    called = true;
  })(request({ ...good, email: "bad" }));
  assert.equal(response.status, 400);
  assert.equal(called, false);
});

test("SMTP error never returns false success or exposes secrets", async () => {
  const response = await handler(async () => {
    throw new Error("SMTP secret should not leak");
  })(request());
  assert.equal(response.status, 502);
  const text = await response.text();
  assert.ok(!text.includes("secret"));
  assert.ok(text.includes("could not be sent"));
});

test("missing SMTP config returns an honest setup error", async () => {
  const response = await handler(async () => {
    throw Object.assign(new Error("missing"), { code: "MAIL_NOT_CONFIGURED" });
  })(request());
  assert.equal(response.status, 503);
  assert.ok((await response.json()).error.includes("isn’t configured"));
});

test("origin checks reject external/missing origins and enforce SITE_URL", async () => {
  assert.equal(
    (await handler()(request(good, { origin: "https://evil.example" }))).status,
    403,
  );
  assert.equal(
    (await handler()(request(good, { origin: "null" }))).status,
    403,
  );
  const post = handler(undefined, {
    env: { SITE_URL: "https://portfolio.example" },
  });
  assert.equal((await post(request())).status, 403);
  assert.equal(
    (await post(request(good, { origin: "https://portfolio.example" }))).status,
    200,
  );
});

test("body limits and malformed JSON fail safely", async () => {
  assert.equal(
    (await handler()(request(good, { "content-type": "text/plain" }))).status,
    415,
  );
  assert.equal((await handler()(request("{bad"))).status, 400);
  assert.equal((await handler()(request("x".repeat(33000)))).status, 413);
  assert.equal(
    (await handler()(request(good, { "content-length": "999999" }))).status,
    413,
  );
});

test("rate limit blocks repeated submission and resets", () => {
  const limit = createRateLimiter();
  for (let i = 0; i < 5; i++) assert.equal(limit("ip", 1000), 0);
  assert.ok(limit("ip", 1000) > 0);
  assert.equal(limit("ip", 601001), 0);
});

test("API exposes Retry-After on rate limiting", async () => {
  const response = await handler(undefined, { limit: () => 60 })(request());
  assert.equal(response.status, 429);
  assert.equal(response.headers.get("retry-after"), "60");
});

test("Nodemailer produces multipart message with fixed recipient and visitor Reply-To (no email sent)", async () => {
  const previous = {
    from: process.env.MAIL_FROM_ADDRESS,
    to: process.env.CONTACT_TO_EMAIL,
  };
  process.env.MAIL_FROM_ADDRESS = "owner@example.com";
  process.env.CONTACT_TO_EMAIL = "inbox@example.com";
  try {
    const options = buildMailOptions({ ...good, to: "attacker@example.com" });
    assert.equal(options.to, "inbox@example.com");
    assert.equal(options.from.address, "owner@example.com");
    assert.equal(options.replyTo.address, "alex@example.com");
    const transport = nodemailer.createTransport({
      streamTransport: true,
      buffer: true,
    });
    const result = await transport.sendMail(options);
    const mime = result.message.toString();
    assert.ok(mime.includes("multipart/alternative"));
    assert.ok(mime.includes("Reply-To: Alex Miller <alex@example.com>"));
    assert.ok(mime.includes("To: inbox@example.com"));
    assert.ok(mime.includes("text/html"));
    assert.ok(mime.includes("text/plain"));
  } finally {
    for (const [key, value] of [
      ["MAIL_FROM_ADDRESS", previous.from],
      ["CONTACT_TO_EMAIL", previous.to],
    ]) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  }
});

test("SMTP transport requires verified sender config and TLS", () => {
  const keys = [
    "SMTP_HOST",
    "SMTP_USER",
    "SMTP_PASS",
    "SMTP_PORT",
    "SMTP_SECURE",
    "MAIL_FROM_ADDRESS",
    "CONTACT_TO_EMAIL",
  ];
  const old = Object.fromEntries(keys.map((k) => [k, process.env[k]]));
  try {
    keys.forEach((k) => delete process.env[k]);
    assert.throws(() => getMailConfig(), { code: "MAIL_NOT_CONFIGURED" });
    Object.assign(process.env, {
      SMTP_HOST: "smtp.example.com",
      SMTP_USER: "owner@example.com",
      SMTP_PASS: "test-only",
      SMTP_PORT: "587",
      SMTP_SECURE: "false",
      MAIL_FROM_ADDRESS: "owner@example.com",
      CONTACT_TO_EMAIL: "inbox@example.com",
    });
    assert.equal(getMailConfig().requireTLS, true);
    assert.equal(getMailConfig().disableFileAccess, true);
    assert.equal(getMailConfig().tls.rejectUnauthorized, undefined); // Never disabled.
    process.env.SMTP_PORT = "465";
    assert.throws(() => getMailConfig(), { code: "MAIL_NOT_CONFIGURED" });
    process.env.SMTP_SECURE = "true";
    assert.equal(getMailConfig().secure, true);
  } finally {
    for (const [k, value] of Object.entries(old)) {
      if (value === undefined) delete process.env[k];
      else process.env[k] = value;
    }
  }
});
