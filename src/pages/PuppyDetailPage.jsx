import React, { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  MessageCircle,
  Mail,
  CheckCircle2,
  ChevronRight,
  Heart,
  ArrowRight
} from 'lucide-react'
import {
  getPuppyBySlug,
  getPreviousPuppy,
  getNextPuppy,
  availablePuppies
} from '../data/index.js'
import PhotoGallery from '../components/puppy-detail/PhotoGallery.jsx'
import WayHomeTimeline from '../components/puppy-detail/WayHomeTimeline.jsx'
import DetailInquiryForm from '../components/puppy-detail/DetailInquiryForm.jsx'
import PuppyPagination from '../components/puppy-detail/PuppyPagination.jsx'
import PuppyCard from '../components/common/PuppyCard.jsx'

export default function PuppyDetailPage() {
  const { slug } = useParams()
  const puppy = getPuppyBySlug(slug)

  // Circular Previous & Next navigation
  const prevPup = useMemo(() => getPreviousPuppy(slug), [slug])
  const nextPup = useMemo(() => getNextPuppy(slug), [slug])

  // Related puppies (up to 3 available pups excluding current)
  const relatedPuppies = useMemo(() => {
    return availablePuppies.filter((p) => p.slug !== slug).slice(0, 3)
  }, [slug])

  // Proper 404 state if slug doesn't match
  if (!puppy) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-milk">
        <div className="max-w-md w-full border-3 border-cocoa bg-milk rounded-4xl p-8 sm:p-10 shadow-[8px_10px_0_0_#2a170e24] text-center">
          <Heart size={48} className="text-toffee/40 mx-auto mb-4" />
          <h1 className="font-plush font-bold text-3xl text-cocoa mb-3">
            Puppy Not Found
          </h1>
          <p className="font-sans text-cocoa-soft text-sm sm:text-base mb-8 leading-relaxed">
            The puppy you're looking for might have wandered off or the address is incorrect. Explore our other adorable teacup puppies!
          </p>
          <div className="flex flex-col gap-3">
            <Link to="/puppies" className="btn btn-primary py-3.5 text-sm font-bold shadow-soft">
              Browse available puppies
            </Link>
            <Link to="/" className="btn btn-outline py-3 text-sm font-bold">
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const isAvailable = puppy.status === 'available'
  const parentCategoryPath = isAvailable ? '/puppies' : '/gone-home'
  const parentCategoryLabel = isAvailable ? 'Available puppies' : 'Gone home'

  // Pre-filled WhatsApp message
  const whatsappUrl = `https://wa.me/919898124987?text=${encodeURIComponent(
    `Hi TeddyPups! I'm inquiring about ${puppy.name} (${puppy.breed}). Could you please share more photos, video, and details?`
  )}`

  return (
    <div data-page="pup-detail" className="tp-page min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav
          className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-cocoa-soft mb-8 overflow-x-auto pb-1"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="hover:text-toffee transition-colors">
            Home
          </Link>
          <ChevronRight size={14} className="text-cocoa/40 flex-shrink-0" />
          <Link
            to={parentCategoryPath}
            className="hover:text-toffee transition-colors whitespace-nowrap"
          >
            {parentCategoryLabel}
          </Link>
          <ChevronRight size={14} className="text-cocoa/40 flex-shrink-0" />
          <span className="text-toffee-deep truncate font-bold">
            {puppy.name}
          </span>
        </nav>

        {/* SECTION 1: "1 hello, it's me" (Hero Profile Grid) */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Left Column: Image Gallery Viewport */}
            <div className="lg:col-span-6">
              <PhotoGallery
                images={puppy.images}
                puppyName={puppy.name}
                hasVideo={puppy.hasVideo}
                isAvailable={isAvailable}
              />
            </div>

            {/* Right Column: Puppy Profile & Specs Board */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="tp-chapter mb-2">
                  <span className="tp-chapter__n">1</span>
                  <span className="font-scrawl font-bold">hello, it's me</span>
                </div>

                <h1 className="font-plush font-bold text-4xl sm:text-5xl lg:text-6xl text-cocoa tracking-tight mb-2">
                  {puppy.name}
                </h1>

                <p className="font-sans text-xl sm:text-2xl text-cocoa-soft font-medium mb-6">
                  {puppy.breed}
                </p>

                {/* Status Notice for Gone Home Puppies */}
                {!isAvailable && (
                  <div className="mb-6 p-4 rounded-2xl bg-blush border-2 border-toffee-deep flex items-center gap-3">
                    <Heart size={20} className="text-toffee-deep fill-toffee-deep flex-shrink-0" />
                    <p className="text-xs sm:text-sm text-toffee-ink font-bold">
                      {puppy.name} has already found their forever family! You can request a similar puppy through our concierge.
                    </p>
                  </div>
                )}

                {/* Specifications Grid Board */}
                <div className="border-2 border-cocoa bg-milk rounded-3xl p-6 shadow-[5px_6px_0_0_#2a170e1a] mb-8">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
                    <div>
                      <span className="text-xs font-bold text-cocoa-soft uppercase tracking-wider block mb-0.5 font-sans">
                        Breed
                      </span>
                      <span className="font-bold text-cocoa text-base">
                        {puppy.breed || 'Teacup'}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs font-bold text-cocoa-soft uppercase tracking-wider block mb-0.5 font-sans">
                        Boy or girl
                      </span>
                      <span className="font-bold text-cocoa text-base capitalize">
                        {puppy.gender || 'Not specified'}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs font-bold text-cocoa-soft uppercase tracking-wider block mb-0.5 font-sans">
                        Age
                      </span>
                      <span className="font-bold text-cocoa text-base">
                        {puppy.age || 'Available now'}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs font-bold text-cocoa-soft uppercase tracking-wider block mb-0.5 font-sans">
                        Where
                      </span>
                      <span className="font-bold text-cocoa text-base">
                        {puppy.location || 'In Dubai'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                {isAvailable ? (
                  <>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp flex-1 py-4 text-sm sm:text-base flex items-center justify-center gap-2 shadow-soft font-bold"
                    >
                      <MessageCircle size={18} />
                      <span>Ask about {puppy.name} on WhatsApp</span>
                    </a>

                    <a
                      href="#enquiry-form"
                      className="btn btn-primary py-4 px-6 text-sm flex items-center justify-center gap-2 shadow-soft font-bold"
                    >
                      <Mail size={16} />
                      <span>Send an enquiry</span>
                    </a>
                  </>
                ) : (
                  <>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp flex-1 py-4 text-sm sm:text-base flex items-center justify-center gap-2 shadow-soft font-bold"
                    >
                      <MessageCircle size={18} />
                      <span>Request a similar puppy</span>
                    </a>

                    <Link
                      to="/puppies"
                      className="btn btn-outline py-4 px-6 text-sm flex items-center justify-center gap-2 font-bold"
                    >
                      <span>View available</span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: "2 what comes with [puppy.name]" (Health Guarantees) */}
        <section className="mb-16">
          <div className="border-2 border-cocoa bg-milk rounded-3xl p-6 sm:p-10 shadow-[6px_8px_0_0_#2a170e1a]">
            <div className="tp-chapter mb-2">
              <span className="tp-chapter__n">2</span>
              <span className="font-scrawl font-bold">
                what comes with {puppy.name}
              </span>
            </div>

            <h2 className="font-plush font-bold text-2xl sm:text-3xl text-cocoa mb-6">
              Every Teddy Pup comes
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {puppy.inclusions.map((inc) => (
                <div
                  key={inc}
                  className="p-4 rounded-2xl bg-cream/70 border-2 border-cocoa/15 flex items-start gap-3 hover:border-cocoa transition-colors"
                >
                  <CheckCircle2
                    size={20}
                    className="text-toffee-deep flex-shrink-0 mt-0.5"
                  />
                  <span className="font-sans text-sm font-bold text-cocoa leading-snug">
                    {inc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: "3 the way home" (Timeline/Adoption Pathway) */}
        <section className="mb-16">
          <WayHomeTimeline location={puppy.location} puppyName={puppy.name} />
        </section>

        {/* SECTION 4: "4 dear TeddyPups…" (Interactive Inquiry Form) */}
        <section className="mb-16">
          <DetailInquiryForm puppyName={puppy.name} puppyBreed={puppy.breed} />
        </section>

        {/* SECTION 5: Related Available Puppies */}
        {relatedPuppies.length > 0 && (
          <section className="mb-14">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="font-scrawl text-base text-toffee font-bold block mb-1">
                  more loving companions
                </span>
                <h3 className="font-plush font-bold text-2xl sm:text-4xl text-cocoa">
                  Other available puppies
                </h3>
              </div>
              <Link
                to="/puppies"
                className="text-sm font-bold text-toffee-deep hover:underline flex items-center gap-1"
              >
                <span>View all</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedPuppies.map((p) => (
                <PuppyCard key={p.slug} puppy={p} />
              ))}
            </div>
          </section>
        )}

        {/* Previous and Next Puppy Circular Pagination */}
        <PuppyPagination prevPup={prevPup} nextPup={nextPup} />
      </div>
    </div>
  )
}
