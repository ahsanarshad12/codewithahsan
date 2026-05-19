'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Download } from 'lucide-react'

export default function ContactCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #1A1A1A 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-7xl mx-auto px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          {/* Profile */}
          <div className="flex items-center gap-4 mb-8">
            <div className="size-14 rounded-full bg-ink flex items-center justify-center shrink-0">
              <span className="font-display font-bold text-cream text-lg">AA</span>
            </div>
            <div>
              <h3 className="font-display font-bold text-ink text-lg">
                Ahsan Arshad
              </h3>
              <p className="font-body text-sm text-muted">
                Frontend Developer at G-Tech Solutions
              </p>
            </div>
          </div>

          {/* CTA text */}
          <h2
            className="font-display font-bold text-ink leading-[1.05] mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Let&apos;s build something
            <span className="text-accent italic"> great.</span>
          </h2>
          <p className="font-body text-muted text-lg mb-8 max-w-xl">
            Every great website starts with a conversation. Whether you have a
            project in mind or just want to chat about the web, I&apos;m here.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:ahsanarshad291@gmail.com"
              className="group relative inline-flex items-center gap-2 bg-accent text-cream px-7 py-3.5 rounded-full text-sm font-medium overflow-hidden transition-colors"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book a Call
                <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
              </span>
            </a>
            <button
              className="inline-flex items-center gap-2 border border-ink text-ink px-7 py-3.5 rounded-full text-sm font-medium hover:bg-ink hover:text-cream transition-colors"
            >
              <Download className="size-4" />
              Download CV
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
