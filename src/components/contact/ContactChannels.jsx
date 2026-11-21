import React from 'react'
import {
  MessageCircle,
  Phone,
  Mail,
  Share2,
  ExternalLink,
  ShieldAlert,
  Clock
} from 'lucide-react'
import { siteConfig } from '../../data/index.js'

export default function ContactChannels() {
  const { contact, socials } = siteConfig

  return (
    <div className="contact-channels-grid grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* 1. WhatsApp Card */}
      <div className="bg-cream rounded-3xl p-6 border border-honey/40 shadow-soft hover:shadow-card transition-all flex flex-col justify-between">
        <div>
          <div className="w-10 h-10 rounded-2xl bg-honey/20 text-toffee flex items-center justify-center mb-4">
            <MessageCircle size={22} className="text-toffee" />
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-honey/30 text-toffee text-[11px] font-bold mb-2">
            <Clock size={11} />
            <span>24/7 Instant Support</span>
          </div>
          <h4 className="font-plush font-bold text-xl text-cocoa mb-1">
            WhatsApp Concierge
          </h4>
          <p className="font-sans text-xs text-cocoa-soft mb-4">
            Fastest response for puppy videos, availability queries, and pricing.
          </p>
          <div className="font-mono font-semibold text-toffee text-sm mb-4">
            {contact.whatsappNumber}
          </div>
        </div>

        <a
          href={contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary text-xs py-2.5 px-4 inline-flex items-center justify-center gap-1.5 w-full"
        >
          <MessageCircle size={14} />
          <span>Chat on WhatsApp</span>
        </a>
      </div>

      {/* 2. Direct Phone Card */}
      <div className="bg-cream rounded-3xl p-6 border border-cocoa/10 shadow-soft hover:shadow-card transition-all flex flex-col justify-between">
        <div>
          <div className="w-10 h-10 rounded-2xl bg-sky/30 text-sky-deep flex items-center justify-center mb-4">
            <Phone size={22} className="text-sky-deep" />
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky/30 text-sky-deep text-[11px] font-bold mb-2">
            <span>Showroom Desk</span>
          </div>
          <h4 className="font-plush font-bold text-xl text-cocoa mb-1">
            Telephone Inquiries
          </h4>
          <p className="font-sans text-xs text-cocoa-soft mb-2">
            Direct showroom reception line.
          </p>
          <div className="font-mono font-semibold text-cocoa text-sm mb-2">
            {contact.phoneDisplay}
          </div>
          <p className="text-[11px] text-amber-800 bg-amber-50 rounded-lg p-1.5 mb-4 border border-amber-200/50 flex items-start gap-1">
            <ShieldAlert size={12} className="shrink-0 mt-0.5" />
            <span>{contact.phoneNote}</span>
          </p>
        </div>

        <a
          href={`tel:${contact.phoneDisplay.replace(/\s+/g, '')}`}
          className="btn btn-outline text-xs py-2.5 px-4 inline-flex items-center justify-center gap-1.5 w-full"
        >
          <Phone size={14} />
          <span>Call Showroom</span>
        </a>
      </div>

      {/* 3. Email Desk */}
      <div className="bg-cream rounded-3xl p-6 border border-cocoa/10 shadow-soft hover:shadow-card transition-all flex flex-col justify-between">
        <div>
          <div className="w-10 h-10 rounded-2xl bg-blush/40 text-toffee flex items-center justify-center mb-4">
            <Mail size={22} className="text-toffee" />
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blush/40 text-toffee text-[11px] font-bold mb-2">
            <span>Official Inquiries</span>
          </div>
          <h4 className="font-plush font-bold text-xl text-cocoa mb-1">
            Email Support
          </h4>
          <p className="font-sans text-xs text-cocoa-soft mb-4">
            For international paperwork, pedigree verification, and corporate inquiries.
          </p>
          <div className="font-mono font-semibold text-cocoa text-sm mb-4 break-all">
            {contact.email}
          </div>
        </div>

        <a
          href={`mailto:${contact.email}`}
          className="btn btn-outline text-xs py-2.5 px-4 inline-flex items-center justify-center gap-1.5 w-full"
        >
          <Mail size={14} />
          <span>Send an Email</span>
        </a>
      </div>

      {/* 4. Social Media Channels */}
      <div className="bg-cream rounded-3xl p-6 border border-cocoa/10 shadow-soft hover:shadow-card transition-all flex flex-col justify-between">
        <div>
          <div className="w-10 h-10 rounded-2xl bg-honey/20 text-toffee flex items-center justify-center mb-4">
            <Share2 size={22} className="text-toffee" />
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-honey/30 text-toffee text-[11px] font-bold mb-2">
            <span>Social Community</span>
          </div>
          <h4 className="font-plush font-bold text-xl text-cocoa mb-1">
            Follow our Journeys
          </h4>
          <p className="font-sans text-xs text-cocoa-soft mb-4">
            Watch daily behind-the-scenes playdates, puppy grooming, and happy family reunions.
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {socials.map((soc) => (
              <a
                key={soc.name}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full bg-milk border border-cocoa/10 text-xs font-semibold text-cocoa hover:border-honey hover:text-toffee transition-colors inline-flex items-center gap-1"
              >
                <span>{soc.name}</span>
                <ExternalLink size={10} />
              </a>
            ))}
          </div>
        </div>

        <div className="text-xs text-cocoa-soft italic">
          Updated with fresh daily teacup moments
        </div>
      </div>
    </div>
  )
}
