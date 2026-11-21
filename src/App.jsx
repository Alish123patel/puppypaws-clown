import React from 'react'
import { Routes, Route } from 'react-router-dom'
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

      {/* Sticky/Fixed Navigation Header with Scalloped Hem */}
      <Header />

      {/* Main Content Area */}
      <main id="main" tabIndex={-1} className="flex-1 relative pt-[var(--header-h)] outline-none">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/puppies" element={<PuppiesPage />} />
          <Route path="/gone-home" element={<GoneHomePage />} />
          <Route path="/puppies/:slug" element={<PuppyDetailPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/happy-families" element={<HappyFamiliesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Mobile Floating Action Pill / WhatsApp Bar */}
      <MobileActionPill />
    </div>
  )
}
