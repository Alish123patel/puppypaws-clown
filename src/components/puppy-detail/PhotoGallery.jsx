import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Play, Heart } from 'lucide-react'

export default function PhotoGallery({ images = [], puppyName, hasVideo, isAvailable }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [showVideoModal, setShowVideoModal] = useState(false)

  const galleryImages = images.length > 0 ? images : ['/brand/logo.png']
  const total = galleryImages.length

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total)
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image Viewport with authentic tactile border */}
      <div className="relative aspect-[4/5] sm:aspect-square w-full rounded-3xl overflow-hidden bg-cream border-2 border-cocoa shadow-[6px_8px_0_0_#2a170e1a]">
        <img
          src={galleryImages[activeIndex]}
          alt={`${puppyName} - Photo ${activeIndex + 1}`}
          className="w-full h-full object-cover object-center transition-all duration-300"
        />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
          {/* Status Badge */}
          {isAvailable ? (
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-honey text-cocoa shadow-sm border border-cocoa/20">
              <span className="w-2 h-2 rounded-full bg-toffee animate-pulse" />
              <span>Available</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blush text-toffee-deep shadow-sm border border-cocoa/20">
              <Heart size={12} className="fill-current" />
              <span>gone home ♥</span>
            </span>
          )}

          {/* Video Indicator Trigger */}
          {hasVideo && (
            <button
              type="button"
              onClick={() => setShowVideoModal(true)}
              className="pointer-events-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-cocoa text-milk shadow-sm hover:bg-toffee transition-colors"
              aria-label="Watch puppy video"
            >
              <Play size={12} className="fill-milk" />
              <span>video</span>
            </button>
          )}
        </div>

        {/* Previous / Next Controls and Counter */}
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-milk/95 hover:bg-white text-cocoa border border-cocoa flex items-center justify-center shadow-md transition-transform active:scale-90"
              aria-label="Previous photo"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-milk/95 hover:bg-white text-cocoa border border-cocoa flex items-center justify-center shadow-md transition-transform active:scale-90"
              aria-label="Next photo"
            >
              <ChevronRight size={22} />
            </button>

            {/* Photo Counter Pill */}
            <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-cocoa/80 backdrop-blur-sm text-milk text-xs font-mono font-bold pointer-events-none border border-white/20">
              {activeIndex + 1} / {total}
            </div>
          </>
        )}
      </div>

      {/* Thumbnails Row */}
      {total > 1 && (
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          {galleryImages.map((img, idx) => (
            <button
              key={img + idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 transition-all ${
                activeIndex === idx
                  ? 'border-toffee shadow-md scale-95 ring-2 ring-honey'
                  : 'border-cocoa/20 opacity-70 hover:opacity-100'
              }`}
              aria-label={`View photo ${idx + 1}`}
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}

      {/* Video Modal Preview */}
      {showVideoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cocoa/80 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full text-center shadow-2xl relative border-2 border-cocoa">
            <h3 className="font-plush font-bold text-2xl text-cocoa mb-3">
              {puppyName}'s Video
            </h3>
            <p className="font-sans text-cocoa-soft text-sm mb-6">
              Our concierge team shares authentic, high-definition videos of {puppyName} playing and bonding directly over WhatsApp.
            </p>
            <div className="aspect-video bg-honey-soft/50 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-toffee mb-6 p-4">
              <Play size={44} className="text-toffee-deep mb-2" />
              <span className="font-scrawl text-sm text-toffee-ink font-bold">
                HD Video available upon request
              </span>
            </div>
            <button
              type="button"
              onClick={() => setShowVideoModal(false)}
              className="btn btn-primary py-2.5 px-6 text-sm font-bold"
            >
              Close preview
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
