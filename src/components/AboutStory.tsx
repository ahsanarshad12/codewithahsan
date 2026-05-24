'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const timeline = [
  {
    year: '2025 — Present',
    title: 'Frontend Developer at G-Tech Solutions',
    desc: 'Building production web applications, dashboards, and partner portals using React, Next.js, Tailwind, and Laravel. Shipping features that power real businesses every day.',
  },
  {
    year: '2024 — 2025',
    title: 'UI Development & Design Practice',
    desc: 'Focused on translating complex designs into pixel-perfect, responsive interfaces. Built a strong foundation in Figma-to-code workflows and accessible design systems.',
  },
  {
    year: '2024',
    title: 'Started as a Freelancer',
    desc: 'Took on small client projects — websites, landing pages, UI implementations. Learned the real-world demands of freelance development: deadlines, revisions, and client communication.',
  },
  {
    year: 'Earlier',
    title: 'Foundations & Curiosity',
    desc: 'Spent time exploring JavaScript, CSS, and the web ecosystem. Built small projects, broke things, and learned how to fix them. The beginning of a habit that never stopped.',
  },
]

export default function AboutStory() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 md:py-32 bg-ink">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-xs tracking-[0.3em] text-cream/40 font-body uppercase mb-4 block">
            About / Story
          </span>
          <h2
            className="font-display font-bold text-cream leading-[0.95]"
            style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
          >
            THE PATH BEHIND
            <br />
            THE CODE
          </h2>
        </motion.div>

        {/* Main content: bio + timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-2 gap-12 md:gap-20"
        >
          {/* Bio */}
          <div>
            <p className="font-body text-cream/70 text-lg leading-relaxed mb-6">
              Hi, I&apos;m <span className="text-accent font-semibold">Ahsan Arshad</span> — a frontend developer based in Rahim Yar Khan, Pakistan, currently building meaningful products at G-Tech Solutions.
            </p>
            <p className="font-body text-cream/50 text-base leading-relaxed mb-6">
              I started because I loved the challenge of turning a static design into something interactive and alive. Over time, that curiosity grew into a craft — one where I care as much about the user journey as I do about clean React code, performance metrics, and shipping production-ready apps.
            </p>
            <p className="font-body text-cream/50 text-base leading-relaxed">
              My design background makes me unique: I don&apos;t just write code — I build interfaces that feel intentionally crafted, accessible, and fast.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-8 pb-8 border-l border-cream/15 last:pb-0"
              >
                <span className="absolute left-0 top-1 -translate-x-1/2 size-3 rounded-full bg-accent border-2 border-ink" />
                <span className="font-body text-xs text-accent tracking-wide uppercase mb-1 block">
                  {item.year}
                </span>
                <h3 className="font-display font-bold text-cream text-lg mb-1">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-cream/40 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
