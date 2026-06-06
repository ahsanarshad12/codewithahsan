'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const timeline = [
  {
    year: 'Oct 2025 — Present (9 months)',
    title: 'Frontend Developer at G-Tech Solutions',
    desc: 'Building production-ready web applications with Next.js, React, Tailwind CSS, and Laravel. Successfully delivered 5+ major live projects including complex dashboards and partner portals.',
  },
  {
    year: 'July — Sept 2025 (3 months)',
    title: 'Probation Period at G-Tech Solutions',
    desc: 'Transitioned from intern to full-time developer. During this period, my team lead suggested learning Next.js — a game-changing moment. Built my first complete workforce website in Next.js within 2-3 weeks, despite initial code imperfections.',
  },
  {
    year: 'Jan — June 2025 (6 months)',
    title: 'Internship at G-Tech Solutions',
    desc: 'Completed 6-month coding course and started internship. Worked on basic to complete website tasks and backend development with Laravel. Gained hands-on experience with real-world projects.',
  },
  {
    year: 'January 2025',
    title: 'Self-Taught Beginnings',
    desc: 'Started my coding journey by watching YouTube tutorials. Taught myself HTML, CSS, and JavaScript from scratch. No bootcamp, no degree — just curiosity, consistency, and a laptop.',
  },
]

export default function AboutStory() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 md:py-32 bg-[#070d18]">
      <div className="w-full max-w-380 mx-auto px-4 lg:px-12" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-xs tracking-[0.3em] text-white font-body uppercase mb-4 block">
            About / Story
          </span>
          <h2
            className="font-display font-bold text-white leading-[0.95]"
            style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
          >
            THE PATH BEHIND
            <br />
            THE CODE
          </h2>
          <p className="font-body text-sm text-white/50 mt-4 max-w-md">
            I didn't start with a CS degree or a bootcamp certificate. I started with YouTube tutorials in January 2025 and the determination to figure things out.
          </p>
        </motion.div>

        {/* Main content: bio + timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-2 gap-12 md:gap-20"
        >
          {/* Bio */}
          <div>
            <p className="font-body text-white/70 text-lg leading-relaxed mb-6">
              In January 2025, I started from zero. Just me, YouTube tutorials, and a determination to learn coding. I taught myself HTML, CSS, and JavaScript basics, then enrolled in a 6-month course at G-Tech Solutions where I started my internship.
            </p>
            <p className="font-body text-white/50 text-base leading-relaxed mb-6">
              During my internship, I worked on basic to complete website tasks and some backend work with Laravel. After 6 months of internship and 3 months of probation, I was working on simple HTML/CSS and Laravel tasks when everything changed. My team lead asked, "Why don't you start learning Next.js?" I had no idea what it was.
            </p>
            <p className="font-body text-white/50 text-base leading-relaxed">
              He taught me the basics, and my Next.js colleagues helped me tremendously. Within 2-3 weeks, I built a complete workforce website in Next.js. It wasn't perfect, there were code issues, but it was functional. That one suggestion from my team lead changed my entire trajectory. If he hadn't pushed me, I'd still be working on basic HTML/CSS and Laravel. Now, Alhamdulillah, I've completed 5+ major live projects in Next.js and I'm building real applications that businesses depend on every day.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-8 pb-8 border-l border-white/15 last:pb-0"
              >
                <span className="absolute left-0 top-1 -translate-x-1/2 size-3 rounded-full bg-white border-2 border-white" />
                <span className="font-body text-xs text-white tracking-wide uppercase mb-1 block">
                  {item.year}
                </span>
                <h3 className="font-display font-bold text-white text-lg mb-1">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-white/40 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}