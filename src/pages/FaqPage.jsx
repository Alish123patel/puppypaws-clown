import React, { useState, useMemo } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { faqsData, siteConfig } from '../data/index.js'

export default function FaqPage() {
  const [openIds, setOpenIds] = useState(['faq-1'])
  const [searchQuery, setSearchQuery] = useState('')

  // Filtered FAQs based on search
  const filteredFaqs = useMemo(() => {
    if (!searchQuery.trim()) return faqsData
    const q = searchQuery.toLowerCase().trim()
    return faqsData.filter(
      (faq) =>
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q)
    )
  }, [searchQuery])

  const toggleAccordion = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  // Pre-calculated organic tilts and pushpin colors for corkboard feel
  const tilts = [-0.9, 0.8, -0.6, 1.1, -1.2, 0.7, -0.8, 1.0, -0.5]
  const pinColors = ['#c2622b', '#2f6e9e', '#f2be6b', '#a24a1a', '#5a3a28']

  return (
    <div data-page="faq" className="tp-page min-h-screen">
      <section className="tp-scene relative pt-12 pb-20 sm:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="font-scrawl text-base sm:text-lg text-toffee font-bold block mb-1">
              questions &amp; answers
            </span>
            <h1 className="font-plush font-bold text-4xl sm:text-6xl text-cocoa tracking-tight mb-4">
              Questions &amp; answers
            </h1>
            <p className="font-sans text-cocoa-soft text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Can't find what you're looking for? Message us on WhatsApp — our team is available 24/7.
            </p>
          </div>

          {/* Notes Board Layout */}
          <div className="tp-notes">
            {/* Sidebar Controls (Search, Count, WhatsApp prompt) */}
            <div className="tp-notes__side">
              <span className="tp-notes__label font-scrawl font-bold">
                sniff out a question
              </span>

              {/* Search input with custom lens */}
              <div className="tp-notes__search">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type to filter notes…"
                  aria-label="Filter questions"
                />
                <svg
                  className="tp-notes__lens"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M16.5 16.5L21 21" />
                </svg>
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-cocoa/50 hover:text-cocoa"
                    aria-label="Clear search"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>

              <div className="tp-notes__count font-sans text-sm">
                Showing {filteredFaqs.length} of {faqsData.length} notes on the board
              </div>

              {/* Ask WhatsApp Button */}
              <div className="tp-notes__ask mt-3">
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp inline-flex items-center gap-2 py-3 px-5 text-sm font-bold shadow-soft"
                >
                  <MessageCircle size={18} />
                  <span>Ask us on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Corkboard with Pinned Note Cards */}
            <div className="tp-notes__board">
              <div className="tp-notes__list">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, index) => {
                    const isOpen = openIds.includes(faq.id)
                    const tilt = tilts[index % tilts.length]
                    const pinColor = pinColors[index % pinColors.length]

                    return (
                      <article
                        key={faq.id}
                        className="tp-note"
                        data-unfolded={isOpen ? true : undefined}
                        style={{
                          '--tilt': `${tilt}deg`,
                          '--pin': pinColor
                        }}
                      >
                        {/* Colored Push Pin */}
                        <span className="tp-note__pin"></span>

                        {/* Question Title Bar */}
                        <h3 className="tp-note__q">
                          <button
                            type="button"
                            onClick={() => toggleAccordion(faq.id)}
                            aria-expanded={isOpen}
                          >
                            <span className="font-plush font-bold text-cocoa">
                              {faq.question}
                            </span>
                            <span
                              className="tp-note__chevron"
                              aria-hidden="true"
                            ></span>
                          </button>
                        </h3>

                        {/* Answer 3D Flap */}
                        <div className="tp-note__answer">
                          <div className="tp-note__flap">
                            <p className="font-sans leading-relaxed text-sm sm:text-base">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </article>
                    )
                  })
                ) : (
                  <div className="tp-note tp-note--empty text-center py-10">
                    <p className="font-plush font-bold text-lg text-cocoa mb-2">
                      No matching questions found
                    </p>
                    <p className="font-sans text-sm text-cocoa-soft mb-4">
                      Try searching with different terms or ask us directly on WhatsApp.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="btn btn-outline text-xs py-2 px-4"
                    >
                      Reset search
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
