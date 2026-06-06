'use client'

import { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import Flag from 'react-country-flag'
import { sendContactEmail } from '@/app/actions/contact'

// ── Types ──────────────────────────────────────────────────────────────────
type FormState = {
  name: string
  email: string
  dialCode: string
  whatsappNumber: string
  service: string
  budget: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

// ── Data ───────────────────────────────────────────────────────────────────
const SERVICES = [
  'Frontend Development',
  'UI / UX Implementation',
  'Landing Page',
  'Full-Stack Development',
  'Performance Audit',
  'Other',
] as const

const COUNTRIES = [
  { code: 'PK', dial: '+92', flag: '🇵🇰', name: 'Pakistan' },
  { code: 'US', dial: '+1', flag: '🇺🇸', name: 'United States' },
  { code: 'GB', dial: '+44', flag: '🇬🇧', name: 'United Kingdom' },
  { code: 'AE', dial: '+971', flag: '🇦🇪', name: 'UAE' },
  { code: 'SA', dial: '+966', flag: '🇸🇦', name: 'Saudi Arabia' },
  { code: 'IN', dial: '+91', flag: '🇮🇳', name: 'India' },
  { code: 'CA', dial: '+1', flag: '🇨🇦', name: 'Canada' },
  { code: 'AU', dial: '+61', flag: '🇦🇺', name: 'Australia' },
  { code: 'DE', dial: '+49', flag: '🇩🇪', name: 'Germany' },
  { code: 'FR', dial: '+33', flag: '🇫🇷', name: 'France' },
  { code: 'IT', dial: '+39', flag: '🇮🇹', name: 'Italy' },
  { code: 'ES', dial: '+34', flag: '🇪🇸', name: 'Spain' },
  { code: 'NL', dial: '+31', flag: '🇳🇱', name: 'Netherlands' },
  { code: 'TR', dial: '+90', flag: '🇹🇷', name: 'Turkey' },
  { code: 'NG', dial: '+234', flag: '🇳🇬', name: 'Nigeria' },
  { code: 'EG', dial: '+20', flag: '🇪🇬', name: 'Egypt' },
  { code: 'BD', dial: '+880', flag: '🇧🇩', name: 'Bangladesh' },
  { code: 'PH', dial: '+63', flag: '🇵🇭', name: 'Philippines' },
  { code: 'MY', dial: '+60', flag: '🇲🇾', name: 'Malaysia' },
  { code: 'SG', dial: '+65', flag: '🇸🇬', name: 'Singapore' },
  { code: 'BR', dial: '+55', flag: '🇧🇷', name: 'Brazil' },
  { code: 'MX', dial: '+52', flag: '🇲🇽', name: 'Mexico' },
  { code: 'ZA', dial: '+27', flag: '🇿🇦', name: 'South Africa' },
  { code: 'QA', dial: '+974', flag: '🇶🇦', name: 'Qatar' },
  { code: 'KW', dial: '+965', flag: '🇰🇼', name: 'Kuwait' },
  { code: 'OM', dial: '+968', flag: '🇴🇲', name: 'Oman' },
  { code: 'BH', dial: '+973', flag: '🇧🇭', name: 'Bahrain' },
  { code: 'JO', dial: '+962', flag: '🇯🇴', name: 'Jordan' },
  { code: 'MA', dial: '+212', flag: '🇲🇦', name: 'Morocco' },
  { code: 'CN', dial: '+86', flag: '🇨🇳', name: 'China' },
  { code: 'JP', dial: '+81', flag: '🇯🇵', name: 'Japan' },
  { code: 'KR', dial: '+82', flag: '🇰🇷', name: 'South Korea' },
  { code: 'ID', dial: '+62', flag: '🇮🇩', name: 'Indonesia' },
] as const

const PILLS = ['🌿 AI Generation', '✦ Floral Design', '🌸 3D Structures'] as const

const IMAGE_SRC = '/img/contact-bgg.jpeg'

// ── Validation ─────────────────────────────────────────────────────────────
function validate(form: FormState): FormErrors {
  const errs: FormErrors = {}
  if (!form.name.trim()) errs.name = 'Name is required'
  if (!form.email.trim()) errs.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errs.email = 'Enter a valid email'
  if (!form.whatsappNumber.trim()) errs.whatsappNumber = 'WhatsApp number is required'
  else if (!/^\d{6,15}$/.test(form.whatsappNumber.replace(/\s/g, '')))
    errs.whatsappNumber = 'Enter a valid number'
  if (!form.service) errs.service = 'Please select a service'
  if (!form.message.trim()) errs.message = 'Tell us about your project'
  return errs
}

// ── Sub-components ─────────────────────────────────────────────────────────

/** Image background */
function ImageBg() {
  return (
    <div className="absolute inset-0 z-0">
      <img
        src={IMAGE_SRC}
        alt="Contact background"
        className="h-full w-full object-cover"
      />
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/45" />
    </div>
  )
}

/** Liquid-glass input field */
function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-[Poppins] text-[10px] uppercase tracking-[0.15em] text-white/40">
        {label}
      </label>
      {children}
      {error && (
        <span className="font-[Poppins] text-[11px] text-red-400/90">{error}</span>
      )}
    </div>
  )
}

/** Glass input shared styles */
const INPUT_BASE =
  'w-full rounded-xl bg-white/[0.06] px-3.5 py-2.5 font-[Poppins] text-[13px] text-white placeholder:text-white/25 outline-none ring-1 ring-white/10 transition-all focus:bg-white/[0.09] focus:ring-[1.5px] focus:ring-white/35'

const INPUT_ERROR =
  'ring-[1.5px] ring-red-400/40 bg-red-500/[0.06]'

// ── Main Component ─────────────────────────────────────────────────────────
export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    dialCode: '+92',
    whatsappNumber: '',
    service: '',
    budget: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState('')

  // clear individual error on change
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    setErrors({})
    setServerError('')
    setLoading(true)

    try {
      // Replace with your real server action:
      // await sendContactEmail({ ... })
      await new Promise((r) => setTimeout(r, 1500)) // mock delay
      setSubmitted(true)
      setForm({
        name: '', email: '', dialCode: '+92',
        whatsappNumber: '', service: '', budget: '', message: '',
      })
    } catch {
      setServerError('Something went wrong. Please try again or email me directly.')
    } finally {
      setLoading(false)
    }
  }

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <>
      {/* Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,400&family=Source+Serif+4:ital,wght@1,400&display=swap');

        /* ── Liquid Glass ── */
        .liquid-glass {
          background: rgba(255, 255, 255, 0.01);
          background-blend-mode: luminosity;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }
        .liquid-glass::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 1.4px;
          border-radius: inherit;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.45) 0%,
            rgba(255, 255, 255, 0.15) 20%,
            transparent 40%,
            transparent 60%,
            rgba(255, 255, 255, 0.15) 80%,
            rgba(255, 255, 255, 0.45) 100%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .liquid-glass-strong {
          background: rgba(255, 255, 255, 0.04);
          background-blend-mode: luminosity;
          backdrop-filter: blur(50px);
          -webkit-backdrop-filter: blur(50px);
          box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.05),
            inset 0 1px 1px rgba(255, 255, 255, 0.15);
          position: relative;
          overflow: hidden;
        }
        .liquid-glass-strong::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 1.4px;
          border-radius: inherit;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.5) 0%,
            rgba(255, 255, 255, 0.2) 20%,
            transparent 40%,
            transparent 60%,
            rgba(255, 255, 255, 0.2) 80%,
            rgba(255, 255, 255, 0.5) 100%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
      `}</style>

      <section
        id="contact"
        ref={sectionRef}
        className="relative min-h-screen overflow-hidden flex items-center"
      >
        {/* Image background */}
        <ImageBg />

        {/* Content */}
        <div className="relative z-10 w-full max-w-380 mx-auto px-4 lg:px-12 py-6 lg:py-12">

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14"
          >
            <span className="font-[Poppins] text-[11px] tracking-[0.3em] uppercase text-white/40 block mb-3">
              Get in touch
            </span>
            <h2
              className="font-[Poppins] font-medium text-white leading-[0.95] tracking-[-0.05em]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              LET&rsquo;S{' '}
              <em
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontStyle: 'italic',
                  color: 'rgba(255,255,255,0.7)',
                  fontWeight: 400,
                }}
              >
                bloom
              </em>
              <br />TOGETHER
            </h2>
            <p className="font-[Poppins] text-white/45 text-sm mt-3 max-w-sm leading-relaxed">
              Got a project in mind? Fill in the form and I&rsquo;ll get back to you within 24 hours.
            </p>
          </motion.div>

          {/* ── Grid ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid md:grid-cols-2 gap-8 items-start"
          >

            {/* ── LEFT: Form Panel ── */}
            <div className="liquid-glass-strong rounded-3xl p-7">
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">

                {/* Name + Email row */}
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Name *" error={errors.name}>
                    <input
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      className={`${INPUT_BASE} ${errors.name ? INPUT_ERROR : ''}`}
                    />
                  </Field>
                  <Field label="Email *" error={errors.email}>
                    <input
                      name="email"
                      type="email"
                      placeholder="hello@client.com"
                      value={form.email}
                      onChange={handleChange}
                      className={`${INPUT_BASE} ${errors.email ? INPUT_ERROR : ''}`}
                    />
                  </Field>
                </div>

                {/* WhatsApp */}
                <Field label="WhatsApp *" error={errors.whatsappNumber}>
                  <div
                    className={`flex rounded-xl overflow-hidden ring-1 transition-all focus-within:ring-[1.5px] focus-within:ring-white/35 ${
                      errors.whatsappNumber ? 'ring-red-400/40' : 'ring-white/10'
                    }`}
                  >
                    <select
                      name="dialCode"
                      value={form.dialCode}
                      onChange={handleChange}
                      className="bg-white/[0.04] text-white text-[12px] font-[Poppins] px-2 py-2.5 border-r border-white/10 outline-none cursor-pointer"
                      style={{ minWidth: 82 }}
                    >
                      {COUNTRIES.map((c) => (
                        <option
                          key={`${c.code}-${c.dial}`}
                          value={c.dial}
                          style={{ background: '#0d0d1a' }}
                        >
                          {c.flag} {c.dial}
                        </option>
                      ))}
                    </select>
                    <input
                      name="whatsappNumber"
                      type="tel"
                      placeholder="3001234567"
                      value={form.whatsappNumber}
                      onChange={handleChange}
                      className="flex-1 bg-white/[0.06] text-white text-[13px] font-[Poppins] px-3.5 py-2.5 placeholder:text-white/25 outline-none"
                    />
                  </div>
                </Field>

                {/* Service */}
                <Field label="Service *" error={errors.service}>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={`${INPUT_BASE} ${errors.service ? INPUT_ERROR : ''}`}
                    style={{ color: form.service ? '#fff' : 'rgba(255,255,255,0.25)' }}
                  >
                    <option value="" style={{ background: '#0d0d1a' }}>
                      Select a service…
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s} style={{ background: '#0d0d1a', color: '#fff' }}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>

                {/* Budget */}
                <Field label="Budget (optional)">
                  <input
                    name="budget"
                    type="text"
                    placeholder="$2,000 – $5,000"
                    value={form.budget}
                    onChange={handleChange}
                    className={INPUT_BASE}
                  />
                </Field>

                {/* Message */}
                <Field label="Project Details *" error={errors.message}>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project, timeline, and key goals…"
                    value={form.message}
                    onChange={handleChange}
                    className={`${INPUT_BASE} resize-none ${errors.message ? INPUT_ERROR : ''}`}
                  />
                </Field>

                {serverError && (
                  <p className="font-[Poppins] text-[12px] text-red-400/90">{serverError}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="liquid-glass-strong group inline-flex items-center gap-2 self-start rounded-full px-7 py-3 font-[Poppins] text-[13px] font-medium text-white transition-transform hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <span className="inline-block animate-spin">⟳</span>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-xs transition-transform group-hover:rotate-45">
                        ↗
                      </span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* ── RIGHT column ── */}
            <div className="flex flex-col gap-5">
              <AnimatePresence mode="wait">
                {submitted ? (
                  /* Success card */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="liquid-glass-strong rounded-3xl p-8"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl">
                      ✦
                    </div>
                    <h3 className="font-[Poppins] font-medium text-white text-2xl mb-2">
                      Message sent!
                    </h3>
                    <p className="font-[Poppins] text-white/55 text-[13px] leading-relaxed mb-5">
                      Thanks for reaching out. I&rsquo;ll review your project details and get back
                      to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="font-[Poppins] text-[12px] text-white/50 underline bg-transparent border-none cursor-pointer p-0"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  /* Info panel */
                  <motion.div
                    key="info"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-5"
                  >
                    {/* Pills */}
                    <div className="flex flex-wrap gap-2">
                      {PILLS.map((p) => (
                        <span
                          key={p}
                          className="liquid-glass rounded-full px-4 py-1.5 font-[Poppins] text-[11px] text-white/70"
                        >
                          {p}
                        </span>
                      ))}
                    </div>

                    {/* Info body */}
                    <div className="liquid-glass rounded-2xl p-5 font-[Poppins] text-[13px] text-white/55 leading-relaxed">
                      Whether it&rsquo;s a landing page, dashboard, or full-stack build — I&rsquo;m
                      open to freelance work and flexible collaborations within the{' '}
                      <em
                        style={{
                          fontFamily: "'Source Serif 4', serif",
                          fontStyle: 'italic',
                        }}
                      >
                        bloom
                      </em>{' '}
                      ecosystem and beyond.
                    </div>

                    {/* Details */}
                    <div className="flex flex-col gap-4 pl-1">
                      {[
                        { label: 'Response Time', value: '< 24 hours', large: true },
                        { label: 'Email', value: 'ahsanarshad291@gmail.com', large: false },
                        { label: 'Location', value: 'Rahim Yar Khan, Punjab, PK', large: false },
                      ].map(({ label, value, large }) => (
                        <div key={label}>
                          <p className="font-[Poppins] text-[10px] uppercase tracking-[0.15em] text-white/40 mb-0.5">
                            {label}
                          </p>
                          <p
                            className={`font-[Poppins] text-white ${
                              large ? 'font-medium text-base' : 'text-[13px]'
                            }`}
                          >
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Quote block */}
              <div className="liquid-glass rounded-2xl p-5 text-center">
                <span className="font-[Poppins] text-[9px] uppercase tracking-[0.35em] text-white/40 block mb-3">
                  Visionary Design
                </span>
                <p className="font-[Poppins] text-[13px] text-white/85 leading-relaxed mb-4">
                  &ldquo;We imagined a realm{' '}
                  <em
                    style={{
                      fontFamily: "'Source Serif 4', serif",
                      fontStyle: 'italic',
                      color: 'rgba(255,255,255,0.6)',
                    }}
                  >
                    with no ending
                  </em>{' '}
                  — where every petal is a new possibility.&rdquo;
                </p>
                <div className="flex items-center justify-center gap-2">
                  <span className="h-px flex-1 max-w-[50px] bg-white/15" />
                  <span className="font-[Poppins] text-[9px] uppercase tracking-[0.25em] text-white/40">
                    Marcus Aurelio
                  </span>
                  <span className="h-px flex-1 max-w-[50px] bg-white/15" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}