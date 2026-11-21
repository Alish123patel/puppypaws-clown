import React, { useState } from 'react'
import {
  MapPin,
  Clock,
  Navigation,
  Calendar,
  MessageCircle,
  ShieldCheck,
  Sparkles
} from 'lucide-react'
import { siteConfig } from '../../data/index.js'

export default function ShowroomCard() {
  const showroomPhotos = [
    {
      src: '/reference-assets/showroom/showroom_27b888_323008bb0f6a41d4bde2a0da7206cd98f003.jpg',
      alt: 'TeddyPups Downtown Dubai showroom lounge'
    },
    {
      src: '/reference-assets/showroom/showroom_27b888_323008bb0f6a41d4bde2a0da7206cd98f000.jpg',
      alt: 'TeddyPups consultation room'
    },
    {
      src: '/reference-assets/showroom/showroom_27b888_323008bb0f6a41d4bde2a0da7206cd98f001.jpg',
      alt: 'TeddyPups private puppy interaction suite'
    },
    {
      src: '/reference-assets/showroom/showroom_27b888_323008bb0f6a41d4bde2a0da7206cd98f002.jpg',
      alt: 'TeddyPups showroom reception'
    }
  ]

  const [activePhotoIndex, setActivePhotoIndex] = useState(0)

  return (
    <div className="showroom-card bg-cream rounded-3xl border border-cocoa/10 shadow-card overflow-hidden">
      {/* Photo Showcase */}
      <div className="relative aspect-video sm:aspect-[16/10] bg-sand/30 overflow-hidden">
        <img
          src={showroomPhotos[activePhotoIndex].src}
          alt={showroomPhotos[activePhotoIndex].alt}
          className="w-full h-full object-cover transition-opacity duration-300"
        />

        {/* Badge */}
        <div className="absolute top-4 left-4 bg-cocoa/80 backdrop-blur-md text-milk px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5">
          <MapPin size={13} className="text-honey" />
          <span>Downtown Dubai Showroom</span>
        </div>

        {/* Thumbnail Selector Overlay */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 p-1.5 rounded-2xl bg-cocoa/60 backdrop-blur-md">
          {showroomPhotos.map((photo, idx) => (
            <button
              key={idx}
              onClick={() => setActivePhotoIndex(idx)}
              className={`w-9 h-7 rounded-lg overflow-hidden border transition-all ${
                activePhotoIndex === idx
                  ? 'border-honey scale-105 shadow-sm'
                  : 'border-white/30 opacity-70 hover:opacity-100'
              }`}
              aria-label={`View showroom photo ${idx + 1}`}
            >
              <img
                src={photo.src}
                alt=""
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Showroom Details */}
      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-2 text-xs font-bold text-toffee uppercase tracking-wider mb-2">
          <Sparkles size={14} />
          <span>In-Person Consultations</span>
        </div>

        <h3 className="font-plush font-bold text-2xl sm:text-3xl text-cocoa mb-3">
          Visit us in Downtown Dubai
        </h3>

        <p className="font-sans text-cocoa-soft text-sm sm:text-base mb-6 leading-relaxed">
          Experience a warm, hygienic environment where you can spend unhurried time bonding with our teacup puppies. Our specialists are here to answer your questions and guide you through every adoption requirement.
        </p>

        {/* Info Grid */}
        <div className="space-y-3.5 mb-8">
          <div className="flex items-start gap-3 text-sm text-cocoa">
            <MapPin size={18} className="text-toffee shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block">{siteConfig.contact.address}</span>
              <span className="text-xs text-cocoa-soft">
                Private valet parking &amp; boutique concierge reception
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3 text-sm text-cocoa">
            <Clock size={18} className="text-toffee shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block">Opening Hours</span>
              <span className="text-xs text-cocoa-soft">
                Monday – Sunday: 10:00 AM – 9:00 PM (Appointments &amp; Walk-ins welcome)
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3 text-sm text-cocoa">
            <ShieldCheck size={18} className="text-toffee shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block">Veterinary Standards</span>
              <span className="text-xs text-cocoa-soft">
                Full sanitization protocol between puppy interactions to protect infant health
              </span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={siteConfig.contact.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline flex-1 inline-flex items-center justify-center gap-2 text-sm"
          >
            <Navigation size={16} />
            <span>Open in Google Maps</span>
          </a>

          <a
            href={`https://wa.me/919898124987?text=${encodeURIComponent(
              'Hi TeddyPups! I would like to schedule a private visit to your Downtown Dubai showroom.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary flex-1 inline-flex items-center justify-center gap-2 text-sm"
          >
            <Calendar size={16} />
            <span>Book Private Visit</span>
          </a>
        </div>
      </div>
    </div>
  )
}
