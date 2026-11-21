import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Plane, CheckCircle2, ArrowRight } from 'lucide-react'

export default function TwoWaysHome() {
  return (
    <section className="py-16 sm:py-24 bg-cream/60 border-y border-cocoa/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-scrawl text-sm sm:text-base text-toffee block mb-2">
            choose your way home
          </span>
          <h2 className="font-plush font-bold text-3xl sm:text-4xl lg:text-5xl text-cocoa tracking-tight">
            Two ways to meet your puppy
          </h2>
          <p className="font-sans text-cocoa-soft text-base sm:text-lg mt-3">
            Whether visiting our Downtown Dubai showroom or importing a rare teacup breed, we handle every detail with love.
          </p>
        </div>

        {/* 2 Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Pathway 1: In Dubai */}
          <div className="bg-white rounded-4xl p-8 sm:p-10 border border-cocoa/10 shadow-soft flex flex-col justify-between hover:shadow-elevated transition-shadow duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-honey/30 text-toffee">
                  <MapPin size={13} />
                  <span>In our showroom</span>
                </span>
                <span className="font-scrawl text-xs text-cocoa-soft">
                  Same-day availability
                </span>
              </div>

              <h3 className="font-plush font-bold text-2xl sm:text-3xl text-cocoa mb-3">
                Puppies in Dubai
              </h3>

              <p className="font-sans text-cocoa-soft text-base leading-relaxed mb-6">
                See them, love them, take them home. Come meet our locally available puppies before you decide.
              </p>

              <ul className="space-y-3 mb-8 text-sm font-semibold text-cocoa/80">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-toffee flex-shrink-0" />
                  <span>Face-to-face bonding in Downtown Dubai</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-toffee flex-shrink-0" />
                  <span>Immediate adoption & same-day pickup</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-toffee flex-shrink-0" />
                  <span>Safe doorstep delivery anywhere in Dubai</span>
                </li>
              </ul>
            </div>

            <Link
              to="/puppies"
              className="btn btn-honey w-full sm:w-auto py-3.5 px-6 self-start flex items-center justify-center gap-2 group text-sm font-bold"
            >
              <span>Meet local puppies</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Pathway 2: Imported */}
          <div className="bg-white rounded-4xl p-8 sm:p-10 border border-cocoa/10 shadow-soft flex flex-col justify-between hover:shadow-elevated transition-shadow duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky text-sky-deep">
                  <Plane size={13} />
                  <span>Korea → Dubai</span>
                </span>
                <span className="font-scrawl text-xs text-cocoa-soft">
                  Rare teacup lines
                </span>
              </div>

              <h3 className="font-plush font-bold text-2xl sm:text-3xl text-cocoa mb-3">
                Imported for you
              </h3>

              <p className="font-sans text-cocoa-soft text-base leading-relaxed mb-6">
                Exclusive Korean teacup puppies, delivered. Order from the world's most reputable breeders and let us handle the import.
              </p>

              <ul className="space-y-3 mb-8 text-sm font-semibold text-cocoa/80">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-sky-deep flex-shrink-0" />
                  <span>Hand-selected from Korea & Europe certified breeders</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-sky-deep flex-shrink-0" />
                  <span>Safe climate-controlled international cargo</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-sky-deep flex-shrink-0" />
                  <span>Real photos, videos & health records on WhatsApp</span>
                </li>
              </ul>
            </div>

            <Link
              to="/how-it-works"
              className="btn btn-primary w-full sm:w-auto py-3.5 px-6 self-start flex items-center justify-center gap-2 group text-sm font-bold"
            >
              <span>See imported puppies</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
