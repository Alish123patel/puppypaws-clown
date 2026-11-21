import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, HelpCircle } from 'lucide-react'
import { faqsData } from '../../data/index.js'
import Accordion from '../common/Accordion.jsx'

export default function FaqPreview() {
  const [openId, setOpenId] = useState('faq-1')
  // Top 3 questions for homepage preview
  const previewFaqs = faqsData.slice(0, 3)

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="py-16 sm:py-24 bg-cream/50 border-t border-cocoa/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-honey/20 text-toffee text-xs font-semibold mb-3">
              <HelpCircle size={14} />
              <span>Everything you need to know</span>
            </div>
            <h2 className="font-plush font-bold text-3xl sm:text-4xl text-cocoa tracking-tight">
              Questions, answered
            </h2>
          </div>

          <Link
            to="/faq"
            className="text-sm font-bold text-toffee hover:underline flex items-center gap-1.5 group self-start sm:self-auto"
          >
            <span>Read all questions</span>
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {previewFaqs.map((faq) => (
            <Accordion
              key={faq.id}
              id={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
