import React from 'react'
import { Heart } from 'lucide-react'

export default function AnnouncementBar() {
  return (
    <div className="bg-honey/30 text-cocoa border-b border-honey/40 py-2 px-4 text-center text-xs sm:text-sm font-semibold tracking-wide">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        <Heart size={14} className="text-toffee fill-toffee" />
        <span className="font-scrawl text-sm sm:text-base text-toffee-ink">
          every puppy is family
        </span>
        <Heart size={14} className="text-toffee fill-toffee" />
      </div>
    </div>
  )
}
