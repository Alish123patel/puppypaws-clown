import React from 'react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../../data/siteConfig.js'
import { availablePuppies } from '../../data/puppiesData.js'

export default function HeroSection() {
  // Lineup seats matching the reference website positions and tilts
  const seatPositions = [
    { x: '9%', w: '8.6rem', peek: 0.62, tilt: '-5deg' },
    { x: '22.5%', w: '10.4rem', peek: 0.8, tilt: '3deg' },
    { x: '35%', w: '9.2rem', peek: 0.7, tilt: '-2deg' },
    { x: '65%', w: '9.4rem', peek: 0.74, tilt: '3deg' },
    { x: '77.5%', w: '10.6rem', peek: 0.82, tilt: '-3deg' },
    { x: '91%', w: '8.4rem', peek: 0.6, tilt: '4deg' }
  ]

  // Pick top 6 available puppies
  const lineupPuppies = availablePuppies.slice(0, 6)

  return (
    <section
      data-pup-scene="true"
      data-tone="light"
      className="tp-scene tp-hero"
      style={{
        '--sky-top': '#fffdf8',
        '--sky-bottom': '#fff1d8',
        '--quilt': '#fff1d8'
      }}
      aria-labelledby="hero-title"
    >
      {/* Radiant Sun Disk */}
      <span aria-hidden="true" className="tp-hero__sun" />

      {/* Hero Copy */}
      <div className="tp-hero__copy gutter">
        <p className="tp-hero__note font-scrawl">
          every puppy is family
          <svg
            viewBox="0 0 220 24"
            preserveAspectRatio="none"
            className="absolute -bottom-2 left-0 h-3 w-full text-toffee"
            aria-hidden="true"
          >
            <path
              d="M4 14c18-10 30 8 48-1s28-9 46 0 30 8 48-1 30-9 48 0 18 2 22 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </p>

        <h1 id="hero-title" className="tp-hero__title font-plush">
          <span className="tp-hero__line">Premium teacup</span>
          <span className="tp-hero__line tp-hero__line--2">puppies in Dubai</span>
        </h1>

        <p className="tp-hero__lede">
          Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders worldwide.
        </p>

        <div className="tp-hero__actions">
          <Link className="btn btn-primary" to="/puppies">
            View available puppies
          </Link>
          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>

      {/* Hero Quilt Lineup Stage */}
      <div className="tp-hero__stage">
        {/* Puppy Seats */}
        <ul className="tp-lineup" aria-label="Some of the puppies in our showroom">
          {lineupPuppies.map((pup, i) => {
            const seat = seatPositions[i] || seatPositions[0]
            const img = pup.images?.[0] || pup.originalImages?.[0] || '/brand/logo.png'
            return (
              <li
                key={pup.slug}
                className="tp-lineup__seat"
                style={{
                  '--x': seat.x,
                  '--w': seat.w,
                  '--peek': seat.peek,
                  '--tilt': seat.tilt,
                  '--i': i
                }}
              >
                <Link
                  className="tp-lineup__pup"
                  data-pup-friend="true"
                  aria-label={`Meet ${pup.name}, ${pup.breed}`}
                  to={`/puppies/${pup.slug}`}
                >
                  <span className="tp-lineup__photo">
                    <img
                      alt={`${pup.name}, ${pup.breed} puppy`}
                      src={img}
                      loading="eager"
                      decoding="async"
                      style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: 'cover'
                      }}
                    />
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Puppy Name Tags */}
        <ul aria-hidden="true" className="tp-lineup tp-lineup--tags">
          {lineupPuppies.map((pup, i) => {
            const seat = seatPositions[i] || seatPositions[0]
            return (
              <li
                key={pup.slug}
                className="tp-lineup__seat"
                style={{
                  '--x': seat.x,
                  '--w': seat.w,
                  '--peek': seat.peek,
                  '--tilt': seat.tilt,
                  '--i': i
                }}
              >
                <span className="tp-lineup__ghost">
                  <span className="tp-lineup__name font-scrawl">{pup.name}</span>
                </span>
              </li>
            )
          })}
        </ul>

        {/* Quilted scalloped edge */}
        <div aria-hidden="true" className="tp-quilt">
          <svg className="tp-quilt__edge" width="100%" height="40" preserveAspectRatio="none">
            <defs>
              <pattern id="tp-scallop" width="76" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40V27A38 25 0 0 1 76 27V40Z" style={{ fill: 'var(--quilt)' }} />
                <path d="M0 27A38 25 0 0 1 76 27" fill="none" stroke="#2a170e" strokeWidth="3" />
                <path
                  d="M11 33A27 19 0 0 1 65 33"
                  fill="none"
                  stroke="#2a170e"
                  strokeWidth="1.6"
                  strokeDasharray="3.5 5.5"
                  strokeLinecap="round"
                  opacity=".42"
                />
              </pattern>
            </defs>
            <rect width="100%" height="40" fill="url(#tp-scallop)" />
          </svg>
        </div>
      </div>
    </section>
  )
}
