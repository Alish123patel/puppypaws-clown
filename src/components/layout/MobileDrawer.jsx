import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { X, MessageCircle, Phone, Heart } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig.js'

export default function MobileDrawer({ isOpen, onClose }) {
  // Prevent body scrolling when open and handle Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose()
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Drawer"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-cocoa/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-sm bg-milk h-full shadow-2xl flex flex-col justify-between p-6 z-10 overflow-y-auto">
        {/* Drawer Top Header */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-cocoa/10">
            <div>
              <span className="font-scrawl text-2xl text-toffee-ink block">
                where to, friend?
              </span>
              <span className="font-sans text-xs text-cocoa-soft">
                TeddyPups U.A.E.
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2.5 rounded-full border border-cocoa/15 text-cocoa hover:bg-honey/20 transition-colors focus:outline-none focus:ring-2 focus:ring-honey"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Links List */}
          <nav className="mt-6 flex flex-col gap-2" aria-label="Mobile Drawer Navigation">
            {siteConfig.navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center justify-between py-3.5 px-4 rounded-2xl text-base font-semibold transition-all ${
                    isActive
                      ? 'bg-honey/30 text-toffee-deep font-bold'
                      : 'text-cocoa hover:bg-cocoa/5'
                  }`
                }
              >
                <span>{item.label}</span>
                <Heart size={14} className="text-toffee/40" />
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Drawer Bottom Contact & Actions */}
        <div className="mt-8 pt-6 border-t border-cocoa/10 flex flex-col gap-3">
          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp w-full py-3 flex items-center justify-center gap-2 shadow-sm text-sm"
          >
            <MessageCircle size={18} />
            <span>WhatsApp us</span>
          </a>

          <a
            href={`tel:${siteConfig.contact.phoneDisplay.replace(/\s+/g, '')}`}
            className="btn btn-outline w-full py-3 flex items-center justify-center gap-2 text-sm"
          >
            <Phone size={16} />
            <span>{siteConfig.contact.phoneDisplay}</span>
          </a>

          <div className="text-center pt-2">
            <span className="font-scrawl text-xs text-cocoa-soft">
              every puppy is family
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
