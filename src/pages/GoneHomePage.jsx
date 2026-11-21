import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { goneHomePuppies } from '../data/index.js'
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
      if (selectedBreed !== 'All') {
        const matchesBreed = puppy.breed && puppy.breed.toLowerCase().includes(selectedBreed.toLowerCase())
        if (!matchesBreed) return false
      }

      if (selectedGender !== 'All') {
        const matchesGender = puppy.gender && puppy.gender.toLowerCase().includes(selectedGender.toLowerCase())
        if (!matchesGender) return false
      }

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
    <div data-page="gone" className="tp-page">
      <div className="gutter mx-auto max-w-[110rem] pb-24 pt-10 md:pt-16">
        {/* Booth Header */}
        <header className="tp-boothhead">
          <div className="max-w-3xl">
            <h1 className="font-plush text-giant">
              Gone home
              <svg
                viewBox="0 0 48 44"
                className="ml-3 inline-block w-[0.45em] -translate-y-[0.15em] text-toffee"
                aria-hidden="true"
              >
                <path
                  d="M24 40C10 30 4 22 4 14.5 4 8.7 8.6 4 14.3 4c4.1 0 7.6 2.4 9.7 6 2.1-3.6 5.6-6 9.7-6C39.4 4 44 8.7 44 14.5 44 22 38 30 24 40z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </h1>
            <p className="text-lede mt-6 text-cocoa-soft">
              Every puppy here has already joined a loving family. Looking for one just like them? Tell us — we'll help you find your match.
            </p>
            <Link className="btn btn-primary mt-8 inline-block" to="/puppies">
              See available puppies
            </Link>
          </div>
        </header>

        {/* Filter Bar */}
        <div className="mt-12 mb-10">
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
        </div>

        {/* Empty State */}
        {filteredPuppies.length === 0 ? (
          <div className="text-center py-16 px-6 bg-cream/50 rounded-4xl border border-cocoa/10 max-w-xl mx-auto">
            <p className="font-plush font-bold text-2xl text-cocoa mb-3">
              No puppies match your filter
            </p>
            <p className="font-sans text-cocoa-soft text-base mb-6">
              Try adjusting your filters or resetting them to browse all 27 adopted puppies.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="btn btn-primary"
            >
              Clear filters
            </button>
          </div>
        ) : (
          /* Train Tickets Grid (.tp-tickets) */
          <div>
            <ul className="tp-tickets mt-8" aria-label="Puppies who have gone home">
              {filteredPuppies.map((puppy, i) => (
                <PuppyCard
                  key={puppy.slug}
                  puppy={puppy}
                  index={i}
                  variant="ticket"
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
