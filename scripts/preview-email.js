const fs = require("node:fs");
const path = require("node:path");
const { buildContactEmail } = require("../lib/email-template");

const { html, text } = buildContactEmail({
  name: "Alex Miller",
  email: "alex@example.com",
  phone: "+1 (555) 000-0000",
  service: "Frontend / Next.js Development",
  budget: "$1,500 - $5,000 (Complete Platform)",
  message:
    "Hey Ahsan!\n\nI love the personality in your portfolio. We’re building a new brand website and would love your help bringing our Figma designs to life with Next.js.\n\nWe’re looking for a responsive, fast experience with thoughtful little interactions. Our target launch is in six weeks.\n\nLet’s make something great!",
});
const folder = path.join(__dirname, "../email-preview");
fs.mkdirSync(folder, { recursive: true });
fs.writeFileSync(path.join(folder, "contact-email.html"), html);
fs.writeFileSync(path.join(folder, "contact-email.txt"), text);
console.log(
  "Email preview written to email-preview/contact-email.html (sample data, no email sent).",
);
