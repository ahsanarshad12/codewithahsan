'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const navLinks = [
  { href: '#home', label: 'Home', num: '01' },
  { href: '#projects', label: 'Projects', num: '02' },
  { href: '#skills', label: 'Skills', num: '03' },
  { href: '#about', label: 'About', num: '04' },
  { href: '#services', label: 'Services', num: '05' },
  { href: '#testimonials', label: 'Testimonials', num: '06' },
  { href: '#contact', label: 'Contact', num: '07' },
]

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="relative overflow-hidden group inline-block h-6 font-body text-sm tracking-wide text-ink"
    >
      <span className="block transition-transform duration-300 group-hover:-translate-y-full">
        {label}
      </span>
      <span className="absolute top-full left-0 block transition-transform duration-300 group-hover:-translate-y-full">
        {label}
      </span>
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-md bg-cream/80 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-display text-xl font-bold text-ink tracking-tight">
          AHSAN<span className="text-accent">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent text-cream px-5 py-2 rounded-full text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            Hire Me
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 hover:bg-ink/5 rounded"
            aria-label="Open menu"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-16 right-4 bg-ink text-cream border-l-0 w-[85vw] sm:max-w-[380px] rounded-lg shadow-lg p-6"
              >
                <div className="flex flex-col gap-0">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="group flex items-center gap-4 py-5 border-b border-cream/10 hover:pl-2 transition-all duration-300"
                    >
                      <span className="text-xs font-body text-cream/30 tabular-nums">{link.num}</span>
                      <span className="font-display text-2xl font-semibold text-cream group-hover:text-accent transition-colors duration-300">
                        {link.label}
                      </span>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-6">
                  <a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-accent text-cream px-6 py-3.5 rounded-full text-sm font-medium hover:bg-accent/90 transition-colors mb-6"
                  >
                    Hire Me
                    <ArrowUpRight className="size-4" />
                  </a>

                  <div className="flex items-center justify-between">
                    <span className="font-body text-xs text-cream/40">
                      Rahim Yar Khan, PK
                    </span>
                    <div className="flex items-center gap-4">
                      <a
                        href="https://linkedin.com/in/codewithahsan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-xs text-cream/40 hover:text-accent transition-colors"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="https://github.com/codewithahsan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-xs text-cream/40 hover:text-accent transition-colors"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </motion.header>
  )
}