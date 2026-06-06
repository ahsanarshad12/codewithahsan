'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Home, Briefcase, Zap, User, Sliders, MessageSquare, Mail } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home', num: '01' },
  { href: '#projects', label: 'Projects', num: '02' },
  { href: '#skills', label: 'Skills', num: '03' },
  { href: '#about', label: 'About', num: '04' },
  { href: '#services', label: 'Services', num: '05' },
  { href: '#testimonials', label: 'Testimonials', num: '06' },
  { href: '#contact', label: 'Contact', num: '07' },
];

const iconMap: Record<string, React.ElementType> = {
  '#home': Home,
  '#projects': Briefcase,
  '#skills': Zap,
  '#about': User,
  '#services': Sliders,
  '#testimonials': MessageSquare,
  '#contact': Mail,
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeDrawer = () => setMobileOpen(false);

  return (
    <>
      {/* ─── Desktop + Mobile Top Navbar ─── */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/5 backdrop-blur-xl ${
          scrolled
            ? 'bg-slate-950/92 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.8)]'
            : 'bg-slate-950/10'
        }`}
      >
        <nav className="w-full max-w-380 mx-auto px-4 lg:px-12 h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="font-display text-2xl font-bold tracking-tight text-white">
            AHSAN<span className="text-cyan-400">.</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative overflow-hidden group inline-flex h-8 items-center font-body text-sm tracking-[0.18em] uppercase text-slate-200/85 transition-colors duration-300 hover:text-cyan-300"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-x-0 bottom-0 h-[1px] bg-cyan-300/0 transition-all duration-300 group-hover:bg-cyan-300/80" />
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-colors duration-300 hover:bg-cyan-400"
            >
              Hire Me
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </button>
        </nav>
      </motion.header>

      {/* ─── Mobile Drawer ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeDrawer}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Drawer panel — slides in from the right */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-72 bg-slate-950 border-l border-white/10 flex flex-col md:hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">
                <a
                  href="#home"
                  onClick={closeDrawer}
                  className="font-display text-xl font-bold tracking-tight text-white"
                >
                  AHSAN<span className="text-cyan-400">.</span>
                </a>
                <button
                  onClick={closeDrawer}
                  className="flex items-center justify-center w-9 h-9 rounded-lg text-white hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* Drawer nav links */}
              <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
                {navLinks.map((link, i) => {
                  const Icon = iconMap[link.href];
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={closeDrawer}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.15, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-center gap-4 px-4 py-3.5 rounded-xl text-slate-200/80 hover:text-white hover:bg-white/5 transition-all duration-200 group"
                    >
                      <span className="text-[10px] font-body text-slate-500 w-5 shrink-0">{link.num}</span>
                      {Icon && <Icon className="size-4 text-cyan-400/70 group-hover:text-cyan-400 transition-colors shrink-0" />}
                      <span className="font-body text-sm tracking-[0.12em] uppercase">{link.label}</span>
                    </motion.a>
                  );
                })}
              </nav>

              {/* Drawer footer CTA */}
              <div className="px-6 py-6 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={closeDrawer}
                  className="flex items-center justify-center gap-2 w-full rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 transition-colors"
                >
                  Hire Me
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}