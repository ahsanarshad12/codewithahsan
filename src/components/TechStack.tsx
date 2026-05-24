'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stacks = [
  {
    name: 'React.js',
    category: 'Frontend Library',
    color: '#61DAFB',
    description: 'Component-based UI library for building interactive, scalable user interfaces.',
  },
  {
    name: 'Next.js',
    category: 'Meta-Framework',
    color: '#FFFFFF',
    description: 'React framework for SSR, SSG, and full-stack production applications.',
  },
  {
    name: 'Tailwind CSS',
    category: 'CSS Framework',
    color: '#38BDF8',
    description: 'Utility-first CSS framework for rapid UI development and design systems.',
  },
  {
    name: 'Laravel',
    category: 'Backend Framework',
    color: '#FF2D20',
    description: 'PHP framework for clean API architecture, auth, and database management.',
  },
  {
    name: 'TypeScript',
    category: 'Language',
    color: '#3178C6',
    description: 'Strongly-typed JavaScript for safer, more maintainable code.',
  },
  {
    name: 'Figma',
    category: 'Design Tool',
    color: '#F24E1E',
    description: 'UI/UX design and prototyping — Figma to React with pixel-perfect handoff.',
  },
]

function TechCard({ stack, i }: { stack: (typeof stacks)[0]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative p-6 md:p-8 rounded-xl border border-border bg-card hover:border-accent/30 transition-all duration-500 text-center"
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500"
        style={{ backgroundColor: stack.color }}
      />
      {/* Icon circle */}
      <div
        className="size-16 mx-auto mb-5 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${stack.color}15` }}
      >
        <span
          className="font-display font-bold text-lg"
          style={{ color: stack.color }}
        >
          {stack.name.charAt(0)}
        </span>
      </div>
      <h3 className="font-display font-bold text-ink text-xl mb-1">
        {stack.name}
      </h3>
      <p className="font-body text-xs text-accent uppercase tracking-wide mb-3">
        {stack.category}
      </p>
      <p className="font-body text-sm text-muted leading-relaxed">
        {stack.description}
      </p>
    </motion.div>
  )
}

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 md:py-32 bg-ink">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <span className="text-xs tracking-[0.3em] text-cream/40 font-body uppercase mb-4 block">
            Tech Stack Showcase
          </span>
          <h2
            className="font-display font-bold text-cream leading-[0.95]"
            style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
          >
            TOOLS &amp; TECHNOLOGIES
          </h2>
          <p className="font-body text-cream/40 text-base mt-4 max-w-xl mx-auto">
            The tools I work with daily to build fast, maintainable products — visual, quick-reference, and always up to date.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {stacks.map((stack, i) => (
            <TechCard key={stack.name} stack={stack} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
