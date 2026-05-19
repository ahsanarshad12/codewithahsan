'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, useInView, useSpring, useMotionValue } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const projects = [
  { num: '01', title: 'DigitalBar Website', category: 'Business Website', color: '#2563EB', image: '/project-1.svg' },
  { num: '02', title: 'G-Tech Partner Portal', category: 'Dashboard / Portal', color: '#10B981', image: '/project-2.svg' },
  { num: '03', title: 'SpeedyMove Platform', category: 'Logistics / UI', color: '#F59E0B', image: '/project-3.svg' },
  { num: '04', title: 'Workforce Management', category: 'Admin Panel', color: '#8B5CF6', image: '/project-4.svg' },
  { num: '05', title: 'Butcher Meat Shop', category: 'E-Commerce', color: '#EF4444', image: '/project-5.svg' },
]

function CursorImage({ hoveredIndex }: { hoveredIndex: number | null }) {
  const cursorX = useMotionValue(-200)
  const cursorY = useMotionValue(-200)

  const springX = useSpring(cursorX, { stiffness: 200, damping: 20, mass: 0.5 })
  const springY = useSpring(cursorY, { stiffness: 200, damping: 20, mass: 0.5 })

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX + 20)
      cursorY.set(e.clientY - 80)
    }
    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [cursorX, cursorY])

  if (hoveredIndex === null) return null

  const project = projects[hoveredIndex]

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
      style={{ x: springX, y: springY }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.6 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative w-[200px] h-[130px] rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/10">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="200px"
        />
        {/* Color overlay at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-8 flex items-center px-3"
          style={{ backgroundColor: project.color }}
        >
          <span className="text-white text-xs font-display font-semibold truncate">
            {project.title}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

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
      {/* Cursor-following image */}
      <CursorImage hoveredIndex={hoveredIndex} />

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
