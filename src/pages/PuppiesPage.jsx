import React, { useState, useMemo } from 'react'
import { availablePuppies } from '../data/index.js'
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
    <div data-page="pups" className="tp-page">
      <section aria-labelledby="pups-title" className="tp-sketchbook">
        <div className="gutter mx-auto max-w-[110rem] pb-24 pt-10 md:pt-16">
          {/* Sketchbook Header */}
          <div className="tp-sketchbook__head">
            <div className="tp-sketchbook__words">
              <p className="font-scrawl text-lg text-toffee-ink" data-reveal="true">
                from Teddy's sketchbook
              </p>
              <h1 id="pups-title" className="font-plush text-giant tp-sketchbook__title" data-reveal="true">
                Available puppies
                <svg
                  aria-hidden="true"
                  viewBox="0 0 400 24"
                  preserveAspectRatio="none"
                  className="tp-sketchbook__underline"
                >
                  <path d="M4 15c40-9 70 5 112-2s70-9 112 0 74 8 116-1 38-4 52 1" pathLength="1" />
                </svg>
              </h1>
              <p className="tp-sketchbook__lede text-lede mt-6 max-w-[46ch] text-cocoa-soft" data-reveal="true">
                Every listing shows real photos of the actual puppy. Open a profile to see them all, then ask us about them on WhatsApp.
              </p>
            </div>
          </div>

          {/* Interactive Filter Bar */}
          <div className="mt-10">
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
          </div>

          {/* Empty State */}
          {filteredPuppies.length === 0 ? (
            <div className="mt-16 text-center py-16 px-6 bg-cream/50 rounded-4xl border border-cocoa/10 max-w-xl mx-auto">
              <p className="font-plush font-bold text-2xl text-cocoa mb-3">
                No puppies match your filter
              </p>
              <p className="font-sans text-cocoa-soft text-base mb-6">
                Try selecting a different breed or clearing your search filters to view all available puppies.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="btn btn-primary"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            /* Responsive Inked Polaroids Grid (.tp-sketches) */
            <ul className="tp-sketches mt-16" aria-label="Available puppies">
              {filteredPuppies.map((puppy, i) => (
                <PuppyCard key={puppy.slug} puppy={puppy} index={i} />
              ))}
            </ul>
          )}

          {/* Gone Home Archive Preview Banner */}
          <div className="mt-24 pt-16 border-t border-cocoa/10">
            <GoneHomePreview />
          </div>
        </div>
      </section>
    </div>
  )
}
