import React from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle,
  ArrowRight,
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
    <div data-page="how" className="tp-page min-h-screen">
      {/* 1. Hero Scene with Sunrise Sky Gradient */}
      <section
        className="tp-scene relative pt-12 pb-16 sm:pb-20 text-center"
        style={{
          '--sky-top': '#fffbf3',
          '--sky-bottom': '#f6cc85'
        }}
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <span className="font-scrawl text-base sm:text-lg text-toffee-ink font-bold block mb-2">
            adoption concierge
          </span>
          <h1 className="font-plush font-bold text-4xl sm:text-6xl lg:text-7xl text-cocoa tracking-tight mb-4">
            {hero.title}
          </h1>
          <p className="font-sans text-cocoa-soft text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {hero.subtitle}
          </p>

          {/* Quick Anchor Jumps */}
          <nav
            aria-label="How it works sections"
            className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-bold"
          >
            <a
              href="#two-ways"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full border-2 border-cocoa bg-milk text-cocoa hover:bg-honey-soft transition-colors shadow-[0_4px_0_0_#2a170e24]"
            >
              1. Two ways home
            </a>
            <a
              href="#promise"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full border-2 border-cocoa bg-milk text-cocoa hover:bg-honey-soft transition-colors shadow-[0_4px_0_0_#2a170e24]"
            >
              2. Puppy promise
            </a>
            <a
              href="#delivery"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full border-2 border-cocoa bg-milk text-cocoa hover:bg-honey-soft transition-colors shadow-[0_4px_0_0_#2a170e24]"
            >
              3. Delivery &amp; collection
            </a>
            <a
              href="#why-choose-us"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full border-2 border-cocoa bg-milk text-cocoa hover:bg-honey-soft transition-colors shadow-[0_4px_0_0_#2a170e24]"
            >
              4. Why choose us
            </a>
          </nav>
        </div>
      </section>

      {/* 2. Two Ways Home (Interactive Pathway Tabs & 4 Steps) */}
      <PathwayTabs />

      {/* 3. Our Premium Puppy Promise (Vintage Passport) */}
      <PromiseCards />

      {/* 4. Delivery & Collection */}
      <DeliverySection />

      {/* 5. Why Choose Us Section */}
      <section id="why-choose-us" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-t-2 border-cocoa/10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-scrawl text-base text-toffee font-bold block mb-1">
            our dedication
          </span>
          <h2 className="font-plush font-bold text-3xl sm:text-5xl text-cocoa tracking-tight mb-3">
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
                className="border-2 border-cocoa bg-milk rounded-3xl p-6 shadow-[5px_6px_0_0_#2a170e1a] hover:shadow-[7px_9px_0_0_#2a170e24] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-honey-soft text-toffee-deep border border-cocoa/20 flex items-center justify-center mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-plush font-bold text-lg text-cocoa mb-2">
                    {feat.title}
                  </h3>
                  <p className="font-sans text-cocoa-soft text-xs sm:text-sm leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Action Call to Action Banner */}
        <div className="border-3 border-cocoa bg-gradient-to-br from-honey-soft via-milk to-blush rounded-4xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-[8px_10px_0_0_#2a170e24]">
          <span className="font-scrawl text-sm text-toffee-ink font-bold block mb-1">
            ready to meet your pup?
          </span>
          <h3 className="font-plush font-bold text-2xl sm:text-4xl text-cocoa mb-3">
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
  )
}
