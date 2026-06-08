'use client'

import { motion } from 'framer-motion'
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiLaravel,
  SiTypescript,
  SiJavascript,
  SiMysql,
  SiBootstrap,
  SiGithub,
  SiFigma,
} from 'react-icons/si'

const stacks = [
  {
    name: 'React.js',
    category: 'Frontend Library',
    color: '#61DAFB',
    description: 'Component-based UI library for building interactive, scalable user interfaces.',
    icon: SiReact,
  },
  {
    name: 'Next.js',
    category: 'Meta-Framework',
    color: '#FFFFFF',
    description: 'React framework for SSR, SSG, and full-stack production applications.',
    icon: SiNextdotjs,
  },
  {
    name: 'Tailwind CSS',
    category: 'CSS Framework',
    color: '#38BDF8',
    description: 'Utility-first CSS framework for rapid UI development and design systems.',
    icon: SiTailwindcss,
  },
  {
    name: 'Laravel',
    category: 'Backend Framework',
    color: '#FF2D20',
    description: 'PHP framework for clean API architecture, auth, and database management.',
    icon: SiLaravel,
  },
  {
    name: 'TypeScript',
    category: 'Language',
    color: '#3178C6',
    description: 'Strongly-typed JavaScript for safer, more maintainable code at scale.',
    icon: SiTypescript,
  },
  {
    name: 'JavaScript',
    category: 'Language',
    color: '#F7DF1E',
    description: 'Core scripting language powering dynamic, interactive web experiences.',
    icon: SiJavascript,
  },
  {
    name: 'MySQL',
    category: 'Database',
    color: '#4479A1',
    description: 'Relational database for structured data storage, queries, and management.',
    icon: SiMysql,
  },
  {
    name: 'Bootstrap',
    category: 'CSS Framework',
    color: '#7952B3',
    description: 'Component-rich CSS framework for rapid, responsive UI scaffolding.',
    icon: SiBootstrap,
  },
  {
    name: 'GitHub',
    category: 'Version Control',
    color: '#FFFFFF',
    description: 'Git-based platform for source control, collaboration, and CI/CD workflows.',
    icon: SiGithub,
  },
  {
    name: 'Figma',
    category: 'Design Tool',
    color: '#F24E1E',
    description: 'UI/UX design and prototyping — Figma to React with pixel-perfect handoff.',
    icon: SiFigma,
  },
]

function TechCard({ stack, i }: { stack: (typeof stacks)[0]; i: number }) {
  const Icon = stack.icon

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group relative p-6 md:p-8 rounded-xl border border-white/10 bg-white/[0.03] hover:border-white/20 transition-all duration-500 text-center"
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500"
        style={{ backgroundColor: stack.color }}
      />

      {/* Icon circle */}
      <div
        className="size-16 mx-auto mb-5 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${stack.color}14` }}
      >
        <Icon
          size={32}
          style={{ color: stack.color }}
        />
      </div>

      <h3 className="font-display font-bold text-white text-xl mb-1">
        {stack.name}
      </h3>
      <p className="font-body text-xs text-white/40 uppercase tracking-wide mb-3">
        {stack.category}
      </p>
      <p className="font-body text-sm text-white/50 leading-relaxed">
        {stack.description}
      </p>
    </motion.div>
  )
}

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 md:py-32 bg-[#070d18]">
      <div className="w-full max-w-380 mx-auto px-4 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <span className="text-xs tracking-[0.3em] text-white/50 font-body uppercase mb-4 block">
            Tech Stack Showcase
          </span>
          <h2
            className="font-display font-bold text-white leading-[0.95]"
            style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
          >
            TOOLS &amp; TECHNOLOGIES
          </h2>
          <p className="font-body text-white/50 text-base mt-4 max-w-xl mx-auto">
            The tools I work with daily to build fast, maintainable products — visual, quick-reference, and always up to date.
          </p>
        </motion.div>

        {/* Grid — 2 cols mobile, 3 cols tablet, 4 cols desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {stacks.map((stack, i) => (
            <TechCard key={stack.name} stack={stack} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}