# Website Prepared Data Documentation

This folder (`prepared-data/`) contains structured, clean JavaScript data modules prepared for the TeddyPups U.A.E. website clone.

---

## 1. Overview of Data Files

| File | Purpose | Key Exports | Source / Verification |
| :--- | :--- | :--- | :--- |
| **`puppiesData.js`** | All 42 authentic puppy records (15 available + 27 adopted) | `puppiesData`, `availablePuppies`, `goneHomePuppies`, `getPuppyBySlug` | Crawled from `/puppies`, `/gone-home`, and individual `/puppies/:slug` routes |
| **`faqsData.js`** | 9 structured Q&A accordions | `faqsData` | Extracted from `/faq` |
| **`howItWorksData.js`** | Dual pathways (Dubai Showroom vs. Overseas Import), 4-step concierge stages, promises, delivery options | `howItWorksData` | Extracted from `/how-it-works` |
| **`happyFamiliesData.js`** | Sarah M. testimonial review and 64 authentic family adoption photo moments | `happyFamiliesData` | Extracted from `/happy-families` and `/` |
| **`siteConfig.js`** | Brand identity, contact details, navigation routes, footer links, socials | `siteConfig` | Global header, footer, and `/contact` |

---

## 2. Puppy Record Schema (`puppiesData.js`)

Each of the 42 puppy objects conforms strictly to the following schema:

```javascript
{
  id: "maltipoo-max-male",                     // Unique identifier / slug
  slug: "maltipoo-max-male",                   // URL route parameter (/puppies/:slug)
  name: "Max",                                 // Authentic puppy name (or breed designation if unnamed)
  breed: "Maltipoo",                           // Breed (Maltipoo, Poodle, Pomeranian, Cavapoo, etc.)
  gender: "Boy",                               // "Boy" | "Girl" | "Boy & girl"
  age: "3 months",                             // Authentic age at listing
  location: "Imported for you",                // "In Dubai" | "Imported for you"
  status: "available",                         // "available" (15) | "gone-home" (27)
  hasVideo: true,                              // Boolean indicating if video indicator was present
  inclusions: [                                // Standard guaranteed inclusions
    "Vaccinated",
    "Dewormed",
    "Verified health certificate from licensed vets",
    "Thoroughly checked before joining your family"
  ],
  images: [                                    // Authentic local images from reference-assets/puppies/
    "/reference-assets/puppies/max_b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp",
    ...
  ],
  originalImages: [                            // Original remote reference URLs
    "https://puppy.instabizweb.com/_next/image?url=...",
    ...
  ]
}
```

### Data Integrity Rules Applied:
* **No invented records**: All 42 records originate from actual pages on the target website.
* **Status Separation**: Exactly 15 puppies with status `"available"` and 27 puppies with status `"gone-home"`.
* **Missing Fields**: Any unprovided attribute is explicitly marked `null` rather than falsified.

---

## 3. Contact & Placeholders (`siteConfig.js`)
* **Showroom Address**: `Downtown Dubai, United Arab Emirates` (verified from showroom showcase).
* **WhatsApp Link**: `https://wa.me/919898124987?text=...` (verified from header action button).
* **Phone**: Displayed as `+971 50 000 0000` (flagged in code as *Unverified public placeholder number from reference site*).
* **Email**: `info@instabizweb.com` (from contact footer).
