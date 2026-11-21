import React, { useState } from 'react'
import {
  Send,
  MessageCircle,
  RotateCcw,
  CheckCircle2,
  AlertCircle
} from 'lucide-react'
import { availablePuppies } from '../../data/index.js'

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
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 450)
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

  // Generate WhatsApp message URL
  const generateWhatsAppUrl = () => {
    const text = `Hi TeddyPups Concierge! 🐾\n\nDear TeddyPups,\nMy name is ${formData.name.trim()}.\nYou can reach me on ${formData.phone.trim()}${
      formData.email.trim() ? ` or email ${formData.email.trim()}` : ''
    }.\nI live in ${formData.city.trim() || 'Dubai'}.\nI'm curious about: ${formData.puppyInterest}.\n${
      formData.message.trim() ? `Notes: "${formData.message.trim()}"\n` : ''
    }\nLooking forward to hearing from you!`

    return `https://wa.me/919898124987?text=${encodeURIComponent(text)}`
  }

  return (
    <div className="tp-post" data-phase={submitted ? 'sent' : 'writing'}>
      {submitted ? (
        <div className="tp-letterform text-center py-8">
          <div className="w-16 h-16 rounded-full bg-honey-soft text-toffee-deep flex items-center justify-center mx-auto mb-4 border-2 border-cocoa">
            <CheckCircle2 size={36} />
          </div>

          <h3 className="font-plush font-bold text-3xl text-cocoa mb-3">
            Your letter has been drafted, {formData.name.trim()}! 💌
          </h3>

          <p className="font-sans text-cocoa-soft text-sm sm:text-base max-w-lg mx-auto mb-6 leading-relaxed">
            <span className="font-semibold text-cocoa">Notice:</span> Your inquiry has been prepared. Forward it directly to our live concierge on WhatsApp with one click!
          </p>

          <div className="bg-[#fff8ea] p-5 rounded-2xl border-2 border-cocoa text-left mb-6 font-scrawl text-sm text-cocoa leading-relaxed shadow-sm">
            <p className="font-bold text-toffee-ink mb-1">Dear TeddyPups,</p>
            <p>
              My name is <strong className="text-toffee-deep">{formData.name}</strong>, and you can reach me on{' '}
              <strong className="text-toffee-deep">{formData.phone}</strong>
              {formData.email && <> (or email <strong className="text-toffee-deep">{formData.email}</strong>)</>}.
            </p>
            <p className="mt-1">
              I live in <strong className="text-toffee-deep">{formData.city || 'Dubai'}</strong>, and I'm curious about{' '}
              <strong className="text-toffee-deep">{formData.puppyInterest}</strong>.
            </p>
            {formData.message && (
              <p className="mt-2 italic">"{formData.message}"</p>
            )}
            <p className="mt-2 text-right text-xs font-sans text-cocoa-soft">
              — with love, a future puppy parent
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold py-3.5 px-6 shadow-soft"
            >
              <MessageCircle size={18} />
              <span>Send via WhatsApp Now</span>
            </a>

            <button
              type="button"
              onClick={handleReset}
              className="btn btn-outline w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold py-3.5 px-5"
            >
              <RotateCcw size={16} />
              <span>Write another note</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="tp-letterform">
          {/* Dashed Postage Stamp in Top-Right Corner */}
          <div className="tp-letter__stamp">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7 text-toffee-deep"
              aria-hidden="true"
            >
              <circle cx="7" cy="8" r="2.3" />
              <circle cx="17" cy="8" r="2.3" />
              <circle cx="12" cy="5" r="2.3" />
              <path d="M12 10.5c-3 0-5 2.2-5 4.5 0 2 1.8 3.5 5 3.5s5-1.5 5-3.5c0-2.3-2-4.5-5-4.5z" />
            </svg>
          </div>

          <span className="tp-letterform__greeting font-scrawl font-bold block mb-2">
            dear TeddyPups,
          </span>

          <div className="tp-letterform__line font-sans text-cocoa">
            <span>my name is</span>{' '}
            <span className="tp-blank" style={{ '--size': '18ch' }}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="your name *"
                aria-label="Your name"
                aria-invalid={!!errors.name}
                required
              />
            </span>
            <span>, and you can reach me on</span>{' '}
            <span className="tp-blank" style={{ '--size': '20ch' }}>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="phone or WhatsApp *"
                aria-label="Phone or WhatsApp number"
                aria-invalid={!!errors.phone}
                required
              />
            </span>
            <span>or by email at</span>{' '}
            <span className="tp-blank" style={{ '--size': '22ch' }}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email (optional)"
                aria-label="Email address"
                aria-invalid={!!errors.email}
              />
            </span>
            <span>. I live in</span>{' '}
            <span className="tp-blank" style={{ '--size': '18ch' }}>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="your area (optional)"
                aria-label="City or area"
              />
            </span>
            <span>, and I'm curious about</span>{' '}
            <span className="tp-blank tp-blank--select" style={{ '--size': '28ch' }}>
              <select
                name="puppyInterest"
                value={formData.puppyInterest}
                onChange={handleChange}
                aria-label="Puppy interest"
              >
                {puppyOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </span>
            <span>.</span>
          </div>

          {/* Ruled Notebook Note Area */}
          <textarea
            className="tp-letterform__note font-scrawl"
            rows={3}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="anything else we should know?"
            aria-label="Notes or message"
          />

          {/* Validation Errors Notice */}
          {(errors.name || errors.phone || errors.email) && (
            <div className="tp-letterform__alert mt-4 flex items-center gap-2 text-xs font-semibold text-[#8a1c14]">
              <AlertCircle size={16} />
              <span>
                {errors.name || errors.phone || errors.email}
              </span>
            </div>
          )}

          {/* Signature and Submit Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-8 pt-4 border-t border-cocoa/10">
            <span className="tp-letterform__sign font-scrawl text-sm sm:text-base text-toffee-ink font-bold">
              — with love, a future puppy parent
            </span>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary py-3.5 px-7 font-bold flex items-center gap-2 shadow-soft"
            >
              <span>{isSubmitting ? 'Sealing...' : 'Post my letter'}</span>
              <Send size={16} />
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
