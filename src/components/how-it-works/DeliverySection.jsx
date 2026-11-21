import React from 'react'
import { Home, Truck, Plane, Globe2 } from 'lucide-react'
import { howItWorksData } from '../../data/index.js'

export default function DeliverySection() {
  const { delivery } = howItWorksData

  const icons = [Home, Truck, Plane, Globe2]

  return (
    <section id="delivery" className="py-16 sm:py-20 border-t border-cocoa/10">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="font-scrawl text-sm text-toffee block mb-2 font-bold">
          safe travels
        </span>
        <h2 className="font-plush font-bold text-3xl sm:text-4xl text-cocoa tracking-tight mb-3">
          {delivery.title}
        </h2>
        <p className="font-sans text-cocoa-soft text-base sm:text-lg leading-relaxed">
          {delivery.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {delivery.options.map((opt, idx) => {
          const Icon = icons[idx % icons.length]
          return (
            <div
              key={opt.title}
              className="bg-cream/60 rounded-3xl p-6 sm:p-7 border border-cocoa/10 shadow-xs hover:shadow-soft transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-white text-toffee border border-cocoa/5 flex items-center justify-center mb-5 shadow-xs">
                <Icon size={22} />
              </div>
              <h3 className="font-plush font-bold text-lg text-cocoa mb-2.5">
                {opt.title}
              </h3>
              <p className="font-sans text-cocoa-soft text-xs sm:text-sm leading-relaxed">
                {opt.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
