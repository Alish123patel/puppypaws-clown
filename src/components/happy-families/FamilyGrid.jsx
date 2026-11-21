import React from 'react'
import { Heart, Maximize2 } from 'lucide-react'

export default function FamilyGrid({ moments, onSelectMoment }) {
  if (!moments || moments.length === 0) {
    return (
      <div className="text-center py-12 text-cocoa-soft font-sans">
        No family moments to display.
      </div>
    )
  }

  return (
    <div className="family-masonry columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
      {moments.map((moment, index) => {
        return (
          <div
            key={moment.id || index}
            onClick={() => onSelectMoment(index)}
            className="break-inside-avoid group relative bg-cream rounded-3xl overflow-hidden border border-cocoa/10 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onSelectMoment(index)
              }
            }}
            aria-label={`View moment: ${moment.caption || 'Happy family'}`}
          >
            {/* Image Container */}
            <div className="relative overflow-hidden bg-sand/30 aspect-auto">
              <img
                src={moment.image}
                alt={moment.alt || moment.caption || 'Happy TeddyPups family'}
                loading="lazy"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                <span className="inline-flex items-center gap-1.5 text-xs text-milk font-semibold bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  <Maximize2 size={12} />
                  <span>Enlarge</span>
                </span>
                <span className="p-1.5 rounded-full bg-honey/80 text-cocoa">
                  <Heart size={14} className="fill-cocoa" />
                </span>
              </div>
            </div>

            {/* Caption */}
            {moment.caption && (
              <div className="p-3.5 bg-milk/95 border-t border-cocoa/5">
                <p className="font-scrawl text-sm text-cocoa font-medium leading-snug">
                  {moment.caption}
                </p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
