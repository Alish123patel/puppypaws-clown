import React from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, ArrowRight, Sparkles, MapPin, ShieldCheck, Heart } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig.js'
import { availablePuppies } from '../../data/puppiesData.js'

export default function HeroSection() {
  const quickBreeds = [
    { label: 'Max', slug: 'maltipoo-max-male' },
    { label: 'Korean Teacup Maltipoo', slug: 'korean-teacup-maltipoo-female' },
    { label: 'Korean Teacup Poodle', slug: 'korean-teacup-poodle-female' },
    { label: 'Maltipoo & Cavapoo', slug: 'maltipoo-cavapoo-male' },
    { label: 'Toy Poodle', slug: 'toy-poodle-male-female' },
    { label: 'Pomeranian', slug: 'pomeranian-female' }
  ]

  // Primary featured puppy for hero showcase
  const heroPup = availablePuppies[0]
  const heroImage = heroPup?.images?.[0] || '/reference-assets/puppies/max_b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp'
  const secondaryPup = availablePuppies[1]
  const secondaryImage = secondaryPup?.images?.[0] || '/reference-assets/puppies/korean_teacup_maltipoo_puppy__girl__b942a5_50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg'

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-milk via-cream/40 to-milk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Pill Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-honey/30 border border-honey/40 text-toffee text-xs sm:text-sm font-semibold mb-6">
              <Heart size={14} className="fill-toffee text-toffee" />
              <span className="font-scrawl text-sm sm:text-base text-toffee-ink">
                every puppy is family
              </span>
            </div>

            {/* Main Display Headline */}
            <h1 className="font-plush font-bold text-4xl sm:text-6xl lg:text-7xl text-cocoa leading-[1.08] tracking-tight mb-6">
              Premium teacup <br />
              <span className="text-toffee italic">puppies</span> in Dubai
            </h1>

            {/* Supporting Description */}
            <p className="font-sans text-cocoa-soft text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders worldwide.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Link
                to="/puppies"
                className="btn btn-primary w-full sm:w-auto text-base px-8 py-4 shadow-soft flex items-center justify-center gap-2.5"
              >
                <span>View available puppies</span>
                <ArrowRight size={18} />
              </Link>

              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp w-full sm:w-auto text-base px-8 py-4 shadow-soft flex items-center justify-center gap-2.5"
              >
                <MessageCircle size={19} />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>

            {/* Quick Breed Pills Ticker */}
            <div>
              <span className="font-scrawl text-xs text-toffee-ink uppercase tracking-wider block mb-3">
                Featured Breeds Looking for Homes
              </span>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {quickBreeds.map((breed) => (
                  <Link
                    key={breed.slug}
                    to={`/puppies/${breed.slug}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-cocoa/10 text-cocoa hover:border-honey hover:bg-honey/10 hover:text-toffee transition-all"
                  >
                    <span>{breed.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Featured Puppy Card in Arched Frame */}
              <div className="relative rounded-4xl overflow-hidden bg-white p-3.5 border border-cocoa/10 shadow-elevated">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-cream relative">
                  <img
                    src={heroImage}
                    alt="Featured teacup puppy in Dubai"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  {/* Floating Badge Over Image */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-milk/95 backdrop-blur-md text-cocoa shadow-sm">
                    <Sparkles size={13} className="text-honey fill-honey" />
                    <span>Downtown Dubai Showroom</span>
                  </div>
                </div>

                {/* Micro Details under Hero Image */}
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-plush font-bold text-xl text-cocoa">
                      {heroPup?.name || 'Max'}
                    </h3>
                    <p className="text-xs text-cocoa-soft">
                      {heroPup?.breed || 'Maltipoo'} · Available Now
                    </p>
                  </div>
                  <Link
                    to={`/puppies/${heroPup?.slug || 'maltipoo-max-male'}`}
                    className="btn btn-honey text-xs py-2 px-4"
                  >
                    Meet {heroPup?.name || 'Max'}
                  </Link>
                </div>
              </div>

              {/* Floating Mini Companion Card (Desktop) */}
              <div className="hidden sm:flex absolute -bottom-6 -left-8 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-cocoa/10 shadow-elevated items-center gap-3 max-w-[240px]">
                <img
                  src={secondaryImage}
                  alt="Teacup pup preview"
                  className="w-14 h-14 rounded-xl object-cover"
                />
                <div className="text-left">
                  <span className="font-scrawl text-xs text-toffee block">
                    Korea → Dubai
                  </span>
                  <span className="font-plush font-bold text-sm text-cocoa block truncate">
                    {secondaryPup?.name || 'Teacup Maltipoo'}
                  </span>
                  <span className="text-[11px] text-cocoa-soft">100% Vet-Checked</span>
                </div>
              </div>

              {/* Floating Guarantee Tag */}
              <div className="hidden sm:flex absolute -top-4 -right-4 p-3 rounded-2xl bg-honey/95 backdrop-blur-md text-cocoa shadow-soft items-center gap-2">
                <ShieldCheck size={20} className="text-toffee-deep" />
                <div className="text-left leading-tight">
                  <span className="font-bold text-xs block">Health Guaranteed</span>
                  <span className="text-[10px] opacity-80">Vaccinated & Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
