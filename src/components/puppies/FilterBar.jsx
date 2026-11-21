import React from 'react'
import { Filter, X } from 'lucide-react'

export default function FilterBar({
  breeds,
  selectedBreed,
  onSelectBreed,
  selectedGender,
  onSelectGender,
  searchQuery,
  onSearchChange,
  onResetFilters,
  hasActiveFilters,
  totalCount,
  filteredCount
}) {
  return (
    <div className="bg-[#fff9ed] border-2 border-cocoa/15 rounded-3xl p-5 sm:p-6 shadow-[4px_6px_0_rgba(42,23,14,0.06)] relative">
      {/* Decorative Washi Tape on top edge */}
      <span
        aria-hidden="true"
        className="absolute -top-3 left-10 w-24 h-6 bg-[#f6d79a]/80 -rotate-2 rounded-xs border border-cocoa/10 pointer-events-none"
      />

      {/* Top Filter Bar Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-toffee" />
          <span className="font-plush font-bold text-lg text-cocoa">Filter Puppies</span>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-honey/40 text-toffee-ink ml-1 font-scrawl">
            {filteredCount} of {totalCount}
          </span>
        </div>

        {/* Clear Filters Button */}
        {hasActiveFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-toffee hover:underline self-start sm:self-auto transition-colors font-scrawl"
          >
            <X size={14} />
            <span>Reset filters</span>
          </button>
        )}
      </div>

      {/* Breed Filter Pills */}
      <div className="mb-4">
        <span className="text-xs font-bold text-cocoa-soft uppercase tracking-wider block mb-2 font-scrawl">
          Breed
        </span>
        <div className="flex flex-wrap gap-2">
          {breeds.map((breed) => {
            const isSelected = selectedBreed === breed
            return (
              <button
                key={breed}
                type="button"
                onClick={() => onSelectBreed(breed)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-toffee text-milk shadow-[0_2px_0_var(--color-toffee-deep)] scale-102'
                    : 'bg-milk border border-cocoa/20 text-cocoa hover:border-toffee hover:text-toffee'
                }`}
              >
                {breed}
              </button>
            )
          })}
        </div>
      </div>

      {/* Gender & Search Filters Row */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-cocoa/10">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-cocoa-soft uppercase tracking-wider mr-1 font-scrawl">
            Gender:
          </span>
          {['All', 'Boy', 'Girl'].map((gender) => {
            const isSelected = selectedGender === gender
            return (
              <button
                key={gender}
                type="button"
                onClick={() => onSelectGender(gender)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-cocoa text-milk'
                    : 'bg-milk border border-cocoa/15 text-cocoa-soft hover:text-cocoa hover:border-cocoa/30'
                }`}
              >
                {gender}
              </button>
            )
          })}
        </div>

        {/* Search Input */}
        <div className="relative sm:w-64">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by name or breed..."
            className="w-full px-3.5 py-1.5 text-xs sm:text-sm bg-milk border border-cocoa/20 rounded-full text-cocoa placeholder:text-cocoa-soft/60 focus:outline-none focus:ring-2 focus:ring-honey focus:border-transparent transition-all"
            aria-label="Search puppies"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-cocoa-soft hover:text-cocoa"
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
