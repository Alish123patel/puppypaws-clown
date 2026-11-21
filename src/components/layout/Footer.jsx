import React from 'react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../../data/siteConfig.js'

export default function Footer() {
  const twinkleStars = [
    { left: '6%', top: '18%', width: '12.6px', delay: '0.00s' },
    { left: '14%', top: '42%', width: '8.4px', delay: '0.40s' },
    { left: '23%', top: '12%', width: '9.8px', delay: '0.80s' },
    { left: '31%', top: '30%', width: '7px', delay: '1.20s' },
    { left: '44%', top: '9%', width: '11.2px', delay: '1.60s' },
    { left: '52%', top: '36%', width: '7.7px', delay: '2.00s' },
    { left: '63%', top: '15%', width: '10.5px', delay: '2.40s' },
    { left: '71%', top: '40%', width: '7px', delay: '2.80s' },
    { left: '92%', top: '33%', width: '8.4px', delay: '3.20s' }
  ]

  return (
    <footer className="tp-footer relative pb-[calc(var(--bar-h)+2rem)] text-milk md:pb-10">
      {/* Rolling Dark Greenish-Brown Hill Silhouette SVG */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="tp-footer__hill"
      >
        <path d="M0 80V44c120-30 240-44 360-30s240 46 360 34 240-58 360-46 240 40 360 26v52z" />
      </svg>

      {/* Sky Canvas with Twinkling Stars & Moon */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-6 h-64 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {twinkleStars.map((star, idx) => (
            <svg
              key={idx}
              viewBox="0 0 40 40"
              className="tp-twinkle absolute text-honey"
              style={{
                left: star.left,
                top: star.top,
                width: star.width,
                animationDelay: star.delay
              }}
              aria-hidden="true"
            >
              <path
                d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z"
                fill="currentColor"
              />
            </svg>
          ))}
        </div>
        <span className="tp-moon" />
      </div>

      <div className="gutter relative mx-auto grid max-w-[110rem] gap-12 pt-20 md:grid-cols-12 md:gap-x-12 md:gap-y-6 md:pt-28">
        {/* Brand Mission */}
        <div className="md:col-span-5">
          <p className="font-plush text-big text-honey-soft">
            Home, at last.
          </p>
          <p className="mt-5 max-w-md text-milk/80 leading-relaxed">
            {siteConfig.mission}
          </p>
        </div>

        {/* Explore Links */}
        <nav aria-label="Footer" className="md:col-span-3 md:col-start-7 md:row-span-2 md:row-start-1">
          <h2 className="font-scrawl text-lg text-honey">Explore</h2>
          <ul className="mt-4 space-y-2.5">
            {siteConfig.footerExploreLinks.map((link) => (
              <li key={link.label}>
                <Link
                  className="font-semibold text-milk/90 underline-offset-4 hover:text-honey hover:underline"
                  to={link.path}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Say Hello & Contacts */}
        <div className="md:col-span-3 md:row-span-2 md:row-start-1">
          <h2 className="font-scrawl text-lg text-honey">Say hello</h2>
          <ul className="mt-4 space-y-2.5 text-milk/90">
            <li>
              <a
                className="font-semibold hover:text-honey"
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp {siteConfig.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                className="break-all hover:text-honey"
                href={`mailto:${siteConfig.contact.email}`}
              >
                {siteConfig.contact.email}
              </a>
            </li>
            <li>{siteConfig.contact.address}</li>
          </ul>

          <ul className="mt-6 flex flex-wrap gap-3" aria-label="Social media">
            {siteConfig.socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center rounded-full border-2 border-milk/30 px-4 text-sm font-semibold hover:border-honey hover:text-honey transition-colors"
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="gutter relative mx-auto mt-16 flex max-w-[110rem] flex-col items-start justify-between gap-4 border-t border-milk/15 pt-6 text-sm text-milk/60 md:flex-row md:items-center">
        <span className="flex items-center gap-3">
          <img
            alt=""
            loading="lazy"
            width="36"
            height="36"
            className="size-9 object-contain"
            src="/brand/logo.png"
          />
          © 2026 TeddyPups U.A.E.
        </span>
        <span className="font-scrawl text-base text-honey/80">
          every puppy is family
        </span>
      </div>
    </footer>
  )
}
