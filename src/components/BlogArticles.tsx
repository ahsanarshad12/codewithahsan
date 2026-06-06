'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Calendar, Clock } from 'lucide-react'

const posts = [
  {
    num: '01',
    title: 'Building a Foundation: My Frontend Journey',
    excerpt: 'How I went from curiosity to production-ready React code — lessons, tools, and the mindset shift that mattered most.',
    date: 'Jul 2025',
    readTime: '6 min read',
    category: 'Journey',
  },
  {
    num: '02',
    title: 'From Figma to React: A Real-World Workflow',
    excerpt: 'A practical walkthrough of my design-to-code process — how I go from Figma files to pixel-perfect React components fast.',
    date: 'Aug 2025',
    readTime: '8 min read',
    category: 'Tutorial',
  },
  {
    num: '03',
    title: 'Core Web Vitals That Actually Move the Needle',
    excerpt: 'Beyond the Lighthouse score — which Core Web Vitals metrics directly impact UX rankings and how to fix them in production.',
    date: 'Sep 2025',
    readTime: '10 min read',
    category: 'Performance',
  },
]

export default function BlogArticles() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="blog" className="py-24 md:py-32 bg-[#F5F2EE]">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <span className="text-xs tracking-[0.3em] text-black/40 font-body uppercase mb-4 block">
              Blog / Articles
            </span>
            <h2
              className="font-display font-bold text-black leading-[0.95]"
              style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
            >
              LATEST
              <br />
              WRITING
            </h2>
          </div>
          <a
            href="/blog"
            className="hidden md:inline-flex items-center gap-2 text-sm font-body text-black/40 hover:text-blue-500 transition-colors"
          >
            View All
            <ArrowUpRight className="size-4" />
          </a>
        </motion.div>

        {/* Article Cards */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.num}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col p-6 md:p-8 rounded-xl border border-black/20 bg-white hover:border-black/30 transition-all duration-500 cursor-pointer"
            >
              {/* Accent strip */}
              <div className="h-1 w-12 rounded-full bg-blue-500 mb-6 transition-all duration-500 group-hover:w-full" />

              {/* Badge */}
              <span className="font-body text-xs text-blue-500 uppercase tracking-wider mb-3 block">
                {post.category}
              </span>

              {/* Title */}
              <h3 className="font-display font-bold text-black text-lg md:text-xl leading-tight mb-3 group-hover:text-blue-500 transition-colors duration-300">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="font-body text-sm text-black/60 leading-relaxed mb-6 flex-1">
                {post.excerpt}
              </p>

              {/* Meta row */}
              <div className="flex items-center justify-between pt-4 border-t border-black/20">
                <span className="font-body text-xs text-black/40 flex items-center gap-1.5">
                  <Calendar className="size-3.5" />
                  {post.date}
                </span>
                <span className="font-body text-xs text-black/40 flex items-center gap-1.5">
                  <Clock className="size-3.5" />
                  {post.readTime}
                </span>
              </div>

              {/* CTA */}
              <div className="mt-4 flex items-center gap-2 font-body text-sm text-blue-500 group-hover:gap-3 transition-all duration-300">
                Read Article
                <ArrowUpRight className="size-4" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
