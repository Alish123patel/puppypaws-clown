import React, { useState } from 'react'
import { Send, CheckCircle2, MessageCircle } from 'lucide-react'

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
    <div id="enquiry-form" className="border-2 border-cocoa bg-milk rounded-3xl p-6 sm:p-10 shadow-[6px_8px_0_0_#2a170e1a]">
      <div className="max-w-2xl">
        <div className="tp-chapter mb-2">
          <span className="tp-chapter__n">4</span>
          <span className="font-scrawl font-bold">dear TeddyPups…</span>
        </div>

        <h3 className="font-plush font-bold text-2xl sm:text-4xl text-cocoa mb-2">
          Ask about {puppyName}
        </h3>
        <p className="font-sans text-cocoa-soft text-sm sm:text-base mb-8">
          Leave your details and our concierge team will get back to you promptly — or message us on WhatsApp for an immediate reply.
        </p>

        {submitted ? (
          <div className="bg-honey-soft/40 border-2 border-cocoa rounded-2xl p-6 text-center">
            <CheckCircle2 size={40} className="text-toffee-deep mx-auto mb-3" />
            <h4 className="font-plush font-bold text-xl text-cocoa mb-2">
              Enquiry Sent for {puppyName}! 💌
            </h4>
            <p className="font-sans text-cocoa-soft text-sm mb-5">
              Thank you, {formData.name}. Our adoption concierge has prepared your request. You can also chat directly on WhatsApp right now.
            </p>
            <a
              href={dynamicWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp text-xs sm:text-sm py-3 px-6 inline-flex items-center gap-2 font-bold shadow-soft"
            >
              <MessageCircle size={18} />
              <span>Continue conversation on WhatsApp</span>
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 bg-blush border border-toffee-deep rounded-xl text-xs text-[#8a1c14] font-semibold">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-cocoa uppercase tracking-wider mb-1 font-sans">
                  Your name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Sarah Miller"
                  required
                  className="w-full py-2.5 px-4 rounded-xl border-2 border-cocoa/20 bg-white text-sm text-cocoa focus:outline-none focus:border-toffee focus:ring-1 focus:ring-toffee"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-cocoa uppercase tracking-wider mb-1 font-sans">
                  Phone or WhatsApp *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+971 50 123 4567"
                  required
                  className="w-full py-2.5 px-4 rounded-xl border-2 border-cocoa/20 bg-white text-sm text-cocoa focus:outline-none focus:border-toffee focus:ring-1 focus:ring-toffee"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-cocoa uppercase tracking-wider mb-1 font-sans">
                  Email (optional)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full py-2.5 px-4 rounded-xl border-2 border-cocoa/20 bg-white text-sm text-cocoa focus:outline-none focus:border-toffee focus:ring-1 focus:ring-toffee"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-cocoa uppercase tracking-wider mb-1 font-sans">
                  Your area (optional)
                </label>
                <input
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  placeholder="e.g. Dubai Marina"
                  className="w-full py-2.5 px-4 rounded-xl border-2 border-cocoa/20 bg-white text-sm text-cocoa focus:outline-none focus:border-toffee focus:ring-1 focus:ring-toffee"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-cocoa uppercase tracking-wider mb-1 font-sans">
                Message
              </label>
              <textarea
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                className="w-full py-2.5 px-4 rounded-xl border-2 border-cocoa/20 bg-white text-sm text-cocoa focus:outline-none focus:border-toffee focus:ring-1 focus:ring-toffee"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary py-3 px-6 font-bold flex items-center gap-2 shadow-soft mt-2"
            >
              <span>Send enquiry</span>
              <Send size={16} />
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
