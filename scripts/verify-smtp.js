// Loads .env.local using the same precedence as Next.js. No email is sent.
require("@next/env").loadEnvConfig(process.cwd());
const nodemailer = require("nodemailer");
const { getMailConfig } = require("../lib/mailer");
(async () => {
  let transport;
  try {
    transport = nodemailer.createTransport(getMailConfig());
    await transport.verify();
    console.log(
      "SMTP connection and authentication successful. No email sent; send a form enquiry to test delivery.",
    );
  } catch (error) {
    console.error("SMTP verification failed:", error.code || "MAIL_ERROR");
    console.error(
      "Check .env.local, provider App Password, sender verification and SMTP ports.",
    );
    process.exitCode = 1;
  } finally {
    transport?.close();
  }
})();
