'use client'

import { useState, useRef } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'
import { sendContactEmail } from '@/app/actions/contact'

// ── Types ──────────────────────────────────────────────────────────────────
type FormState = {
  name: string
  email: string
  phone: string
  service: string
  customService: string
  budget: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

// ── Data ───────────────────────────────────────────────────────────────────
const SERVICES = [
  'Frontend Development',
  'UI Implementation',
  'Landing Page',
  'Full-Stack Development',
  'Performance Audit',
  'Other (describe below)',
] as const

const PILLS = ['⚡ React & Next.js', '✦ Clean Code', '🚀 Fast Delivery'] as const
const IMAGE_SRC = '/img/contact-bgg.jpeg'

// ── Validation ─────────────────────────────────────────────────────────────
function validate(form: FormState): FormErrors {
  const errs: FormErrors = {}
  if (!form.name.trim()) errs.name = 'Name is required'
  if (!form.email.trim()) errs.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errs.email = 'Enter a valid email'
  if (!form.phone || form.phone.replace(/\D/g, '').length < 7)
    errs.phone = 'Enter a valid phone number'
  if (!form.service) errs.service = 'Please select a service'
  if (form.service === 'Other (describe below)' && !form.customService.trim())
    errs.customService = 'Please describe your project'
  if (!form.budget.trim()) errs.budget = 'Please mention your budget'
  if (!form.message.trim()) errs.message = 'Tell us about your project'
  return errs
}

// ── Sub-components ─────────────────────────────────────────────────────────
function ImageBg() {
  return (
    <div className="absolute inset-0 z-0">
      <img src={IMAGE_SRC} alt="Contact background" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/45" />
    </div>
  )
}

function Field({
  label, error, children,
}: {
  label: string; error?: string; children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-[Poppins] text-[10px] uppercase tracking-[0.15em] text-white/40">
        {label}
      </label>
      {children}
      {error && <span className="font-[Poppins] text-[11px] text-red-400/90">{error}</span>}
    </div>
  )
}

const INPUT_BASE =
  'w-full rounded-xl bg-white/[0.06] px-3.5 py-2.5 font-[Poppins] text-[13px] text-white placeholder:text-white/25 outline-none ring-1 ring-white/10 transition-all focus:bg-white/[0.09] focus:ring-[1.5px] focus:ring-white/35'
const INPUT_ERROR = 'ring-[1.5px] ring-red-400/40 bg-red-500/[0.06]'

// ── Main Component ─────────────────────────────────────────────────────────
export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  const [form, setForm] = useState<FormState>({
    name: '', email: '', phone: '', service: '',
    customService: '', budget: '', message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState('')

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
      await sendContactEmail({
        name: form.name,
        email: form.email,
        whatsapp: form.phone,
        service: form.service === 'Other (describe below)' ? form.customService : form.service,
        budget: form.budget,
        message: form.message,
      })
      setSubmitted(true)
      setForm({ name: '', email: '', phone: '', service: '', customService: '', budget: '', message: '' })
    } catch (err) {
      console.error(err)
      setServerError('Something went wrong. Please try again or email me directly.')
    } finally {
      setLoading(false)
    }
  }

  const isOther = form.service === 'Other (describe below)'

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,400&family=Source+Serif+4:ital,wght@1,400&display=swap');

        .liquid-glass {
          background: rgba(255,255,255,0.01);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
          position: relative;
          overflow: hidden;
        }
        .liquid-glass::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 1.4px;
          border-radius: inherit;
          background: linear-gradient(180deg,
            rgba(255,255,255,0.45) 0%,rgba(255,255,255,0.15) 20%,
            transparent 40%,transparent 60%,
            rgba(255,255,255,0.15) 80%,rgba(255,255,255,0.45) 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
        .liquid-glass-strong {
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(50px);
          -webkit-backdrop-filter: blur(50px);
          box-shadow: 4px 4px 4px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,0.15);
          position: relative;
          overflow: hidden;
        }
        .liquid-glass-strong::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 1.4px;
          border-radius: inherit;
          background: linear-gradient(180deg,
            rgba(255,255,255,0.5) 0%,rgba(255,255,255,0.2) 20%,
            transparent 40%,transparent 60%,
            rgba(255,255,255,0.2) 80%,rgba(255,255,255,0.5) 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        /* ── react-international-phone overrides ── */
        .phone-glass-wrapper {
          --react-international-phone-height: 42px;
          --react-international-phone-border-color: transparent;
          --react-international-phone-border-radius: 0.75rem;
          --react-international-phone-background-color: transparent;
          --react-international-phone-text-color: #ffffff;
          --react-international-phone-font-size: 13px;
          --react-international-phone-country-selector-background-color: rgba(255,255,255,0.06);
          --react-international-phone-country-selector-background-color-hover: rgba(255,255,255,0.12);
          --react-international-phone-country-selector-arrow-color: rgba(255,255,255,0.5);
          --react-international-phone-country-selector-border-color: transparent;
          --react-international-phone-dropdown-item-background-color: #111827;
          --react-international-phone-dropdown-item-text-color: rgba(255,255,255,0.75);
          --react-international-phone-dropdown-item-height: 36px;
          --react-international-phone-dropdown-item-font-size: 12px;
          --react-international-phone-selected-dropdown-item-background-color: rgba(255,255,255,0.1);
          --react-international-phone-dropdown-item-dial-code-color: rgba(255,255,255,0.4);
          --react-international-phone-selected-dropdown-item-dial-code-color: rgba(255,255,255,0.6);
          --react-international-phone-dropdown-shadow: 0 8px 32px rgba(0,0,0,0.6);
        }
        .phone-glass-wrapper .react-international-phone-input-container {
          display: flex; width: 100%; background: transparent;
        }
        .phone-glass-wrapper .react-international-phone-country-selector-button {
          background: rgba(255,255,255,0.06) !important;
          border: none !important;
          border-right: 1px solid rgba(255,255,255,0.1) !important;
          border-radius: 0.75rem 0 0 0.75rem !important;
          padding: 0 12px !important;
          min-width: 76px !important;
          height: 42px !important;
        }
        .phone-glass-wrapper .react-international-phone-country-selector-button:hover {
          background: rgba(255,255,255,0.12) !important;
        }
        .phone-glass-wrapper .react-international-phone-country-selector-button__flag-emoji {
          font-size: 18px; margin: 0 4px 0 0;
        }
        .phone-glass-wrapper .react-international-phone-country-selector-button__dropdown-arrow {
          border-top-color: rgba(255,255,255,0.5) !important; margin-left: 4px;
        }
        .phone-glass-wrapper .react-international-phone-input {
          flex: 1 !important;
          background: rgba(255,255,255,0.06) !important;
          border: none !important;
          border-radius: 0 0.75rem 0.75rem 0 !important;
          color: white !important;
          font-family: Poppins, sans-serif !important;
          font-size: 13px !important;
          padding: 0 14px !important;
          height: 42px !important;
          outline: none !important;
        }
        .phone-glass-wrapper .react-international-phone-input::placeholder {
          color: rgba(255,255,255,0.25) !important;
        }
        .phone-glass-wrapper .react-international-phone-country-selector-dropdown {
          background: #111827 !important;
          border: 1px solid rgba(255,255,255,0.12) !important;
          border-radius: 0.75rem !important;
          box-shadow: 0 8px 32px rgba(0,0,0,0.6) !important;
          max-height: 280px !important;
          overflow-y: auto !important;
          z-index: 9999 !important;
          width: 280px !important;
          margin-top: 4px !important;
        }
        .phone-glass-wrapper .react-international-phone-country-selector-dropdown::-webkit-scrollbar { width: 4px; }
        .phone-glass-wrapper .react-international-phone-country-selector-dropdown::-webkit-scrollbar-track { background: transparent; }
        .phone-glass-wrapper .react-international-phone-country-selector-dropdown::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.15); border-radius: 4px;
        }
        .phone-glass-wrapper .react-international-phone-country-selector-dropdown__list-item {
          color: rgba(255,255,255,0.75) !important;
          font-family: Poppins, sans-serif !important;
          font-size: 12px !important;
          padding: 8px 12px !important;
          min-height: 36px !important;
          display: flex !important;
          align-items: center !important;
        }
        .phone-glass-wrapper .react-international-phone-country-selector-dropdown__list-item:hover,
        .phone-glass-wrapper .react-international-phone-country-selector-dropdown__list-item--focused {
          background: rgba(255,255,255,0.1) !important;
        }
        .phone-glass-wrapper .react-international-phone-country-selector-dropdown__list-item--selected {
          background: rgba(255,255,255,0.08) !important;
        }
        .phone-glass-wrapper .react-international-phone-country-selector-dropdown__list-item-flag-emoji {
          font-size: 16px; margin-right: 8px;
        }
        .phone-glass-wrapper .react-international-phone-country-selector-dropdown__list-item-country-name {
          color: rgba(255,255,255,0.75) !important; font-size: 12px !important;
        }
        .phone-glass-wrapper .react-international-phone-country-selector-dropdown__list-item-dial-code {
          color: rgba(255,255,255,0.4) !important; font-size: 11px !important; margin-left: auto;
        }
        .phone-ring {
          border-radius: 0.75rem;
          box-shadow: 0 0 0 1px rgba(255,255,255,0.1);
          transition: box-shadow 0.2s;
          overflow: visible !important;
        }
        .phone-ring:focus-within { box-shadow: 0 0 0 1.5px rgba(255,255,255,0.35); }
        .phone-ring-error { box-shadow: 0 0 0 1.5px rgba(248,113,113,0.4) !important; }
      `}</style>

      <section
        id="contact"
        ref={sectionRef}
        className="relative min-h-screen overflow-hidden flex items-center"
      >
        <ImageBg />

        <div className="relative z-10 w-full max-w-380 mx-auto px-4 lg:px-12 py-6 lg:py-12">

          {/* Header */}
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
              <em style={{ fontFamily: "'Source Serif 4', serif", fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', fontWeight: 400 }}>
                work
              </em>
              <br />TOGETHER
            </h2>
            <p className="font-[Poppins] text-white/45 text-sm mt-3 max-w-sm leading-relaxed">
              Got a project in mind? Fill in the form and I&rsquo;ll get back to you within 24 hours.
            </p>
          </motion.div>

          {/* Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid md:grid-cols-2 gap-8 items-start"
          >

            {/* LEFT: Form */}
            <div className="liquid-glass-strong rounded-3xl p-7">
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">

                {/* Name + Email */}
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Name *" error={errors.name}>
                    <input name="name" type="text" placeholder="John Doe"
                      value={form.name} onChange={handleChange}
                      className={`${INPUT_BASE} ${errors.name ? INPUT_ERROR : ''}`}
                    />
                  </Field>
                  <Field label="Email *" error={errors.email}>
                    <input name="email" type="email" placeholder="hello@client.com"
                      value={form.email} onChange={handleChange}
                      className={`${INPUT_BASE} ${errors.email ? INPUT_ERROR : ''}`}
                    />
                  </Field>
                </div>

                {/* Phone */}
                <Field label="WhatsApp / Phone *" error={errors.phone}>
                  <div className={`phone-glass-wrapper phone-ring ${errors.phone ? 'phone-ring-error' : ''}`}>
                    <PhoneInput
                      defaultCountry="pk"
                      value={form.phone}
                      onChange={(phone) => {
                        setForm((prev) => ({ ...prev, phone }))
                        setErrors((prev) => ({ ...prev, phone: undefined }))
                      }}
                      placeholder="300 123 4567"
                    />
                  </div>
                </Field>

                {/* Service */}
                <Field label="Service *" error={errors.service}>
                  <select name="service" value={form.service} onChange={handleChange}
                    className={`${INPUT_BASE} ${errors.service ? INPUT_ERROR : ''}`}
                    style={{ color: form.service ? '#fff' : 'rgba(255,255,255,0.25)' }}
                  >
                    <option value="" style={{ background: '#111827' }}>Select a service…</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s} style={{ background: '#111827', color: '#fff' }}>{s}</option>
                    ))}
                  </select>
                </Field>

                {/* Custom service — animates in when "Other" selected */}
                <AnimatePresence>
                  {isOther && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <Field label="Describe Your Project *" error={errors.customService}>
                        <input name="customService" type="text"
                          placeholder="e.g. E-commerce store, SaaS dashboard, portfolio…"
                          value={form.customService} onChange={handleChange}
                          className={`${INPUT_BASE} ${errors.customService ? INPUT_ERROR : ''}`}
                        />
                      </Field>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Budget */}
                <Field label="Budget *" error={errors.budget}>
                  <input name="budget" type="text"
                    placeholder="e.g. $500, $1,000–$3,000, open to discuss…"
                    value={form.budget} onChange={handleChange}
                    className={`${INPUT_BASE} ${errors.budget ? INPUT_ERROR : ''}`}
                  />
                </Field>

                {/* Message */}
                <Field label="Project Details *" error={errors.message}>
                  <textarea name="message" rows={5}
                    placeholder="Tell me about your project, timeline, and key goals…"
                    value={form.message} onChange={handleChange}
                    className={`${INPUT_BASE} resize-none ${errors.message ? INPUT_ERROR : ''}`}
                  />
                </Field>

                {serverError && (
                  <p className="font-[Poppins] text-[12px] text-red-400/90">{serverError}</p>
                )}

                <button type="submit" disabled={loading}
                  className="liquid-glass-strong group inline-flex items-center gap-2 self-start rounded-full px-7 py-3 font-[Poppins] text-[13px] font-medium text-white transition-transform hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? (
                    <><span className="inline-block animate-spin">⟳</span> Sending…</>
                  ) : (
                    <>
                      Send Message
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-xs transition-transform group-hover:rotate-45">↗</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* RIGHT column */}
            <div className="flex flex-col gap-5">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div key="success"
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="liquid-glass-strong rounded-3xl p-8"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl">✦</div>
                    <h3 className="font-[Poppins] font-medium text-white text-2xl mb-2">Message sent!</h3>
                    <p className="font-[Poppins] text-white/55 text-[13px] leading-relaxed mb-5">
                      Thanks for reaching out. I&rsquo;ve sent a confirmation to your email and will review your project details within 24 hours.
                    </p>
                    <button onClick={() => setSubmitted(false)}
                      className="font-[Poppins] text-[12px] text-white/50 underline bg-transparent border-none cursor-pointer p-0"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.div key="info" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-5">
                    {/* Pills */}
                    <div className="flex flex-wrap gap-2">
                      {PILLS.map((p) => (
                        <span key={p} className="liquid-glass rounded-full px-4 py-1.5 font-[Poppins] text-[11px] text-white/70">{p}</span>
                      ))}
                    </div>

                    {/* Info body */}
                    <div className="liquid-glass rounded-2xl p-5 font-[Poppins] text-[13px] text-white/55 leading-relaxed">
                      Whether it&rsquo;s a landing page, dashboard, or full-stack build —
                      I&rsquo;m open to freelance work and long-term collaborations.
                      Let&rsquo;s build something fast, clean, and production-ready.
                    </div>

                    {/* Details */}
                    <div className="flex flex-col gap-4 pl-1">
                      {[
                        { label: 'Response Time', value: '< 24 hours', large: true },
                        { label: 'Email', value: 'ahsanarshad291@gmail.com', large: false },
                        { label: 'Location', value: 'Rahim Yar Khan, Punjab, PK', large: false },
                      ].map(({ label, value, large }) => (
                        <div key={label}>
                          <p className="font-[Poppins] text-[10px] uppercase tracking-[0.15em] text-white/40 mb-0.5">{label}</p>
                          <p className={`font-[Poppins] text-white ${large ? 'font-medium text-base' : 'text-[13px]'}`}>{value}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Quote */}
              <div className="liquid-glass rounded-2xl p-5 text-center">
                <span className="font-[Poppins] text-[9px] uppercase tracking-[0.35em] text-white/40 block mb-3">Dev Mindset</span>
                <p className="font-[Poppins] text-[13px] text-white/85 leading-relaxed mb-4">
                  &ldquo;Clean code always looks like it was written by someone who{' '}
                  <em style={{ fontFamily: "'Source Serif 4', serif", fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>cares</em>
                  {' '}deeply about their craft.&rdquo;
                </p>
                <div className="flex items-center justify-center gap-2">
                  <span className="h-px flex-1 max-w-[50px] bg-white/15" />
                  <span className="font-[Poppins] text-[9px] uppercase tracking-[0.25em] text-white/40">Robert C. Martin</span>
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