import React from 'react'

export default function TrustPillars() {
  const pillars = [
    {
      title: 'Vet-checked & healthy',
      description: 'Every puppy comes vaccinated, dewormed, and with a verified health certificate from licensed veterinarians.'
    },
    {
      title: 'Korea to Dubai, safely',
      description: 'Trusted certified breeders, safe travel arrangements, and premium climate care from start to finish.'
    },
    {
      title: 'Support 24/7',
      description: 'Always here to help, from choosing your puppy to post-delivery transition and lifetime nutritional guidance.'
    },
    {
      title: 'Trusted by families worldwide',
      description: 'Puppies delivered safely to loving homes all around the world through accredited international pet cargo.'
    }
  ]

  return (
    <section
      className="tp-scene tp-passport"
      style={{
        '--sky-top': '#f0b866',
        '--sky-bottom': '#a65a30'
      }}
      aria-labelledby="trust-title"
    >
      <div className="gutter mx-auto max-w-[96rem]">
        <div className="tp-book">
          {/* Left Book Page */}
          <div className="tp-book__page tp-book__page--left">
            <p aria-hidden="true" className="tp-book__kicker font-scrawl">
              puppy passport
            </p>
            <h2 id="trust-title" className="font-plush tp-book__title">
              Why families trust TeddyPups
            </h2>
            <p className="text-lede mt-4 text-[var(--ink-soft)]">
              Uncompromising standards of ethical breeding, transparent documentation, and round-the-clock family care.
            </p>
          </div>

          {/* Right Book Page: Passport Stamps */}
          <div className="tp-book__page tp-book__page--right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-2">
              {pillars.map((pillar, i) => (
                <div
                  key={pillar.title}
                  className="rounded-2xl border-2 border-dashed border-cocoa/30 p-5 bg-milk/80 backdrop-blur-xs flex flex-col justify-between transition-transform duration-300 hover:rotate-0 hover:scale-102"
                  style={{
                    transform: `rotate(${i % 2 === 0 ? '-1.5deg' : '1.5deg'})`
                  }}
                >
                  <div>
                    <span className="font-scrawl text-xs uppercase tracking-wider text-toffee block mb-1">
                      Verified
                    </span>
                    <h3 className="font-plush text-lg font-bold text-cocoa leading-tight mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-cocoa-soft leading-snug">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
