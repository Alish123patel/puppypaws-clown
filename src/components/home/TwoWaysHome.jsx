import React from 'react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../../data/siteConfig.js'

export default function TwoWaysHome() {
  return (
    <section
      className="tp-scene tp-paths"
      style={{
        '--sky-top': '#fbe3b4',
        '--sky-bottom': '#f7d18d'
      }}
      aria-labelledby="paths-title"
    >
      <div className="gutter mx-auto max-w-[110rem]">
        <h2 id="paths-title" className="tp-paths__title font-plush text-huge">
          Two ways to meet your puppy
        </h2>

        <div className="tp-fork">
          <div aria-hidden="true" className="tp-fork__post" />

          {/* Left Pathway: Puppies in Dubai */}
          <article className="tp-way tp-way--left" aria-labelledby="way-local">
            <h3 id="way-local" className="tp-sign tp-sign--left font-plush">
              Puppies in Dubai
            </h3>

            <div className="tp-way__scene">
              <svg viewBox="0 0 300 120" className="tp-way__skyline" aria-hidden="true">
                <path
                  d="M4 116h292M20 116V78h16v38M44 116V60h18v56M70 116V84h12v32M150 116V36l4-6v-14l3-4 3 4v14l4 6v80M118 116V70l12-8v54M174 116V64l14 8v44M200 116V82h18v34M226 116V56h14v60M248 116V88h22v28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <figure className="tp-window">
                <span className="tp-window__glass">
                  <img
                    alt="A tiny apricot puppy held up in our Dubai showroom"
                    src="/assets/puppies/max_b942a5_a1fa75c7bf2f4d688ec0ce0344baef67f000.jpg"
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
                <figcaption className="font-scrawl">In our showroom</figcaption>
              </figure>
            </div>

            <p className="tp-way__text">
              See them, love them, take them home. Come meet our locally available puppies before you decide.
            </p>

            <Link className="btn btn-outline" to="/puppies">
              Meet puppies in Dubai
            </Link>
          </article>

          {/* Right Pathway: Special Import */}
          <article className="tp-way tp-way--right" aria-labelledby="way-import">
            <h3 id="way-import" className="tp-sign tp-sign--right font-plush">
              Special import
            </h3>

            <div className="tp-way__scene">
              <svg viewBox="0 0 300 120" className="tp-way__globe" aria-hidden="true">
                <circle cx="150" cy="60" r="45" fill="none" stroke="currentColor" strokeWidth="2.6" strokeDasharray="4 4" />
                <path d="M105 60h90M150 15a45 45 0 0 1 0 90M150 15a45 45 0 0 0 0 90" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>

              <figure className="tp-window">
                <span className="tp-window__glass">
                  <img
                    alt="Special import Korean teacup puppy"
                    src="/assets/puppies/korean_teacup_maltipoo_puppy__girl__b942a5_50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg"
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
                <figcaption className="font-scrawl">Worldwide breeders</figcaption>
              </figure>
            </div>

            <p className="tp-way__text">
              Looking for a rare breed or specific lineage? We work with trusted ethical breeders across Europe and Korea.
            </p>

            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Order a rare breed
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
