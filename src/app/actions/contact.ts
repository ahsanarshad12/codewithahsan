'use server'

import nodemailer from 'nodemailer'

export async function sendContactEmail(data: {
  name: string
  email: string
  whatsapp: string
  service: string
  budget: string
  message: string
}) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  })

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.MAIL_USER}>`,
    to: 'ahsanarshad291@gmail.com',
    subject: `New Hire Request from ${data.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>WhatsApp:</strong> ${data.whatsapp}</p>
      <p><strong>Service:</strong> ${data.service}</p>
      <p><strong>Budget:</strong> ${data.budget || 'Not specified'}</p>
      <p><strong>Message:</strong><br/>${data.message}</p>
    `,
  })
}
