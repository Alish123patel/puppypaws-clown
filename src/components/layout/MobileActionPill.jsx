import React from 'react'
import { MessageCircle, Phone } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig.js'

export default function MobileActionPill() {
  return (
    <aside
      className="fixed bottom-4 left-4 right-4 z-40 lg:hidden flex items-center gap-2.5 p-1.5 bg-milk/95 backdrop-blur-md rounded-full shadow-elevated border border-cocoa/10"
      aria-label="Quick contact actions"
    >
      <a
        href={siteConfig.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp flex-1 py-3 px-4 rounded-full font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-transform active:scale-95"
      >
        <MessageCircle size={18} />
        <span>WhatsApp us</span>
      </a>

      <a
        href={`tel:${siteConfig.contact.phoneDisplay.replace(/\s+/g, '')}`}
        className="btn bg-cocoa text-milk hover:bg-cocoa-soft flex-1 py-3 px-4 rounded-full font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-transform active:scale-95"
      >
        <Phone size={17} />
        <span>Call</span>
      </a>
    </aside>
  )
}
