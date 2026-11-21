import React from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle,
  ArrowRight,
  Sparkles,
  Plane,
  Clock,
  ShieldCheck,
  Award
} from 'lucide-react'
import { howItWorksData, siteConfig } from '../data/index.js'
import PathwayTabs from '../components/how-it-works/PathwayTabs.jsx'
import PromiseCards from '../components/how-it-works/PromiseCards.jsx'
import DeliverySection from '../components/how-it-works/DeliverySection.jsx'

export default function HowItWorksPage() {
  const { hero, whyChooseUs } = howItWorksData

  const whyChooseIcons = [Plane, Clock, ShieldCheck, Award]

  return (
    <div className="how-it-works-page py-12 sm:py-16 bg-milk min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-honey/30 text-toffee text-xs sm:text-sm font-semibold mb-4">
            <Sparkles size={14} className="fill-toffee" />
            <span>Adoption Concierge</span>
          </div>
          <h1 className="font-plush font-bold text-4xl sm:text-5xl lg:text-6xl text-cocoa tracking-tight mb-4">
            {hero.title}
          </h1>
          <p className="font-sans text-cocoa-soft text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {hero.subtitle}
          </p>

          {/* Quick Anchor Jumps */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold">
            <a
              href="#ways-home"
              className="px-3.5 py-1.5 rounded-full bg-cream border border-cocoa/10 text-cocoa hover:border-honey hover:text-toffee transition-colors"
            >
              1. Two ways home
            </a>
            <a
              href="#promise"
              className="px-3.5 py-1.5 rounded-full bg-cream border border-cocoa/10 text-cocoa hover:border-honey hover:text-toffee transition-colors"
            >
              2. Puppy promise
            </a>
            <a
              href="#delivery"
              className="px-3.5 py-1.5 rounded-full bg-cream border border-cocoa/10 text-cocoa hover:border-honey hover:text-toffee transition-colors"
            >
              3. Delivery & collection
            </a>
            <a
              href="#why-choose-us"
              className="px-3.5 py-1.5 rounded-full bg-cream border border-cocoa/10 text-cocoa hover:border-honey hover:text-toffee transition-colors"
            >
              4. Why choose us
            </a>
          </div>
        </div>

        {/* 2. Two Ways Home (Interactive Pathway Tabs & 4 Steps) */}
        <PathwayTabs />

        {/* 3. Our Premium Puppy Promise */}
        <PromiseCards />

        {/* 4. Delivery & Collection (Supports #delivery anchor from footer) */}
        <DeliverySection />

        {/* 5. Why Choose Us Section */}
        <section id="why-choose-us" className="py-16 sm:py-20 border-t border-cocoa/10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-scrawl text-sm text-toffee block mb-2 font-bold">
              our dedication
            </span>
            <h2 className="font-plush font-bold text-3xl sm:text-4xl text-cocoa tracking-tight mb-3">
              {whyChooseUs.title}
            </h2>
            <p className="font-sans text-cocoa-soft text-base sm:text-lg leading-relaxed">
              {whyChooseUs.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {whyChooseUs.features.map((feat, idx) => {
              const Icon = whyChooseIcons[idx % whyChooseIcons.length]
              return (
                <div
                  key={feat.title}
                  className="bg-white rounded-3xl p-7 border border-cocoa/10 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-honey/30 text-toffee flex items-center justify-center mb-5">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-plush font-bold text-xl text-cocoa mb-2.5">
                      {feat.title}
                    </h3>
                    <p className="font-sans text-cocoa-soft text-sm leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Action CTAs */}
          <div className="bg-gradient-to-r from-honey/20 via-cream to-blush/20 rounded-4xl p-8 sm:p-12 border border-cocoa/10 shadow-soft text-center max-w-4xl mx-auto">
            <h3 className="font-plush font-bold text-2xl sm:text-3xl text-cocoa mb-3">
              Ready to begin your journey?
            </h3>
            <p className="font-sans text-cocoa-soft text-sm sm:text-base max-w-lg mx-auto mb-8">
              Speak directly with our concierge team in Dubai or browse our currently available puppies.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp text-sm py-3.5 px-6 w-full sm:w-auto flex items-center justify-center gap-2 font-bold shadow-soft"
              >
                <MessageCircle size={18} />
                <span>Ask us on WhatsApp</span>
              </a>
              <Link
                to="/puppies"
                className="btn btn-primary text-sm py-3.5 px-6 w-full sm:w-auto flex items-center justify-center gap-2 font-bold shadow-soft"
              >
                <span>See available puppies</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
