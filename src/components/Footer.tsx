'use client'

import { ArrowUpRight } from 'lucide-react'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/codewithahsan'  },
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
      <span className="block transition-transform duration-300 group-hover:-translate-y-full text-sm font-body text-black">
        {label}
      </span>
      <span className="absolute top-full left-0 block transition-transform duration-300 group-hover:-translate-y-full text-sm font-body text-accent">
        {label}
      </span>
    </a>
  )
 }

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-[#F5F2EE] ">
      <div className="w-full max-w-380 mx-auto px-4 lg:px-12 py-12">
        {/* Top section */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <h2
              className="font-display font-bold text-[#070d18] leading-[0.95] mb-3"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
            >
              AHSAN ARSHAD
            </h2>
            <p className="font-body text-sm text-[#070d18]">
              &copy;{currentYear} · All rights reserved
            </p>
          </div>

          <div className="flex items-center gap-6 text-[#070d18]">
            {socialLinks.map((link) =>  (
              <FooterNavLink  key={link.label} href={link.href} label={link.label} />
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 border-t border-border">
          <p className="font-body text-xs text-[#070d18]">
            Rahim Yar Khan, Punjab, PK
          </p>
          <p className="font-body text-xs text-[#070d18]">
            Built with Next.js + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
 }