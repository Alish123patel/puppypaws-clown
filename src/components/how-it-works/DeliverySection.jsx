import React from 'react'
import { Home, Truck, Plane, Globe2 } from 'lucide-react'
import { howItWorksData } from '../../data/index.js'

export default function DeliverySection() {
  const { delivery } = howItWorksData

  const icons = [Home, Truck, Plane, Globe2]

  return (
    <section id="delivery" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="font-scrawl text-base text-toffee font-bold block mb-2">
          safe travels
        </span>
        <h2 className="font-plush font-bold text-3xl sm:text-5xl text-cocoa tracking-tight mb-3">
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
              className="tp-step border-2 border-cocoa bg-milk rounded-3xl p-6 shadow-[5px_6px_0_0_#2a170e1a] hover:shadow-[7px_9px_0_0_#2a170e24] transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-honey-soft text-toffee-deep border border-cocoa/20 flex items-center justify-center mb-4">
                <Icon size={24} />
              </div>
              <span className="font-scrawl text-xs font-bold text-toffee-ink block mb-1">
                option 0{idx + 1}
              </span>
              <h3 className="font-plush font-bold text-lg text-cocoa mb-2">
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
