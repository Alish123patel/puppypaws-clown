import React from 'react'
import { Plane, MapPin } from 'lucide-react'

export default function WayHomeTimeline({ location, puppyName }) {
  const isImported = location && location.toLowerCase().includes('import')

  const importedSteps = [
    {
      step: '1',
      title: 'Reserve your puppy',
      desc: `Tell us that ${puppyName} has captured your heart to lock in their reservation.`
    },
    {
      step: '2',
      title: 'Personalized consultation',
      desc: "We finalize details with you and share real-time updates on your puppy's journey."
    },
    {
      step: '3',
      title: 'Import and arrival',
      desc: 'We manage full veterinary health checks, travel arrangements, and customs documentation.'
    },
    {
      step: '4',
      title: 'Welcome home',
      desc: 'We help your new puppy settle in and provide 24/7 care support for a smooth transition.'
    }
  ]

  const localSteps = [
    {
      step: '1',
      title: 'Choose your puppy',
      desc: `Review ${puppyName}'s photos, health records, and profile details.`
    },
    {
      step: '2',
      title: 'Meet in showroom',
      desc: 'Visit our Downtown Dubai showroom and spend time bonding face-to-face.'
    },
    {
      step: '3',
      title: 'Veterinary verification',
      desc: 'Receive verified vaccination certificates and microchip registration.'
    },
    {
      step: '4',
      title: 'Take home same day',
      desc: 'Take your new family member home immediately or request doorstep Dubai delivery.'
    }
  ]

  const activeSteps = isImported ? importedSteps : localSteps
  const title = isImported ? 'Coming home from abroad' : 'Meeting in Dubai'

  return (
    <div className="border-2 border-cocoa bg-milk rounded-3xl p-6 sm:p-8 shadow-[6px_8px_0_0_#2a170e1a]">
      <div className="tp-chapter mb-2">
        <span className="tp-chapter__n">3</span>
        <span className="font-scrawl font-bold">the way home</span>
      </div>

      <h3 className="font-plush font-bold text-2xl sm:text-3xl text-cocoa mb-6 flex items-center gap-2.5">
        {isImported ? (
          <Plane size={24} className="text-toffee-deep" />
        ) : (
          <MapPin size={24} className="text-toffee-deep" />
        )}
        <span>{title}</span>
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {activeSteps.map((s, idx) => (
          <div
            key={s.step}
            className="border-2 border-cocoa/20 bg-cream/70 p-5 rounded-2xl flex flex-col justify-between hover:border-cocoa transition-colors"
          >
            <div>
              <div className="w-8 h-8 rounded-full bg-honey-soft text-toffee-ink font-scrawl font-bold flex items-center justify-center text-sm mb-3 border border-cocoa/30">
                0{s.step}
              </div>
              <h4 className="font-plush font-bold text-base text-cocoa mb-1.5">
                {s.title}
              </h4>
              <p className="font-sans text-xs sm:text-sm text-cocoa-soft leading-relaxed">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
