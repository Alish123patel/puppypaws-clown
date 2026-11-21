import React from 'react'
import { MessageCircle, CheckCircle2, Heart } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig.js'

export default function ConciergeSteps() {
  const steps = [
    {
      number: '1',
      title: 'Choose your breed',
      description: "Select your preferred breed or tell us what you're looking for. We'll guide you based on availability and your lifestyle."
    },
    {
      number: '2',
      title: 'Get photos & details',
      description: 'Our team will share real photos, health details, and all necessary information directly on WhatsApp.'
    },
    {
      number: '3',
      title: 'Secure & safe delivery',
      description: 'Once confirmed, we handle everything professionally and ensure your puppy reaches you safely and stress-free.'
    }
  ]

  const chatBreeds = ['Maltipoo', 'Pomeranian', 'Poodle', 'Cavapoo', 'Shih Tzu']

  return (
    <section className="py-16 sm:py-24 bg-milk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 3 Steps Process */}
          <div className="lg:col-span-7">
            <span className="font-scrawl text-sm sm:text-base text-toffee block mb-2">
              concierge service
            </span>
            <h2 className="font-plush font-bold text-3xl sm:text-4xl lg:text-5xl text-cocoa tracking-tight mb-4">
              Your puppy journey
            </h2>
            <p className="font-sans text-cocoa-soft text-base sm:text-lg mb-10 max-w-xl">
              A premium, step-by-step concierge experience. We make adoption simple, secure, and purely joyful.
            </p>

            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-honey/30 border border-honey/40 text-toffee-ink font-scrawl text-2xl font-bold flex items-center justify-center shadow-soft">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-plush font-bold text-xl text-cocoa mb-1.5">
                      {step.title}
                    </h3>
                    <p className="font-sans text-cocoa-soft text-sm sm:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Mock WhatsApp Chat Widget */}
          <div className="lg:col-span-5">
            <div className="bg-cream rounded-4xl p-6 sm:p-8 border border-cocoa/10 shadow-elevated">
              {/* WhatsApp Chat Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-cocoa/10 mb-5">
                <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-cocoa">
                    TeddyPups U.A.E.
                  </h4>
                  <span className="flex items-center gap-1.5 text-xs text-[#25D366] font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                    Online 24/7 Concierge
                  </span>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-3.5 text-xs sm:text-sm">
                {/* User Message */}
                <div className="bg-milk p-3.5 rounded-2xl rounded-tr-none border border-cocoa/5 shadow-sm max-w-[85%] ml-auto text-cocoa">
                  Hi TeddyPups! I'd love to know more about your available teacup puppies.
                </div>

                {/* Team Reply */}
                <div className="bg-white p-3.5 rounded-2xl rounded-tl-none border border-cocoa/10 shadow-sm max-w-[90%] text-cocoa">
                  <p className="mb-2.5">
                    Hello! We'd love to help you find your dream puppy. Which breed captures your heart?
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {chatBreeds.map((breed) => (
                      <span
                        key={breed}
                        className="px-2.5 py-1 rounded-full bg-honey/20 text-toffee-ink font-semibold text-[11px]"
                      >
                        {breed}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Team Info */}
                <div className="bg-white p-3.5 rounded-2xl rounded-tl-none border border-cocoa/10 shadow-sm max-w-[90%] text-cocoa">
                  We'll share verified health records, videos, and photos right here on WhatsApp!
                </div>
              </div>

              {/* Chat CTA Button */}
              <div className="mt-6 pt-4 border-t border-cocoa/10">
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp w-full py-3.5 flex items-center justify-center gap-2 text-sm shadow-soft"
                >
                  <MessageCircle size={18} />
                  <span>Say hello on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
