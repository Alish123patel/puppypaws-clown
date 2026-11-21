import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function PuppyPagination({ prevPup, nextPup }) {
  if (!prevPup && !nextPup) return null

  return (
    <nav
      className="mt-14 pt-8 border-t border-cocoa/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4"
      aria-label="Previous and Next Puppies"
    >
      {prevPup ? (
        <Link
          to={`/puppies/${prevPup.slug}`}
          className="group flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-cocoa/10 shadow-xs hover:border-honey hover:shadow-soft transition-all"
        >
          <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center text-toffee group-hover:-translate-x-1 transition-transform">
            <ChevronLeft size={20} />
          </div>
          <div className="text-left">
            <span className="text-[11px] font-bold text-cocoa-soft uppercase tracking-wider block">
              Previous pup
            </span>
            <span className="font-plush font-bold text-base text-cocoa group-hover:text-toffee transition-colors block truncate max-w-[160px]">
              {prevPup.name}
            </span>
          </div>
        </Link>
      ) : <div />}

      {nextPup ? (
        <Link
          to={`/puppies/${nextPup.slug}`}
          className="group flex items-center justify-end gap-3 p-3.5 rounded-2xl bg-white border border-cocoa/10 shadow-xs hover:border-honey hover:shadow-soft transition-all text-right"
        >
          <div>
            <span className="text-[11px] font-bold text-cocoa-soft uppercase tracking-wider block">
              Next pup
            </span>
            <span className="font-plush font-bold text-base text-cocoa group-hover:text-toffee transition-colors block truncate max-w-[160px]">
              {nextPup.name}
            </span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center text-toffee group-hover:translate-x-1 transition-transform">
            <ChevronRight size={20} />
          </div>
        </Link>
      ) : <div />}
    </nav>
  )
}
