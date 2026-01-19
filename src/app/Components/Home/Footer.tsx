// components/Footer.tsx
"use client";
import React, { useEffect, useState } from 'react';
import {
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCode,
  FaServer,
  FaPaintBrush,
  FaCheckCircle,
  FaSpinner
} from 'react-icons/fa';
import { SiNextdotjs, SiLaravel } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FloatingActions from './floatingwhatsapp';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      offset: 100
    });
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setStatus('error');
      setMessage('Please enter your email');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('🎉 Check your email for our services!');
        setEmail('');

        // Reset after 5 seconds
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 5000);
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to subscribe. Please try again.');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const socialLinks = [
    { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/ahsanarshad-", label: "LinkedIn", color: "hover:bg-blue-600/20 hover:border-blue-500/50" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/callmeahsanarshad", label: "Instagram", color: "hover:bg-pink-600/20 hover:border-pink-500/50" },
    { icon: <FaWhatsapp />, href: "https://wa.me/923013421018", label: "WhatsApp", color: "hover:bg-green-600/20 hover:border-green-500/50" },
    { icon: <FaFacebookF />, href: "https://www.facebook.com/ahsanarshaddev", label: "Facebook", color: "hover:bg-blue-800/20 hover:border-blue-700/50" },
  ];

  const services = [
    { icon: <SiNextdotjs />, name: "Next.js Development", desc: "Modern React applications" },
    { icon: <SiLaravel />, name: "Laravel Development", desc: "Robust backend solutions" },
    { icon: <FaCode />, name: "Frontend Development", desc: "Responsive UI/UX" },
    { icon: <FaServer />, name: "API Development", desc: "REST & GraphQL APIs" },
    // { icon: <FaPaintBrush />, name: "UI/UX Design", desc: "Modern interface design" },
  ];

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "portfolio" },
    { name: "Contact", id: "hire" },
  ];

  const phone = "923013421018";
  const whatsappMessage = encodeURIComponent(
    "Welcome to Full Stack Developer Services. How may I help you?"
  );

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-950">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(180deg,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>
        <div className="absolute -top-20 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-600/5 to-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-600/5 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Brand */}
          <div data-aos="fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-500/30">
                <SiNextdotjs className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ahsan Arshad
              </h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-lg leading-relaxed">
              Full-stack developer crafting exceptional digital experiences with modern web technologies.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3">
              {['Next.js', 'Laravel', 'Tailwind', 'JavaScript'].map((tech, i) => (
                <div key={i} className="px-4 py-2 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
                  <span className="text-sm font-medium text-cyan-300">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-lg font-bold text-white mb-6 pb-3 border-b border-gray-800/50">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:ahsanarshad291@gmail.com"
                className="flex items-center gap-4 p-3 rounded-xl bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-red-500/20 to-pink-500/10">
                  <FaEnvelope className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-medium group-hover:text-cyan-300 transition-colors">
                    ahsanarshad291@gmail.com
                  </p>
                </div>
              </a>

              <a
                href={`https://api.whatsapp.com/send?phone=${phone}&text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-xl bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 hover:border-green-500/30 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/10">
                  <FaWhatsapp className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <p className="text-white font-medium group-hover:text-green-300 transition-colors">
                    +92 301 3421018
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-3 rounded-xl bg-gray-900/30 backdrop-blur-sm border border-gray-800/50">
                <div className="p-3 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/10">
                  <FaMapMarkerAlt className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white font-medium">Punjab, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-lg font-bold text-white mb-6 pb-3 border-b border-gray-800/50">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left p-3 rounded-lg bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 hover:border-cyan-500/30 hover:bg-gray-800/30 transition-all duration-300 group"
                >
                  <span className="text-gray-400 text-sm group-hover:text-cyan-300 transition-colors">
                    {link.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-lg font-bold text-white mb-6 pb-3 border-b border-gray-800/50">
              Services
            </h4>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-gray-800/50">
                    <div className="text-cyan-400">{service.icon}</div>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium group-hover:text-cyan-300 transition-colors">
                      {service.name}
                    </p>
                    <p className="text-gray-500 text-xs">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social & Newsletter */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-lg font-bold text-white mb-6 pb-3 border-b border-gray-800/50">
              Connect With Me
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`group relative p-3 rounded-xl bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 ${social.color} transition-all duration-300`}
                >
                  <div className="text-gray-400 group-hover:text-white transition-colors">
                    {social.icon}
                  </div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs text-white bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    {social.label}
                  </div>
                </a>
              ))}
            </div>

            {/* Newsletter Form */}
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800/50">
              <p className="text-sm text-gray-400 mb-3">
                📧 Subscribe to get my services info
              </p>

              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    disabled={status === 'loading'}
                    className="flex-1 px-3 py-2 text-sm bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-4 py-2 text-sm bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-medium hover:opacity-90 transition-all disabled:opacity-50 flex items-center gap-2"
                  >
                    {status === 'loading' ? (
                      <>
                        <FaSpinner className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : status === 'success' ? (
                      <>
                        <FaCheckCircle />
                        <span>Sent!</span>
                      </>
                    ) : (
                      'Subscribe'
                    )}
                  </button>
                </div>

                {/* Status Message */}
                {message && (
                  <p className={`text-xs ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                    {message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Ahsan Arshad. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Built with Next.js & Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="/privacy" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <span className="text-gray-700">•</span>
            <a href="/terms" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
          <FloatingActions />
        </div>
      </div>
    </footer>
  );
};

export default Footer;