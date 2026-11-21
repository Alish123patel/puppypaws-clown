import React from 'react'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ question, answer, isOpen, onToggle, id, darkTheme = false }) {
  if (darkTheme) {
    return (
      <div className="border border-milk/15 rounded-2xl bg-[#1c0d06]/60 backdrop-blur-sm overflow-hidden transition-all duration-200 hover:border-milk/30">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`accordion-content-${id}`}
          className="w-full py-4.5 px-6 flex items-center justify-between gap-4 text-left font-plush text-lg sm:text-xl font-bold text-milk transition-colors hover:text-honey focus:outline-none focus:ring-2 focus:ring-honey"
        >
          <span className="leading-snug">{question}</span>
          <span
            className={`flex-shrink-0 w-8 h-8 rounded-full bg-milk/10 border border-milk/15 flex items-center justify-center text-milk transition-transform duration-300 ${
              isOpen ? 'rotate-180 bg-honey text-cocoa' : ''
            }`}
            aria-hidden="true"
          >
            <ChevronDown size={18} />
          </span>
        </button>

        {isOpen && (
          <div
            id={`accordion-content-${id}`}
            className="px-6 pb-6 pt-1 font-sans text-milk/80 text-base leading-relaxed border-t border-milk/10"
          >
            <p>{answer}</p>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="border border-cocoa/10 rounded-2xl bg-white overflow-hidden transition-all duration-200 hover:border-cocoa/20 shadow-soft">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
        className="w-full py-4.5 px-6 flex items-center justify-between gap-4 text-left font-plush text-lg sm:text-xl font-bold text-cocoa transition-colors hover:text-toffee focus:outline-none focus:ring-2 focus:ring-honey"
      >
        <span className="leading-snug">{question}</span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full bg-cream border border-cocoa/10 flex items-center justify-center text-cocoa transition-transform duration-300 ${
            isOpen ? 'rotate-180 bg-honey/30 text-toffee-deep' : ''
          }`}
          aria-hidden="true"
        >
          <ChevronDown size={18} />
        </span>
      </button>

      {isOpen && (
        <div
          id={`accordion-content-${id}`}
          className="px-6 pb-6 pt-1 font-sans text-cocoa-soft text-base leading-relaxed border-t border-cocoa/5"
        >
          <p>{answer}</p>
        </div>
      )}
    </div>
  )
}
