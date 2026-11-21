import React from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, MapPin, Heart } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig.js'

export default function ReadyCtaBanner() {
  return (
    <section className="py-16 sm:py-24 bg-milk relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-honey/30 via-cream to-blush/30 rounded-4xl p-8 sm:p-14 lg:p-16 border border-cocoa/10 shadow-elevated text-center relative overflow-hidden">
          {/* Subtle Decorative Background Element */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-honey/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-blush/30 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Slogan Pill */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-cocoa/10 text-toffee text-xs sm:text-sm font-semibold mb-6">
              <Heart size={14} className="fill-toffee text-toffee" />
              <span className="font-scrawl text-sm sm:text-base text-toffee-ink">
                welcome home
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-plush font-bold text-3xl sm:text-5xl text-cocoa leading-tight tracking-tight mb-5">
              Ready to meet your new best friend?
            </h2>

            {/* Description */}
            <p className="font-sans text-cocoa-soft text-base sm:text-lg leading-relaxed mb-8">
              Bring home a healthy, happy teacup or designer puppy with expert guidance every step of the way. We help you find the right match and ensure a smooth, safe delivery across the UAE.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp w-full sm:w-auto text-base px-8 py-4 shadow-soft flex items-center justify-center gap-2.5"
              >
                <MessageCircle size={19} />
                <span>Enquire on WhatsApp</span>
              </a>

              <Link
                to="/contact"
                className="btn btn-outline w-full sm:w-auto text-base px-8 py-4 bg-white/90 shadow-soft flex items-center justify-center gap-2.5"
              >
                <MapPin size={18} />
                <span>Visit & contact</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
