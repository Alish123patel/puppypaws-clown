import React from 'react'
import { Link } from 'react-router-dom'
import { getFeaturedPuppies } from '../../data/index.js'
import PuppyCard from '../common/PuppyCard.jsx'

export default function MeetThePups() {
  const featuredPuppies = getFeaturedPuppies(6)

  return (
    <section
      data-pup-scene="true"
      data-tone="light"
      className="tp-scene tp-meet"
      style={{
        '--sky-top': '#fff1d8',
        '--sky-bottom': '#fbe3b4'
      }}
      aria-labelledby="meet-title"
    >
      <div className="tp-meet__stage">
        <header className="tp-meet__head gutter">
          <div>
            <h2 id="meet-title" className="font-plush text-huge">
              Meet the pups
            </h2>
            <p className="text-lede mt-3 max-w-[44ch] text-[var(--ink-soft)]">
              Real puppies, real photos, looking for their families right now.
            </p>
          </div>
          <Link className="btn btn-primary shrink-0" to="/puppies">
            See all available puppies
          </Link>
        </header>

        {/* Polaroid Sketches Grid with Authentic Alternating Stagger */}
        <div className="gutter mx-auto max-w-[110rem] pb-24 pt-10">
          <ul className="tp-sketches">
            {featuredPuppies.map((puppy, i) => (
              <PuppyCard key={puppy.slug} puppy={puppy} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
