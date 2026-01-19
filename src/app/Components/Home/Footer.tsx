// components/Footer.tsx
"use client";
import React, { useEffect } from 'react';
import {
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp,
  FaCode,
  FaServer,
  FaPaintBrush
} from 'react-icons/fa';
import { SiNextdotjs, SiLaravel } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FloatingActions from './floatingwhatsapp';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      offset: 100
    });
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/ahsanarshad-", label: "LinkedIn", color: "hover:bg-blue-600/20 hover:border-blue-500/50" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/callmeahsanarshad", label: "Instagram", color: "hover:bg-pink-600/20 hover:border-pink-500/50" },
    { icon: <FaWhatsapp />, href: "https://wa.me/923013421018", label: "WhatsApp", color: "hover:bg-green-600/20 hover:border-green-500/50" },
    { icon: <FaFacebookF />, href: "https://www.facebook.com/ahsanarshaddev", label: "Facebook", color: "hover:bg-blue-800/20 hover:border-blue-700/50" },
    { icon: <FaGithub />, href: "https://github.com/ahsanarshad", label: "GitHub", color: "hover:bg-gray-700/20 hover:border-gray-600/50" },
  ];

  const services = [
    { icon: <SiNextdotjs />, name: "Next.js Development", desc: "Modern React applications" },
    { icon: <SiLaravel />, name: "Laravel Development", desc: "Robust backend solutions" },
    { icon: <FaCode />, name: "Frontend Development", desc: "Responsive UI/UX" },
    { icon: <FaServer />, name: "API Development", desc: "REST & GraphQL APIs" },
    { icon: <FaPaintBrush />, name: "UI/UX Design", desc: "Modern interface design" },
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
  const message = encodeURIComponent(
    "Welcome to Full Stack Developer Services. How may I help you?"
  );


  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-950">
      {/* Abstract Background */}
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
          {/* Brand & Description */}
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
              Specializing in building scalable applications with cutting-edge tools and best practices.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
                <span className="text-sm font-medium text-cyan-300">Next.js</span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
                <span className="text-sm font-medium text-red-400">Laravel</span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
                <span className="text-sm font-medium text-teal-400">Tailwind</span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
                <span className="text-sm font-medium text-yellow-400">JavaScript</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
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
                href={`https://api.whatsapp.com/send?phone=${phone}&text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
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

          {/* Social Links */}
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
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs text-white bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {social.label}
                  </div>
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800/50">
              <p className="text-sm text-gray-400 mb-2">Stay updated with my work</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50"
                />
                <button className="px-4 py-2 text-sm bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
                  Subscribe
                </button>
              </div>
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
            <a
              href="#"
              className="text-gray-500 hover:text-cyan-400 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-gray-700">•</span>
            <a
              href="#"
              className="text-gray-500 hover:text-cyan-400 text-sm transition-colors"
            >
              Terms of Service
            </a>
            <span className="text-gray-700">•</span>
            <a
              href="#"
              className="text-gray-500 hover:text-cyan-400 text-sm transition-colors"
            >
              Cookies
            </a>
          </div>
          <FloatingActions />
        </div>

        {/* Signature */}
        {/* <div className="text-center mt-8 pt-6 border-t border-gray-900">
          <p className="text-gray-600 text-sm">
            Crafted with ❤️ by Ahsan Arshad
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;