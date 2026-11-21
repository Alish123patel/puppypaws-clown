import React from 'react'
import { ShieldCheck, Plane, Clock, Globe2 } from 'lucide-react'

export default function TrustPillars() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Vet-checked & healthy',
      description: 'Every puppy comes vaccinated, dewormed, and with a verified health certificate from licensed veterinarians.'
    },
    {
      icon: Plane,
      title: 'Korea to Dubai, safely',
      description: 'Trusted certified breeders, safe travel arrangements, and premium climate care from start to finish.'
    },
    {
      icon: Clock,
      title: 'Support 24/7',
      description: 'Always here to help, from choosing your puppy to post-delivery transition and lifetime nutritional guidance.'
    },
    {
      icon: Globe2,
      title: 'Trusted by families worldwide',
      description: 'Puppies delivered safely to loving homes all around the world through accredited international pet cargo.'
    }
  ]

  return (
    <section className="py-16 sm:py-24 bg-cream/40 border-t border-cocoa/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-scrawl text-sm sm:text-base text-toffee block mb-2">
            puppy passport
          </span>
          <h2 className="font-plush font-bold text-3xl sm:text-4xl lg:text-5xl text-cocoa tracking-tight">
            Why families trust TeddyPups
          </h2>
          <p className="font-sans text-cocoa-soft text-base sm:text-lg mt-3">
            Uncompromising standards of ethical breeding, transparent documentation, and round-the-clock family care.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="bg-white rounded-3xl p-7 border border-cocoa/10 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-honey/30 text-toffee flex items-center justify-center mb-5">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-plush font-bold text-xl text-cocoa mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-cocoa-soft text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
