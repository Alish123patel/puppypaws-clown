import React from 'react'
import { Filter, X, Sparkles } from 'lucide-react'

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
    <div className="bg-cream/80 border border-cocoa/10 rounded-3xl p-5 sm:p-6 mb-10 shadow-soft">
      {/* Top Filter Bar Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-toffee" />
          <span className="font-plush font-bold text-lg text-cocoa">Filter Puppies</span>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-honey/30 text-toffee-ink ml-1">
            {filteredCount} of {totalCount}
          </span>
        </div>

        {/* Clear Filters Button if any filter is active */}
        {hasActiveFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-toffee hover:underline self-start sm:self-auto transition-colors"
          >
            <X size={14} />
            <span>Reset filters</span>
          </button>
        )}
      </div>

      {/* Breed Filter Pills */}
      <div className="mb-4">
        <span className="text-xs font-bold text-cocoa-soft uppercase tracking-wider block mb-2.5">
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
                    ? 'bg-toffee text-milk shadow-sm scale-105'
                    : 'bg-white border border-cocoa/15 text-cocoa hover:border-honey hover:text-toffee'
                }`}
              >
                {breed}
              </button>
            )
          })}
        </div>
      </div>

      {/* Gender & Search Controls Row */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-cocoa/5">
        {/* Gender Toggle */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-cocoa-soft uppercase tracking-wider mr-1">
            Gender:
          </span>
          {['All', 'Boy', 'Girl'].map((g) => {
            const isSelected = selectedGender === g
            return (
              <button
                key={g}
                type="button"
                onClick={() => onSelectGender(g)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-cocoa text-milk shadow-sm'
                    : 'bg-white border border-cocoa/15 text-cocoa-soft hover:text-cocoa'
                }`}
              >
                {g}
              </button>
            )
          })}
        </div>

        {/* Search Input */}
        <div className="relative flex-1 sm:max-w-xs">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by name or breed..."
            className="w-full py-1.5 px-3.5 pr-8 rounded-full border border-cocoa/15 bg-white text-xs sm:text-sm text-cocoa placeholder:text-cocoa/40 focus:outline-none focus:ring-2 focus:ring-honey"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-cocoa/40 hover:text-cocoa"
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
