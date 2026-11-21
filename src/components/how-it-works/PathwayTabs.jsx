import React, { useState } from 'react'
import { howItWorksData } from '../../data/index.js'

export default function PathwayTabs() {
  const [activeTab, setActiveTab] = useState('in-dubai')
  const { pathways } = howItWorksData

  const activePathway = pathways.find((p) => p.id === activeTab) || pathways[0]
  const isImported = activePathway.id === 'imported'

  return (
    <section id="two-ways" className="tp-journeys max-w-6xl mx-auto px-4 sm:px-6 pt-4">
      {/* Top Header & Interactive Switcher */}
      <div className="tp-journeys__top">
        <div>
          <span className="tp-journeys__kicker font-scrawl font-bold block mb-1">
            choose your path
          </span>
          <h2 className="font-plush font-bold text-3xl sm:text-5xl text-cocoa">
            Two ways home
          </h2>
        </div>

        <div className="tp-journeys__pick">
          <div
            role="tablist"
            aria-label="Adoption pathways"
            className="tp-switch"
            style={{
              '--at': activeTab === 'in-dubai' ? 0 : 1,
              '--n': 2
            }}
          >
            <span className="tp-switch__thumb"></span>
            <button
              type="button"
              role="tab"
              id="tab-local"
              aria-selected={activeTab === 'in-dubai'}
              className="tp-switch__tab"
              onClick={() => setActiveTab('in-dubai')}
            >
              <span className="tp-switch__label font-plush font-bold">In Dubai</span>
              <span className="tp-switch__hint font-sans">Meet in showroom</span>
            </button>
            <button
              type="button"
              role="tab"
              id="tab-imported"
              aria-selected={activeTab === 'imported'}
              className="tp-switch__tab"
              onClick={() => setActiveTab('imported')}
            >
              <span className="tp-switch__label font-plush font-bold">Imported</span>
              <span className="tp-switch__hint font-sans">Order upon request</span>
            </button>
          </div>
        </div>
      </div>

      {/* Active Pathway Content */}
      <div className="tp-journey">
        <div className="tp-journey__head">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-toffee block mb-1 font-sans">
              {activePathway.locationTag}
            </span>
            <h3 className="tp-journey__title font-plush font-bold text-cocoa">
              {activePathway.title}
            </h3>
            <p className="font-sans text-cocoa-soft text-base sm:text-lg leading-relaxed mt-3">
              {activePathway.description}
            </p>
          </div>

          {/* Whimsical Postcard Travel Visual */}
          <div className={`tp-postcard ${isImported ? 'tp-postcard--sky' : ''}`}>
            <span className="tp-postcard__sun"></span>

            {/* City skyline illustration */}
            <svg
              className="tp-postcard__city"
              viewBox="0 0 500 120"
              fill="currentColor"
              preserveAspectRatio="none"
            >
              <path
                d="M0 120 L0 100 L25 100 L25 70 L40 70 L40 100 L60 100 L60 50 L75 50 L75 40 L85 40 L85 50 L100 50 L100 100 L140 100 L140 30 L150 15 L160 30 L160 100 L190 100 L190 65 L210 65 L210 100 L240 100 L240 20 L250 5 L260 20 L260 100 L300 100 L300 60 L320 60 L320 100 L350 100 L350 45 L370 45 L370 100 L410 100 L410 75 L430 75 L430 100 L500 100 L500 120 Z"
                opacity="0.5"
              />
            </svg>

            {/* Dashed flight / journey route */}
            <svg className="tp-postcard__route" viewBox="0 0 300 120">
              <path
                d={isImported ? 'M 20 90 Q 150 20 280 80' : 'M 20 85 Q 150 35 280 85'}
                fill="none"
                stroke="var(--color-toffee-deep)"
                strokeWidth="3"
                strokeDasharray="3 8"
                strokeLinecap="round"
              />
            </svg>

            {/* Flying airplane doodle */}
            <svg className="tp-postcard__plane" viewBox="0 0 48 48" fill="none">
              <path
                d="M8 24 L24 20 L40 10 L44 14 L30 24 L42 36 L36 38 L22 28 L14 30 L8 24 Z"
                fill="var(--color-milk)"
                stroke="var(--color-cocoa)"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
            </svg>

            <span className="tp-postcard__from font-scrawl font-bold">
              {isImported ? 'Seoul / Europe' : 'Downtown Showroom'}
            </span>
            <span className="tp-postcard__to font-scrawl font-bold">
              {isImported ? 'Dubai showroom' : 'Your arms ♥'}
            </span>
          </div>
        </div>

        {/* 4 Process Steps */}
        <div className="tp-steps">
          {activePathway.steps.map((step, idx) => {
            const tints = ['#ffd68c', '#bfddf5', '#f9cdbf', '#d8ecd5']
            const tint = tints[idx % tints.length]
            return (
              <article
                key={step.stepNumber}
                className="tp-step"
                style={{ '--i': idx, '--tint': tint }}
              >
                <div className="tp-step__icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-7 h-7"
                  >
                    {idx === 0 && (
                      <>
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </>
                    )}
                    {idx === 1 && (
                      <>
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </>
                    )}
                    {idx === 2 && (
                      <>
                        <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                      </>
                    )}
                    {idx === 3 && (
                      <>
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </>
                    )}
                  </svg>
                </div>
                <span className="tp-step__num font-scrawl font-bold">
                  step 0{step.stepNumber}
                </span>
                <h4 className="tp-step__title font-plush text-cocoa">
                  {step.title}
                </h4>
                <p className="tp-step__text font-sans text-sm leading-relaxed">
                  {step.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
