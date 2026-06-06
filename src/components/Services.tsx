'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

const services = [
  {
    num: '01',
    title: 'Frontend Development',
    desc: 'React.js, Next.js, and Next.js App Router build with TypeScript. Component-based architecture, SSR/SSG, and modern tooling for fast, scalable apps.',
    tags: ['React', 'Next.js', 'TypeScript'],
  },
  {
    num: '02',
    title: 'UI Implementation',
    desc: 'Pixel-perfect translation of Figma designs into clean, accessible interfaces — responsive, semantic HTML/CSS, and production-grade Tailwind.',
    tags: ['Tailwind', 'CSS3', 'Figma to Code'],
  },
  {
    num: '03',
    title: 'Backend & API Development',
    desc: 'Laravel-powered API development with authentication, database management, and RESTful/GraphQL integration for full-stack delivery.',
    tags: ['Laravel', 'PHP', 'MySQL'],
  },
  {
    num: '04',
    title: 'Performance & Optimization',
    desc: 'Core Web Vitals auditing, code splitting, image optimization, and production-grade tuning to keep your site fast and rankable.',
    tags: ['Core Web Vitals', 'Lighthouse', 'Image Opt.'],
  },
  {
    num: '05',
    title: 'Design System Development',
    desc: 'Scalable design token systems, reusable component libraries, and documented patterns that keep UI consistent across teams and products.',
    tags: ['Design Tokens', 'Component Library'],
  },
  {
    num: '06',
    title: 'Landing Pages & Web Apps',
    desc: 'Conversion-oriented landing pages and full-featured web apps built with modern frameworks, optimized for performance and user experience.',
    tags: ['Landing Pages', 'Web Apps', 'Freelance'],
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
      <section id="services" className="py-24 md:py-32 bg-[#F5F2EE]">
        <div className="w-full max-w-380 mx-auto px-4 lg:px-12" ref={ref}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <span className="text-xs tracking-[0.3em] text-black/50 font-body uppercase mb-4 block">
              Services / Offerings
            </span>
            <h2
              className="font-display font-bold text-black leading-[0.95]"
              style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
            >
              WHAT I DO
            </h2>
          </motion.div>

          {/* Service cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.num}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group p-6 md:p-8 rounded-xl border border-black/20 bg-white hover:border-black/40 transition-all duration-500 hover:shadow-lg hover:shadow-black/5"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="font-display font-bold text-black text-sm">
                    {service.num}
                  </span>
                  <ArrowUpRight className="size-5 text-black group-hover:text-black group-hover:rotate-45 transition-all duration-300" />
                </div>
                <h3 className="font-display font-bold text-black text-xl mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-black/60 text-sm leading-relaxed mb-5">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-body text-black/60 border border-black/20 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
}
