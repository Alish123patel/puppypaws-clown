import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { faqsData } from '../../data/index.js'
import Accordion from '../common/Accordion.jsx'

export default function FaqPreview() {
  const [openId, setOpenId] = useState('faq-1')
  // Top 4 questions for homepage preview
  const previewFaqs = faqsData.slice(0, 4)

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id)
  }

  // Star positions matching the reference site
  const stars = [
    { left: '8%', top: '12%', width: '16.2px', delay: '0.00s' },
    { left: '22%', top: '30%', width: '9px', delay: '0.40s' },
    { left: '41%', top: '8%', width: '12.6px', delay: '0.80s' },
    { left: '57%', top: '22%', width: '8.1px', delay: '1.20s' },
    { left: '72%', top: '6%', width: '14.4px', delay: '1.60s' },
    { left: '88%', top: '18%', width: '10.8px', delay: '2.00s' },
    { left: '95%', top: '42%', width: '9px', delay: '2.40s' },
    { left: '4%', top: '58%', width: '10.8px', delay: '2.80s' },
    { left: '34%', top: '70%', width: '7.2px', delay: '3.20s' },
    { left: '63%', top: '84%', width: '9.9px', delay: '3.60s' }
  ]

  return (
    <section
      className="tp-scene tp-night"
      style={{
        '--sky-top': '#4d2b19',
        '--sky-bottom': '#2f1a10'
      }}
      aria-labelledby="questions-title"
    >
      {/* Night Sky Twinkle Stars */}
      <div aria-hidden="true" className="pointer-events-none tp-night__stars">
        {stars.map((star, idx) => (
          <svg
            key={idx}
            viewBox="0 0 40 40"
            className="tp-twinkle absolute text-honey"
            style={{
              left: star.left,
              top: star.top,
              width: star.width,
              animationDelay: star.delay
            }}
            aria-hidden="true"
          >
            <path
              d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z"
              fill="currentColor"
            />
          </svg>
        ))}
      </div>

      <div className="gutter relative mx-auto max-w-4xl py-20 text-milk">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 id="questions-title" className="font-plush text-huge text-milk">
              Questions, answered
            </h2>
            <p className="text-lede mt-3 text-milk/70">
              Everything you need to know about adoption, health and travel.
            </p>
          </div>

          <Link
            to="/faq"
            className="btn btn-ghost !border-milk/30 !text-milk hover:!border-honey hover:!text-honey self-start sm:self-auto"
          >
            Read all questions
          </Link>
        </div>

        {/* Dark Accordion List */}
        <div className="space-y-4">
          {previewFaqs.map((faq) => (
            <Accordion
              key={faq.id}
              id={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openId === faq.id}
              onToggle={() => handleToggle(faq.id)}
              darkTheme={true}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
