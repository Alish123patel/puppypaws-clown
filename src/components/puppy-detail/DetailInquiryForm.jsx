import React, { useState } from 'react'
import { Send, CheckCircle2, MessageCircle } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig.js'

export default function DetailInquiryForm({ puppyName, puppyBreed }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    area: '',
    message: `Hi! I'd love to know more about ${puppyName} (${puppyBreed}).`
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (error) setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Please provide your name and phone number so our team can reach you.')
      return
    }
    setSubmitted(true)
  }

  const whatsappMessage = encodeURIComponent(
    `Hi TeddyPups! My name is ${formData.name || 'a future pet parent'}. I'm inquiring about ${puppyName} (${puppyBreed}). ${formData.message}`
  )
  const dynamicWhatsappUrl = `https://wa.me/919898124987?text=${whatsappMessage}`

  return (
    <div id="enquiry-form" className="bg-white rounded-3xl p-6 sm:p-10 border border-cocoa/10 shadow-soft">
      <div className="max-w-2xl">
        <span className="font-scrawl text-sm text-toffee font-bold block mb-1">
          4 dear TeddyPups…
        </span>
        <h3 className="font-plush font-bold text-2xl sm:text-3xl text-cocoa mb-2">
          Ask about {puppyName}
        </h3>
        <p className="font-sans text-cocoa-soft text-sm sm:text-base mb-8">
          Leave your details and our team will get back to you promptly — or message us on WhatsApp for the quickest reply.
        </p>

        {submitted ? (
          <div className="bg-honey/20 border border-honey/40 rounded-2xl p-6 text-center">
            <CheckCircle2 size={40} className="text-toffee mx-auto mb-3" />
            <h4 className="font-plush font-bold text-xl text-cocoa mb-2">
              Enquiry Sent for {puppyName}!
            </h4>
            <p className="font-sans text-cocoa-soft text-sm mb-5">
              Thank you, {formData.name}. Our adoption concierge has received your request and will reach out shortly.
            </p>
            <a
              href={dynamicWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp text-xs sm:text-sm py-2.5 px-5 inline-flex items-center gap-2"
            >
              <MessageCircle size={16} />
              <span>Continue conversation on WhatsApp</span>
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 bg-blush/40 border border-toffee/30 rounded-xl text-xs text-toffee-deep font-semibold">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-cocoa uppercase tracking-wider mb-1">
                  Your name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Sarah Miller"
                  required
                  className="w-full py-2.5 px-4 rounded-xl border border-cocoa/15 bg-milk text-sm text-cocoa focus:outline-none focus:ring-2 focus:ring-honey"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-cocoa uppercase tracking-wider mb-1">
                  Phone or WhatsApp *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+971 50 123 4567"
                  required
                  className="w-full py-2.5 px-4 rounded-xl border border-cocoa/15 bg-milk text-sm text-cocoa focus:outline-none focus:ring-2 focus:ring-honey"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-cocoa uppercase tracking-wider mb-1">
                  Email (optional)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full py-2.5 px-4 rounded-xl border border-cocoa/15 bg-milk text-sm text-cocoa focus:outline-none focus:ring-2 focus:ring-honey"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-cocoa uppercase tracking-wider mb-1">
                  Your area (optional)
                </label>
                <input
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  placeholder="e.g. Dubai Marina"
                  className="w-full py-2.5 px-4 rounded-xl border border-cocoa/15 bg-milk text-sm text-cocoa focus:outline-none focus:ring-2 focus:ring-honey"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-cocoa uppercase tracking-wider mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                className="w-full py-2.5 px-4 rounded-xl border border-cocoa/15 bg-milk text-sm text-cocoa focus:outline-none focus:ring-2 focus:ring-honey"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                className="btn btn-primary w-full sm:w-auto py-3 px-8 text-sm flex items-center justify-center gap-2"
              >
                <Send size={16} />
                <span>Send enquiry</span>
              </button>

              <a
                href={dynamicWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp w-full sm:w-auto py-3 px-6 text-sm flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} />
                <span>Instant WhatsApp enquiry</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
