import React from 'react'
import {
  MessageCircle,
  Phone,
  Mail,
  Clock,
  ShieldAlert
} from 'lucide-react'
import { siteConfig } from '../../data/index.js'

export default function ContactChannels() {
  const { contact } = siteConfig

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {/* 1. WhatsApp Card */}
      <div className="border-2 border-cocoa bg-milk rounded-3xl p-6 shadow-[5px_6px_0_0_#2a170e1a] hover:shadow-[7px_9px_0_0_#2a170e24] hover:-translate-y-1 transition-all flex flex-col justify-between">
        <div>
          <div className="w-12 h-12 rounded-2xl bg-[#dcf8c6] text-[#075e54] border border-cocoa/20 flex items-center justify-center mb-4">
            <MessageCircle size={24} />
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-honey-soft text-toffee-deep text-xs font-bold mb-2">
            <Clock size={12} />
            <span>24/7 Instant Support</span>
          </div>
          <h4 className="font-plush font-bold text-xl text-cocoa mb-1">
            WhatsApp Concierge
          </h4>
          <p className="font-sans text-xs sm:text-sm text-cocoa-soft mb-4">
            Fastest response for puppy videos, health papers, and reservations.
          </p>
          <div className="font-mono font-bold text-toffee-deep text-base mb-5">
            {contact.whatsappNumber}
          </div>
        </div>

        <a
          href={contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp text-xs py-3 px-4 inline-flex items-center justify-center gap-2 w-full font-bold shadow-soft"
        >
          <MessageCircle size={16} />
          <span>Chat on WhatsApp</span>
        </a>
      </div>

      {/* 2. Direct Phone Card */}
      <div className="border-2 border-cocoa bg-milk rounded-3xl p-6 shadow-[5px_6px_0_0_#2a170e1a] hover:shadow-[7px_9px_0_0_#2a170e24] hover:-translate-y-1 transition-all flex flex-col justify-between">
        <div>
          <div className="w-12 h-12 rounded-2xl bg-sky-soft text-sky-deep border border-cocoa/20 flex items-center justify-center mb-4">
            <Phone size={24} />
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-soft text-sky-deep text-xs font-bold mb-2">
            <span>Showroom Desk</span>
          </div>
          <h4 className="font-plush font-bold text-xl text-cocoa mb-1">
            Telephone Inquiries
          </h4>
          <p className="font-sans text-xs sm:text-sm text-cocoa-soft mb-3">
            Direct showroom reception line in Downtown Dubai.
          </p>
          <div className="font-mono font-bold text-cocoa text-base mb-2">
            {contact.phoneDisplay}
          </div>
          <p className="text-[11px] text-amber-900 bg-amber-50 rounded-xl p-2 mb-4 border border-amber-200 flex items-start gap-1.5">
            <ShieldAlert size={14} className="shrink-0 mt-0.5" />
            <span>{contact.phoneNote}</span>
          </p>
        </div>

        <a
          href={`tel:${contact.phoneDisplay.replace(/\s+/g, '')}`}
          className="btn btn-outline text-xs py-3 px-4 inline-flex items-center justify-center gap-2 w-full font-bold"
        >
          <Phone size={16} />
          <span>Call Showroom</span>
        </a>
      </div>

      {/* 3. Email Desk */}
      <div className="border-2 border-cocoa bg-milk rounded-3xl p-6 shadow-[5px_6px_0_0_#2a170e1a] hover:shadow-[7px_9px_0_0_#2a170e24] hover:-translate-y-1 transition-all flex flex-col justify-between">
        <div>
          <div className="w-12 h-12 rounded-2xl bg-blush text-toffee-deep border border-cocoa/20 flex items-center justify-center mb-4">
            <Mail size={24} />
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blush text-toffee-deep text-xs font-bold mb-2">
            <span>Official Inquiries</span>
          </div>
          <h4 className="font-plush font-bold text-xl text-cocoa mb-1">
            Email Support
          </h4>
          <p className="font-sans text-xs sm:text-sm text-cocoa-soft mb-4">
            For international paperwork, health clearance, and export documentation.
          </p>
          <div className="font-mono font-bold text-cocoa text-sm mb-5 break-all">
            {contact.email}
          </div>
        </div>

        <a
          href={`mailto:${contact.email}`}
          className="btn btn-outline text-xs py-3 px-4 inline-flex items-center justify-center gap-2 w-full font-bold"
        >
          <Mail size={16} />
          <span>Send an Email</span>
        </a>
      </div>
    </div>
  )
}
