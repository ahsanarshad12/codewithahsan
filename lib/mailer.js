const nodemailer = require("nodemailer");
const { isEmail } = require("./contact-validation");
const { buildContactEmail } = require("./email-template");

let transporter;

function getMailConfig() {
  const required = [
    "SMTP_HOST",
    "SMTP_USER",
    "SMTP_PASS",
    "MAIL_FROM_ADDRESS",
    "CONTACT_TO_EMAIL",
  ];
  if (required.some((key) => !process.env[key]?.trim())) {
    const error = new Error("Missing SMTP environment variables.");
    error.code = "MAIL_NOT_CONFIGURED";
    throw error;
  }
  const port = Number(process.env.SMTP_PORT || 587);
  const secure = process.env.SMTP_SECURE === "true";
  if (
    !Number.isInteger(port) ||
    port < 1 ||
    port > 65535 ||
    (port === 465 && !secure) ||
    !isEmail(process.env.MAIL_FROM_ADDRESS) ||
    !isEmail(process.env.CONTACT_TO_EMAIL)
  ) {
    const error = new Error(
      "Invalid SMTP configuration. Check port, secure mode and addresses.",
    );
    error.code = "MAIL_NOT_CONFIGURED";
    throw error;
  }
  return {
    host: process.env.SMTP_HOST,
    port,
    secure,
    requireTLS: !secure,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    tls: { minVersion: "TLSv1.2" },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 20000,
    disableFileAccess: true,
    disableUrlAccess: true,
  };
}

function buildMailOptions(data) {
  return {
    // Never use the visitor as From or allow them to choose the recipient.
    from: {
      name: "Ahsan Arshad · Portfolio",
      address: process.env.MAIL_FROM_ADDRESS,
    },
    to: process.env.CONTACT_TO_EMAIL,
    replyTo: { name: data.name, address: data.email },
    ...buildContactEmail(data),
    disableFileAccess: true,
    disableUrlAccess: true,
  };
}

async function sendContactEmail(data) {
  // Validate on every invocation, including before constructing message headers.
  const config = getMailConfig();
  if (!transporter) transporter = nodemailer.createTransport(config);
  const result = await transporter.sendMail(buildMailOptions(data));
  if (!result.accepted?.length) {
    const error = new Error("SMTP provider did not accept the recipient.");
    error.code = "MAIL_REJECTED";
    throw error;
  }
  return result;
}

module.exports = { sendContactEmail, getMailConfig, buildMailOptions };
