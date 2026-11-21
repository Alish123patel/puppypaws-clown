import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, ArrowRight } from 'lucide-react'
import { goneHomePuppies } from '../../data/index.js'
import PuppyCard from '../common/PuppyCard.jsx'

export default function GoneHomePreview() {
  // Show 4 adopted puppies as a preview
  const previewAdopted = goneHomePuppies.slice(0, 4)

  return (
    <section className="mt-20 pt-16 border-t border-cocoa/10">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blush text-toffee-deep text-xs font-semibold mb-2.5">
            <Heart size={12} className="fill-current" />
            <span>Forever Homes</span>
          </div>
          <h2 className="font-plush font-bold text-2xl sm:text-3xl text-cocoa tracking-tight">
            Already gone home
          </h2>
          <p className="font-sans text-cocoa-soft text-sm sm:text-base mt-1.5">
            These precious puppies have already found their loving families.
          </p>
        </div>

        <Link
          to="/gone-home"
          className="btn btn-outline text-xs sm:text-sm px-5 py-2.5 flex items-center gap-2 group self-start sm:self-auto font-semibold"
        >
          <span>See all gone home ({goneHomePuppies.length})</span>
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Preview Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {previewAdopted.map((puppy) => (
          <PuppyCard key={puppy.slug} puppy={puppy} />
        ))}
      </div>
    </section>
  )
}
