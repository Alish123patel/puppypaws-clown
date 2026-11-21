import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, ArrowRight } from 'lucide-react'
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
    <div data-page="families" className="tp-page min-h-screen">
      <section className="tp-memories pt-12 pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header & Featured Review Note */}
          <div className="tp-memories__head mb-12 sm:mb-16">
            <div>
              <span className="font-scrawl text-base sm:text-lg text-toffee font-bold block mb-1">
                our happy memories
              </span>
              <h1 className="tp-memories__title font-plush font-bold text-4xl sm:text-6xl text-cocoa">
                {title}
                {/* Heart SVG Doodle */}
                <svg
                  className="tp-memories__heart"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </h1>
              <p className="font-sans text-cocoa-soft text-base sm:text-lg leading-relaxed mt-4 max-w-xl">
                {subtitle}
              </p>
            </div>

            {/* Authentic Customer Testimonial Pinned Note */}
            {featuredReview && (
              <figure className="tp-memories__note">
                <span
                  className="tp-tape tp-tape--center"
                  style={{ '--tape': '#cfe5f6' }}
                ></span>
                <blockquote className="font-plush font-medium text-cocoa text-base sm:text-lg leading-relaxed italic">
                  "{featuredReview.quote}"
                </blockquote>
                <figcaption className="font-scrawl text-sm text-toffee-ink font-bold mt-3 text-right">
                  — {featuredReview.author}, {featuredReview.location}
                </figcaption>
              </figure>
            )}
          </div>

          {/* 64-Moment Responsive Polaroid Wall */}
          <FamilyGrid moments={moments} onSelectMoment={handleOpenLightbox} />

          {/* Lightbox Modal */}
          <LightboxModal
            isOpen={lightboxOpen}
            currentIndex={currentMomentIndex}
            onClose={handleCloseLightbox}
            onPrev={handlePrevMoment}
            onNext={handleNextMoment}
            moments={moments}
          />

          {/* Bottom Foot Actions */}
          <div className="tp-memories__foot mt-16 text-center">
            <Link
              to="/puppies"
              className="btn btn-primary inline-flex items-center gap-2 py-3.5 px-7 font-bold shadow-soft"
            >
              <span>Meet Available Puppies</span>
              <ArrowRight size={16} />
            </Link>

            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp inline-flex items-center gap-2 py-3.5 px-6 font-bold shadow-soft"
            >
              <MessageCircle size={18} />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
