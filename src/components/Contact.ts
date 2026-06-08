'use server'

import nodemailer from 'nodemailer'

export type ContactPayload = {
  name: string
  email: string
  phone: string
  service: string
  customService: string
  budget: string
  message: string
}

// ── Transporter ────────────────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS, // Gmail App Password
  },
})

// ── Main Action ────────────────────────────────────────────────────────────
export async function sendContactEmail(data: ContactPayload) {
  const {
    name,
    email,
    phone,
    service,
    customService,
    budget,
    message,
  } = data

  const finalService =
    service === 'Other (describe below)' && customService
      ? `Other — ${customService}`
      : service

  // ── 1. Mail to YOU (Ahsan) ─────────────────────────────────────────────
  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_USER, // ahsanarshad291@gmail.com
    replyTo: email,            // reply karo to seedha client ko jayegi
    subject: `📩 New Inquiry — ${finalService} from ${name}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { margin: 0; padding: 0; background: #0f0f0f; font-family: 'Segoe UI', sans-serif; color: #e5e5e5; }
            .wrap { max-width: 600px; margin: 40px auto; background: #1a1a1a; border-radius: 16px; overflow: hidden; border: 1px solid #2a2a2a; }
            .header { background: #111; padding: 32px 36px 24px; border-bottom: 1px solid #2a2a2a; }
            .header h1 { margin: 0; font-size: 22px; font-weight: 600; color: #fff; }
            .header p { margin: 6px 0 0; font-size: 13px; color: #666; }
            .body { padding: 28px 36px; }
            .row { display: flex; gap: 12px; margin-bottom: 16px; }
            .field { flex: 1; background: #111; border: 1px solid #2a2a2a; border-radius: 10px; padding: 14px 16px; }
            .field .label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.12em; color: #555; margin-bottom: 4px; }
            .field .value { font-size: 14px; color: #e5e5e5; word-break: break-all; }
            .message-box { background: #111; border: 1px solid #2a2a2a; border-radius: 10px; padding: 16px; margin-top: 4px; }
            .message-box .label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.12em; color: #555; margin-bottom: 8px; }
            .message-box .value { font-size: 14px; color: #e5e5e5; line-height: 1.7; white-space: pre-wrap; }
            .footer { padding: 20px 36px; border-top: 1px solid #2a2a2a; text-align: center; font-size: 11px; color: #444; }
            a { color: #6b9cff; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="wrap">
            <div class="header">
              <h1>📩 New Project Inquiry</h1>
              <p>Received via ahsanarshad.dev contact form</p>
            </div>
            <div class="body">
              <div class="row">
                <div class="field">
                  <div class="label">Name</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
              </div>
              <div class="row">
                <div class="field">
                  <div class="label">Phone / WhatsApp</div>
                  <div class="value"><a href="tel:${phone}">${phone}</a></div>
                </div>
                <div class="field">
                  <div class="label">Budget</div>
                  <div class="value">${budget || 'Not specified'}</div>
                </div>
              </div>
              <div class="row">
                <div class="field" style="flex: 1;">
                  <div class="label">Service Requested</div>
                  <div class="value">${finalService}</div>
                </div>
              </div>
              <div class="message-box">
                <div class="label">Project Details</div>
                <div class="value">${message}</div>
              </div>
            </div>
            <div class="footer">
              Reply to this email to respond directly to ${name} &nbsp;•&nbsp; Ahsan Arshad Portfolio
            </div>
          </div>
        </body>
      </html>
    `,
  })

  // ── 2. Confirmation mail to CLIENT ─────────────────────────────────────
  await transporter.sendMail({
    from: `"Ahsan Arshad" <${process.env.MAIL_USER}>`,
    to: email,
    subject: `✅ Got your message, ${name}! I'll be in touch soon.`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { margin: 0; padding: 0; background: #0f0f0f; font-family: 'Segoe UI', sans-serif; color: #e5e5e5; }
            .wrap { max-width: 560px; margin: 40px auto; background: #1a1a1a; border-radius: 16px; overflow: hidden; border: 1px solid #2a2a2a; }
            .header { background: #111; padding: 36px 36px 28px; border-bottom: 1px solid #2a2a2a; text-align: center; }
            .icon { font-size: 36px; margin-bottom: 12px; }
            .header h1 { margin: 0; font-size: 20px; font-weight: 600; color: #fff; }
            .header p { margin: 8px 0 0; font-size: 13px; color: #666; }
            .body { padding: 28px 36px; }
            .body p { font-size: 14px; line-height: 1.8; color: #bbb; margin: 0 0 16px; }
            .summary { background: #111; border: 1px solid #2a2a2a; border-radius: 10px; padding: 16px 20px; margin: 20px 0; }
            .summary-row { display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid #222; font-size: 13px; }
            .summary-row:last-child { border-bottom: none; }
            .summary-row .key { color: #555; }
            .summary-row .val { color: #e5e5e5; text-align: right; max-width: 60%; }
            .footer { padding: 20px 36px; border-top: 1px solid #2a2a2a; text-align: center; font-size: 11px; color: #444; }
            a { color: #6b9cff; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="wrap">
            <div class="header">
              <div class="icon">✦</div>
              <h1>Message Received!</h1>
              <p>Thanks for reaching out, ${name}</p>
            </div>
            <div class="body">
              <p>I've received your project inquiry and will get back to you within <strong style="color:#fff;">24 hours</strong>.</p>
              <p>Here's a summary of what you submitted:</p>
              <div class="summary">
                <div class="summary-row">
                  <span class="key">Service</span>
                  <span class="val">${finalService}</span>
                </div>
                <div class="summary-row">
                  <span class="key">Budget</span>
                  <span class="val">${budget || 'Not specified'}</span>
                </div>
                <div class="summary-row">
                  <span class="key">Phone</span>
                  <span class="val">${phone}</span>
                </div>
              </div>
              <p>If you have any additional details to share, simply reply to this email.</p>
              <p style="margin-bottom: 0;">Talk soon,<br /><strong style="color:#fff;">Ahsan Arshad</strong><br /><span style="font-size:12px; color:#555;">Frontend Developer — React, Next.js, Laravel</span></p>
            </div>
            <div class="footer">
              <a href="mailto:ahsanarshad291@gmail.com">ahsanarshad291@gmail.com</a> &nbsp;•&nbsp; Rahim Yar Khan, Pakistan
            </div>
          </div>
        </body>
      </html>
    `,
  })
}