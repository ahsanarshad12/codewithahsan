'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const steps = [
  {
    num: '01',
    title: 'Discovery',
    timeframe: '1-2 days',
    desc: 'Understanding your goals, audience, and project requirements through detailed discussions and research.',
    points: [
      'Client briefing & requirements gathering',
      'Competitor analysis',
      'Project scope definition',
      'Timeline & milestone planning',
    ],
  },
  {
    num: '02',
    title: 'Design',
    timeframe: '3-5 days',
    desc: 'Creating wireframes and visual designs that align with your brand identity and user expectations.',
    points: [
      'Wireframing & layout planning',
      'UI/UX design in Figma',
      'Design review & iteration',
      'Responsive breakpoint planning',
    ],
  },
  {
    num: '03',
    title: 'Development',
    timeframe: '2-6 weeks',
    desc: 'Building the frontend with clean, performant code using modern frameworks and best practices.',
    points: [
      'Component architecture',
      'API integration',
      'Responsive implementation',
      'Performance optimization',
    ],
  },
  {
    num: '04',
    title: 'Testing',
    timeframe: '2-3 days',
    desc: 'Rigorous testing across browsers and devices to ensure everything works perfectly.',
    points: [
      'Cross-browser testing',
      'Responsive testing',
      'Performance auditing',
      'Accessibility checks',
    ],
  },
  {
    num: '05',
    title: 'Deploy',
    timeframe: '1 day',
    desc: 'Launching your project to production with CI/CD pipelines and monitoring in place.',
    points: [
      'Production deployment',
      'DNS & domain setup',
      'Performance monitoring',
      'Post-launch support',
    ],
  },
]

export default function WorkProcess() {
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const goNext = () => setActiveStep((prev) => (prev + 1) % steps.length)
  const goPrev = () => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)

  return (
    <section id="process" className="py-24 md:py-32 bg-[#F5F2EE]">
      <div className="w-full max-w-380 mx-auto px-4 lg:px-12" ref={sectionRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="text-xs tracking-[0.3em] text-black/40 font-body uppercase mb-4 block">
            How I work
          </span>
          <h2
            className="font-display font-bold text-black leading-[0.95]"
            style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
          >
            WORK PROCESS
          </h2>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-2 gap-8 md:gap-16"
        >
          {/* Left: Steps list */}
          <div className="space-y-1">
            {steps.map((step, i) => (
              <button
                key={step.num}
                onClick={() => setActiveStep(i)}
                className={`relative w-full text-left py-4 px-4 rounded-lg transition-all duration-300 group ${
                  activeStep === i
                    ? 'bg-black text-white'
                    : 'hover:bg-black/5'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`font-display font-bold text-sm transition-colors duration-300 ${
                      activeStep === i ? 'text-blue-500' : 'text-black/50'
                    }`}
                  >
                    {step.num}
                  </span>
                  <div className="flex-1">
                    <span
                      className={`font-display font-semibold text-lg transition-colors duration-300 ${
                        activeStep === i ? 'text-white' : 'text-black'
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                  <span
                    className={`font-body text-sm transition-colors duration-300 ${
                      activeStep === i ? 'text-white/50' : 'text-black/40'
                    }`}
                  >
                    {step.timeframe}
                  </span>
                </div>
              </button>
            ))}

            {/* Navigation buttons */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={goPrev}
                className="size-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all"
                aria-label="Previous step"
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                onClick={goNext}
                className="size-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all"
                aria-label="Next step"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>

          {/* Right: Detail panel */}
          <div className="min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 rounded-xl border border-black/20 bg-white"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display font-bold text-blue-500 text-sm">
                    {steps[activeStep].num}
                  </span>
                  <h3 className="font-display font-bold text-black text-2xl">
                    {steps[activeStep].title}
                  </h3>
                </div>
                <p className="font-body text-black/60 mb-6">
                  {steps[activeStep].desc}
                </p>
                <ul className="space-y-3">
                  {steps[activeStep].points.map((point, i) => (
                    <motion.li
                      key={point}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                      className="flex items-center gap-3 font-body text-black/60 text-sm"
                    >
                      <span className="size-1.5 rounded-full bg-blue-500 shrink-0" />
                      {point}
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-black/20">
                  <span className="font-body text-xs text-black/40">
                    Estimated timeframe: {steps[activeStep].timeframe}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
