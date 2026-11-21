import React from 'react'
import { useLocation } from 'react-router-dom'

export default function AnnouncementBar() {
  const location = useLocation()
  // On the reference website, the homepage displays the signature "every puppy is family"
  // note inside the HeroSection and the Footer. Suppress the extra banner on the homepage
  // so the header sits cleanly at top-0 against the sunrise sky.
  if (location.pathname === '/') return null

  return null
}
