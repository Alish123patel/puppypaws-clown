import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MessageCircle, Menu } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig.js'
import MobileDrawer from './MobileDrawer.jsx'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 bg-milk/95 backdrop-blur-md ${
          isScrolled ? 'shadow-sm' : ''
        }`}
        style={{ height: 'var(--header-h, 72px)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4">
          {/* Brand Logo & Name */}
          <Link
            to="/"
            className="group flex items-center gap-3 rounded-full focus:outline-none focus:ring-2 focus:ring-honey"
            aria-label="TeddyPups U.A.E. — Home"
          >
            <img
              src="/brand/logo.png"
              alt="TeddyPups Logo"
              className="w-10 h-10 sm:w-11 sm:h-11 object-contain transition-transform duration-300 group-hover:-rotate-8"
            />
            <span className="font-plush font-bold text-2xl sm:text-[1.65rem] text-cocoa tracking-tight">
              TeddyPups
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
            {siteConfig.navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative py-2 text-sm xl:text-[0.95rem] font-semibold transition-colors duration-200 ${
                    isActive
                      ? 'text-toffee-deep font-bold'
                      : 'text-cocoa hover:text-toffee'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    {isActive && (
                      <span
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-toffee"
                        aria-hidden="true"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Header End Actions (WhatsApp & Mobile Menu) */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp hidden sm:inline-flex items-center gap-2 text-sm shadow-sm"
              aria-label="WhatsApp us"
            >
              <MessageCircle size={16} />
              <span>WhatsApp us</span>
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-cocoa/20 bg-milk text-cocoa text-sm font-semibold hover:bg-honey/10 transition-colors focus:outline-none focus:ring-2 focus:ring-honey"
              aria-label="Open mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu size={18} />
              <span>Menu</span>
            </button>
          </div>
        </div>

        {/* Decorative Scalloped Hem SVG attached to bottom edge */}
        <svg
          aria-hidden="true"
          className="tp-header__hem absolute top-[calc(100%-1px)] left-0 w-full h-[14px] pointer-events-none drop-shadow-[0_4px_4px_rgba(42,23,14,0.06)]"
          width="100%"
          height="14"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="tp-hem-pattern" width="44" height="14" patternUnits="userSpaceOnUse">
              <path d="M0 0H44V2A22 11 0 0 1 0 2Z" fill="var(--color-milk)"></path>
              <path d="M0 2A22 11 0 0 0 44 2" fill="none" stroke="rgba(42, 23, 14, 0.12)" strokeWidth="1.5"></path>
            </pattern>
          </defs>
          <rect width="100%" height="14" fill="url(#tp-hem-pattern)"></rect>
        </svg>
      </header>

      {/* Mobile Drawer Slide-over */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  )
}
