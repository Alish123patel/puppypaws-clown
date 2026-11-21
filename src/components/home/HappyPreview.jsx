import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Quote, Heart } from 'lucide-react'
import { happyFamiliesData } from '../../data/index.js'

export default function HappyPreview() {
  const { title, subtitle, featuredReview, moments } = happyFamiliesData
  // Take 4 authentic moments for the home preview
  const previewMoments = moments.slice(0, 4)

  return (
    <section className="py-16 sm:py-24 bg-milk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blush text-toffee-deep text-xs font-semibold mb-3">
              <Heart size={13} className="fill-current" />
              <span>Pure Love</span>
            </div>
            <h2 className="font-plush font-bold text-3xl sm:text-4xl lg:text-5xl text-cocoa tracking-tight">
              {title} & puppies
            </h2>
            <p className="font-sans text-cocoa-soft text-base sm:text-lg mt-3 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </div>

          <Link
            to="/happy-families"
            className="btn btn-outline self-start md:self-auto text-sm px-6 py-3 flex items-center gap-2 group"
          >
            <span>See every happy family</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Featured Testimonial Banner */}
        <div className="bg-cream rounded-4xl p-8 sm:p-12 border border-cocoa/10 shadow-soft mb-12 relative overflow-hidden">
          <Quote
            size={80}
            className="absolute top-4 right-6 text-honey/30 pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-3xl relative z-10">
            <p className="font-plush italic text-xl sm:text-2xl lg:text-3xl text-cocoa leading-relaxed mb-6">
              “{featuredReview.quote}”
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-honey/40 flex items-center justify-center font-bold text-cocoa font-plush">
                S
              </div>
              <div>
                <span className="font-sans font-bold text-base text-cocoa block">
                  {featuredReview.author}
                </span>
                <span className="font-sans text-xs text-cocoa-soft">
                  {featuredReview.location}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mini Photo Grid (4 Family Photos with Emoji Captions) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {previewMoments.map((moment) => (
            <div
              key={moment.id}
              className="group relative rounded-3xl overflow-hidden bg-white border border-cocoa/10 shadow-soft aspect-[4/5]"
            >
              <img
                src={moment.image}
                alt={moment.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa/80 via-transparent to-transparent flex items-end p-4">
                <span className="font-scrawl text-xs sm:text-sm text-milk drop-shadow-md">
                  {moment.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
