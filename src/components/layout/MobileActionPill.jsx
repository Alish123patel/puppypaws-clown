import React from 'react'
import { siteConfig } from '../../data/siteConfig.js'

export default function MobileActionPill() {
  return (
    <div
      data-whatsapp-bar="true"
      className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-cocoa bg-milk px-3 pb-[calc(0.6rem+env(safe-area-inset-bottom))] pt-2.5 md:hidden"
    >
      <div className="mx-auto flex max-w-md gap-2">
        <a
          href={siteConfig.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp !min-h-12 flex-1 !shadow-none justify-center"
        >
          WhatsApp us
        </a>
        <a
          href={`tel:${siteConfig.contact.phoneDisplay.replace(/\s+/g, '')}`}
          className="btn btn-ghost !min-h-12 !px-5 justify-center"
        >
          Call
        </a>
      </div>
    </div>
  )
}
