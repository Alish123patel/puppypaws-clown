import React, { useState } from 'react'
import {
  Send,
  MessageCircle,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Heart
} from 'lucide-react'
import { availablePuppies, siteConfig } from '../../data/index.js'

export default function MadLibsForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    puppyInterest: 'Any available puppy',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Options for puppy interest
  const puppyOptions = [
    'Any available puppy',
    'Bichon Frise',
    'Maltipoo',
    'Poodle',
    'Pomeranian',
    'Custom Europe / Korea Concierge Import',
    ...availablePuppies.map((p) => `${p.name} (${p.breed})`)
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.'
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your phone or WhatsApp number.'
    } else {
      const cleanPhone = formData.phone.replace(/[^0-9+]/g, '')
      if (cleanPhone.length < 7) {
        errs.phone = 'Please enter a valid phone number (at least 7 digits).'
      }
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = 'Please provide a valid email address.'
      }
    }

    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validate()) return

    setIsSubmitting(true)

    // Simulate realistic frontend submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 600)
  }

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      city: '',
      puppyInterest: 'Any available puppy',
      message: ''
    })
    setErrors({})
    setSubmitted(false)
  }

  // Construct formatted WhatsApp text
  const generateWhatsAppUrl = () => {
    const text = `Hi TeddyPups Concierge! 🐾\n\nDear TeddyPups,\nMy name is ${formData.name.trim()}.\nYou can reach me on ${formData.phone.trim()}${
      formData.email.trim() ? ` or email ${formData.email.trim()}` : ''
    }.\nI live in ${formData.city.trim() || 'Dubai'}.\nI'm curious about: ${formData.puppyInterest}.\n${
      formData.message.trim() ? `Notes: "${formData.message.trim()}"\n` : ''
    }\nLooking forward to hearing from you!`

    return `https://wa.me/919898124987?text=${encodeURIComponent(text)}`
  }

  return (
    <div className="mad-libs-letter relative bg-[#fffcf5] border-2 border-honey/50 rounded-3xl p-6 sm:p-10 shadow-card max-w-2xl mx-auto overflow-hidden">
      {/* Postage Stamp Accent in Top Right Corner */}
      <div className="absolute top-5 right-5 hidden sm:flex flex-col items-center justify-center w-16 h-20 border-2 border-dashed border-toffee/40 bg-cream/90 rounded-lg p-1 select-none pointer-events-none rotate-2">
        <Heart size={20} className="text-toffee fill-toffee mb-1" />
        <span className="font-scrawl text-[9px] text-toffee-ink font-bold uppercase tracking-wider text-center leading-tight">
          TeddyPups Air Mail
        </span>
      </div>

      {/* Submitted Success Confirmation Card */}
      {submitted ? (
        <div className="py-6 text-center animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-honey/20 text-toffee flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 size={36} className="text-toffee" />
          </div>

          <h3 className="font-plush font-bold text-3xl text-cocoa mb-3">
            Your letter has been drafted, {formData.name.trim()}! 💌
          </h3>

          <p className="font-sans text-cocoa-soft text-sm sm:text-base max-w-lg mx-auto mb-6 leading-relaxed">
            <span className="font-semibold text-cocoa">Demo Notice:</span> As this is a live frontend application without an active email server, your inquiry is prepared and ready. You can forward it directly to our live concierge on WhatsApp with a single click!
          </p>

          {/* Letter Preview Box */}
          <div className="bg-cream p-5 rounded-2xl border border-cocoa/10 text-left mb-6 font-scrawl text-sm text-cocoa-soft leading-relaxed shadow-sm">
            <p className="font-bold text-cocoa mb-1">Dear TeddyPups,</p>
            <p>
              My name is <span className="text-toffee font-semibold">{formData.name}</span>, and you can reach me on{' '}
              <span className="text-toffee font-semibold">{formData.phone}</span>
              {formData.email && <> (or by email at <span className="text-toffee font-semibold">{formData.email}</span>)</>}.
            </p>
            <p className="mt-1">
              I live in <span className="text-toffee font-semibold">{formData.city || 'Dubai'}</span>, and I'm curious about{' '}
              <span className="text-toffee font-semibold">{formData.puppyInterest}</span>.
            </p>
            {formData.message && (
              <p className="mt-2 italic text-cocoa">"{formData.message}"</p>
            )}
            <p className="mt-2 text-right text-xs font-sans text-cocoa-soft">— with love, a future puppy parent</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              <span>Send via WhatsApp Now</span>
            </a>

            <button
              onClick={handleReset}
              className="btn btn-outline w-full sm:w-auto inline-flex items-center justify-center gap-2"
            >
              <RotateCcw size={16} />
              <span>Write another note</span>
            </button>
          </div>
        </div>
      ) : (
        /* The Mad-Libs Letter Form */
        <form onSubmit={handleSubmit} noValidate>
          <div className="flex items-center gap-2 mb-6">
            <span className="font-scrawl text-xl sm:text-2xl text-toffee font-bold">
              dear TeddyPups…
            </span>
            <Sparkles size={16} className="text-honey" />
          </div>

          <div className="space-y-4 font-sans text-base sm:text-lg text-cocoa leading-relaxed">
            {/* Sentence 1: Name and Phone */}
            <div className="flex flex-wrap items-baseline gap-2">
              <span>my name is</span>
              <div className="inline-block relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="your name *"
                  className={`bg-transparent border-b-2 px-2 py-0.5 font-scrawl text-cocoa placeholder:text-cocoa/40 focus:outline-none transition-colors w-40 sm:w-48 text-base sm:text-lg ${
                    errors.name
                      ? 'border-red-500 bg-red-50/50'
                      : 'border-honey hover:border-toffee focus:border-toffee'
                  }`}
                  aria-required="true"
                />
                {errors.name && (
                  <span className="block text-xs font-sans text-red-600 mt-0.5">
                    {errors.name}
                  </span>
                )}
              </div>

              <span>, and you can reach me on</span>
              <div className="inline-block relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="phone or WhatsApp *"
                  className={`bg-transparent border-b-2 px-2 py-0.5 font-scrawl text-cocoa placeholder:text-cocoa/40 focus:outline-none transition-colors w-44 sm:w-56 text-base sm:text-lg ${
                    errors.phone
                      ? 'border-red-500 bg-red-50/50'
                      : 'border-honey hover:border-toffee focus:border-toffee'
                  }`}
                  aria-required="true"
                />
                {errors.phone && (
                  <span className="block text-xs font-sans text-red-600 mt-0.5">
                    {errors.phone}
                  </span>
                )}
              </div>
            </div>

            {/* Sentence 2: Email */}
            <div className="flex flex-wrap items-baseline gap-2">
              <span>or by email at</span>
              <div className="inline-block relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email (optional)"
                  className={`bg-transparent border-b-2 px-2 py-0.5 font-scrawl text-cocoa placeholder:text-cocoa/40 focus:outline-none transition-colors w-52 sm:w-64 text-base sm:text-lg ${
                    errors.email
                      ? 'border-red-500 bg-red-50/50'
                      : 'border-honey hover:border-toffee focus:border-toffee'
                  }`}
                />
                {errors.email && (
                  <span className="block text-xs font-sans text-red-600 mt-0.5">
                    {errors.email}
                  </span>
                )}
              </div>
              <span>.</span>
            </div>

            {/* Sentence 3: City and Puppy Interest */}
            <div className="flex flex-wrap items-baseline gap-2">
              <span>I live in</span>
              <div className="inline-block">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="e.g. Dubai Marina"
                  className="bg-transparent border-b-2 border-honey hover:border-toffee focus:border-toffee px-2 py-0.5 font-scrawl text-cocoa placeholder:text-cocoa/40 focus:outline-none transition-colors w-40 sm:w-48 text-base sm:text-lg"
                />
              </div>

              <span>, and I'm curious about</span>
              <div className="inline-block relative">
                <select
                  name="puppyInterest"
                  value={formData.puppyInterest}
                  onChange={handleChange}
                  className="bg-cream border border-honey/60 hover:border-toffee focus:border-toffee rounded-xl px-3 py-1 font-sans text-sm text-cocoa focus:outline-none transition-colors cursor-pointer shadow-sm max-w-xs"
                >
                  {puppyOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <span>.</span>
            </div>

            {/* Additional Message / Special Wishes */}
            <div className="pt-4">
              <label
                htmlFor="mad-libs-message"
                className="block text-xs font-bold text-cocoa-soft uppercase tracking-wider mb-2 font-sans"
              >
                Notes or special wishes (optional):
              </label>
              <textarea
                id="mad-libs-message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your home, timeline, or any questions you have for our team..."
                className="w-full bg-white/70 border border-honey/40 focus:border-toffee rounded-2xl p-3.5 font-sans text-sm text-cocoa placeholder:text-cocoa/40 focus:outline-none focus:ring-1 focus:ring-toffee transition-all resize-none shadow-sm"
              />
            </div>

            {/* Sign off */}
            <div className="pt-4 text-right">
              <p className="font-scrawl text-base sm:text-lg text-toffee font-medium">
                with love, a future puppy parent
              </p>
            </div>
          </div>

          {/* Form Actions */}
          <div className="mt-8 pt-6 border-t border-cocoa/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-cocoa-soft flex items-center gap-1.5">
              <Sparkles size={14} className="text-honey" />
              <span>We reply promptly via WhatsApp or phone.</span>
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-8 text-base"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-milk border-t-transparent rounded-full animate-spin" />
                  <span>Drafting letter...</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  <span>Post my letter 💌</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
