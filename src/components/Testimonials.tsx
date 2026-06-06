'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote, ArrowUpRight } from 'lucide-react'

const testimonials = [
  {
    quote: 'Ahsan transformed our vague concept into a fully functional partner portal that exceeded our expectations. His attention to UI detail and performance is genuinely impressive.',
    name: 'G-Tech Solutions',
    role: 'Project Delivery',
    avatar: 'GT',
    rating: 5,
    tag: 'Client — G-Tech Partner Portal',
  },
  {
    quote: 'Working with Ahsan on our logistics platform was seamless. He understood the design requirements deeply and delivered a polished, responsive UI that our customers loved.',
    name: 'SpeedyMove',
    role: 'Logistics Platform',
    avatar: 'SM',
    rating: 5,
    tag: 'Client — SpeedyMove Platform',
  },
  {
    quote: 'From Figma design to a blazing-fast Next.js build — Ahsan shipped on time with web vitals scores that put our old site to shame. Highly recommended.',
    name: 'DigitalBar Agency',
    role: 'Web Development',
    avatar: 'DB',
    rating: 5,
    tag: 'Client — DigitalBar Website',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const goNext = () => setActive((prev) => (prev + 1) % testimonials.length)
  const goPrev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#F5F2EE]">
      <div className="w-full max-w-380 mx-auto px-4 lg:px-12" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <span className="text-xs tracking-[0.3em] text-black/40 font-body uppercase mb-4 block">
              Testimonials
            </span>
            <h2
              className="font-display font-bold text-black leading-[0.95]"
              style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
            >
              TRUSTED BY
              <br />
              CLIENTS
            </h2>
          </div>
          {/* Navigation */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={goPrev}
              className="size-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all"
              aria-label="Previous testimonial"
            >
              <ArrowUpRight className="size-4 -rotate-45" />
            </button>
            <button
              onClick={goNext}
              className="size-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all"
              aria-label="Next testimonial"
            >
              <ArrowUpRight className="size-4 rotate-45" />
            </button>
          </div>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Quote icon */}
              <Quote className="size-10 text-black mb-6" />

              {/* Quote text */}
              <p className="font-body text-2xl md:text-3xl text-black leading-snug mb-8">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>

              {/* Author row */}
              <div className="flex items-center gap-4 pb-8 border-b border-black/20">
                <div className="size-12 rounded-full bg-black text-white flex items-center justify-center font-display font-bold">
                  {testimonials[active].avatar}
                </div>
                <div>
                  <h4 className="font-display font-bold text-black">{testimonials[active].name}</h4>
                  <p className="font-body text-sm text-black/50">{testimonials[active].role}</p>
                </div>
                <div className="flex gap-0.5 ml-auto">
                  {Array.from({ length: testimonials[active].rating }).map((_, j) => (
                    <Star key={j} className="size-4 fill-black text-black" />
                  ))}
                </div>
              </div>

              {/* Tag */}
              <p className="font-body text-xs text-black/40 mt-4">
                {testimonials[active].tag}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Mobile nav */}
          <div className="flex gap-3 mt-6 md:hidden">
            <button
              onClick={goPrev}
              className="size-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all"
              aria-label="Previous testimonial"
            >
              <ArrowUpRight className="size-4 -rotate-45" />
            </button>
            <button
              onClick={goNext}
              className="size-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all"
              aria-label="Next testimonial"
            >
              <ArrowUpRight className="size-4 rotate-45" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? 'w-8 bg-black' : 'w-4 bg-black/20'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}