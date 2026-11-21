import React from 'react'
import {
  MessageCircle,
  MapPin,
  Heart,
  Sparkles,
  Phone,
  Mail,
  Clock,
  Compass
} from 'lucide-react'
import { siteConfig } from '../data/index.js'
import MadLibsForm from '../components/contact/MadLibsForm.jsx'
import ShowroomCard from '../components/contact/ShowroomCard.jsx'
import ContactChannels from '../components/contact/ContactChannels.jsx'

export default function ContactPage() {
  return (
    <div className="contact-page py-12 sm:py-16 bg-milk min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-honey/30 text-toffee text-xs sm:text-sm font-semibold mb-4">
            <Heart size={14} className="fill-toffee" />
            <span>We'd Love to Hear From You</span>
          </div>

          <h1 className="font-plush font-bold text-4xl sm:text-5xl lg:text-6xl text-cocoa tracking-tight mb-4">
            Visit &amp; Contact Us
          </h1>

          <p className="font-sans text-cocoa-soft text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you want to cuddle our available teacup puppies in our Downtown Dubai showroom or inquire about our international concierge import service, we are here for you 24/7.
          </p>
        </div>

        {/* 2. Main Two-Column Layout: Form & Showroom */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          {/* Left Column: Mad-Libs Letter Form (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-left mb-2">
              <span className="font-scrawl text-sm text-toffee font-semibold flex items-center gap-1">
                <Sparkles size={14} />
                <span>Write to our concierge</span>
              </span>
              <h2 className="font-plush font-bold text-2xl sm:text-3xl text-cocoa">
                Send a handwritten letter
              </h2>
            </div>

            <MadLibsForm />
          </div>

          {/* Right Column: Showroom Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-left mb-2">
              <span className="font-scrawl text-sm text-toffee font-semibold flex items-center gap-1">
                <MapPin size={14} />
                <span>Experience our boutique</span>
              </span>
              <h2 className="font-plush font-bold text-2xl sm:text-3xl text-cocoa">
                Downtown Dubai Showroom
              </h2>
            </div>

            <ShowroomCard />
          </div>
        </div>

        {/* 3. Direct Contact Channels Grid */}
        <div className="mt-16 pt-12 border-t border-cocoa/10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-scrawl text-sm text-toffee font-semibold">
              always within reach
            </span>
            <h3 className="font-plush font-bold text-3xl text-cocoa mt-1 mb-2">
              Direct Communication Channels
            </h3>
            <p className="font-sans text-sm sm:text-base text-cocoa-soft">
              Connect with our dedicated adoption advisors via your preferred platform.
            </p>
          </div>

          <ContactChannels />
        </div>
      </div>
    </div>
  )
}
