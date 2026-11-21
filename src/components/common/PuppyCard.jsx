import React from 'react'
import { Link } from 'react-router-dom'

const WASH_COLORS = ['#f2be6b', '#bfddf5', '#f9cdbf', '#fbe3b4']

const MASK_SVG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpath d='M96.93 50.00C97.05 52.50 96.91 55.08 96.51 57.55C96.12 60.02 95.42 62.50 94.55 64.83C93.67 67.16 92.53 69.43 91.26 71.54C90.00 73.66 88.52 75.66 86.95 77.51C85.39 79.36 83.67 81.09 81.88 82.67C80.09 84.24 78.17 85.68 76.20 86.95C74.22 88.21 72.14 89.33 70.02 90.26C67.90 91.18 65.69 91.94 63.48 92.50C61.27 93.07 59.00 93.44 56.75 93.67C54.50 93.90 52.24 93.93 50.00 93.87C47.76 93.80 45.53 93.58 43.31 93.28C41.09 92.97 38.88 92.56 36.68 92.02C34.47 91.48 32.25 90.86 30.08 90.06C27.90 89.26 25.70 88.34 23.62 87.20C21.54 86.06 19.46 84.75 17.59 83.21C15.71 81.68 13.91 79.93 12.37 78.02C10.83 76.10 9.46 73.96 8.34 71.75C7.23 69.54 6.35 67.14 5.69 64.75C5.03 62.36 4.62 59.86 4.37 57.41C4.12 54.95 4.10 52.45 4.21 50.00C4.32 47.55 4.61 45.10 5.05 42.71C5.49 40.31 6.08 37.93 6.85 35.63C7.62 33.34 8.54 31.07 9.65 28.93C10.75 26.79 12.04 24.72 13.48 22.81C14.92 20.91 16.55 19.11 18.28 17.49C20.00 15.88 21.90 14.41 23.84 13.11C25.78 11.80 27.85 10.66 29.94 9.66C32.03 8.66 34.20 7.81 36.39 7.09C38.59 6.38 40.84 5.80 43.10 5.39C45.37 4.98 47.69 4.71 50.00 4.65C52.31 4.58 54.66 4.69 56.95 5.03C59.24 5.37 61.55 5.92 63.74 6.67C65.93 7.42 68.09 8.41 70.12 9.54C72.15 10.67 74.09 12.01 75.92 13.44C77.75 14.87 79.48 16.46 81.12 18.12C82.76 19.77 84.30 21.53 85.76 23.37C87.23 25.22 88.62 27.14 89.88 29.18C91.14 31.21 92.35 33.34 93.33 35.57C94.32 37.81 95.20 40.16 95.80 42.57C96.40 44.97 96.81 47.50 96.93 50.00Z' fill='%23000'/%3E%3C/svg%3E"

export default function PuppyCard({ puppy, index = 0, variant = 'auto' }) {
  if (!puppy) return null

  const isGoneHome = variant === 'ticket' || (variant === 'auto' && puppy.status === 'gone-home')
  const mainImage = puppy.images?.[0] || puppy.originalImages?.[0] || '/brand/logo.png'
  const washColor = WASH_COLORS[index % WASH_COLORS.length]
  const tiltDeg = (((index % 5) - 2) * 0.9).toFixed(2) + 'deg'

  // If Gone Home, render authentic Train Ticket Card
  if (isGoneHome) {
    return (
      <li className="tp-ticket" data-reveal="true" style={{ '--tilt': tiltDeg, '--i': index }}>
        <Link
          to={`/puppies/${puppy.slug}`}
          className="tp-ticket__link"
          aria-label={`${puppy.name}, ${puppy.breed}, ${puppy.gender || ''}, gone home`}
        >
          <span className="tp-ticket__main">
            <span className="tp-ticket__photo">
              <img
                src={mainImage}
                alt={`${puppy.name}, ${puppy.gender || ''} ${puppy.breed} puppy`}
                loading="lazy"
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
            <span className="tp-ticket__body">
              <span className="font-scrawl tp-ticket__kicker">one ticket home</span>
              <span className="font-plush tp-ticket__name">{puppy.name}</span>
              <span className="tp-ticket__meta">
                {puppy.breed}{puppy.gender ? `, ${puppy.gender.toLowerCase()}` : ''}
              </span>
              <span className="tp-ticket__route">
                <span>TeddyPups</span>
                <svg viewBox="0 0 60 12" aria-hidden="true">
                  <path d="M2 6h46" />
                  <path d="M44 2l6 4-6 4" />
                </svg>
                <span>home ♥</span>
              </span>
            </span>
          </span>
          <span aria-hidden="true" className="tp-ticket__stub">
            <span className="font-plush">admit one</span>
          </span>
        </Link>
      </li>
    )
  }

  // Available Puppy: Authentic Inked Watercolor Polaroid (.tp-sketch)
  return (
    <li>
      <Link
        to={`/puppies/${puppy.slug}`}
        className="tp-sketch"
        data-reveal="true"
        style={{
          '--tilt': tiltDeg,
          '--d': `${index * 40}ms`,
          '--wash': washColor
        }}
        aria-label={`${puppy.name}, ${puppy.breed}, ${puppy.gender || ''}, ${puppy.age || ''}, available`}
      >
        <span className="tp-sketch__frame">
          {/* Watercolor wash SVG */}
          <svg aria-hidden="true" viewBox="0 0 100 100" class="tp-sketch__wash" style={{ translate: '-4.0% 4.9%' }}>
            <path
              fill={washColor}
              d="M96.73 50.00C96.38 52.37 95.89 54.67 95.32 56.94C94.75 59.21 94.09 61.43 93.30 63.61C92.50 65.78 91.61 67.93 90.55 69.98C89.49 72.04 88.29 74.06 86.92 75.94C85.55 77.83 84.00 79.63 82.33 81.27C80.66 82.92 78.82 84.44 76.90 85.81C74.98 87.18 72.93 88.41 70.82 89.52C68.71 90.62 66.51 91.60 64.26 92.44C62.01 93.29 59.68 94.03 57.30 94.59C54.92 95.15 52.47 95.59 50.00 95.80C47.53 96.01 44.98 96.06 42.49 95.83C40.01 95.61 37.47 95.15 35.07 94.45C32.66 93.75 30.28 92.78 28.07 91.64C25.85 90.49 23.73 89.09 21.76 87.60C19.78 86.10 17.95 84.41 16.22 82.67C14.49 80.93 12.89 79.06 11.38 77.13C9.88 75.20 8.47 73.19 7.20 71.09C5.94 68.99 4.75 66.79 3.81 64.52C2.87 62.24 2.04 59.84 1.54 57.42C1.04 55.00 0.76 52.47 0.80 50.00C0.85 47.53 1.20 45.00 1.80 42.62C2.41 40.23 3.35 37.87 4.43 35.68C5.52 33.49 6.89 31.41 8.32 29.46C9.74 27.51 11.35 25.71 12.99 24.00C14.63 22.28 16.37 20.70 18.15 19.19C19.93 17.69 21.77 16.27 23.68 14.97C25.60 13.66 27.58 12.43 29.64 11.36C31.71 10.28 33.86 9.31 36.06 8.52C38.27 7.73 40.57 7.08 42.89 6.60C45.22 6.13 47.60 5.82 50.00 5.65C52.40 5.49 54.83 5.48 57.27 5.61C59.71 5.74 62.18 6.00 64.64 6.43C67.10 6.86 69.60 7.41 72.03 8.19C74.46 8.97 76.92 9.91 79.21 11.11C81.50 12.31 83.78 13.74 85.77 15.41C87.76 17.07 89.62 19.01 91.15 21.09C92.67 23.16 93.94 25.51 94.90 27.87C95.86 30.23 96.50 32.78 96.91 35.26C97.32 37.74 97.41 40.29 97.38 42.74C97.35 45.20 97.07 47.63 96.73 50.00Z"
            />
          </svg>

          {/* Masked organic photo */}
          <span
            className="tp-sketch__photo"
            style={{
              maskImage: `url("${MASK_SVG}")`,
              WebkitMaskImage: `url("${MASK_SVG}")`
            }}
          >
            <img
              src={mainImage}
              alt={`${puppy.name}, ${puppy.gender || ''} ${puppy.breed} puppy`}
              loading="lazy"
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

          {/* Inked hand-drawn doodle outline */}
          <svg aria-hidden="true" viewBox="0 0 100 100" className="tp-sketch__ink">
            <path
              d="M99.83 50.00C99.55 52.49 99.05 54.95 98.42 57.34C97.79 59.73 96.99 62.07 96.05 64.32C95.11 66.58 94.02 68.78 92.77 70.86C91.52 72.94 90.10 74.95 88.55 76.81C87.00 78.67 85.27 80.42 83.45 82.02C81.63 83.61 79.66 85.07 77.63 86.40C75.60 87.73 73.47 88.91 71.29 89.99C69.11 91.07 66.86 92.02 64.55 92.86C62.24 93.70 59.88 94.45 57.45 95.03C55.03 95.61 52.52 96.09 50.00 96.33C47.48 96.57 44.87 96.67 42.31 96.48C39.75 96.29 37.14 95.88 34.65 95.21C32.17 94.54 29.70 93.59 27.40 92.45C25.11 91.31 22.91 89.90 20.87 88.38C18.83 86.86 16.94 85.12 15.18 83.33C13.42 81.53 11.80 79.60 10.30 77.61C8.79 75.62 7.40 73.54 6.15 71.38C4.90 69.23 3.75 66.99 2.80 64.68C1.86 62.37 1.04 59.95 0.50 57.50C-0.04 55.06 -0.39 52.51 -0.44 50.00C-0.48 47.49 -0.26 44.92 0.23 42.45C0.71 39.99 1.50 37.53 2.48 35.22C3.45 32.91 4.70 30.67 6.07 28.58C7.44 26.48 9.02 24.50 10.68 22.65C12.34 20.80 14.14 19.08 16.03 17.48C17.91 15.89 19.91 14.41 21.98 13.09C24.06 11.77 26.24 10.57 28.48 9.57C30.72 8.56 33.06 7.71 35.42 7.06C37.79 6.41 40.23 5.95 42.66 5.64C45.09 5.34 47.56 5.24 50.00 5.25C52.44 5.26 54.89 5.44 57.33 5.71C59.77 5.98 62.20 6.36 64.64 6.87C67.08 7.38 69.53 7.98 71.95 8.76C74.37 9.55 76.83 10.44 79.16 11.58C81.50 12.72 83.84 14.03 85.95 15.59C88.06 17.15 90.09 18.95 91.81 20.92C93.53 22.90 95.06 25.13 96.26 27.44C97.47 29.74 98.38 32.26 99.03 34.75C99.67 37.25 100.00 39.86 100.13 42.40C100.27 44.94 100.12 47.51 99.83 50.00Z"
              pathLength="1"
              className="tp-sketch__line"
            />
            <path
              d="M37.52 95.79C36.56 95.50 33.64 94.73 31.77 94.02C29.89 93.32 28.03 92.51 26.25 91.57C24.47 90.62 22.73 89.55 21.11 88.37C19.48 87.18 17.92 85.86 16.48 84.45C15.03 83.05 13.69 81.52 12.45 79.93C11.21 78.35 10.07 76.66 9.03 74.94C7.99 73.22 7.06 71.43 6.21 69.61C5.36 67.78 4.60 65.91 3.94 64.00C3.29 62.10 2.71 60.14 2.25 58.17C1.80 56.19 1.43 54.17 1.22 52.13C1.00 50.10 0.89 48.02 0.95 45.97C1.01 43.91 1.20 41.82 1.56 39.79C1.91 37.75 2.43 35.71 3.09 33.75C3.75 31.78 4.57 29.84 5.50 27.98C6.43 26.13 7.51 24.33 8.67 22.60C9.83 20.88 11.11 19.23 12.46 17.64C13.81 16.06 15.25 14.54 16.76 13.09C18.27 11.65 19.85 10.27 21.51 8.98C23.18 7.69 24.91 6.46 26.73 5.36C28.54 4.26 30.44 3.24 32.40 2.39C34.36 1.55 36.41 0.81 38.49 0.28C40.57 -0.24 42.72 -0.61 44.86 -0.77C47.00 -0.92 49.18 -0.88 51.30 -0.65C53.43 -0.42 55.55 0.03 57.58 0.61C59.62 1.20 61.61 1.99 63.50 2.86C65.40 3.74 67.21 4.78 68.95 5.86C70.69 6.94 72.33 8.14 73.92 9.36C75.51 10.58 77.01 11.86 78.47 13.18C79.94 14.50 81.98 16.58 82.68 17.26"
              pathLength="1"
              className="tp-sketch__line tp-sketch__line--retrace"
            />
            <g transform="translate(-7.0 64.1) rotate(-9) scale(0.85)">
              <g className="tp-sketch__doodle">
                <path
                  d="M0 0c1.6-.6 2.4 1.4.8 2.6-2 1.4-4.6-.4-4-3 .7-3 4.8-3.8 6.8-1.2 2.4 3-0.2 7.4-3.8 7.2"
                  fill="none"
                  stroke="#c2622b"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
            <g transform="translate(6.7 16.0) rotate(-10) scale(0.95)">
              <g className="tp-sketch__doodle">
                <path
                  d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5z"
                  transform="scale(.17) translate(-32 -34)"
                  fill="#d4893f"
                  opacity="0.85"
                />
              </g>
            </g>
          </svg>

          {/* Sticker */}
          <span className="tp-sketch__sticker font-scrawl">Available</span>

          {/* Video badge */}
          {puppy.hasVideo && (
            <span className="tp-sketch__video">▶ video</span>
          )}
        </span>

        <span className="tp-sketch__name font-plush">{puppy.name}</span>
        <span className="tp-sketch__meta">
          {puppy.breed}
          {puppy.gender ? ` · ${puppy.gender.toLowerCase()}` : ''}
          {puppy.age ? ` · ${puppy.age}` : ''}
        </span>
      </Link>
    </li>
  )
}
