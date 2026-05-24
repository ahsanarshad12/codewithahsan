'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, CheckCircle2, Loader2 } from 'lucide-react'
import { sendContactEmail } from '@/app/actions/contact'

const servicesOptions = [
  'Frontend Development',
  'UI / UX Implementation',
  'Landing Page',
  'Full-Stack Development',
  'Performance Audit',
  'Other',
]

const countries = [
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
  { code: 'KE', dial: '+254', flag: '🇰🇪', name: 'Kenya' },
  { code: 'GH', dial: '+233', flag: '🇬🇭', name: 'Ghana' },
  { code: 'QA', dial: '+974', flag: '🇶🇦', name: 'Qatar' },
  { code: 'KW', dial: '+965', flag: '🇰🇼', name: 'Kuwait' },
  { code: 'OM', dial: '+968', flag: '🇴🇲', name: 'Oman' },
  { code: 'BH', dial: '+973', flag: '🇧🇭', name: 'Bahrain' },
  { code: 'JO', dial: '+962', flag: '🇯🇴', name: 'Jordan' },
  { code: 'IQ', dial: '+964', flag: '🇮🇶', name: 'Iraq' },
  { code: 'LB', dial: '+961', flag: '🇱🇧', name: 'Lebanon' },
  { code: 'MA', dial: '+212', flag: '🇲🇦', name: 'Morocco' },
  { code: 'DZ', dial: '+213', flag: '🇩🇿', name: 'Algeria' },
  { code: 'TN', dial: '+216', flag: '🇹🇳', name: 'Tunisia' },
  { code: 'RU', dial: '+7', flag: '🇷🇺', name: 'Russia' },
  { code: 'CN', dial: '+86', flag: '🇨🇳', name: 'China' },
  { code: 'JP', dial: '+81', flag: '🇯🇵', name: 'Japan' },
  { code: 'KR', dial: '+82', flag: '🇰🇷', name: 'South Korea' },
  { code: 'ID', dial: '+62', flag: '🇮🇩', name: 'Indonesia' },
]

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

export default function ContactForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
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

  const validate = (): FormErrors => {
    const errs: FormErrors = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email'
    if (!form.whatsappNumber.trim()) errs.whatsappNumber = 'WhatsApp number is required'
    else if (!/^\d{6,15}$/.test(form.whatsappNumber.replace(/\s/g, '')))
      errs.whatsappNumber = 'Enter a valid number'
    if (!form.service) errs.service = 'Please select a service'
    if (!form.message.trim()) errs.message = 'Tell me about your project'
    return errs
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setServerError('')
    setLoading(true)
    try {
      await sendContactEmail({
        name: form.name,
        email: form.email,
        whatsapp: `${form.dialCode} ${form.whatsappNumber}`,
        service: form.service,
        budget: form.budget,
        message: form.message,
      })
      setSubmitted(true)
      setForm({ name: '', email: '', dialCode: '+92', whatsappNumber: '', service: '', budget: '', message: '' })
    } catch {
      setServerError('Something went wrong. Please try again or email me directly.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = (hasError = false) =>
    `w-full px-4 py-3 rounded-lg border ${
      hasError
        ? 'border-red-400 bg-red-50/50 dark:bg-red-950/20'
        : 'border-border bg-card'
    } font-body text-sm text-ink placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all`

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-xs tracking-[0.3em] text-muted font-body uppercase mb-4 block">
            Contact Form
          </span>
          <h2
            className="font-display font-bold text-ink leading-[0.95]"
            style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
          >
            LET&apos;S TALK
          </h2>
          <p className="font-body text-muted text-base mt-3 max-w-md">
            Got a project in mind? Fill in the form and I&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-2 gap-12"
        >
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            {/* Name + Email */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="font-body text-xs text-muted uppercase tracking-wide mb-1.5 block">
                  Name *
                </label>
                <input
                  id="name" name="name" type="text" placeholder="John Doe"
                  value={form.name} onChange={handleChange}
                  className={inputClass(!!errors.name)}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1 font-body">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="font-body text-xs text-muted uppercase tracking-wide mb-1.5 block">
                  Email *
                </label>
                <input
                  id="email" name="email" type="email" placeholder="hello@client.com"
                  value={form.email} onChange={handleChange}
                  className={inputClass(!!errors.email)}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1 font-body">{errors.email}</p>}
              </div>
            </div>

            {/* WhatsApp */}
            <div>
              <label className="font-body text-xs text-muted uppercase tracking-wide mb-1.5 block">
                WhatsApp *
              </label>
              <div className={`flex rounded-lg border overflow-hidden ${errors.whatsappNumber ? 'border-red-400' : 'border-border'} focus-within:ring-2 focus-within:ring-accent/40 focus-within:border-accent transition-all`}>
                <select
                  name="dialCode"
                  value={form.dialCode}
                  onChange={handleChange}
                  className="bg-card text-ink text-sm font-body px-2 py-3 border-r border-border focus:outline-none cursor-pointer"
                  style={{ minWidth: '90px' }}
                >
                  {countries.map((c) => (
                    <option key={c.code} value={c.dial}>
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
                  className="flex-1 px-4 py-3 bg-card text-ink text-sm font-body placeholder:text-muted/50 focus:outline-none"
                />
              </div>
              {errors.whatsappNumber && (
                <p className="text-red-500 text-xs mt-1 font-body">{errors.whatsappNumber}</p>
              )}
            </div>

            {/* Service */}
            <div>
              <label htmlFor="service" className="font-body text-xs text-muted uppercase tracking-wide mb-1.5 block">
                Service *
              </label>
              <select
                id="service" name="service" value={form.service} onChange={handleChange}
                className={inputClass(!!errors.service)}
              >
                <option value="">Select a service…</option>
                {servicesOptions.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              {errors.service && <p className="text-red-500 text-xs mt-1 font-body">{errors.service}</p>}
            </div>

            {/* Budget */}
            <div>
              <label htmlFor="budget" className="font-body text-xs text-muted uppercase tracking-wide mb-1.5 block">
                Budget (optional)
              </label>
              <input
                id="budget" name="budget" type="text" placeholder="$2,000 – $5,000"
                value={form.budget} onChange={handleChange}
                className={inputClass()}
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="font-body text-xs text-muted uppercase tracking-wide mb-1.5 block">
                Project Details *
              </label>
              <textarea
                id="message" name="message" rows={5}
                placeholder="Tell me about your project, timeline, and key goals…"
                value={form.message} onChange={handleChange}
                className={inputClass(!!errors.message) + ' resize-none'}
              />
              {errors.message && <p className="text-red-500 text-xs mt-1 font-body">{errors.message}</p>}
            </div>

            {serverError && (
              <p className="text-red-500 text-sm font-body">{serverError}</p>
            )}

            <button
              type="submit" disabled={loading}
              className="group inline-flex items-center gap-2 bg-accent text-cream px-8 py-3.5 rounded-full text-sm font-medium hover:bg-accent/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <><Loader2 className="size-4 animate-spin" />Sending…</>
              ) : (
                <>Send Message<ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" /></>
              )}
            </button>
          </form>

          {/* Right column */}
          <div className="flex flex-col justify-start">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-accent/10 border border-accent/20 rounded-2xl p-8 md:p-10 h-fit"
                >
                  <CheckCircle2 className="size-10 text-accent mb-4" />
                  <h3 className="font-display font-bold text-ink text-2xl mb-2">Message sent!</h3>
                  <p className="font-body text-muted text-sm leading-relaxed">
                    Thanks for reaching out. I&apos;ll review your project details and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-body text-accent hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="info" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <p className="font-body text-muted text-base leading-relaxed">
                    Whether it&apos;s a landing page, dashboard, or full-stack build — I&apos;m open to freelance work and flexible collaborations.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <p className="font-body text-xs text-muted uppercase tracking-wide mb-1">Response Time</p>
                      <p className="font-display font-bold text-ink">&lt; 24 hours</p>
                    </div>
                    <div>
                      <p className="font-body text-xs text-muted uppercase tracking-wide mb-1">Email</p>
                      <p className="font-body text-sm text-ink">ahsanarshad291@gmail.com</p>
                    </div>
                    <div>
                      <p className="font-body text-xs text-muted uppercase tracking-wide mb-1">Location</p>
                      <p className="font-body text-sm text-ink">Rahim Yar Khan, Punjab, PK</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
