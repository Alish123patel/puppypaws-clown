import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { siteConfig } from '../../data/siteConfig.js'

const PAW_PATH = "M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z"

export default function MobileDrawer({ isOpen, onClose }) {
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
      role="dialog"
      aria-label="Site menu"
      aria-modal="true"
      className="tp-menu fixed inset-0 z-[60] h-dvh w-screen bg-honey p-0 text-cocoa overflow-y-auto"
    >
      <div className="flex h-full flex-col gutter pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-5 justify-between">
        <div className="flex items-center justify-between">
          <span className="font-scrawl text-lg text-toffee-ink">where to, friend?</span>
          <button
            type="button"
            onClick={onClose}
            className="h-11 rounded-full bg-cocoa px-5 font-semibold text-milk hover:bg-cocoa-soft transition-colors"
          >
            Close
          </button>
        </div>

        <nav aria-label="Mobile" className="mt-8 flex-1">
          <ul className="space-y-1">
            {siteConfig.navigation.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `tp-menu-link font-plush block py-2 text-[clamp(2.2rem,10vw,3.2rem)] ${
                      isActive ? 'active' : ''
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="inline-flex items-center gap-3">
                      <span>{item.label}</span>
                      <svg viewBox="0 0 64 64" className="tp-nav-link__paw" aria-hidden="true" fill="currentColor">
                        <path d={PAW_PATH} />
                      </svg>
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-3 pt-6 border-t border-cocoa/15">
          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp w-full justify-center"
          >
            WhatsApp us
          </a>
          <p className="text-center text-sm font-medium text-cocoa-soft">
            {siteConfig.contact.phoneDisplay}
          </p>
        </div>
      </div>
    </div>
  )
}
