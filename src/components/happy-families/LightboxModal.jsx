import React, { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, Heart, Sparkles } from 'lucide-react'

export default function LightboxModal({
  isOpen,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  moments = []
}) {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }

    // Lock background scrolling
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose, onPrev, onNext])

  if (!isOpen || moments.length === 0 || currentIndex < 0 || currentIndex >= moments.length) {
    return null
  }

  const currentMoment = moments[currentIndex]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-cocoa/90 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Family Moment Lightbox"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-honey"
        aria-label="Close lightbox"
      >
        <X size={24} />
      </button>

      {/* Prev Button */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        className="absolute left-2 sm:left-6 z-50 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-honey"
        aria-label="Previous photo"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        className="absolute right-2 sm:right-6 z-50 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-honey"
        aria-label="Next photo"
      >
        <ChevronRight size={28} />
      </button>

      {/* Modal Content */}
      <div
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main Photo Frame */}
        <div className="relative rounded-3xl overflow-hidden bg-black/40 shadow-2xl max-h-[75vh] flex items-center justify-center border border-white/10">
          <img
            src={currentMoment.image}
            alt={currentMoment.alt || currentMoment.caption || 'Happy family with TeddyPup'}
            className="max-h-[75vh] max-w-full w-auto object-contain transition-transform duration-300 select-none"
          />
        </div>

        {/* Caption & Counter Bar */}
        <div className="mt-4 w-full text-center px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-semibold mb-2">
            <Heart size={13} className="text-blush fill-blush" />
            <span>
              Moment {currentIndex + 1} of {moments.length}
            </span>
          </div>

          {currentMoment.caption && (
            <p className="font-scrawl text-lg sm:text-xl text-cream font-medium tracking-wide drop-shadow-sm">
              "{currentMoment.caption}"
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
