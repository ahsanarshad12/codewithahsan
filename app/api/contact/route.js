// app/api/contact/route.js
import nodemailer from "nodemailer";
import { buildContactEmail } from "../../lib/contactEmailTemplate";

export const runtime = "nodejs"; // nodemailer Edge runtime pe nahi chalta

const escapeHtml = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[c]));

// Header injection se bachne ke liye newlines hata do
const oneLine = (s = "") => String(s).replace(/[\r\n]+/g, " ").trim();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Simple in-memory rate limit (per IP, 5 requests / 10 min).
// Serverless pe ye best-effort hai; zyada strong chahiye to Upstash/Redis use karo.
const hits = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const list = (hits.get(ip) || []).filter((t) => now - t < windowMs);
  list.push(now);
  hits.set(ip, list);
  return list.length > 5;
}

let transporter;
function getTransporter() {
  if (!transporter) {
    const port = Number(process.env.SMTP_PORT || 465);
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  return transporter;
}

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bot ne fill kiya to silently success return karo
  if (body.website) return Response.json({ ok: true });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return Response.json(
      { error: "Too many messages. Please try again later." },
      { status: 429 },
    );
  }

  const name = oneLine(body.name).slice(0, 100);
  const email = oneLine(body.email).slice(0, 254);
  const phone = oneLine(body.phone).slice(0, 40);
  const service = oneLine(body.service).slice(0, 120);
  const budget = oneLine(body.budget).slice(0, 120);
  const message = String(body.message || "").trim().slice(0, 6000);

  if (!name || !email || !message) {
    return Response.json(
      { error: "Please fill all required fields." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error("SMTP_USER / SMTP_PASS missing in env");
    return Response.json(
      { error: "Mail service is not configured. Please email me directly." },
      { status: 500 },
    );
  }

  const html = buildContactEmail({
    name: escapeHtml(name),
    email: escapeHtml(email),
    mailtoEmail: encodeURIComponent(email),
    phone: escapeHtml(phone) || "Not provided",
    service: escapeHtml(service) || "Not specified",
    budget: escapeHtml(budget) || "Not specified",
    message: escapeHtml(message).replace(/\r?\n/g, "<br>"),
  });

  const text = `New portfolio enquiry

From: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Service: ${service || "Not specified"}
Budget: ${budget || "Not specified"}

${message}`;

  try {
    await getTransporter().sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || "ahsanarshad291@gmail.com",
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject: `New enquiry from ${name}`,
      text,
      html,
    });
    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact mail error:", err);
    return Response.json(
      { error: "Could not send your note. Please email me directly." },
      { status: 500 },
    );
  }
}