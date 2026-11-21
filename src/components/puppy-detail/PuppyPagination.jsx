import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function PuppyPagination({ prevPup, nextPup }) {
  if (!prevPup && !nextPup) return null

  return (
    <nav
      className="mt-14 pt-8 border-t-2 border-cocoa/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4"
      aria-label="Previous and Next Puppies"
    >
      {prevPup ? (
        <Link
          to={`/puppies/${prevPup.slug}`}
          className="group flex items-center gap-3.5 p-4 rounded-2xl border-2 border-cocoa bg-milk shadow-[4px_5px_0_0_#2a170e1a] hover:shadow-[6px_7px_0_0_#2a170e24] hover:bg-honey-soft/40 transition-all"
        >
          <div className="w-10 h-10 rounded-xl bg-honey-soft border border-cocoa/20 flex items-center justify-center text-toffee-deep group-hover:-translate-x-1 transition-transform">
            <ChevronLeft size={20} />
          </div>
          <div className="text-left">
            <span className="text-[11px] font-bold text-toffee-ink uppercase tracking-wider block font-sans">
              Previous pup
            </span>
            <span className="font-plush font-bold text-base text-cocoa group-hover:text-toffee-deep transition-colors block truncate max-w-[180px]">
              {prevPup.name}
            </span>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {nextPup ? (
        <Link
          to={`/puppies/${nextPup.slug}`}
          className="group flex items-center justify-end gap-3.5 p-4 rounded-2xl border-2 border-cocoa bg-milk shadow-[4px_5px_0_0_#2a170e1a] hover:shadow-[6px_7px_0_0_#2a170e24] hover:bg-honey-soft/40 transition-all text-right"
        >
          <div>
            <span className="text-[11px] font-bold text-toffee-ink uppercase tracking-wider block font-sans">
              Next pup
            </span>
            <span className="font-plush font-bold text-base text-cocoa group-hover:text-toffee-deep transition-colors block truncate max-w-[180px]">
              {nextPup.name}
            </span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-honey-soft border border-cocoa/20 flex items-center justify-center text-toffee-deep group-hover:translate-x-1 transition-transform">
            <ChevronRight size={20} />
          </div>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  )
}
