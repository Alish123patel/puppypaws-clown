import React, { useState } from 'react'
import { MapPin, Plane, CheckCircle2, ArrowRight } from 'lucide-react'
import { howItWorksData } from '../../data/index.js'

export default function PathwayTabs() {
  const [activeTab, setActiveTab] = useState('in-dubai')
  const { pathways } = howItWorksData

  const activePathway = pathways.find((p) => p.id === activeTab) || pathways[0]
  const isImported = activePathway.id === 'imported'

  return (
    <div id="ways-home" className="pt-4">
      {/* Tab Switcher Buttons */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex p-1.5 rounded-full bg-cream border border-cocoa/10 shadow-soft">
          {pathways.map((pathway) => {
            const isActive = activeTab === pathway.id
            return (
              <button
                key={pathway.id}
                type="button"
                onClick={() => setActiveTab(pathway.id)}
                className={`py-3 px-6 sm:px-8 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-toffee text-milk shadow-md scale-105'
                    : 'text-cocoa hover:text-toffee bg-transparent'
                }`}
              >
                {pathway.id === 'in-dubai' ? (
                  <MapPin size={16} />
                ) : (
                  <Plane size={16} />
                )}
                <span>{pathway.badge}: {pathway.subtitle}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Active Pathway Content Box */}
      <div className="bg-white rounded-4xl p-6 sm:p-10 lg:p-12 border border-cocoa/10 shadow-soft transition-all duration-300">
        {/* Pathway Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3 bg-honey/30 text-toffee">
            {isImported ? <Plane size={14} /> : <MapPin size={14} />}
            <span>{activePathway.locationTag}</span>
          </div>

          <h3 className="font-plush font-bold text-2xl sm:text-4xl text-cocoa tracking-tight mb-3">
            {activePathway.title}
          </h3>

          <p className="font-sans text-cocoa-soft text-base sm:text-lg leading-relaxed">
            {activePathway.description}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activePathway.steps.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-cream/70 rounded-3xl p-6 border border-cocoa/5 shadow-xs flex flex-col justify-between hover:shadow-soft transition-shadow"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-honey/40 text-toffee-ink font-scrawl text-lg font-bold flex items-center justify-center mb-4">
                  {step.stepNumber}
                </div>
                <h4 className="font-plush font-bold text-lg text-cocoa mb-2">
                  {step.title}
                </h4>
                <p className="font-sans text-cocoa-soft text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
