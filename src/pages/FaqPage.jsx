import React, { useState, useMemo } from 'react'
import { HelpCircle, MessageCircle, Phone, Search, X, Sparkles, ChevronDown, ChevronUp } from 'lucide-react'
import { faqsData, siteConfig } from '../data/index.js'
import Accordion from '../components/common/Accordion.jsx'

export default function FaqPage() {
  const [openIds, setOpenIds] = useState(['faq-1'])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Categories
  const categories = useMemo(() => {
    const cats = new Set(faqsData.map((f) => f.category))
    return ['All', ...Array.from(cats)]
  }, [])

  // Filtered FAQs
  const filteredFaqs = useMemo(() => {
    return faqsData.filter((faq) => {
      // Category filter
      if (selectedCategory !== 'All' && faq.category !== selectedCategory) {
        return false
      }
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim()
        const matchesQ = faq.question.toLowerCase().includes(q)
        const matchesA = faq.answer.toLowerCase().includes(q)
        return matchesQ || matchesA
      }
      return true
    })
  }, [selectedCategory, searchQuery])

  const toggleAccordion = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const handleExpandAll = () => {
    setOpenIds(filteredFaqs.map((f) => f.id))
  }

  const handleCollapseAll = () => {
    setOpenIds([])
  }

  return (
    <div className="faq-page py-12 sm:py-16 bg-milk min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-honey/30 text-toffee text-xs sm:text-sm font-semibold mb-4">
            <HelpCircle size={14} className="text-toffee" />
            <span>Adoption Guidance</span>
          </div>
          <h1 className="font-plush font-bold text-4xl sm:text-5xl lg:text-6xl text-cocoa tracking-tight mb-4">
            Questions & answers
          </h1>
          <p className="font-sans text-cocoa-soft text-base sm:text-lg leading-relaxed">
            Can't find what you're looking for? Message us on WhatsApp — our team is available 24/7.
          </p>
        </div>

        {/* Whimsical "sniff out a question" Note Card */}
        <div className="bg-cream rounded-4xl p-6 sm:p-8 border border-cocoa/10 shadow-soft mb-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-3xl bg-honey/40 text-toffee-ink font-scrawl text-2xl font-bold flex items-center justify-center flex-shrink-0 shadow-xs">
              ? !
            </div>
            <div>
              <span className="font-scrawl text-base text-toffee font-bold block">
                sniff out a question
              </span>
              <span className="font-plush font-bold text-lg sm:text-xl text-cocoa block">
                {faqsData.length} notes on the board
              </span>
              <span className="text-xs text-cocoa-soft">
                Verified veterinary, travel, and adoption answers
              </span>
            </div>
          </div>

          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp text-xs sm:text-sm py-3 px-5 flex items-center gap-2 whitespace-nowrap shadow-xs font-bold"
          >
            <MessageCircle size={16} />
            <span>Ask your own question</span>
          </a>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mb-8 space-y-4">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions or keywords (e.g. vaccinated, import, showroom)..."
              className="w-full py-3 px-5 pr-10 rounded-2xl border border-cocoa/15 bg-white text-sm text-cocoa placeholder:text-cocoa/40 focus:outline-none focus:ring-2 focus:ring-honey shadow-xs"
            />
            {searchQuery ? (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-cocoa/40 hover:text-cocoa"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            ) : (
              <Search
                size={18}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-cocoa/40 pointer-events-none"
              />
            )}
          </div>

          {/* Expand/Collapse All Actions */}
          <div className="flex items-center justify-between text-xs font-semibold text-cocoa-soft px-1">
            <span>Showing {filteredFaqs.length} of {faqsData.length} questions</span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleExpandAll}
                className="hover:text-toffee flex items-center gap-1 transition-colors"
              >
                <ChevronDown size={14} />
                <span>Expand all</span>
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={handleCollapseAll}
                className="hover:text-toffee flex items-center gap-1 transition-colors"
              >
                <ChevronUp size={14} />
                <span>Collapse all</span>
              </button>
            </div>
          </div>
        </div>

        {/* 9 Authentic FAQs Accordion List */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-4 mb-16">
            {filteredFaqs.map((faq) => (
              <Accordion
                key={faq.id}
                id={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIds.includes(faq.id)}
                onToggle={() => toggleAccordion(faq.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 px-4 bg-cream/60 rounded-3xl border border-cocoa/10 my-8">
            <HelpCircle size={36} className="mx-auto text-toffee/40 mb-3" />
            <h3 className="font-plush font-bold text-xl text-cocoa mb-1">
              No matching questions found
            </h3>
            <p className="font-sans text-cocoa-soft text-sm mb-4">
              Try searching with different terms or ask us directly on WhatsApp.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('All')
              }}
              className="btn btn-outline text-xs py-2 px-4"
            >
              Reset search
            </button>
          </div>
        )}

        {/* Unanswered Questions Support Card */}
        <div className="bg-gradient-to-r from-honey/20 via-cream to-blush/20 rounded-4xl p-8 sm:p-10 border border-cocoa/10 shadow-soft text-center">
          <span className="font-scrawl text-sm text-toffee font-bold block mb-1">
            we are here 24/7
          </span>
          <h2 className="font-plush font-bold text-2xl sm:text-3xl text-cocoa mb-3">
            Still have questions?
          </h2>
          <p className="font-sans text-cocoa-soft text-sm sm:text-base max-w-lg mx-auto mb-6 leading-relaxed">
            From nutrition and training to overseas travel logistics, our experienced adoption team is ready to assist you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp text-sm py-3.5 px-6 w-full sm:w-auto flex items-center justify-center gap-2 font-bold shadow-soft"
            >
              <MessageCircle size={17} />
              <span>Message us on WhatsApp</span>
            </a>

            <a
              href={`tel:${siteConfig.contact.phoneDisplay.replace(/\s+/g, '')}`}
              className="btn btn-outline text-sm py-3.5 px-6 w-full sm:w-auto bg-white flex items-center justify-center gap-2 font-bold shadow-soft"
            >
              <Phone size={16} />
              <span>Call {siteConfig.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
