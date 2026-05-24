// app/api/subscribe/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail
        pass: process.env.EMAIL_PASS, // App Password (not regular password)
      },
    });

    // Email template with your services
    const servicesEmailTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; background-color: #0f172a; color: #ffffff; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
        .header { text-align: center; padding: 30px 0; background: linear-gradient(135deg, #06b6d4, #3b82f6); border-radius: 15px 15px 0 0; }
        .header h1 { margin: 0; font-size: 28px; color: #ffffff; }
        .content { background-color: #1e293b; padding: 40px 30px; border-radius: 0 0 15px 15px; }
        .welcome { font-size: 20px; color: #06b6d4; margin-bottom: 20px; }
        .service-card { background: linear-gradient(135deg, #1e3a5f, #0f172a); border: 1px solid #334155; border-radius: 12px; padding: 20px; margin: 15px 0; }
        .service-title { color: #06b6d4; font-size: 18px; font-weight: bold; margin-bottom: 8px; }
        .service-desc { color: #94a3b8; font-size: 14px; margin-bottom: 10px; }
        .service-price { color: #22c55e; font-size: 16px; font-weight: bold; }
        .cta-button { display: inline-block; background: linear-gradient(135deg, #06b6d4, #3b82f6); color: #ffffff; padding: 15px 35px; text-decoration: none; border-radius: 8px; font-weight: bold; margin-top: 20px; }
        .footer { text-align: center; padding: 30px; color: #64748b; font-size: 12px; }
        .social-links { margin: 20px 0; }
        .social-links a { color: #06b6d4; text-decoration: none; margin: 0 10px; }
        .divider { height: 1px; background: linear-gradient(90deg, transparent, #334155, transparent); margin: 25px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚀 Welcome to Ahsan Arshad Services</h1>
        </div>
        
        <div class="content">
          <p class="welcome">Thank you for subscribing! 🎉</p>
          <p style="color: #94a3b8; line-height: 1.8;">
            I'm a Full-Stack Developer specializing in modern web technologies. 
            Here are my premium services that can help transform your digital presence:
          </p>
          
          <div class="divider"></div>
          
          <h2 style="color: #ffffff; text-align: center;">💼 My Services Packages</h2>
          
          <div class="service-card">
            <div class="service-title">⚡ Next.js Development</div>
            <div class="service-desc">
              Modern, fast, and SEO-optimized React applications with server-side rendering, 
              static generation, and cutting-edge features.
            </div>
            <div class="service-price">Starting from $500</div>
          </div>
          
          <div class="service-card">
            <div class="service-title">🔧 Laravel Backend Development</div>
            <div class="service-desc">
              Robust and scalable backend solutions with Laravel. RESTful APIs, 
              authentication systems, database design, and more.
            </div>
            <div class="service-price">Starting from $400</div>
          </div>
          
          <div class="service-card">
            <div class="service-title">🎨 Frontend Development</div>
            <div class="service-desc">
              Beautiful, responsive, and interactive user interfaces using React, 
              Tailwind CSS, and modern UI/UX principles.
            </div>
            <div class="service-price">Starting from $300</div>
          </div>
          
          <div class="service-card">
            <div class="service-title">🔌 API Development</div>
            <div class="service-desc">
              Custom REST and GraphQL APIs with proper documentation, 
              authentication, and rate limiting.
            </div>
            <div class="service-price">Starting from $350</div>
          </div>
          
          <div class="service-card">
            <div class="service-title">🎯 Full Stack Package</div>
            <div class="service-desc">
              Complete web application development from design to deployment. 
              Frontend + Backend + Database + Hosting setup.
            </div>
            <div class="service-price">Starting from $1000</div>
          </div>
          
          <div class="divider"></div>
          
          <div style="text-align: center;">
            <p style="color: #94a3b8;">Ready to start your project?</p>
            <a href="https://wa.me/923013421018" class="cta-button">
              📱 Contact Me on WhatsApp
            </a>
          </div>
        </div>
        
        <div class="footer">
          <div class="social-links">
            <a href="https://www.linkedin.com/in/ahsanarshad-">LinkedIn</a> |
            <a href="https://www.instagram.com/callmeahsanarshad">Instagram</a> |
            <a href="https://www.facebook.com/ahsanarshaddev">Facebook</a>
          </div>
          <p>© ${new Date().getFullYear()} Ahsan Arshad. All rights reserved.</p>
          <p>Punjab, Pakistan | ahsanarshad291@gmail.com</p>
        </div>
      </div>
    </body>
    </html>
    `;

    // Send email
    await transporter.sendMail({
      from: `"Ahsan Arshad" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: '🚀 Welcome! Here are My Services - CodeWithAhsan',
      html: servicesEmailTemplate,
    });

    return NextResponse.json(
      { message: 'Subscription successful! Check your email.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}