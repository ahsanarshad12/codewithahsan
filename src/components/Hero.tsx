'use client'

import { motion } from 'framer-motion'
import { ChevronDown, ArrowUpRight } from 'lucide-react'

const tags = ['React.js', 'Next.js', 'Tailwind CSS', 'Laravel', 'UI Dev', '2025']

const EASE = [0.16, 1, 0.3, 1] as const

const wordVariants = {
  hidden: { y: 120, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: i * 0.08,
      ease: EASE,
    },
  }),
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: EASE },
  }),
}

const chipVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: 1.4 + i * 0.08,
      ease: EASE,
    },
  }),
}

export default function Hero() {
  const titleLine1 = 'FRONTEND'
  const titleLine2 = 'DEVELOPER.'

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 w-full py-24 md:py-32">
        {/* Top row: Japanese text + Location tag */}
        <div className="flex items-start justify-between mb-6">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-xs tracking-[0.3em] text-muted font-body"
          >
            フロントエンドデベロッパー
          </motion.p>
          <motion.span
            custom={0.3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-xs tracking-widest text-muted font-body border border-border px-3 py-1.5 rounded-full"
          >
            📍 Rahim Yar Khan, PK
          </motion.span>
        </div>

        {/* Main title */}
        <div className="mb-6">
          <div className="overflow-hidden">
            <div className="flex flex-wrap">
              {titleLine1.split('').map((char, i) => (
                <motion.span
                  key={`l1-${i}`}
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className="font-display font-bold text-ink leading-[0.9]"
                  style={{ fontSize: 'clamp(3rem, 12vw, 10rem)' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="flex flex-wrap">
              {titleLine2.split('').map((char, i) => (
                <motion.span
                  key={`l2-${i}`}
                  custom={titleLine1.length + i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className={`font-display leading-[0.9] ${
                    i >= titleLine2.length - 1
                      ? 'font-bold italic text-accent'
                      : 'font-bold text-ink'
                  }`}
                  style={{ fontSize: 'clamp(3rem, 12vw, 10rem)' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Subtitle line */}
        <motion.p
          custom={1.1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-sm md:text-base text-muted font-body mb-8 max-w-xl"
        >
          Rahim Yar Khan, Pakistan · Available for Freelance · 2025–Present
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={1.0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center gap-3 mb-10"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-ink text-cream font-body font-semibold text-sm px-6 py-3 rounded-full hover:bg-accent transition-colors duration-300"
          >
            Hire Me <ArrowUpRight className="size-4" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border border-border text-ink font-body text-sm px-6 py-3 rounded-full hover:border-ink transition-colors duration-300"
          >
            View Work
          </a>
        </motion.div>

        {/* Tags row */}
        <div className="flex flex-wrap gap-2 mb-12">
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              custom={i}
              variants={chipVariants}
              initial="hidden"
              animate="visible"
              className="text-xs font-body tracking-wide border border-border text-muted px-3 py-1.5 rounded-full hover:border-accent hover:text-accent transition-colors cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Bottom line + scroll indicator */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full h-px bg-ink/10" />
        </div>
        <div className="flex justify-center py-6">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="size-5 text-muted" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
