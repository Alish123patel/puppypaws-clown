import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import { getFeaturedPuppies } from '../../data/index.js'
import PuppyCard from '../common/PuppyCard.jsx'

export default function MeetThePups() {
  const featuredPuppies = getFeaturedPuppies(6)

  return (
    <section className="py-16 sm:py-24 bg-milk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-honey/20 text-toffee text-xs font-semibold mb-3">
              <Sparkles size={13} className="fill-toffee" />
              <span>Available in Dubai</span>
            </div>
            <h2 className="font-plush font-bold text-3xl sm:text-4xl lg:text-5xl text-cocoa tracking-tight">
              Meet the pups
            </h2>
            <p className="font-sans text-cocoa-soft text-base sm:text-lg mt-3 max-w-xl">
              Real puppies, real photos, looking for their families right now.
            </p>
          </div>

          <Link
            to="/puppies"
            className="btn btn-outline self-start md:self-auto text-sm px-6 py-3 flex items-center gap-2 group"
          >
            <span>See all available puppies</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 6 Featured Puppies Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredPuppies.map((puppy) => (
            <PuppyCard key={puppy.slug} puppy={puppy} />
          ))}
        </div>

        {/* Bottom Centered Link for Mobile */}
        <div className="mt-12 text-center md:hidden">
          <Link
            to="/puppies"
            className="btn btn-primary w-full py-4 text-base"
          >
            <span>See all available puppies &rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
