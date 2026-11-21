import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AnnouncementBar from './components/layout/AnnouncementBar.jsx'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import MobileActionPill from './components/layout/MobileActionPill.jsx'
import ScrollToTop from './components/layout/ScrollToTop.jsx'
import HomePage from './pages/HomePage.jsx'
import PuppiesPage from './pages/PuppiesPage.jsx'
import GoneHomePage from './pages/GoneHomePage.jsx'
import PuppyDetailPage from './pages/PuppyDetailPage.jsx'
import HowItWorksPage from './pages/HowItWorksPage.jsx'
import FaqPage from './pages/FaqPage.jsx'
import HappyFamiliesPage from './pages/HappyFamiliesPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-milk text-cocoa selection:bg-honey selection:text-cocoa">
      <ScrollToTop />

      {/* Global Announcement Bar */}
      <AnnouncementBar />

      {/* Sticky Navigation Header with Scalloped Hem */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1">
        <Routes>
          {/* Milestone 4: Complete Homepage */}
          <Route path="/" element={<HomePage />} />

          {/* Milestone 5: Puppies Catalog & Gone Home Archive */}
          <Route path="/puppies" element={<PuppiesPage />} />
          <Route path="/gone-home" element={<GoneHomePage />} />

          {/* Milestone 6: Dynamic Puppy Detail Page */}
          <Route path="/puppies/:slug" element={<PuppyDetailPage />} />

          {/* Milestone 7: How It Works & FAQ Pages */}
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/faq" element={<FaqPage />} />

          {/* Milestone 8: Happy Families & Contact Pages */}
          <Route path="/happy-families" element={<HappyFamiliesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* 404 Catch-All Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Mobile Floating Action Pill */}
      <MobileActionPill />
    </div>
  )
}
