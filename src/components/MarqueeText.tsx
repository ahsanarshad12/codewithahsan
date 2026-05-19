'use client'

import { motion } from 'framer-motion'

interface MarqueeTextProps {
  dark?: boolean
}

const text = 'FRONTEND DEVELOPER · REACT · NEXT.JS · UI/UX · TAILWIND · LARAVEL · '

export default function MarqueeText({ dark = false }: MarqueeTextProps) {
  return (
    <div
      className={`w-full overflow-hidden py-4 ${
        dark
          ? 'bg-ink text-cream'
          : 'bg-cream text-ink border-y border-border'
      }`}
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          },
        }}
      >
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={`font-display font-bold tracking-wider mx-4 ${
              dark ? 'text-cream' : 'text-ink'
            }`}
            style={{ fontSize: 'clamp(1rem, 3vw, 1.75rem)' }}
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
