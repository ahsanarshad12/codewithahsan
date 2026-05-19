'use client'

import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  { num: '01', title: 'DigitalBar Website', category: 'Business Website', color: '#2563EB' },
  { num: '02', title: 'G-Tech Partner Portal', category: 'Dashboard / Portal', color: '#10B981' },
  { num: '03', title: 'SpeedyMove Platform', category: 'Logistics / UI', color: '#F59E0B' },
  { num: '04', title: 'Workforce Management', category: 'Admin Panel', color: '#8B5CF6' },
  { num: '05', title: 'Butcher Meat Shop', category: 'E-Commerce', color: '#EF4444' },
]

function ProjectRow({
  project,
  index,
  isHovered,
  onHoverStart,
  onHoverEnd,
}: {
  project: (typeof projects)[0]
  index: number
  isHovered: boolean
  onHoverStart: () => void
  onHoverEnd: () => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      className="relative group cursor-pointer border-b border-border last:border-b-0"
    >
      <div
        className={`flex items-center justify-between py-6 md:py-8 px-2 md:px-4 transition-all duration-500 ${
          isHovered ? 'bg-ink text-cream' : 'bg-transparent text-ink'
        }`}
      >
        <div className="flex items-center gap-4 md:gap-8">
          <span
            className={`font-body text-sm transition-colors duration-500 ${
              isHovered ? 'text-cream/50' : 'text-muted'
            }`}
          >
            {project.num}
          </span>
          <div>
            <h3
              className={`font-display text-xl md:text-3xl font-bold transition-colors duration-500 ${
                isHovered ? 'text-cream' : 'text-ink'
              }`}
            >
              {project.title}
            </h3>
            <p
              className={`font-body text-sm mt-1 transition-colors duration-500 ${
                isHovered ? 'text-cream/60' : 'text-muted'
              }`}
            >
              {project.category}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Thumbnail reveal */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={
              isHovered
                ? { width: 120, opacity: 1 }
                : { width: 0, opacity: 0 }
            }
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:block h-16 rounded-md overflow-hidden"
          >
            <div
              className="w-full h-full flex items-center justify-center text-white font-display font-bold text-lg"
              style={{ backgroundColor: project.color }}
            >
              {project.num}
            </div>
          </motion.div>

          <ArrowUpRight
            className={`size-5 transition-transform duration-300 ${
              isHovered ? 'rotate-45 text-accent' : 'rotate-0'
            }`}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default function SelectedProjects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <span className="text-xs tracking-[0.3em] text-muted font-body uppercase mb-4 block">
              Portfolio
            </span>
            <h2 className="font-display font-bold text-ink leading-[0.95]"
              style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
            >
              SELECTED
              <br />
              PROJECTS
            </h2>
          </div>
          <a
            href="#projects"
            className="hidden md:inline-flex items-center gap-2 text-sm font-body text-muted hover:text-accent transition-colors"
          >
            View All
            <ArrowUpRight className="size-4" />
          </a>
        </motion.div>

        {/* Project List */}
        <div className="border-t border-border">
          {projects.map((project, index) => (
            <ProjectRow
              key={project.num}
              project={project}
              index={index}
              isHovered={hoveredIndex === index}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
