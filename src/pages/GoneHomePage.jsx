import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Heart, MessageCircle, ArrowRight } from 'lucide-react'
import { goneHomePuppies, siteConfig } from '../data/index.js'
import PuppyCard from '../components/common/PuppyCard.jsx'
import FilterBar from '../components/puppies/FilterBar.jsx'

export default function GoneHomePage() {
  const [selectedBreed, setSelectedBreed] = useState('All')
  const [selectedGender, setSelectedGender] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Compute distinct breeds from goneHomePuppies
  const breedOptions = useMemo(() => {
    const rawBreeds = new Set()
    goneHomePuppies.forEach((p) => {
      if (!p.breed) return
      if (p.breed.includes('Maltipoo')) rawBreeds.add('Maltipoo')
      else if (p.breed.includes('Pomeranian')) rawBreeds.add('Pomeranian')
      else if (p.breed.includes('Poodle')) rawBreeds.add('Poodle')
      else if (p.breed.includes('Pomsky') || p.breed.includes('Pomski')) rawBreeds.add('Pomsky')
      else if (p.breed.includes('Maltese')) rawBreeds.add('Maltese')
      else if (p.breed.includes('Bichon')) rawBreeds.add('Bichon')
      else rawBreeds.add(p.breed)
    })
    return ['All', ...Array.from(rawBreeds).sort()]
  }, [])

  // Filtered gone-home puppies
  const filteredPuppies = useMemo(() => {
    return goneHomePuppies.filter((puppy) => {
      // Breed filter
      if (selectedBreed !== 'All') {
        const matchesBreed = puppy.breed && puppy.breed.toLowerCase().includes(selectedBreed.toLowerCase())
        if (!matchesBreed) return false
      }

      // Gender filter
      if (selectedGender !== 'All') {
        const matchesGender = puppy.gender && puppy.gender.toLowerCase().includes(selectedGender.toLowerCase())
        if (!matchesGender) return false
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim()
        const matchesSearch =
          (puppy.name && puppy.name.toLowerCase().includes(q)) ||
          (puppy.breed && puppy.breed.toLowerCase().includes(q)) ||
          (puppy.location && puppy.location.toLowerCase().includes(q))
        if (!matchesSearch) return false
      }

      return true
    })
  }, [selectedBreed, selectedGender, searchQuery])

  const hasActiveFilters = selectedBreed !== 'All' || selectedGender !== 'All' || searchQuery.trim() !== ''

  const handleResetFilters = () => {
    setSelectedBreed('All')
    setSelectedGender('All')
    setSearchQuery('')
  }

  return (
    <div className="gone-home-page py-12 sm:py-16 bg-milk min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blush text-toffee-deep text-xs sm:text-sm font-semibold mb-4">
            <Heart size={14} className="fill-current" />
            <span>Forever Families Archive</span>
          </div>
          <h1 className="font-plush font-bold text-4xl sm:text-5xl lg:text-6xl text-cocoa tracking-tight mb-4">
            Gone home
          </h1>
          <p className="font-sans text-cocoa-soft text-base sm:text-lg leading-relaxed">
            These precious puppies have already found their loving families across the UAE and worldwide. Take a look back at our cherished alumni who found their forever homes.
          </p>
        </div>

        {/* Filter Bar */}
        <FilterBar
          breeds={breedOptions}
          selectedBreed={selectedBreed}
          onSelectBreed={setSelectedBreed}
          selectedGender={selectedGender}
          onSelectGender={setSelectedGender}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onResetFilters={handleResetFilters}
          hasActiveFilters={hasActiveFilters}
          totalCount={goneHomePuppies.length}
          filteredCount={filteredPuppies.length}
        />

        {/* Puppies Grid or Empty State */}
        {filteredPuppies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPuppies.map((puppy) => (
              <PuppyCard key={puppy.slug} puppy={puppy} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-cream/60 rounded-3xl border border-cocoa/10 my-8">
            <Heart size={40} className="mx-auto text-toffee/40 mb-3" />
            <h3 className="font-plush font-bold text-2xl text-cocoa mb-2">
              No alumni found matching your filter
            </h3>
            <p className="font-sans text-cocoa-soft text-sm sm:text-base max-w-md mx-auto mb-6">
              Try adjusting your filter selections or check out our currently available puppies.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="btn btn-outline text-xs sm:text-sm py-2.5 px-5"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Order Upon Request Bottom Banner */}
        <div className="mt-20 bg-cream rounded-4xl p-8 sm:p-12 border border-cocoa/10 shadow-soft text-center max-w-4xl mx-auto">
          <span className="font-scrawl text-sm text-toffee block mb-2">
            order upon request
          </span>
          <h2 className="font-plush font-bold text-2xl sm:text-3xl text-cocoa mb-4">
            Fell in love with an adopted puppy?
          </h2>
          <p className="font-sans text-cocoa-soft text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Our concierge specializes in sourcing rare Korean teacup and European champion lines. We can source a similar puppy specifically tailored to your family's preferences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/puppies"
              className="btn btn-primary text-sm py-3 px-6 w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <span>View available puppies</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp text-sm py-3 px-6 w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <MessageCircle size={17} />
              <span>Request custom puppy</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
