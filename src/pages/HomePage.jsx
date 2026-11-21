import React from 'react'
import HeroSection from '../components/home/HeroSection.jsx'
import MeetThePups from '../components/home/MeetThePups.jsx'
import TwoWaysHome from '../components/home/TwoWaysHome.jsx'
import ConciergeSteps from '../components/home/ConciergeSteps.jsx'
import TrustPillars from '../components/home/TrustPillars.jsx'
import HappyPreview from '../components/home/HappyPreview.jsx'
import FaqPreview from '../components/home/FaqPreview.jsx'
import ReadyCtaBanner from '../components/home/ReadyCtaBanner.jsx'

export default function HomePage() {
  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Featured Puppies */}
      <MeetThePups />

      {/* 3. Two Ways to Bring Your Puppy Home */}
      <TwoWaysHome />

      {/* 4. Adoption Journey (Concierge Steps) */}
      <ConciergeSteps />

      {/* 5. Trust and Promise Section */}
      <TrustPillars />

      {/* 6. Happy Families & Testimonials */}
      <HappyPreview />

      {/* 7. FAQ Preview */}
      <FaqPreview />

      {/* 8. Final CTA Section */}
      <ReadyCtaBanner />
    </div>
  )
}
