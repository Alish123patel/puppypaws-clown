import React, { useState } from 'react'
import {
  MapPin,
  Clock,
  Navigation,
  Calendar,
  ShieldCheck,
  Sparkles
} from 'lucide-react'
import { siteConfig } from '../../data/index.js'

export default function ShowroomCard() {
  const showroomPhotos = [
    {
      src: '/assets/showroom/showroom_27b888_323008bb0f6a41d4bde2a0da7206cd98f003.jpg',
      alt: 'TeddyPups Downtown Dubai showroom lounge'
    },
    {
      src: '/assets/showroom/showroom_27b888_323008bb0f6a41d4bde2a0da7206cd98f000.jpg',
      alt: 'TeddyPups consultation room'
    },
    {
      src: '/assets/showroom/showroom_27b888_323008bb0f6a41d4bde2a0da7206cd98f001.jpg',
      alt: 'TeddyPups private puppy interaction suite'
    },
    {
      src: '/assets/showroom/showroom_27b888_323008bb0f6a41d4bde2a0da7206cd98f002.jpg',
      alt: 'TeddyPups showroom reception'
    }
  ]

  const [activePhotoIndex, setActivePhotoIndex] = useState(0)

  return (
    <div className="tp-shopfront shadow-[8px_10px_0_0_#2a170e29]">
      {/* Photo Showcase with Arched Top */}
      <div className="relative aspect-video sm:aspect-[16/10] bg-sand/30 overflow-hidden m-4 sm:m-6 rounded-2xl border-2 border-cocoa">
        <img
          src={showroomPhotos[activePhotoIndex].src}
          alt={showroomPhotos[activePhotoIndex].alt}
          className="w-full h-full object-cover transition-opacity duration-300"
        />

        {/* Badge */}
        <div className="absolute top-3 left-3 bg-cocoa/85 backdrop-blur-md text-milk px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 border border-white/20">
          <MapPin size={12} className="text-honey" />
          <span>Downtown Dubai Boutique</span>
        </div>

        {/* Thumbnail Selector Overlay */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 p-1.5 rounded-2xl bg-cocoa/75 backdrop-blur-md">
          {showroomPhotos.map((photo, idx) => (
            <button
              key={idx}
              type="button"
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
      <div className="px-5 pb-6 sm:px-8 sm:pb-8">
        <div className="flex items-center gap-1.5 text-xs font-bold text-toffee uppercase tracking-wider mb-2">
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
              <span className="font-bold block">{siteConfig.contact.address}</span>
              <span className="text-xs text-cocoa-soft">
                Private valet parking &amp; boutique concierge reception
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3 text-sm text-cocoa">
            <Clock size={18} className="text-toffee shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block">Opening Hours</span>
              <span className="text-xs text-cocoa-soft">
                Monday – Sunday: 10:00 AM – 9:00 PM (Appointments &amp; Walk-ins welcome)
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3 text-sm text-cocoa">
            <ShieldCheck size={18} className="text-toffee shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block">Veterinary Standards</span>
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
            className="btn btn-outline flex-1 inline-flex items-center justify-center gap-2 text-sm py-3 font-bold"
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
            className="btn btn-primary flex-1 inline-flex items-center justify-center gap-2 text-sm py-3 font-bold shadow-soft"
          >
            <Calendar size={16} />
            <span>Book Private Visit</span>
          </a>
        </div>
      </div>
    </div>
  )
}
