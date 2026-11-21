import React from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Mail, MapPin } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig.js'

export default function Footer() {
  return (
    <footer className="bg-cocoa text-milk pt-16 pb-24 md:pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Mission Column */}
          <div className="md:col-span-5 lg:col-span-5">
            <h2 className="font-plush text-3xl sm:text-4xl font-bold text-milk mb-4 tracking-tight">
              Home, at last.
            </h2>
            <p className="font-sans text-milk/80 text-base leading-relaxed max-w-md">
              {siteConfig.mission}
            </p>
          </div>

          {/* Explore Links Column */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="font-scrawl text-xl text-honey mb-5">
              Explore
            </h3>
            <ul className="space-y-3 font-sans text-sm font-semibold text-milk/90">
              {siteConfig.footerExploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="hover:text-honey hover:underline underline-offset-4 transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Say Hello & Contact Column */}
          <div className="md:col-span-4 lg:col-span-4">
            <h3 className="font-scrawl text-xl text-honey mb-5">
              Say hello
            </h3>
            <ul className="space-y-3.5 font-sans text-sm text-milk/90">
              <li>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:text-honey flex items-center gap-2 transition-colors"
                >
                  <MessageCircle size={16} className="text-honey" />
                  <span>WhatsApp {siteConfig.contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-honey flex items-center gap-2 transition-colors break-all"
                >
                  <Mail size={16} className="text-honey" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-milk/80">
                <MapPin size={16} className="text-honey flex-shrink-0" />
                <span>{siteConfig.contact.address}</span>
              </li>
            </ul>

            {/* Social Media Pills */}
            <div className="mt-6 flex flex-wrap gap-2.5" aria-label="Social media">
              {siteConfig.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center rounded-full border border-milk/30 px-4 text-xs font-semibold hover:border-honey hover:text-honey hover:bg-milk/5 transition-all"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Slogan Bar */}
        <div className="mt-16 pt-8 border-t border-milk/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-milk/60">
          <div>
            {siteConfig.copyright}
          </div>
          <div className="font-scrawl text-sm text-honey">
            every puppy is family
          </div>
        </div>
      </div>
    </footer>
  )
}
