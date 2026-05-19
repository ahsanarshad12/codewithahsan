'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  {
    name: 'Web Development',
    desc: 'Building fast, responsive web applications with modern frameworks and best practices.',
    level: 90,
  },
  {
    name: 'React & Next.js',
    desc: 'Expert-level component architecture, SSR, SSG, and full-stack Next.js applications.',
    level: 85,
  },
  {
    name: 'UI Implementation',
    desc: 'Translating designs to pixel-perfect, accessible interfaces with Tailwind CSS and CSS3.',
    level: 88,
  },
  {
    name: 'Tailwind CSS',
    desc: 'Utility-first CSS mastery — custom design systems, responsive layouts, animations.',
    level: 92,
  },
  {
    name: 'Laravel & PHP',
    desc: 'Backend API development, authentication, database management with Laravel framework.',
    level: 75,
  },
  {
    name: 'Performance Optimization',
    desc: 'Core Web Vitals, lazy loading, code splitting, and production-grade optimization.',
    level: 80,
  },
]

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState(0)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6" ref={sectionRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="text-xs tracking-[0.3em] text-muted font-body uppercase mb-4 block">
            Expertise
          </span>
          <h2
            className="font-display font-bold text-ink leading-[0.95]"
            style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
          >
            MY SKILLS
          </h2>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-2 gap-8 md:gap-16"
        >
          {/* Left: Skill List */}
          <div className="space-y-1">
            {skills.map((skill, i) => (
              <button
                key={skill.name}
                onClick={() => setActiveSkill(i)}
                className="relative w-full text-left py-3 px-4 rounded-lg transition-all duration-300 group"
              >
                {/* Active indicator */}
                {activeSkill === i && (
                  <motion.div
                    layoutId="skillIndicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-accent rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span
                  className={`font-display text-lg md:text-xl font-semibold transition-colors duration-300 ${
                    activeSkill === i
                      ? 'text-ink pl-4'
                      : 'text-muted group-hover:text-ink group-hover:pl-4'
                  }`}
                >
                  {skill.name}
                </span>
                {/* Underline */}
                {activeSkill === i && (
                  <motion.div
                    layoutId="skillUnderline"
                    className="mt-1 h-px bg-accent"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right: Detail Panel */}
          <div className="min-h-[260px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSkill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <h3 className="font-display text-2xl font-bold text-ink mb-3">
                  {skills[activeSkill].name}
                </h3>
                <p className="font-body text-muted mb-6">
                  {skills[activeSkill].desc}
                </p>

                {/* Progress bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-body">
                    <span className="text-muted">Proficiency</span>
                    <span className="text-ink font-semibold">
                      {skills[activeSkill].level}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skills[activeSkill].level}%` }}
                      transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="h-full bg-accent rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
