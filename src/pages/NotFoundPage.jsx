import React from 'react'
import { Link } from 'react-router-dom'
import { Home, Sparkles, ArrowRight, MessageCircle, Heart } from 'lucide-react'
import { getFeaturedPuppies, siteConfig } from '../data/index.js'
import PuppyCard from '../components/common/PuppyCard.jsx'

export default function NotFoundPage() {
  const suggestedPups = getFeaturedPuppies(3)

  return (
    <div className="not-found-page py-16 sm:py-24 bg-milk min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-honey/30 text-toffee text-xs sm:text-sm font-semibold mb-6">
          <Heart size={14} className="fill-toffee" />
          <span>Ruff Day? 404 Error</span>
        </div>

        {/* Brand Icon or Avatar */}
        <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-cream border border-honey/40 shadow-soft flex items-center justify-center p-3">
          <img
            src="/brand/icon.png"
            alt="TeddyPups Paw"
            className="w-16 h-16 object-contain"
          />
        </div>

        {/* Heading */}
        <h1 className="font-plush font-bold text-4xl sm:text-5xl lg:text-6xl text-cocoa tracking-tight mb-4">
          Have you seen this page?
        </h1>

        <p className="font-sans text-cocoa-soft text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          This little page seems to have wandered off for an afternoon snooze. Let's guide you back to our happy teacup puppies!
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <Link
            to="/"
            className="btn btn-primary inline-flex items-center gap-2 py-3 px-6 text-sm"
          >
            <Home size={16} />
            <span>Back to Homepage</span>
          </Link>

          <Link
            to="/puppies"
            className="btn btn-honey inline-flex items-center gap-2 py-3 px-6 text-sm"
          >
            <span>See Available Puppies</span>
            <ArrowRight size={16} />
          </Link>

          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline inline-flex items-center gap-2 py-3 px-6 text-sm"
          >
            <MessageCircle size={16} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Suggested Puppies Preview */}
        {suggestedPups.length > 0 && (
          <div className="pt-10 border-t border-cocoa/10 text-left">
            <div className="text-center mb-8">
              <span className="font-scrawl text-sm text-toffee font-semibold">
                while you're here
              </span>
              <h2 className="font-plush font-bold text-2xl sm:text-3xl text-cocoa">
                Meet some of our adorable friends
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {suggestedPups.map((puppy) => (
                <PuppyCard key={puppy.id} puppy={puppy} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
