// app/api/hire/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.json();
        const { name, email, phone, message, projectType, budget } = formData;

        // Validate required fields
        if (!name || !email || !phone || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Gmail SMTP Transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Current timestamp
        const timestamp = new Date().toLocaleString('en-PK', {
            timeZone: 'Asia/Karachi',
            dateStyle: 'full',
            timeStyle: 'long'
        });

        // Email template for YOU (the developer)
        const ownerEmailTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #0f172a; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; }
        .header { background: linear-gradient(135deg, #f59e0b, #ea580c); padding: 30px; text-align: center; border-radius: 15px 15px 0 0; }
        .header h1 { color: #ffffff; margin: 0; font-size: 24px; }
        .header p { color: rgba(255,255,255,0.9); margin: 10px 0 0; }
        .content { background-color: #1e293b; padding: 30px; }
        .alert-badge { display: inline-block; background: #22c55e; color: white; padding: 8px 16px; border-radius: 20px; font-size: 12px; font-weight: bold; margin-bottom: 20px; }
        .info-card { background: linear-gradient(135deg, #1e3a5f, #0f172a); border: 1px solid #334155; border-radius: 12px; padding: 20px; margin: 15px 0; }
        .info-row { display: flex; padding: 12px 0; border-bottom: 1px solid #334155; }
        .info-row:last-child { border-bottom: none; }
        .info-label { color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; min-width: 120px; }
        .info-value { color: #ffffff; font-size: 14px; font-weight: 500; }
        .message-box { background: #0f172a; border-left: 4px solid #f59e0b; padding: 20px; margin: 20px 0; border-radius: 0 12px 12px 0; }
        .message-box h3 { color: #f59e0b; margin: 0 0 10px; font-size: 14px; }
        .message-box p { color: #e2e8f0; margin: 0; line-height: 1.8; white-space: pre-wrap; }
        .action-buttons { margin-top: 25px; }
        .btn { display: inline-block; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 14px; margin-right: 10px; margin-bottom: 10px; }
        .btn-whatsapp { background: linear-gradient(135deg, #22c55e, #16a34a); color: white; }
        .btn-email { background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; }
        .btn-call { background: linear-gradient(135deg, #8b5cf6, #6d28d9); color: white; }
        .footer { background: #0f172a; padding: 20px; text-align: center; border-radius: 0 0 15px 15px; }
        .footer p { color: #64748b; margin: 0; font-size: 12px; }
        .priority-high { background: #dc2626; }
        .priority-medium { background: #f59e0b; }
        .priority-low { background: #22c55e; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎯 New Project Inquiry!</h1>
          <p>A potential client wants to work with you</p>
        </div>
        
        <div class="content">
          <span class="alert-badge">💰 NEW LEAD</span>
          
          <div class="info-card">
            <div class="info-row">
              <span class="info-label">👤 Client Name</span>
              <span class="info-value">${name}</span>
            </div>
            <div class="info-row">
              <span class="info-label">📧 Email</span>
              <span class="info-value">${email}</span>
            </div>
            <div class="info-row">
              <span class="info-label">📱 Phone/WhatsApp</span>
              <span class="info-value">+${phone}</span>
            </div>
            <div class="info-row">
              <span class="info-label">💼 Project Type</span>
              <span class="info-value">${projectType}</span>
            </div>
            <div class="info-row">
              <span class="info-label">💵 Budget</span>
              <span class="info-value" style="color: #22c55e; font-weight: bold;">${budget}</span>
            </div>
            <div class="info-row">
              <span class="info-label">📅 Received At</span>
              <span class="info-value">${timestamp}</span>
            </div>
          </div>
          
          <div class="message-box">
            <h3>📝 PROJECT DETAILS</h3>
            <p>${message}</p>
          </div>
          
          <div class="action-buttons">
            <a href="https://wa.me/${phone}?text=${encodeURIComponent(`Hi ${name}! Thanks for reaching out about your ${projectType} project. I've received your inquiry and would love to discuss it further. When would be a good time to talk?`)}" class="btn btn-whatsapp">
              💬 Reply on WhatsApp
            </a>
            <a href="mailto:${email}?subject=Re: Your ${projectType} Project Inquiry&body=Hi ${name},%0D%0A%0D%0AThank you for reaching out! I've received your project inquiry and I'm excited to discuss it further.%0D%0A%0D%0ABest regards,%0D%0AAhsan Arshad" class="btn btn-email">
              📧 Reply via Email
            </a>
            <a href="tel:+${phone}" class="btn btn-call">
              📞 Call Now
            </a>
          </div>
        </div>
        
        <div class="footer">
          <p>This is an automated notification from your portfolio website</p>
          <p style="margin-top: 5px;">© ${new Date().getFullYear()} Ahsan Arshad Portfolio</p>
        </div>
      </div>
    </body>
    </html>
    `;

        // Confirmation email for CLIENT
        const clientEmailTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #0f172a; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; }
        .header { background: linear-gradient(135deg, #06b6d4, #3b82f6); padding: 40px 30px; text-align: center; border-radius: 15px 15px 0 0; }
        .header h1 { color: #ffffff; margin: 0; font-size: 28px; }
        .content { background-color: #1e293b; padding: 40px 30px; color: #ffffff; }
        .welcome { font-size: 20px; color: #06b6d4; margin-bottom: 20px; }
        .summary-card { background: #0f172a; border: 1px solid #334155; border-radius: 12px; padding: 25px; margin: 25px 0; }
        .summary-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #1e293b; }
        .summary-row:last-child { border-bottom: none; }
        .label { color: #94a3b8; }
        .value { color: #ffffff; font-weight: 500; }
        .next-steps { background: linear-gradient(135deg, #22c55e20, #16a34a10); border: 1px solid #22c55e30; border-radius: 12px; padding: 25px; margin: 25px 0; }
        .next-steps h3 { color: #22c55e; margin: 0 0 15px; }
        .step { display: flex; align-items: center; gap: 12px; padding: 8px 0; color: #e2e8f0; }
        .step-num { background: #22c55e; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; }
        .cta-button { display: inline-block; background: linear-gradient(135deg, #22c55e, #16a34a); color: white; padding: 16px 32px; border-radius: 10px; text-decoration: none; font-weight: bold; margin-top: 20px; }
        .footer { background: #0f172a; padding: 30px; text-align: center; border-radius: 0 0 15px 15px; }
        .social-links { margin: 15px 0; }
        .social-links a { color: #06b6d4; text-decoration: none; margin: 0 10px; }
        .footer p { color: #64748b; margin: 5px 0; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎉 Thank You, ${name}!</h1>
        </div>
        
        <div class="content">
          <p class="welcome">Your project inquiry has been received!</p>
          
          <p style="color: #94a3b8; line-height: 1.8;">
            I'm thrilled that you're interested in working together. I've received your 
            <strong style="color: #f59e0b;">${projectType}</strong> project inquiry and 
            I'm excited to learn more about your vision.
          </p>
          
          <div class="summary-card">
            <h3 style="color: #06b6d4; margin: 0 0 15px;">📋 Inquiry Summary</h3>
            <div class="summary-row">
              <span class="label">Project Type:</span>
              <span class="value">${projectType}</span>
            </div>
            <div class="summary-row">
              <span class="label">Estimated Budget:</span>
              <span class="value" style="color: #22c55e;">${budget}</span>
            </div>
            <div class="summary-row">
              <span class="label">Submitted:</span>
              <span class="value">${timestamp}</span>
            </div>
          </div>
          
          <div class="next-steps">
            <h3>🚀 What Happens Next?</h3>
            <div class="step">
              <span class="step-num">1</span>
              <span>I'll review your project requirements (within 24 hours)</span>
            </div>
            <div class="step">
              <span class="step-num">2</span>
              <span>I'll reach out to schedule a discovery call</span>
            </div>
            <div class="step">
              <span class="step-num">3</span>
              <span>We'll discuss your vision and create a custom proposal</span>
            </div>
            <div class="step">
              <span class="step-num">4</span>
              <span>Once approved, we begin building your dream project!</span>
            </div>
          </div>
          
          <p style="color: #94a3b8;">
            Need to discuss something urgently? Feel free to reach out directly:
          </p>
          
          <div style="text-align: center;">
            <a href="https://wa.me/923013421018" class="cta-button">
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
        
        <div class="footer">
          <div class="social-links">
            <a href="https://www.linkedin.com/in/ahsanarshad-">LinkedIn</a> |
            <a href="https://www.instagram.com/callmeahsanarshad">Instagram</a> |
            <a href="https://www.facebook.com/ahsanarshaddev">Facebook</a>
          </div>
          <p>Ahsan Arshad - Full Stack Developer</p>
          <p>Punjab, Pakistan | ahsanarshad291@gmail.com</p>
        </div>
      </div>
    </body>
    </html>
    `;

        // Send email to OWNER (you)
        await transporter.sendMail({
            from: `"CodeWithAhsan" <${process.env.EMAIL_USER}>`,
            to: process.env.OWNER_EMAIL,
            subject: `🎯 New Project Inquiry: ${projectType} - ${budget} | ${name}`,
            html: ownerEmailTemplate,
        });

        // Send confirmation to CLIENT
        await transporter.sendMail({
            from: `"Ahsan Arshad" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `Thanks for your inquiry, ${name}! 🚀`,
            html: clientEmailTemplate,
        });

        // Create WhatsApp notification URL (for your reference)
        const whatsappNotifyUrl = `https://wa.me/${process.env.OWNER_PHONE}?text=${encodeURIComponent(
            `🎯 *NEW PROJECT INQUIRY*\n\n` +
            `👤 *Client:* ${name}\n` +
            `📧 *Email:* ${email}\n` +
            `📱 *Phone:* +${phone}\n` +
            `💼 *Project:* ${projectType}\n` +
            `💵 *Budget:* ${budget}\n\n` +
            `📝 *Details:*\n${message}\n\n` +
            `⏰ *Time:* ${timestamp}`
        )}`;

        return NextResponse.json({
            success: true,
            message: 'Inquiry submitted successfully!',
            whatsappNotifyUrl // Optional: can be used for manual notification
        }, { status: 200 });

    } catch (error) {
        console.error('Submission error:', error);
        return NextResponse.json(
            { error: 'Failed to submit inquiry' },
            { status: 500 }
        );
    }
}