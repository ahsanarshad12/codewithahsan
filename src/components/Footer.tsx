'use client'

import { ArrowUpRight } from 'lucide-react'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/codewithahsan' },
  { label: 'GitHub', href: 'https://github.com/codewithahsan' },
  { label: 'Email', href: 'mailto:ahsanarshad291@gmail.com' },
]

function FooterNavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="relative overflow-hidden group inline-block h-6"
    >
      <span className="block transition-transform duration-300 group-hover:-translate-y-full text-sm font-body">
        {label}
      </span>
      <span className="absolute top-full left-0 block transition-transform duration-300 group-hover:-translate-y-full text-sm font-body">
        {label}
      </span>
    </a>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Top section */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <h2
              className="font-display font-bold text-ink leading-[0.95] mb-3"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
            >
              AHSAN ARSHAD
            </h2>
            <p className="font-body text-sm text-muted">
              &copy;{currentYear} · All rights reserved
            </p>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <FooterNavLink key={link.label} href={link.href} label={link.label} />
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 border-t border-border">
          <p className="font-body text-xs text-muted">
            Rahim Yar Khan, Punjab, PK
          </p>
          <p className="font-body text-xs text-muted">
            Built with Next.js + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
