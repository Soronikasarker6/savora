# SAVORA Codex

> Every Flavor Has a Story.

The internal reference for the SAVORA restaurant website. Everything below is
drawn from the codebase itself — routes, services, brand tokens, and the
commands that build and ship it — kept in sync with `main`.

**Quick facts:** 10 routes · 16 components · 24 menu items across 6 cuisines · 5 services · no backend.

---

## Overview

SAVORA is a production Angular 20 single-page application for a premium
multi-cuisine restaurant brand — Fast Food, Pizza, Fried Chicken, Bangladeshi,
Chinese, and Thai. The app is built entirely from standalone components (no
NgModules), with routes lazy-loaded via `loadComponent` and state held in
Angular Signals rather than a store library.

There is no backend: menu, gallery, and testimonial data live as static
arrays inside their services, and the reservation form simulates a submission
rather than calling an API. Real customer contact — reservations, orders,
general enquiries — is routed to WhatsApp instead.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Angular 20.3.25 — standalone components, no NgModules |
| Language | TypeScript, strict mode |
| Styling | SCSS — CSS custom properties, BEM-inspired class names |
| Routing | Angular Router — lazy-loaded routes, view transitions, scroll-to-top on navigation |
| State | Angular Signals (`signal` / `computed`) — see `CartService` |
| Animation | `provideAnimations()` from `@angular/platform-browser/animations` |
| Data | None live — services return static in-memory arrays |
| Build tool | Angular CLI 20.3.30, application builder |
| Testing | Karma + Jasmine (scaffolded via `ng test`) |

---

## Architecture

Three folders carry the whole app: `components/` for reusable, mostly
presentational UI; `pages/` for routed, lazy-loaded views; `services/` for
injectable, in-memory data and state. `app.config.ts` wires the three
providers every standalone app needs — router, animations, and zone change
detection with event coalescing.

```
src/
├── app/
│   ├── components/        # navbar, hero, featured-categories, special-dishes,
│   │                       # chef-recommendation, story, statistics, gallery,
│   │                       # reservation-form, testimonials, faq, newsletter,
│   │                       # footer, floating-order-btn, scroll-to-top, loading-screen
│   ├── pages/              # home, menu, about, reservations, gallery, contact,
│   │                       # special-offers, privacy-policy, terms, not-found
│   ├── services/           # menu, reservation, testimonial, gallery, cart
│   ├── models/             # menu-item, reservation, testimonial, gallery-item
│   ├── app.routes.ts
│   ├── app.config.ts
│   └── app.component.ts
├── styles/
│   └── global.scss         # design tokens & global styles
└── index.html               # SEO meta + JSON-LD structured data
```

---

## Routes

Every route is lazy-loaded via `loadComponent` in `app.routes.ts`, each
carrying its own document title.

| Path | Component | Document title |
|---|---|---|
| `/` | HomeComponent | SAVORA — Every Flavor Has a Story |
| `/about` | AboutComponent | About Us — SAVORA |
| `/menu` | MenuComponent | Our Menu — SAVORA |
| `/reservations` | ReservationsComponent | Reserve a Table — SAVORA |
| `/gallery` | GalleryComponent | Gallery — SAVORA |
| `/contact` | ContactComponent | Contact Us — SAVORA |
| `/special-offers` | SpecialOffersComponent | Special Offers — SAVORA |
| `/privacy-policy` | PrivacyPolicyComponent | Privacy Policy — SAVORA |
| `/terms` | TermsComponent | Terms & Conditions — SAVORA |
| `/**` | NotFoundComponent | 404 Not Found — SAVORA |

---

## Brand System

| Token | Value |
|---|---|
| Primary | `#111111` Matte Black |
| Secondary | `#0F3D3E` Deep Teal |
| Accent | `#D4AF37` Luxury Gold |
| Accent hover | `#E5C76B` Champagne Gold |
| Background | `#0B0B0B` Near Black |
| Text | `#F8F6F2` Warm White |
| Heading font | Cinzel |
| Body font | Poppins |

---

## Data & Services

Five root-provided services hold everything the app renders. All are static
in-memory data except `CartService`, which is reactive.

| Service | Model | Holds |
|---|---|---|
| MenuService | MenuItem | 24 dishes across 6 categories — Fast Food, Pizza, Fried Chicken, Bangladeshi, Chinese, Thai |
| CartService | CartItem | Signals-based cart: `items`, computed `itemCount` & `total`; add / remove / update / clear |
| ReservationService | Reservation | Table booking fields — name, contact, date, time, guests, occasion, requests |
| GalleryService | GalleryItem | 12 masonry gallery images |
| TestimonialService | Testimonial | 6 customer reviews for the carousel |

> **No backend yet.** Reservation submission is simulated client-side. Wire a
> real endpoint into `reservation.service.ts` before relying on it for live
> bookings.

---

## Features

- Dark theme with glass-morphism surfaces
- Cinematic hero with parallax image
- Menu filtering, search, and quick-view modal
- Reactive reservation form with validation
- Masonry gallery with lightbox
- Auto-playing testimonials carousel
- Animated statistics counter
- Accordion FAQ
- Branded loading screen
- Sticky navbar with scroll behaviour
- Mobile drawer navigation
- Floating action button — reserve, WhatsApp, order
- Scroll-to-top control
- Pre-filled WhatsApp inquiry with site link
- SEO meta tags + JSON-LD structured data
- ARIA labels, keyboard navigation

---

## Setup & Commands

**Install**
```bash
npm install -g @angular/cli@20
npm install
```

**Develop**
```bash
ng serve   # → http://localhost:4200
```

**Build**
```bash
ng build --configuration production   # → dist/savora/browser
```

**Test**
```bash
ng test   # Karma + Jasmine
```

---

## Deployment

The project ships to two targets, and `<base href>` has to match whichever
one a given branch builds for.

**Vercel** — builds and serves from the domain root on `main`. `src/index.html`
carries `<base href="/">`.

**GitHub Pages** — `.github/workflows/deploy.yml` runs on push to `main`:
installs, runs `npm run build -- --base-href /savora/`, and publishes
`dist/savora/browser` via Pages. The `--base-href` flag overrides whatever is
committed in `src/index.html`, so the Pages build always resolves under the
`/savora/` project-page subpath regardless of the file's own value.

> `dist/` is committed straight into the repo — rebuild
> (`ng build --configuration production`) and commit the output whenever app
> code changes, or the checked-in bundle drifts from source.

---

## Recent Changes

| Date | Change | Commit |
|---|---|---|
| 14 Aug 2026 | Default branch switched to `main`; Pages workflow trigger updated to match | — |
| 14 Aug 2026 | Added `.github/workflows/deploy.yml` — GitHub Pages Actions deploy | `de960755` |
| 14 Aug 2026 | Production rebuild — fresh `dist/savora` output | `88860dab` |
| 14 Aug 2026 | Real contact number + pre-filled WhatsApp inquiry message rolled out sitewide | `68c307b6` |
| 29 Jun 2026 | Initial Vercel deployment | `c950a18f` |

---

## Notes & Gaps

- All imagery loads from the Unsplash CDN — swap for production assets before launch
- Reservation form simulates submission only — no backend endpoint wired up
- Cinzel + Poppins load from Google Fonts CDN in `index.html`
- `RouterLink` is imported but unused in `about.component.ts` — harmless, flagged by the Angular compiler
- `menu.component.scss` exceeds its component style budget by ~2 KB and has a Sass nesting-order deprecation warning

---

SAVORA Codex — generated from the `savora` repository, branch `main`. Every Flavor Has a Story.
