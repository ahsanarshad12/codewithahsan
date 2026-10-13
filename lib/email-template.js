// Table-based markup + inline CSS: no Tailwind, JavaScript or remote assets in email.
// Web fonts / rotations aren't reliable in Outlook, so email-safe fallbacks keep the theme.
function escapeHtml(value = "") {
  return String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char],
  );
}

function buildContactEmail(data) {
  const safe = Object.fromEntries(
    Object.entries(data).map(([key, value]) => [key, escapeHtml(value)]),
  );
  const subject = `New portfolio enquiry — ${data.name}`;
  const replyUrl = `mailto:${encodeURIComponent(data.email)}?subject=${encodeURIComponent("Re: Your project enquiry")}`;
  const row = (
    label,
    value,
  ) => `<tr><td style="padding:14px 18px;border-bottom:1px dashed #d6cfbe;">
    <div style="font-size:10px;line-height:16px;letter-spacing:2px;color:#716b81;font-weight:700;text-transform:uppercase;">${label}</div>
    <div style="margin-top:4px;font-size:15px;line-height:23px;color:#241740;font-weight:700;overflow-wrap:anywhere;word-break:break-word;">${value || "Not provided"}</div>
  </td></tr>`;

  const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"><title>New portfolio enquiry</title></head>
<body style="margin:0;padding:0;background-color:#f0ece1;color:#241740;font-family:Arial,Helvetica,sans-serif;">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">A new project note has arrived in your portfolio inbox.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#f0ece1"><tr><td align="center" style="padding:28px 12px;">
<!--[if mso]><table role="presentation" width="600"><tr><td><![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;border:2px solid #1f1347;border-radius:22px;overflow:hidden;background-color:#f9f7f1;">
<tr><td bgcolor="#3f2b96" style="padding:30px 26px 28px;color:#ffffff;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td>
    <span style="display:inline-block;padding:7px 11px;border:2px solid #ffffff;border-radius:9px;font-size:23px;line-height:28px;font-weight:900;letter-spacing:-1px;color:#ffffff;">AHSAN.</span>
  </td><td align="right" style="font-family:Georgia,serif;font-style:italic;color:#d8ccfe;font-size:14px;">ideas → code → impact</td></tr></table>
  <div style="margin-top:28px;"><span style="display:inline-block;background-color:#fbe84c;color:#1f1347;border:2px solid #1f1347;border-radius:6px;padding:6px 10px;font-size:10px;font-weight:800;letter-spacing:2px;">✦ INCOMING PROJECT NOTE</span></div>
  <h1 style="margin:16px 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:34px;line-height:39px;letter-spacing:-1px;font-weight:900;color:#ffffff;">GOOD IDEAS<br>START HERE.</h1>
  <p style="margin:0;font-family:Georgia,serif;font-style:italic;font-size:18px;line-height:27px;color:#e6deff;">A new connection. A new possibility.</p>
</td></tr>
<tr><td align="center" style="padding:0;background-color:#3f2b96;color:#f9f7f1;font-size:20px;line-height:16px;letter-spacing:8px;overflow:hidden;">◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆</td></tr>
<tr><td style="padding:26px 24px 0;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding-bottom:0;"><span style="display:inline-block;padding:6px 28px;background-color:#eee7b7;border-left:2px dashed #c2b677;border-right:2px dashed #c2b677;color:#74652a;font-size:11px;letter-spacing:2px;">THE BRIEF</span></td></tr></table>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border:2px solid #1f1347;border-radius:14px;">
    ${row("From", safe.name)}
    ${row("Email / reply directly", `<a href="mailto:${encodeURIComponent(data.email)}" style="color:#5333ed;text-decoration:underline;word-break:break-all;">${safe.email}</a>`)}
    ${row("Phone / WhatsApp", safe.phone)}
    ${row("Service", safe.service)}
    ${row("Budget · USD", safe.budget)}
  </table>
</td></tr>
<tr><td style="padding:22px 24px 0;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:2px solid #1f1347;border-radius:14px;background-color:#fffdf5;"><tr><td style="padding:20px;">
    <div style="color:#3f2b96;font-size:11px;font-weight:800;letter-spacing:2px;">✎ THE PROJECT NOTE</div>
    <p style="margin:14px 0 0;font-size:15px;line-height:26px;color:#332946;overflow-wrap:anywhere;word-break:break-word;">${safe.message.replace(/\n/g, "<br>")}</p>
  </td></tr></table>
</td></tr>
<tr><td align="center" style="padding:28px 24px;">
  <table role="presentation" cellpadding="0" cellspacing="0" style="border:2px solid #1f1347;border-radius:12px;background-color:#fbe84c;"><tr><td align="center" style="padding:15px 30px;"><a href="${replyUrl}" style="font-size:16px;line-height:22px;font-weight:900;color:#1f1347;text-decoration:none;">LET’S TALK →</a></td></tr></table>
  <p style="margin:14px 0 0;font-family:Georgia,serif;font-style:italic;color:#706385;font-size:15px;line-height:22px;">Your next great build could start with this reply.</p>
</td></tr>
<tr><td bgcolor="#1f1347" style="padding:24px;color:#ffffff;border-top:3px solid #11092b;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="font-size:12px;line-height:19px;color:#e6deff;"><strong style="color:#ffffff;">AHSAN ARSHAD</strong><br>Frontend &amp; Next.js Developer</td><td align="right" style="font-family:Georgia,serif;font-style:italic;font-size:18px;color:#fbe84c;">Made with care. ✦</td></tr></table>
  <p style="margin:16px 0 0;padding-top:14px;border-top:1px dashed #66558d;font-size:11px;line-height:18px;color:#c9bfe4;">Sent via your portfolio contact form. Details above were submitted by a visitor and are not verified. Use Reply to respond to their email address.</p>
</td></tr>
</table>
<!--[if mso]></td></tr></table><![endif]-->
<p style="margin:18px 0 0;color:#706385;font-size:10px;line-height:17px;letter-spacing:2px;">A LITTLE NOTE. A LOT OF POTENTIAL.</p>
</td></tr></table>
</body></html>`;
  const text = [
    "AHSAN. — NEW PORTFOLIO ENQUIRY",
    "",
    `From: ${data.name}`,
    `Email: ${data.email}`,
    `Phone / WhatsApp: ${data.phone || "Not provided"}`,
    `Service: ${data.service}`,
    `Budget: ${data.budget}`,
    "",
    "PROJECT DETAILS",
    data.message,
    "",
    "Visitor-submitted details, not verified. Reply to this email to contact the sender.",
  ].join("\n");
  return { subject, html, text };
}

module.exports = { buildContactEmail, escapeHtml };
