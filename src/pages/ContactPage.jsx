import React from 'react'
import { Heart, Sparkles, MapPin } from 'lucide-react'
import MadLibsForm from '../components/contact/MadLibsForm.jsx'
import ShowroomCard from '../components/contact/ShowroomCard.jsx'
import ContactChannels from '../components/contact/ContactChannels.jsx'

export default function ContactPage() {
  return (
    <div data-page="contact" className="tp-page min-h-screen">
      {/* 1. Hero Scene with Warm Dawn Sky Gradient */}
      <section
        className="tp-scene relative pt-12 pb-16 text-center"
        style={{
          '--sky-top': '#fff9ee',
          '--sky-bottom': '#f9dca4'
        }}
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <span className="font-scrawl text-base sm:text-lg text-toffee-ink font-bold block mb-1">
            we'd love to hear from you
          </span>
          <h1 className="font-plush font-bold text-4xl sm:text-6xl lg:text-7xl text-cocoa tracking-tight mb-4">
            Visit &amp; contact
          </h1>
          <p className="font-sans text-cocoa-soft text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you want to cuddle our available teacup puppies in our Downtown Dubai showroom or inquire about our international concierge import service, we are here for you 24/7.
          </p>
        </div>
      </section>

      {/* 2. Main Two-Column Layout: Mad-Libs Letter & Boutique Showroom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          {/* Left Column: Mad-Libs Letter Form (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-left mb-2">
              <span className="font-scrawl text-sm text-toffee font-bold flex items-center gap-1">
                <Sparkles size={14} />
                <span>write to our concierge</span>
              </span>
              <h2 className="font-plush font-bold text-2xl sm:text-4xl text-cocoa">
                Send a handwritten letter
              </h2>
            </div>

            <MadLibsForm />
          </div>

          {/* Right Column: Showroom Boutique Storefront (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-left mb-2">
              <span className="font-scrawl text-sm text-toffee font-bold flex items-center gap-1">
                <MapPin size={14} />
                <span>experience our boutique</span>
              </span>
              <h2 className="font-plush font-bold text-2xl sm:text-4xl text-cocoa">
                Downtown Dubai Showroom
              </h2>
            </div>

            <ShowroomCard />
          </div>
        </div>

        {/* 3. Direct Contact Channels Grid */}
        <div className="mt-16 pt-12 border-t-2 border-cocoa/10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-scrawl text-base text-toffee font-bold">
              always within reach
            </span>
            <h3 className="font-plush font-bold text-3xl sm:text-4xl text-cocoa mt-1 mb-2">
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
