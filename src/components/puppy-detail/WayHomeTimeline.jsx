import React from 'react'
import { Plane, MapPin, CheckCircle2 } from 'lucide-react'

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
    <div className="bg-cream/70 rounded-3xl p-6 sm:p-8 border border-cocoa/10 shadow-soft">
      <div className="flex items-center gap-2 mb-2">
        <span className="font-scrawl text-sm text-toffee font-bold">3 the way home</span>
      </div>
      <h3 className="font-plush font-bold text-2xl text-cocoa mb-6 flex items-center gap-2.5">
        {isImported ? <Plane size={22} className="text-toffee" /> : <MapPin size={22} className="text-toffee" />}
        <span>{title}</span>
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {activeSteps.map((s) => (
          <div key={s.step} className="bg-white p-5 rounded-2xl border border-cocoa/5 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-full bg-honey/30 text-toffee-ink font-scrawl font-bold flex items-center justify-center text-sm mb-3">
                {s.step}
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
