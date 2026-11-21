import React from 'react'

export default function FamilyGrid({ moments, onSelectMoment }) {
  if (!moments || moments.length === 0) {
    return (
      <div className="text-center py-12 text-cocoa-soft font-sans">
        No family moments to display.
      </div>
    )
  }

  // Pre-calculated organic tilts for whimsical polaroid layout
  const tilts = [-2.2, 1.8, -1.4, 2.3, -2.5, 1.2, -1.8, 2.1, -1.9, 1.5, -2.4, 2.0]
  const tapeColors = ['#f6d79a', '#ffd280', '#cfe5f6', '#f9cdbf', '#d8ecd5', '#fce5bb']

  return (
    <div className="tp-wall">
      {moments.map((moment, index) => {
        const tilt = tilts[index % tilts.length]
        const tape = tapeColors[index % tapeColors.length]

        return (
          <div key={moment.id || index} className="tp-wall__item">
            <button
              type="button"
              className="tp-wall__print"
              onClick={() => onSelectMoment(index)}
              aria-label={`View moment: ${moment.caption || 'Happy family'}`}
            >
              <figure
                className="tp-polaroid cursor-pointer"
                style={{ '--tilt': `${tilt}deg` }}
              >
                {/* Washi tape on top center of polaroid */}
                <span
                  className="tp-tape tp-tape--center"
                  style={{ '--tape': tape }}
                ></span>

                {/* Photo frame */}
                <span className="tp-polaroid__photo">
                  <img
                    src={moment.image}
                    alt={moment.alt || moment.caption || 'Happy TeddyPups family'}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                </span>

                {/* Handwritten Caption */}
                {moment.caption && (
                  <figcaption className="tp-polaroid__caption font-scrawl">
                    {moment.caption}
                  </figcaption>
                )}
              </figure>
            </button>
          </div>
        )
      })}
    </div>
  )
}
