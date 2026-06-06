'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const stats = [
  { value: 4, suffix: '+', label: 'Live Projects', desc: 'Real production deployments' },
  { value: 3, suffix: '+', label: 'Tech Stacks', desc: 'React, Next.js, Laravel' },
  { value: 1, suffix: 'yr', label: 'Experience', desc: 'Frontend at G-Tech Solutions' },
  { value: 5, suffix: '+', label: 'Sectors Served', desc: 'Logistics, E-comm, Portals...' },
]

function RollingDigit({ value, isInView }: { value: number; isInView: boolean }) {
  return (
    <div className="overflow-hidden h-[1em] relative" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
      <motion.div
        initial={{ y: 0 }}
        animate={isInView ? { y: `-${value * 10}%` } : { y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col"
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => (
          <span key={digit} className="font-display font-bold text-black leading-none h-[1em] flex items-center">
            {digit}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

function StatCard({
  stat,
  index,
  isInView,
}: {
  stat: (typeof stats)[0]
  index: number
  isInView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="text-center md:text-left p-6 rounded-xl border border-black/20 bg-white hover:border-black/30 transition-colors"
    >
      <div className="flex items-baseline justify-center md:justify-start gap-1 mb-2">
        <RollingDigit value={stat.value} isInView={isInView} />
        <span className="font-display font-bold text-blue-500" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
          {stat.suffix}
        </span>
      </div>
      <h3 className="font-display font-semibold text-black text-lg mb-1">
        {stat.label}
      </h3>
      <p className="font-body text-sm text-black/60">{stat.desc}</p>
    </motion.div>
  )
}

export default function StatsCounter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 md:py-32 bg-[#070d18]">
      <div className="w-full max-w-380 mx-auto px-4 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="text-xs tracking-[0.3em] text-white/50 font-body uppercase mb-4 block">
            By the numbers
          </span>
          <h2
            className="font-display font-bold text-white leading-[0.95]"
            style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
          >
            IMPACT
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
