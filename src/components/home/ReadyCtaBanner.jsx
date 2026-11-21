import React from 'react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../../data/siteConfig.js'

export default function ReadyCtaBanner() {
  return (
    <section
      className="tp-scene tp-home"
      style={{
        '--sky-top': '#2f1a10',
        '--sky-bottom': '#24130b'
      }}
      aria-labelledby="cta-title"
    >
      <div className="tp-home__copy gutter">
        <h2 id="cta-title" className="font-plush text-huge text-milk">
          Ready to meet your new best friend?
        </h2>
        <p className="tp-home__lede text-milk/80">
          Bring home a healthy, happy teacup or designer puppy with expert guidance every step of the way. We help you find the right match and ensure a smooth, safe delivery across the UAE.
        </p>
      </div>

      {/* House Frontage Illustration */}
      <div className="tp-house">
        <span aria-hidden="true" className="tp-house__plant tp-house__plant--left" />
        <span aria-hidden="true" className="tp-house__lamp" />
        <div className="tp-house__doorway">
          <span className="tp-house__inside">
            <img
              alt="Puppy waiting inside"
              loading="lazy"
              decoding="async"
              src="/assets/puppies/max_b942a5_a1fa75c7bf2f4d688ec0ce0344baef67f000.jpg"
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
          <span aria-hidden="true" className="tp-house__door">
            <span className="tp-house__peep" />
            <span className="tp-house__knob" />
          </span>
        </div>
        <span aria-hidden="true" className="tp-house__plant tp-house__plant--right" />
        <span aria-hidden="true" className="tp-house__mat font-scrawl">
          welcome home
        </span>
      </div>

      {/* CTAs */}
      <div className="tp-home__actions gutter">
        <a
          href={siteConfig.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp"
        >
          Enquire on WhatsApp
        </a>
        <Link
          className="btn btn-ghost tp-home__ghost !text-milk !border-milk/40 hover:!border-honey hover:!text-honey"
          to="/contact"
        >
          Visit &amp; contact
        </Link>
      </div>
    </section>
  )
}
