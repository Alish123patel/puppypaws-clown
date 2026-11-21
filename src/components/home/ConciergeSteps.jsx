import React from 'react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../../data/siteConfig.js'

export default function ConciergeSteps() {
  return (
    <section
      className="tp-scene tp-chat"
      style={{
        '--sky-top': '#f7d18d',
        '--sky-bottom': '#f0b866'
      }}
      aria-labelledby="journey-title"
    >
      <div className="tp-chat__grid gutter">
        {/* Story & Steps */}
        <div className="tp-chat__story">
          <h2 id="journey-title" className="font-plush text-huge">
            Your puppy journey
          </h2>
          <p className="text-lede mt-5 max-w-[42ch] text-[var(--ink-soft)]">
            A premium, step-by-step concierge experience. We make adoption simple, secure, and purely joyful.
          </p>

          <ol className="tp-chat__steps">
            <li className="tp-chat__step" data-done="true">
              <span className="tp-chat__num font-plush" aria-hidden="true">1</span>
              <h3 className="font-plush tp-chat__title">Choose your breed</h3>
              <p className="tp-chat__text">
                Select your preferred breed or tell us what you're looking for. We'll guide you based on availability and your lifestyle.
              </p>
            </li>
            <li className="tp-chat__step" data-done="true">
              <span className="tp-chat__num font-plush" aria-hidden="true">2</span>
              <h3 className="font-plush tp-chat__title">Get photos &amp; details</h3>
              <p className="tp-chat__text">
                Our team will share real photos, health details, and all necessary information directly on WhatsApp.
              </p>
            </li>
            <li className="tp-chat__step" data-active="true">
              <span className="tp-chat__num font-plush" aria-hidden="true">3</span>
              <h3 className="font-plush tp-chat__title">Secure &amp; safe delivery</h3>
              <p className="tp-chat__text">
                Once confirmed, we handle everything professionally and ensure your puppy reaches you safely and stress-free.
              </p>
            </li>
          </ol>

          <Link className="btn btn-ghost tp-chat__cta" to="/how-it-works">
            How it works
          </Link>
        </div>

        {/* WhatsApp Phone Mockup */}
        <div className="tp-chat__side">
          <div className="tp-phone" aria-label="A WhatsApp conversation with TeddyPups U.A.E." role="group">
            <div className="tp-phone__bar">
              <img
                alt=""
                width="40"
                height="40"
                className="tp-phone__avatar"
                src="/brand/logo.png"
              />
              <span>
                <span className="tp-phone__name">TeddyPups U.A.E.</span>
                <span className="tp-phone__status">online</span>
              </span>
            </div>

            <div className="tp-phone__screen">
              <p className="tp-msg tp-msg--me">
                Hi TeddyPups! I'd love to know more about your puppies.
              </p>

              <div className="tp-msg-group" data-step="0" data-show="true">
                <div className="tp-msg tp-msg--them">
                  <p>
                    Select your preferred breed or tell us what you're looking for. We'll guide you based on availability and your lifestyle.
                  </p>
                  <ul className="tp-chips" aria-label="Breeds we have now">
                    <li><Link to="/puppies?breed=maltipoo">Maltipoo</Link></li>
                    <li><Link to="/puppies?breed=pomeranian">Pomeranian</Link></li>
                    <li><Link to="/puppies?breed=poodle">Poodle</Link></li>
                    <li><Link to="/puppies?breed=cavapoo">Cavapoo</Link></li>
                    <li><Link to="/puppies?breed=shih-tzu">Shih Tzu</Link></li>
                  </ul>
                </div>
              </div>

              <div className="tp-msg-group" data-step="1" data-show="true">
                <div className="tp-msg tp-msg--them tp-msg--media">
                  <div className="tp-snaps">
                    <span className="tp-snaps__one">
                      <img
                        alt="Max, Maltipoo puppy"
                        src="/assets/puppies/max_b942a5_a1fa75c7bf2f4d688ec0ce0344baef67f000.jpg"
                        style={{ width: '100%', height: 'auto', borderRadius: '0.75rem' }}
                      />
                    </span>
                  </div>
                  <p>
                    Here are photos &amp; video of Max! Vet checked, microchipped &amp; ready to meet you 🐾
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
