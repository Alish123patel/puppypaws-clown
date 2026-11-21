import React, { useState, useMemo } from 'react'
import { Sparkles, MessageCircle, Heart } from 'lucide-react'
import { availablePuppies, siteConfig } from '../data/index.js'
import PuppyCard from '../components/common/PuppyCard.jsx'
import FilterBar from '../components/puppies/FilterBar.jsx'
import GoneHomePreview from '../components/puppies/GoneHomePreview.jsx'

export default function PuppiesPage() {
  const [selectedBreed, setSelectedBreed] = useState('All')
  const [selectedGender, setSelectedGender] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Compute distinct breed categories from available puppies
  const breedOptions = useMemo(() => {
    const rawBreeds = new Set()
    availablePuppies.forEach((p) => {
      if (!p.breed) return
      // Normalize common breed groups for clean filter pills
      if (p.breed.includes('Maltipoo')) rawBreeds.add('Maltipoo')
      else if (p.breed.includes('Pomeranian')) rawBreeds.add('Pomeranian')
      else if (p.breed.includes('Poodle')) rawBreeds.add('Poodle')
      else if (p.breed.includes('Cavapoo')) rawBreeds.add('Cavapoo')
      else if (p.breed.includes('Shih Tzu') || p.breed.includes('Shitzu')) rawBreeds.add('Shih Tzu')
      else rawBreeds.add(p.breed)
    })
    return ['All', ...Array.from(rawBreeds).sort()]
  }, [])

  // Filtered available puppies
  const filteredPuppies = useMemo(() => {
    return availablePuppies.filter((puppy) => {
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
    <div className="puppies-page py-12 sm:py-16 bg-milk min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-honey/30 text-toffee text-xs sm:text-sm font-semibold mb-4">
            <Sparkles size={14} className="fill-toffee" />
            <span>Looking for their loving homes</span>
          </div>
          <h1 className="font-plush font-bold text-4xl sm:text-5xl lg:text-6xl text-cocoa tracking-tight mb-4">
            Available puppies
          </h1>
          <p className="font-sans text-cocoa-soft text-base sm:text-lg leading-relaxed">
            Real puppies, real photos, looking for their families right now. Meet them face-to-face in our Downtown Dubai showroom or enquire for same-day delivery.
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
          totalCount={availablePuppies.length}
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
              No puppies match your filter
            </h3>
            <p className="font-sans text-cocoa-soft text-sm sm:text-base max-w-md mx-auto mb-6">
              We update our listings regularly! Try clearing your filters or contact our concierge on WhatsApp to check upcoming litters.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleResetFilters}
                className="btn btn-outline text-xs sm:text-sm py-2.5 px-5"
              >
                Reset filters
              </button>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp text-xs sm:text-sm py-2.5 px-5 flex items-center gap-2"
              >
                <MessageCircle size={16} />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>
        )}

        {/* Already Gone Home Preview Section */}
        <GoneHomePreview />
      </div>
    </div>
  )
}
