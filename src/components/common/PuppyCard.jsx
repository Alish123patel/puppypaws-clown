import React from 'react'
import { Link } from 'react-router-dom'
import { Play, Heart } from 'lucide-react'

export default function PuppyCard({ puppy }) {
  if (!puppy) return null

  const mainImage = puppy.images?.[0] || puppy.originalImages?.[0] || '/brand/logo.png'
  const isAvailable = puppy.status === 'available'

  return (
    <Link
      to={`/puppies/${puppy.slug}`}
      className="group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-cocoa/10 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-honey"
      aria-label={`View details for ${puppy.name}, ${puppy.breed}`}
    >
      {/* Puppy Image Container */}
      <div className="relative aspect-[4/5] sm:aspect-square w-full overflow-hidden bg-cream">
        <img
          src={mainImage}
          alt={`${puppy.name || puppy.breed} puppy`}
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
          {/* Status Badge */}
          {isAvailable ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-honey/90 backdrop-blur-sm text-cocoa shadow-sm">
              <span className="w-2 h-2 rounded-full bg-toffee animate-pulse" />
              <span>Available</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blush/95 backdrop-blur-sm text-toffee-deep shadow-sm">
              <Heart size={12} className="fill-current" />
              <span>gone home ♥</span>
            </span>
          )}

          {/* Video Badge */}
          {puppy.hasVideo && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-cocoa/80 backdrop-blur-sm text-milk shadow-sm">
              <Play size={10} className="fill-milk" />
              <span>video</span>
            </span>
          )}
        </div>
      </div>

      {/* Card Info Content */}
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-baseline justify-between gap-2 mb-1">
            <h3 className="font-plush font-bold text-xl text-cocoa group-hover:text-toffee transition-colors truncate">
              {puppy.name}
            </h3>
            {puppy.age && (
              <span className="text-xs font-semibold text-cocoa-soft whitespace-nowrap">
                {puppy.age}
              </span>
            )}
          </div>

          <p className="font-sans text-sm text-cocoa-soft flex items-center gap-1.5 truncate">
            <span>{puppy.breed}</span>
            {puppy.gender && (
              <>
                <span className="text-cocoa/30">·</span>
                <span className="capitalize">{puppy.gender}</span>
              </>
            )}
          </p>
        </div>

        {/* Location & Bottom Action */}
        <div className="mt-4 pt-3 border-t border-cocoa/5 flex items-center justify-between text-xs font-semibold text-cocoa-soft">
          <span>{puppy.location || 'In Dubai'}</span>
          <span className="text-toffee group-hover:underline">
            View details &rarr;
          </span>
        </div>
      </div>
    </Link>
  )
}
