'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const skills = [
  {
    name: 'Web Development',
    shortName: 'Web Dev',
    desc: 'Building fast, responsive web applications with modern frameworks and best practices.',
    level: 90,
    category: 'Core',
    number: '01',
    highlights: ['React / Next.js', 'TypeScript', 'REST / GraphQL'],
  },
  {
    name: 'React & Next.js',
    shortName: 'React',
    desc: 'SSR, SSG, ISR, App Router, streaming — full-stack Next.js applications from prototype to production.',
    level: 85,
    category: 'Frontend',
    number: '02',
    highlights: ['App Router', 'Server Components', 'API Routes'],
  },
  {
    name: 'UI Implementation',
    shortName: 'UI / UX',
    desc: 'Translating Figma designs into pixel-perfect, accessible interfaces with a sharp eye for detail.',
    level: 88,
    category: 'Frontend',
    number: '03',
    highlights: ['Responsive Design', 'A11y', 'Figma → Code'],
  },
  {
    name: 'Tailwind CSS',
    shortName: 'Tailwind',
    desc: 'Custom design systems, responsive layouts, animation, and performance-first styling with utility-first workflows.',
    level: 92,
    category: 'Styling',
    number: '04',
    highlights: ['Design Tokens', 'Responsive', 'Animations'],
  },
  {
    name: 'Laravel & PHP',
    shortName: 'Laravel',
    desc: 'API development, authentication, and database management with production-ready Laravel architecture.',
    level: 75,
    category: 'Backend',
    number: '05',
    highlights: ['REST APIs', 'Authentication', 'MySQL'],
  },
  {
    name: 'Performance Optimization',
    shortName: 'Performance',
    desc: 'Lighthouse audits, Core Web Vitals tuning, image optimization, code splitting, and lazy loading.',
    level: 80,
    category: 'DevOps',
    number: '06',
    highlights: ['Core Web Vitals', 'Lighthouse', 'Bundle Opt.'],
  },
]

function SkillCard({
  skill,
  index,
  isActive,
  onClick,
}: {
  skill: (typeof skills)[0]
  index: number
  isActive: boolean
  onClick: () => void
}) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className={`relative w-full text-left group overflow-hidden rounded-2xl border transition-all duration-500 ${
        isActive
          ? 'bg-black border-black'
          : 'bg-white border-black/20 hover:border-black/30'
      }`}
      style={{ padding: '28px 28px 24px' }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-8">
        <span
          className={`font-display text-[11px] tracking-[0.25em] uppercase font-semibold transition-colors duration-300 ${
            isActive ? 'text-white/40' : 'text-black/40'
          }`}
        >
          {skill.number}
        </span>
        <span
          className={`text-[10px] font-body uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border transition-all duration-300 ${
            isActive
              ? 'border-white/20 text-white/60'
              : 'border-black/20 text-black/60'
          }`}
        >
          {skill.category}
        </span>
      </div>

      {/* Skill name */}
      <h3
        className="font-display font-bold leading-tight mb-4 transition-colors duration-300"
        style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)' }}
      >
        <span className={isActive ? 'text-white' : 'text-black'}>{skill.name}</span>
      </h3>

      {/* Progress bar */}
      <div
        className={`w-full h-[2px] rounded-full mb-4 overflow-hidden transition-colors duration-300 ${
          isActive ? 'bg-white/10' : 'bg-black/20'
        }`}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isActive ? `${skill.level}%` : '0%' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="h-full rounded-full"
          style={{ backgroundColor: '#2563EB' }}
        />
        {/* Static bar when not active */}
        {!isActive && (
          <div
            className="h-full rounded-full opacity-30 transition-all duration-500 group-hover:opacity-60"
            style={{ width: `${skill.level}%`, backgroundColor: '#2563EB' }}
          />
        )}
      </div>

      {/* Bottom row */}
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {skill.highlights.slice(0, 2).map((h) => (
            <span
              key={h}
              className={`text-[10px] font-body font-medium transition-colors duration-300 ${
                isActive ? 'text-white/50' : 'text-black/60 group-hover:text-black'
              }`}
            >
              {h}
              {skill.highlights.indexOf(h) < 1 && (
                <span className={`ml-1.5 ${isActive ? 'text-white/20' : 'text-black/40'}`}>·</span>
              )}
            </span>
          ))}
        </div>
        <span
          className={`font-display font-bold text-sm transition-colors duration-300 ${
            isActive ? 'text-white' : 'text-black/60'
          }`}
        >
          {skill.level}%
        </span>
      </div>

      {/* Arrow indicator */}
      <motion.div
        animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -6 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-5 right-5"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="text-white/40"
        >
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </motion.button>
  )
}

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<number | null>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  const active = activeSkill !== null ? skills[activeSkill] : null

  return (
    <section id="skills" className="py-24 md:py-36 overflow-hidden bg-[#F5F2EE]">
      <div className="w-full max-w-380 mx-auto px-4 lg:px-12" ref={sectionRef}>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6"
        >
          <div>
            <span className="text-xs tracking-[0.3em] text-black/40 font-body uppercase mb-4 block">
              Expertise
            </span>
            <h2
              className="font-display font-bold text-black leading-[0.92]"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)' }}
            >
              MY<br />SKILLS
            </h2>
            <p className="font-body text-sm text-black/50 mt-4 max-w-md">
              I've spent years getting good at the tools that actually matter. Not just knowing them using them in production.
            </p>
          </div>

          {/* Decorative stats */}
          <div className="flex items-end gap-4 md:pb-2">
            <div className="border-l border-black/20 pl-4">
              <p className="text-[11px] font-body text-black/40 uppercase tracking-[0.2em] mb-1">Stack depth</p>
              <p
                className="font-display font-bold text-black leading-none"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
              >
                6 <span className="text-black/40 font-normal text-lg">areas</span>
              </p>
            </div>
            <div className="border-l border-black/20 pl-4">
              <p className="text-[11px] font-body text-black/40 uppercase tracking-[0.2em] mb-1">Avg. proficiency</p>
              <p
                className="font-display font-bold text-black leading-none"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
              >
                85<span className="text-black/40 text-lg">%</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main layout: cards grid + detail panel */}
        <div className="grid lg:grid-cols-[1fr,420px] gap-6 items-start">

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {skills.map((skill, i) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={i}
                isActive={activeSkill === i}
                onClick={() => setActiveSkill(activeSkill === i ? null : i)}
              />
            ))}
          </div>

          {/* Detail panel — sticky on desktop */}
          <div className="lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              {active ? (
                <motion.div
                  key={activeSkill}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="border border-black/20 rounded-2xl overflow-hidden"
                >
                  {/* Panel header */}
                  <div className="bg-black p-8 pb-10">
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-display text-[11px] tracking-[0.25em] text-white/30 uppercase">
                        {active.number} / {String(skills.length).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] font-body uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border border-white/20 text-white/50">
                        {active.category}
                      </span>
                    </div>

                    <h3
                      className="font-display font-bold text-white leading-tight mb-3"
                      style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
                    >
                      {active.name}
                    </h3>
                    <p className="font-body text-white/60 text-sm leading-relaxed">
                      {active.desc}
                    </p>
                  </div>

                  {/* Panel body */}
                  <div className="p-8 bg-white">
                    {/* Proficiency */}
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-body text-black/40 uppercase tracking-[0.15em]">
                          Proficiency
                        </span>
                        <span className="font-display font-bold text-black text-lg">
                          {active.level}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-black/20 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${active.level}%` }}
                          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: '#2563EB' }}
                        />
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <span className="text-xs font-body text-black/40 uppercase tracking-[0.15em] mb-4 block">
                        Key areas
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {active.highlights.map((h, i) => (
                          <motion.span
                            key={h}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.08 + 0.2 }}
                            className="text-xs font-body font-medium text-black border border-black/20 px-4 py-2 rounded-full"
                          >
                            {h}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border border-dashed border-black/20 rounded-2xl flex flex-col items-center justify-center text-center"
                  style={{ minHeight: 340, padding: '48px 32px' }}
                >
                  <p
                    className="font-display font-bold leading-none select-none mb-6 text-black/[0.04]"
                    style={{ fontSize: 'clamp(6rem, 15vw, 10rem)' }}
                  >
                    ?
                  </p>
                  <p className="font-body text-black/40 text-sm">
                    Select a skill to see details
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}