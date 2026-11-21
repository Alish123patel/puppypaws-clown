/**
 * Central Data Barrel Export & Helper Functions
 * 
 * Aggregates all authentic website data modules:
 * - puppiesData: 42 puppies (15 available, 27 gone-home)
 * - faqsData: 9 core Q&A items
 * - howItWorksData: dual pathways, 4-step processes, promises, delivery
 * - happyFamiliesData: Sarah M. review & 64 authentic family moments
 * - siteConfig: brand, contacts, navigation, social media
 */

import { puppiesData, availablePuppies, goneHomePuppies, getPuppyBySlug } from './puppiesData.js'
import { faqsData } from './faqsData.js'
import { howItWorksData } from './howItWorksData.js'
import { happyFamiliesData } from './happyFamiliesData.js'
import { siteConfig } from './siteConfig.js'

export {
  puppiesData,
  availablePuppies,
  goneHomePuppies,
  getPuppyBySlug,
  faqsData,
  howItWorksData,
  happyFamiliesData,
  siteConfig
}

/**
 * Returns featured available puppies for the Home Page
 * @param {number} limit 
 */
export const getFeaturedPuppies = (limit = 6) => {
  return availablePuppies.slice(0, limit)
}

/**
 * Filter puppies by breed
 * @param {string} breed 
 * @param {Array} list - default to availablePuppies
 */
export const getPuppiesByBreed = (breed, list = availablePuppies) => {
  if (!breed || breed === 'All') return list
  return list.filter((p) => p.breed && p.breed.toLowerCase().includes(breed.toLowerCase()))
}

/**
 * Get the previous puppy in chronological order
 * @param {string} currentSlug 
 */
export const getPreviousPuppy = (currentSlug) => {
  const index = puppiesData.findIndex((p) => p.slug === currentSlug)
  if (index === -1) return null
  const prevIndex = (index - 1 + puppiesData.length) % puppiesData.length
  return puppiesData[prevIndex]
}

/**
 * Get the next puppy in chronological order
 * @param {string} currentSlug 
 */
export const getNextPuppy = (currentSlug) => {
  const index = puppiesData.findIndex((p) => p.slug === currentSlug)
  if (index === -1) return null
  const nextIndex = (index + 1) % puppiesData.length
  return puppiesData[nextIndex]
}
