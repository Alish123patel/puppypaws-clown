import React from 'react'
import { Link } from 'react-router-dom'
import { happyFamiliesData } from '../../data/index.js'

export default function HappyPreview() {
  const { title, subtitle, featuredReview, moments } = happyFamiliesData
  // Take 6 authentic moments for the home preview
  const previewMoments = moments.slice(0, 6)

  return (
    <section
      className="tp-scene tp-dusk"
      style={{
        '--sky-top': '#a65a30',
        '--sky-bottom': '#4d2b19'
      }}
      aria-labelledby="dusk-title"
    >
      <div className="tp-dusk__sky gutter">
        <div className="tp-dusk__head">
          <h2 id="dusk-title" className="font-plush text-huge">
            Happy families &amp; puppies
          </h2>
          <p className="text-lede mt-5 max-w-[50ch] text-[var(--ink-soft)]">
            We are truly honored to see our puppies become cherished members of loving families. These heartwarming moments have been shared by our valued clients who welcomed a Teddy Pup into their homes and hearts.
          </p>
          <Link className="btn btn-outline mt-6 inline-flex" to="/happy-families">
            See all 64 moments &rarr;
          </Link>
        </div>

        {/* Sarah M. Tilted Quote Card */}
        <figure className="tp-dusk__note">
          <blockquote className="font-plush-text">
            “{featuredReview.quote}”
          </blockquote>
          <figcaption className="font-scrawl">
            {featuredReview.author}, {featuredReview.location}
          </figcaption>
        </figure>
      </div>

      {/* Photowall Preview with Polaroids */}
      <div className="tp-photowall">
        <div className="tp-photowall__wall">
          <ul className="tp-photowall__prints" aria-label="Photos from TeddyPups families">
            {previewMoments.map((moment, i) => (
              <li key={moment.id || i} data-reveal="true">
                <Link
                  to="/happy-families"
                  className="tp-photowall__print"
                  aria-label={`Open photo: ${moment.caption || 'Happy family'}`}
                >
                  <span
                    className="tp-polaroid"
                    style={{
                      '--tilt': `${(((i % 4) - 1.5) * 1.8).toFixed(1)}deg`,
                      '--tape': '#f6d79a',
                      '--i': i
                    }}
                  >
                    <span aria-hidden="true" className="tp-tape tp-tape--center" />
                    <span className="tp-polaroid__photo">
                      <img
                        alt={moment.caption || 'TeddyPups happy family'}
                        loading="lazy"
                        decoding="async"
                        src={moment.image || moment.imageUrl}
                        style={{
                          width: '100%',
                          height: 'auto',
                          objectFit: 'cover'
                        }}
                      />
                    </span>
                    {moment.caption && (
                      <span className="tp-polaroid__caption font-scrawl">
                        {moment.caption}
                      </span>
                    )}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
