import React from 'react'
import { howItWorksData } from '../../data/index.js'

export default function PromiseCards() {
  const { promise } = howItWorksData

  const stampShapes = ['tp-stamp--round', 'tp-stamp--oval', 'tp-stamp--scallop']
  const tilts = ['-2.5deg', '1.8deg', '-1.4deg']
  const stampInks = ['#c2622b', '#2f6e9e', '#8e3f15']

  return (
    <section id="promise" className="tp-passport max-w-6xl mx-auto px-4 sm:px-6 my-16">
      <div className="tp-book">
        {/* Left Book Page */}
        <div className="tp-book__page tp-book__page--left">
          <span className="tp-book__kicker font-scrawl font-bold block mb-1">
            puppy passport
          </span>
          <h2 className="tp-book__title font-plush font-bold text-cocoa">
            {promise.title}
          </h2>
          <p className="tp-book__body font-sans text-cocoa-soft text-base sm:text-lg leading-relaxed mt-4">
            Every puppy that joins our family carries verified health clearances, bloodlines from premier ethical nurseries, and lifelong concierge care.
          </p>
        </div>

        {/* Right Book Page with Verified Stamps */}
        <div className="tp-book__page tp-book__page--right">
          {promise.pillars.map((pillar, idx) => (
            <div key={pillar.title} className="tp-entry flex flex-col items-center text-center">
              <div
                className={`tp-stamp ${stampShapes[idx % stampShapes.length]}`}
                style={{
                  '--tilt': tilts[idx % tilts.length],
                  '--ink-stamp': stampInks[idx % stampInks.length]
                }}
              >
                <span className="tp-stamp__title font-scrawl font-bold text-[10px] uppercase tracking-wider">
                  verified
                </span>
                <span className="font-plush font-bold text-sm px-2 mt-1">
                  {pillar.title}
                </span>
                <span className="tp-stamp__icon text-base mt-1">★ ★ ★</span>
              </div>
              <p className="text-xs text-cocoa-soft mt-3 max-w-[20ch] font-sans leading-snug">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
