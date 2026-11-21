# TeddyPups Website — Comprehensive Visual Audit & Reference Matching Report

**Reference Website**: [https://puppy.instabizweb.com/](https://puppy.instabizweb.com/)  
**Deployed Clone**: [https://puppypaws-clown.netlify.app/](https://puppypaws-clown.netlify.app/)  
**Audit Date**: November 21, 2026  
**Auditor**: Senior Frontend Developer & UI/UX Engineer  

---

## 1. Executive Summary

A comprehensive architectural and visual comparison was conducted between the original reference website (`https://puppy.instabizweb.com/`) and our deployed React application.

While our application successfully implements 100% of the authentic data (all 42 puppies, 64 family photographs, 9 FAQs, and dual adoption pathways) and functional routing, **it currently uses generic modern SaaS-style rectangular cards and flat containers instead of the reference site's signature artisanal storybook / vintage boutique aesthetic**.

The reference website has a distinctive, whimsical design language:
- **Atmospheric Time-of-Day Scenes (`tp-scene`)**: The homepage transitions vertically from a bright morning sky (`tp-hero`), to daytime sketchpad (`tp-meet`), dusk sunset rose (`tp-dusk`), and deep star-lit midnight cocoa (`tp-night`).
- **Sketchbook Polaroid Cards (`tp-sketch`)**: Puppy cards are not standard rounded rectangles; they are artisanal polaroid sketches with watercolor washes (`--wash`), organic blob image masks, hand-inked vector doodle borders, and tilted rotation angles (`--tilt`).
- **Tactile Paper Surfaces**: Elements are styled like tangible stationery — `.tp-board` has inner dashed stitching (`border: 1.5px dashed #2a170e38`), `.tp-paper` features vintage watermark patterns, `.tp-sketchpad` has washi tape stickers, and `.tp-letter` features a scalloped postage stamp (`.tp-letter__stamp`).
- **Boutique Awning (`tp-shopfront`)**: The Downtown Dubai showroom is crowned with a striped fabric canopy awning (`repeating-linear-gradient(90deg, var(--color-toffee) 0 1.4rem, var(--color-milk) 1.4rem 2.8rem)`).
- **Physical 3D Buttons**: Buttons feature solid cocoa drop shadows (`box-shadow: 0 .5rem 0 -.15rem var(--color-cocoa)`) with tactile hover tilt, and WhatsApp uses a deep botanical forest green (`#1f7a4d`).

---

## 2. Page-by-Page Visual Audit Across Breakpoints

### 2.1 Global Chrome: Header, Announcement Bar & Navigation
| Element | Reference Website (`instabizweb.com`) | Current Clone (`puppypaws-clown`) | Action Required |
|---|---|---|---|
| **Header Background** | Transparent on hero at top of homepage (`data-home="true"`); fades to milk on scroll with smooth `.tp-header:before` opacity transition. | Always solid cream with fixed border. | Update `Header.jsx` to be transparent at top of homepage, fading to milk on scroll. |
| **Header Height & Gutter** | `--header-h: 4.75rem` (76px); padding uses `--gutter: clamp(1rem, 4vw, 3.5rem)`. | Fixed `h-18` (72px). | Match exact `--header-h` and `--gutter`. |
| **Nav Links & Paws** | Hovering a nav link reveals a playful animated paw doodle (`.tp-nav-link__paw`) popping up underneath. | Simple text color change. | Add SVG paw doodle under each nav link on hover/active. |
| **WhatsApp Button** | Deep botanical green `#1f7a4d` with solid cocoa bottom shadow `0 .5rem 0 -.15rem #2a170e`. On hover, rotates `1deg` with slight lift. | Neon green `#25D366` with standard Tailwind blur shadow. | Apply `.btn-whatsapp` class with solid shadow and botanical green. |
| **Header Hem** | Wavy scalloped SVG hem is transparent at top of page, appearing only when header transitions to solid milk on scroll. | Hem is always visible. | Sync hem opacity with scroll state. |
| **Mobile Drawer** | Slide-over drawer with dark chocolate backdrop, large touch links with paw icons, direct dialer, and playful whimsical typography. | Standard slide-over drawer. | Align typography, borders, and tactile buttons with reference. |

---

### 2.2 Homepage (`/`)
| Section | Reference Website | Current Clone | Priority |
|---|---|---|:---:|
| **1. Hero Section** | Morning sky gradient (`#fffdf8` to `#fff1d8`), huge glowing sun disk (`.tp-hero__sun`), handwritten note with doodle underline, tactile dual CTAs, and an interactive **Puppy Lineup Stage** (`.tp-lineup`) where puppies peek up on a wooden bench shelf. | Generic 2-column hero with text on left and a large square photo on right. | **CRITICAL (P0)** |
| **2. Meet the Pups** | Daytime sky background (`#fff8ec` to `#fff1d8`), title with handwritten SVG underline, grid of `.tp-sketches` with alternating vertical stagger (`translate: 0 2.4rem`), watercolor washes, organic masked images, and tilt angles. | Uniform 3-column grid of white rounded cards. | **CRITICAL (P0)** |
| **3. Two Ways Home** | Left card has Downtown Dubai skyline doodle and arched window looking at showroom puppy; right card has plane/globe doodle looking at imported puppy; center has teddy bear mascot illustration. | Flat 2-column cards without skyline doodle or arched windows. | **HIGH (P1)** |
| **4. Puppy Journey** | `.tp-board` with dashed stitch border; 3-step trail (`.tp-trail`) with numbered circular badges connected by dotted trails; interactive WhatsApp chat preview mockup. | Standard step cards without dashed stitch border or trail lines. | **HIGH (P1)** |
| **5. Why Trust Us** | `.tp-paper` with watermark pattern; 4 passport stamps with authentic icons and dashed borders. | Generic white grid cards. | **HIGH (P1)** |
| **6. Happy Families** | Sunset dusk gradient (`#fcebc8` to `#f7cdbc`); tilted polaroids in sky; `.tp-dusk__note` with Sarah M. quote tilted `1.2deg` with solid shadow. | White gradient box with standard quote icon. | **HIGH (P1)** |
| **7. FAQ Preview** | Deep midnight sky (`#24130b` to `#160a04`) with starry background (`.tp-night__stars`); inverted milk typography; FAQ accordions on dark surface. | Light milk background with standard accordions. | **CRITICAL (P0)** |
| **8. Final CTA** | Golden dawn glow with puppy peeking out of a woven wicker basket SVG illustration (`.tp-basket`). | Plain cream banner without wicker basket illustration. | **HIGH (P1)** |

---

### 2.3 Available Puppies (`/puppies`) & Gone Home (`/gone-home`)
| Element | Reference Website | Current Clone | Action Required |
|---|---|---|---|
| **Page Header** | Dot grid sketchbook background (`radial-gradient(circle at 1px 1px, #2a170e17 1px, transparent 1.6px) 0 0 / 26px 26px`), title with animated doodle underline. | Plain milk background with generic title. | Add `.tp-sketchbook` background and doodle underline. |
| **Filter Sketchpad** | Styled like a notepad (`.tp-sketchpad`) with washi tape pinned at top-left (`.tp-sketchpad:before`), dashed search underline, and handwritten filter labels. | Modern rounded pill bar with standard input box. | Style filter bar as authentic `.tp-sketchpad` with washi tape accent. |
| **Puppy Cards Grid** | `.tp-sketches` with alternating vertical offset (`:nth-child(2n) { translate: 0 2.4rem }`), organic mask shapes, pastel watercolor washes, ink line borders, paw doodles, and hover tilts. | Standard rectangular cards with rounded corners. | Implement `.tp-sketch` component with organic mask, watercolor wash, and doodle ink border. |
| **Gone Home Stickers** | Tilted sticker ribbon `.tp-sketch__sticker--home` positioned at bottom-center of polaroid frame. | Badge at top-right corner. | Position `Gone home ♥` sticker at bottom-center with `-6deg` tilt. |
| **Bottom Gone Strip** | Carousel/strip of 4 gone-home alumni puppies at bottom of catalog. | Simple static cards. | Style as sketchbook strip with Polaroid frames. |

---

### 2.4 Puppy Detail Page (`/puppies/:slug`)
| Element | Reference Website | Current Clone | Action Required |
|---|---|---|---|
| **Gallery Viewport** | Pebble/arched mask frame with thumbnail strip and subtle shadow. | Standard rectangular image box. | Add organic frame mask and warm background wash. |
| **Typography & Specs** | Display serif title in Fraunces, specs pills with cocoa ink borders. | Standard Figtree text. | Ensure Fraunces serif for name and specs pills. |
| **Health Inclusions** | Styled as an authentic health certificate checklist with custom paw checkmarks. | Basic list with Lucide check icons. | Match authentic checklist layout. |
| **Inquiry Form** | `.tp-letter` with scalloped air-mail stamp (`.tp-letter__stamp`) in top-right corner and handwritten font. | Standard form container. | Apply `.tp-letter` styling with postage stamp accent. |
| **Prev/Next Navigation** | Circular puppy thumbnails at page bottom linking to next and previous pups. | Standard button links. | Style with circular puppy preview thumbnails. |

---

### 2.5 How It Works (`/how-it-works`)
| Element | Reference Website | Current Clone | Action Required |
|---|---|---|---|
| **Two Ways Home** | `.tp-ways` 3-column layout (Dubai Showroom, Teddy Bear illustration, Import Abroad) with arched frames. | 2-column tab switcher. | Enhance with arched frames and mascot illustration. |
| **4-Step Concierge** | `.tp-trail` dotted connected trail lines with numbered circular badges. | Standalone numbered boxes. | Add dotted path connecting steps (`.tp-trail>li:before`). |
| **Promise Section** | `.tp-paper` with circular watermark pattern and soft -0.6deg tilt. | Standard grid cards. | Apply `.tp-paper` patterned stationery background. |
| **Delivery & Benefits** | Cards with solid cocoa borders (`border: 3px solid var(--color-cocoa)`), soft shadows. | Thin 1px borders. | Apply 3px solid cocoa borders and soft shadows. |

---

### 2.6 Happy Families (`/happy-families`)
| Element | Reference Website | Current Clone | Action Required |
|---|---|---|---|
| **Page Background** | `.tp-memories` with warm vintage parchment stripes and radial glow. | Flat milk background. | Apply `.tp-memories` gradient and subtle stripe pattern. |
| **Customer Review** | Tilted quotation card with 5 gold stars and verified parent badge. | Flat card. | Add tilt angle and solid shadow. |
| **64-Photo Gallery** | Masonry layout with polaroid white borders, handwritten captions, and hover zoom. | CSS columns with basic borders. | Add polaroid white matting and handwritten captions. |
| **Lightbox Modal** | High-res image display with caption, counter, and keyboard shortcuts. | Implemented (already strong). | Refine close and arrow buttons with `.btn-ghost` styling. |

---

### 2.7 FAQ Page (`/faq`)
| Element | Reference Website | Current Clone | Action Required |
|---|---|---|---|
| **Page Atmosphere** | `.tp-faqroom` with ambient glowing warm lamp radial glow. | Flat milk background. | Add ambient glowing lamp effect in background. |
| **Accordions** | Thick cocoa border, handwritten question numbers, smooth expand/collapse. | Standard Tailwind accordions. | Enhance borders, numbers, and typography. |
| **Search & Categories** | Styled note card with washi tape or pin accent. | Modern input box. | Align search bar with sketchbook theme. |

---

### 2.8 Visit & Contact (`/contact`)
| Element | Reference Website | Current Clone | Action Required |
|---|---|---|---|
| **Mad-Libs Form** | `.tp-letter` with scalloped air-mail stamp in top-right corner (`.tp-letter__stamp`), vintage paper texture, dashed underline inputs. | Flat card with borders. | Apply `.tp-letter` and `.tp-letter__stamp` styling. |
| **Showroom Lounge** | `.tp-shopfront` with striped canopy awning (`var(--color-toffee)` and `var(--color-milk)` stripes), arched showroom window. | Standard card with photo. | Add striped canopy awning (`.tp-shopfront:before`) and arched frame. |
| **Contact Channels** | 4 tactile cards with 3px solid cocoa borders, solid drop shadows. | Thin 1px borders. | Apply 3px cocoa borders and tactile solid shadows. |

---

### 2.9 Global Footer
| Element | Reference Website | Current Clone | Action Required |
|---|---|---|---|
| **Background & Palette** | Deep midnight night cocoa `#24130b` (`--night`). | Muted dark cocoa. | Update to exact `#24130b` background. |
| **Left Mascot** | Puppy peeking from wicker basket or logo badge. | Plain text column. | Add brand mascot element. |
| **Typography** | Headings in Shantell Sans gold `text-honey`, links in `text-milk/90 hover:text-honey`. | Mixed styling. | Standardize to exact reference typography. |
| **Social Pills** | Rounded pill buttons with `border: 2px solid rgba(255, 253, 248, 0.3)`. | Basic square/pill tags. | Match reference border and hover glow. |

---

## 3. Responsive Breakpoint Comparison

| Viewport | Reference Behavior | Required Adjustments in Clone |
|---|---|---|
| **Desktop (1440px)** | Max container `--container-7xl: 80rem` or `110rem` centered; generous whitespace; hero lineup spans across stage; cards have alternating stagger. | Implement alternating stagger on `.tp-sketches > li:nth-child(2n)`. Ensure 80rem/110rem container rules. |
| **Laptop (1024px)** | 3-column catalog grid; 2-column contact layout; hero copy scales with `clamp()`; header collapses non-essential padding. | Use CSS `clamp()` for responsive fluid typography and padding. |
| **Tablet (768px)** | 2-column catalog grid; 3-column happy families masonry; two ways home stacks vertically; sticky header remains compact. | Adjust grid column breakpoints to prevent card squishing. |
| **Mobile (390px)** | Single-column or 2-column fluid grid; sticky bottom floating action pill with WhatsApp and phone call; hero sun disk scales to `min(86vw, 58rem)`. | Verify touch targets (`min-height: 48px`), test mobile drawer, and ensure floating action pill is pinned above safe-area. |

---

## 4. Prioritized Correction Roadmap

- **Priority 1: Design Tokens & CSS Component Library (`src/index.css`)**:
  - Incorporate all 694 authentic `.tp-*` CSS classes and animations from the reference stylesheet (`style_1.css`), including `.tp-scene`, `.tp-hero`, `.tp-sketch`, `.tp-sketches`, `.tp-board`, `.tp-paper`, `.tp-letter`, `.tp-shopfront`, `.tp-trail`, `.tp-dusk`, `.tp-night`, `.tp-memories`, `.tp-faqroom`, `.btn-primary`, `.btn-ghost`, and `.btn-whatsapp`.
- **Priority 2: Global Chrome Refinement (`Header.jsx`, `Footer.jsx`, `MobileDrawer.jsx`)**:
  - Header transparency on hero, animated paw prints on nav link hover, authentic deep green WhatsApp button with solid cocoa shadow, and exact footer layout.
- **Priority 3: Homepage Scene Reconstruction (`HomePage.jsx` & sections)**:
  - Reconstruct the 8 scenes: Hero with sun glow and puppy lineup bench, Meet the pups sketchbook grid, Two ways home with skyline doodles, Puppy journey board with dotted trail, Why trust us passport paper, Dusk testimonial, Starry night FAQ preview, and Dawn wicker basket CTA.
- **Priority 4: Puppy Catalog & Card Overhaul (`PuppyCard.jsx`, `PuppiesPage.jsx`, `GoneHomePage.jsx`)**:
  - Transform puppy cards into authentic `.tp-sketch` polaroids with watercolor washes, organic image masks, inked doodle borders, paw stamps, and alternating staggered grid.
- **Priority 5: Detail & Interior Pages Refinement (`PuppyDetailPage.jsx`, `HowItWorksPage.jsx`, `HappyFamiliesPage.jsx`, `FaqPage.jsx`, `ContactPage.jsx`)**:
  - Apply authentic letter stationery to contact & inquiry forms, striped awning canopy to showroom card, dotted trail lines to adoption journey, and atmospheric parchment to happy families.
- **Priority 6: Build Verification & Final Testing**:
  - Execute `npm run build` and `npm test` to verify zero regressions.
