'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView, useSpring, useMotionValue } from 'framer-motion'
import { ArrowUpRight, LayoutGrid, List } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    num: '01',
    title: 'DigitalBar Website',
    category: 'Business Website',
    color: '#EF4444',
    image: '/project-1.png',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    live: 'https://digitalbar.com.au/',
    gtechUrl: 'https://gtechsol.com.au/',
  },
  {
    num: '02',
    title: 'G-Tech Partner',
    category: 'SaaS Partner',
    color: '#10B981',
    image: '/project-2.png',
    tech: ['Next.js', 'Laravel', 'MySQL'],
    live: 'https://partner.gtechsol.com.au/',
    gtechUrl: 'https://gtechsol.com.au/',
  },
  {
    num: '03',
    title: 'SpeedyMove Platform',
    category: 'Removalists / UI',
    color: '#64B5F6',
    image: '/project-3.png',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    live: 'https://speedymove.com.au/',
    gtechUrl: 'https://gtechsol.com.au/',
  },
  {
    num: '04',
    title: 'Portfolio Template',
    category: 'Personal Project',
    color: '#8B5CF6',
    image: '/project-4.png',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    live: 'https://buildwithahsan-liard.vercel.app/',
  },
  {
    num: '05',
    title: 'GSaaS',
    category: 'SaaS Platform',
    color: '#64B5F6',
    image: '/project-5.png',
    tech: ['HTML', 'Bootstrap', 'JavaScript'],
    live: 'https://gsaas.com.au/',
    gtechUrl: 'https://gtechsol.com.au/',
  },
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
        <Image src={project.image} alt={project.title} fill className="object-cover" sizes="200px" />
        <div
          className="absolute bottom-0 left-0 right-0 h-8 flex items-center px-3"
          style={{ backgroundColor: project.color }}
        >
          <span className="text-white text-xs font-display font-semibold truncate">{project.title}</span>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        onClick={() => window.open(project.live, "_blank", "noopener,noreferrer")}
        className="group block bg-white rounded-2xl overflow-hidden border border-black/10 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      >
        {/* Screenshot */}
        <div className="relative h-48 overflow-hidden" style={{ backgroundColor: project.color + '18' }}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div
            className="absolute top-3 left-3 text-xs font-body font-semibold text-white px-2 py-1 rounded-full"
            style={{ backgroundColor: project.color }}
          >
            {project.category}
          </div>
          {project.gtechUrl && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                window.open(project.gtechUrl, '_blank', 'noopener,noreferrer')
              }}
              className="absolute top-3 right-3 text-[10px] font-body font-bold tracking-wide uppercase text-white bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded-full transition-colors"
            >
              G-Tech
            </button>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-2 mb-3">
            <h3 className="font-display font-bold text-black text-lg leading-tight">{project.title}</h3>
            <span className="text-xs text-black/50 font-body shrink-0">{project.num}</span>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-body border border-black/20 text-black/50 px-2 py-0.5 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            <button
              onClick={(e) => {
                e.preventDefault()
                window.open(project.live, '_blank', 'noopener,noreferrer')
              }}
              className="inline-flex items-center gap-1 text-xs font-body font-semibold text-black"
            >
              Live <ArrowUpRight className="size-3" />
            </button>
          </div>
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
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      className="relative group border-b border-black/20 last:border-b-0"
    >
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-between py-6 md:py-8 px-2 md:px-4 transition-all duration-500 ${isHovered ? 'bg-black text-white' : ' text-black'
          }`}
      >
        <div className="flex items-center gap-4 md:gap-8">
          <span
            className={`font-body text-sm transition-colors duration-500 ${isHovered ? 'text-white/50' : 'text-black/50'
              }`}
          >
            {project.num}
          </span>
          <div>
            <h3
              className={`font-display text-xl md:text-3xl font-bold transition-colors duration-500 ${isHovered ? 'text-white' : 'text-black'
                }`}
            >
              {project.title}
            </h3>
            <p
              className={`font-body text-sm mt-1 transition-colors duration-500 ${isHovered ? 'text-white/60' : 'text-black/60'
                }`}
            >
              {project.category}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {project.gtechUrl && (
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                window.open(project.gtechUrl, '_blank', 'noopener,noreferrer')
              }}
              className={`text-[10px] font-body font-bold tracking-wide uppercase px-2 py-0.5 rounded-full transition-colors duration-500 ${isHovered ? 'bg-white text-black' : 'bg-blue-500 text-white'}`}
            >
              G-Tech
            </button>
          )}
          <ArrowUpRight
            className={`size-5 transition-transform duration-300 ${isHovered ? 'rotate-45 text-white' : 'rotate-0 text-black'
              }`}
          />
        </div>
      </a>
    </motion.div>
  )
}

export default function SelectedProjects() {
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const [isDesktop, setIsDesktop] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)')
    setIsDesktop(mql.matches)
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (isDesktop) setView('list')
    else setView('grid')
  }, [isDesktop])

  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#F5F2EE]">
      {view === 'list' && <CursorImage hoveredIndex={hoveredIndex} />}
      <div className="w-full max-w-380 mx-auto px-4 lg:px-12">

        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <span className="text-xs tracking-[0.3em] text-black/40 font-body uppercase mb-4 block">
              Portfolio
            </span>
            <h2
              className="font-display font-bold text-black leading-[0.95]"
              style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
            >
              SELECTED
              <br />
              PROJECTS
            </h2>
            <p className="font-body text-sm text-black/50 mt-4 max-w-md">
              All projects below are from G-Tech Solutions — real work, real impact.
            </p>
          </div>

          {/* View toggle */}
          <div className="flex items-center gap-1 border border-black/20 rounded-full p-1">
            <button
              onClick={() => setView('grid')}
              className={`p-2 rounded-full transition-colors ${view === 'grid' ? 'bg-black text-white' : 'text-black/60 hover:text-black'
                }`}
              aria-label="Grid view"
            >
              <LayoutGrid className="size-4" />
            </button>
            <button
              onClick={() => setView('list')}
              className={`p-2 rounded-full transition-colors ${view === 'list' ? 'bg-black text-white' : 'text-black/60 hover:text-black'
                }`}
              aria-label="List view"
            >
              <List className="size-4" />
            </button>
          </div>
        </motion.div>

        {/* Grid View */}
        {view === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.num} project={project} index={index} />
            ))}
          </div>
        )}

        {/* List View */}
        {view === 'list' && (
          <div className="border-t border-black/20">
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
        )}

      </div>
    </section>
  )
}