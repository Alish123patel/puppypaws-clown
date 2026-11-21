import fs from 'fs'
import path from 'path'
import {
  puppiesData,
  availablePuppies,
  goneHomePuppies,
  getPuppyBySlug,
  getPreviousPuppy,
  getNextPuppy,
  faqsData,
  howItWorksData,
  happyFamiliesData,
  siteConfig
} from './src/data/index.js'

let failures = 0

function assert(condition, message) {
  if (!condition) {
    console.error('FAIL:', message)
    failures++
  } else {
    console.log('PASS:', message)
  }
}

console.log('=== 1. PUPPIES DATA AUDIT ===')
assert(puppiesData.length === 42, `puppiesData has exactly 42 records (found: ${puppiesData.length})`)
assert(availablePuppies.length === 15, `availablePuppies has exactly 15 records (found: ${availablePuppies.length})`)
assert(goneHomePuppies.length === 27, `goneHomePuppies has exactly 27 records (found: ${goneHomePuppies.length})`)

// Verify all 42 puppies have required fields and valid slugs
for (const pup of puppiesData) {
  assert(pup.slug && pup.slug.length > 0, `Puppy ${pup.name} has valid slug: ${pup.slug}`)
  assert(pup.name && pup.name.length > 0, `Puppy ${pup.slug} has name: ${pup.name}`)
  assert(pup.breed && pup.breed.length > 0, `Puppy ${pup.slug} has breed: ${pup.breed}`)
  assert(
    ['Boy', 'Girl', 'Boy & girl', 'Male', 'Female', 'Unknown'].includes(pup.gender),
    `Puppy ${pup.slug} has valid gender: ${pup.gender}`
  )
  assert(getPuppyBySlug(pup.slug) === pup, `getPuppyBySlug correctly resolves puppy: ${pup.slug}`)
}

// Circular navigation test
const firstPup = puppiesData[0]
const lastPup = puppiesData[puppiesData.length - 1]
assert(getPreviousPuppy(firstPup.slug) === lastPup, 'getPreviousPuppy for first puppy circularly returns last puppy')
assert(getNextPuppy(lastPup.slug) === firstPup, 'getNextPuppy for last puppy circularly returns first puppy')

console.log('\n=== 2. FAQ DATA AUDIT ===')
assert(faqsData.length === 9, `faqsData has exactly 9 authentic FAQs (found: ${faqsData.length})`)
for (const faq of faqsData) {
  assert(faq.question && faq.answer && faq.category, `FAQ ${faq.id} is fully structured`)
}

console.log('\n=== 3. HOW IT WORKS DATA AUDIT ===')
assert(howItWorksData.pathways && howItWorksData.pathways.length === 2, 'Two adoption pathways defined')
assert(howItWorksData.pathways[0].steps.length === 4, 'Pathway 1 has 4 concierge steps')
assert(howItWorksData.pathways[1].steps.length === 4, 'Pathway 2 has 4 concierge steps')
assert(howItWorksData.promise.pillars.length === 3, '3 authentic Promise pillars defined')
assert(howItWorksData.delivery.options.length === 4, '4 authentic delivery options defined')
assert(howItWorksData.whyChooseUs.features.length === 4, '4 authentic why choose us features defined')

console.log('\n=== 4. HAPPY FAMILIES AUDIT ===')
assert(happyFamiliesData.moments.length === 64, 'Exactly 64 adoption photos present')
assert(happyFamiliesData.featuredReview.author === 'Sarah M.', 'Authentic customer quote preserved: Sarah M.')

console.log('\n=== 5. SITE CONFIG & NAVIGATION ===')
const expectedRoutes = ['/', '/puppies', '/happy-families', '/how-it-works', '/faq', '/contact']
for (const nav of siteConfig.navigation) {
  assert(expectedRoutes.includes(nav.path), `Nav path ${nav.path} (${nav.label}) maps to a valid route`)
}

console.log('\n=== 6. PRODUCTION ASSETS AUDIT ===')
assert(fs.existsSync('dist/index.html'), 'dist/index.html exists')
assert(fs.existsSync('public/brand/logo.png'), 'Brand logo exists')
assert(fs.existsSync('public/brand/icon.png'), 'Brand icon exists')
assert(fs.existsSync('public/reference-assets/decorative-svgs/header-scalloped-hem.svg'), 'Header scalloped hem exists')

console.log(`\n========================================`)
console.log(`TOTAL AUDIT RESULT: Failures = ${failures}`)
console.log(`========================================`)
process.exit(failures > 0 ? 1 : 0)
