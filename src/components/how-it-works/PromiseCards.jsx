import React from 'react'
import { ShieldCheck, Eye, HeartHandshake } from 'lucide-react'
import { howItWorksData } from '../../data/index.js'

export default function PromiseCards() {
  const { promise } = howItWorksData

  const icons = [ShieldCheck, Eye, HeartHandshake]

  return (
    <section id="promise" className="py-16 sm:py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="font-scrawl text-sm text-toffee block mb-2 font-bold">
          puppy passport
        </span>
        <h2 className="font-plush font-bold text-3xl sm:text-4xl text-cocoa tracking-tight">
          {promise.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {promise.pillars.map((pillar, idx) => {
          const Icon = icons[idx % icons.length]
          return (
            <div
              key={pillar.title}
              className="bg-white rounded-3xl p-8 border border-cocoa/10 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-honey/30 text-toffee flex items-center justify-center mb-5">
                  <Icon size={24} />
                </div>
                <h3 className="font-plush font-bold text-xl text-cocoa mb-3">
                  {pillar.title}
                </h3>
                <p className="font-sans text-cocoa-soft text-sm sm:text-base leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
