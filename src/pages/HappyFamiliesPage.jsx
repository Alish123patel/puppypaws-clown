import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Heart,
  Sparkles,
  Quote,
  Star,
  MapPin,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Camera
} from 'lucide-react'
import { happyFamiliesData, siteConfig } from '../data/index.js'
import FamilyGrid from '../components/happy-families/FamilyGrid.jsx'
import LightboxModal from '../components/happy-families/LightboxModal.jsx'

export default function HappyFamiliesPage() {
  const { title, subtitle, featuredReview, moments } = happyFamiliesData
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentMomentIndex, setCurrentMomentIndex] = useState(0)

  const handleOpenLightbox = (index) => {
    setCurrentMomentIndex(index)
    setLightboxOpen(true)
  }

  const handleCloseLightbox = () => {
    setLightboxOpen(false)
  }

  const handlePrevMoment = () => {
    setCurrentMomentIndex((prev) => (prev > 0 ? prev - 1 : moments.length - 1))
  }

  const handleNextMoment = () => {
    setCurrentMomentIndex((prev) => (prev < moments.length - 1 ? prev + 1 : 0))
  }

  return (
    <div className="happy-families-page py-12 sm:py-16 bg-milk min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blush/40 text-cocoa text-xs sm:text-sm font-semibold mb-4">
            <Heart size={14} className="text-toffee fill-toffee" />
            <span>Adoption Gallery</span>
          </div>

          <h1 className="font-plush font-bold text-4xl sm:text-5xl lg:text-6xl text-cocoa tracking-tight mb-4 capitalize">
            {title}
          </h1>

          <p className="font-sans text-cocoa-soft text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>

          {/* Highlights summary bar */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl mx-auto">
            <div className="bg-cream/80 border border-cocoa/5 p-3.5 rounded-2xl text-center">
              <span className="font-plush font-bold text-2xl text-toffee block">
                {moments.length}
              </span>
              <span className="text-xs font-semibold text-cocoa-soft">
                Family Moments
              </span>
            </div>
            <div className="bg-cream/80 border border-cocoa/5 p-3.5 rounded-2xl text-center">
              <span className="font-plush font-bold text-2xl text-toffee block">
                100%
              </span>
              <span className="text-xs font-semibold text-cocoa-soft">
                Authentic Photos
              </span>
            </div>
            <div className="col-span-2 sm:col-span-1 bg-cream/80 border border-cocoa/5 p-3.5 rounded-2xl text-center">
              <span className="font-plush font-bold text-2xl text-toffee block">
                Dubai &amp; GCC
              </span>
              <span className="text-xs font-semibold text-cocoa-soft">
                Concierge Delivery
              </span>
            </div>
          </div>
        </div>

        {/* 2. Authentic Testimonial Feature Card */}
        {featuredReview && (
          <div className="mb-14 max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-cream via-milk to-blush/20 rounded-3xl p-6 sm:p-10 border border-honey/30 shadow-card overflow-hidden">
              {/* Background Quote Mark */}
              <Quote
                size={140}
                className="absolute -right-6 -bottom-6 text-honey/15 select-none pointer-events-none"
              />

              <div className="relative z-10">
                {/* 5-star rating */}
                <div className="flex items-center gap-1 mb-4 text-honey">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-honey text-honey" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-cocoa-soft uppercase tracking-wider">
                    Verified Adoption Story
                  </span>
                </div>

                {/* Quote Text */}
                <blockquote className="font-plush text-xl sm:text-2xl text-cocoa font-medium leading-relaxed mb-6">
                  "{featuredReview.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-between border-t border-cocoa/10 pt-4 flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-honey/30 border border-honey flex items-center justify-center font-plush font-bold text-toffee text-base">
                      {featuredReview.author ? featuredReview.author[0] : 'S'}
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-cocoa text-sm sm:text-base">
                        {featuredReview.author}
                      </h4>
                      <p className="text-xs text-cocoa-soft flex items-center gap-1">
                        <MapPin size={12} className="text-toffee" />
                        <span>{featuredReview.location}</span>
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1 text-xs font-semibold text-toffee bg-cream px-3 py-1.5 rounded-full border border-honey/20">
                    <ShieldCheck size={14} />
                    <span>Teacup Maltipoo Parent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. Section Title for Masonry Gallery */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-cocoa/10 flex-wrap gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-toffee uppercase tracking-wider mb-1">
              <Camera size={14} />
              <span>Adoption Photowall</span>
            </div>
            <h2 className="font-plush font-bold text-2xl sm:text-3xl text-cocoa">
              Moments that melted our hearts
            </h2>
          </div>

          <p className="font-scrawl text-sm text-cocoa-soft">
            Click any picture to open the photo album 🧸
          </p>
        </div>

        {/* 4. Responsive 64-Photo Masonry Gallery */}
        <FamilyGrid
          moments={moments}
          onSelectMoment={handleOpenLightbox}
        />

        {/* 5. Lightbox Modal */}
        <LightboxModal
          isOpen={lightboxOpen}
          currentIndex={currentMomentIndex}
          onClose={handleCloseLightbox}
          onPrev={handlePrevMoment}
          onNext={handleNextMoment}
          moments={moments}
        />

        {/* 6. Bottom Adoption CTA */}
        <div className="mt-20 bg-cream rounded-3xl p-8 sm:p-12 border border-honey/30 shadow-card text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blush/40 text-toffee mb-4">
            <Heart size={24} className="fill-toffee" />
          </div>

          <h3 className="font-plush font-bold text-3xl sm:text-4xl text-cocoa mb-3">
            Ready to begin your own story?
          </h3>

          <p className="font-sans text-cocoa-soft text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Our teacup puppies are waiting to meet their forever families. Explore currently available puppies or reach out to our concierge team.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/puppies"
              className="btn btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2"
            >
              <span>Meet Available Puppies</span>
              <ArrowRight size={16} />
            </Link>

            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline w-full sm:w-auto inline-flex items-center justify-center gap-2"
            >
              <MessageCircle size={16} />
              <span>Chat with Concierge</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
