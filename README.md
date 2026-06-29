# SAVORA — Premium Multi-Cuisine Restaurant Website

> Every Flavor Has a Story.

A complete, production-ready Angular 20 application for **SAVORA** — a luxury multi-cuisine restaurant brand serving Fast Food, Pizza, Fried Chicken, Bangladeshi, Chinese, and Thai cuisine.

---

## Tech Stack

- **Angular 20** (Standalone Components)
- **TypeScript** (strict mode)
- **SCSS** (CSS custom properties, BEM-inspired)
- **Angular Router** (lazy-loaded routes, view transitions)
- **Angular Animations**
- **RxJS**
- **Angular Signals** (reactive state)

---

## Features

- ✅ Full dark theme with glass morphism effects
- ✅ SAVORA S-mark brand identity throughout
- ✅ Cinematic hero with parallax image
- ✅ Interactive menu with category filtering, search, and quick view modal
- ✅ Reactive reservation form with validation and success dialog
- ✅ Masonry gallery with lightbox
- ✅ Auto-playing testimonials carousel
- ✅ Animated statistics counter
- ✅ Accordion FAQ
- ✅ Loading screen with brand mark
- ✅ Sticky navbar with scroll behaviour
- ✅ Mobile drawer navigation
- ✅ Floating action button (FAB)
- ✅ Scroll-to-top button
- ✅ Cart service with Angular Signals
- ✅ All 10 pages complete
- ✅ SEO meta tags and structured data
- ✅ ARIA labels and keyboard navigation
- ✅ Fully responsive (mobile → 4K)

---

## Pages

| Route | Page |
|---|---|
| `/` | Home (full landing page) |
| `/menu` | Interactive Menu |
| `/about` | About, Chefs, Timeline |
| `/reservations` | Reservation Form |
| `/gallery` | Masonry Gallery |
| `/contact` | Contact, Hours, Map |
| `/special-offers` | Promotions |
| `/privacy-policy` | Privacy Policy |
| `/terms` | Terms & Conditions |
| `/**` | 404 Not Found |

---

## Installation & Setup

### Prerequisites
- Node.js 18+ 
- Angular CLI 20+

### Install
```bash
npm install -g @angular/cli@20
npm install
```

### Run Development Server
```bash
ng serve
```
Visit `http://localhost:4200`

### Production Build
```bash
ng build --configuration production
```

---

## Brand Guidelines

| Token | Value |
|---|---|
| Primary | `#111111` Matte Black |
| Secondary | `#0F3D3E` Deep Teal |
| Accent | `#D4AF37` Luxury Gold |
| Accent Hover | `#E5C76B` Champagne Gold |
| Background | `#0B0B0B` Near Black |
| Text | `#F8F6F2` Warm White |
| Heading Font | Cinzel |
| Body Font | Poppins |

---

## Project Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── navbar/
│   │   ├── hero/
│   │   ├── featured-categories/
│   │   ├── special-dishes/
│   │   ├── chef-recommendation/
│   │   ├── story/
│   │   ├── statistics/
│   │   ├── gallery/
│   │   ├── reservation-form/
│   │   ├── testimonials/
│   │   ├── faq/
│   │   ├── newsletter/
│   │   ├── footer/
│   │   ├── floating-order-btn/
│   │   ├── scroll-to-top/
│   │   └── loading-screen/
│   ├── pages/               # Lazy-loaded route pages
│   │   ├── home/
│   │   ├── menu/
│   │   ├── about/
│   │   ├── reservations/
│   │   ├── gallery/
│   │   ├── contact/
│   │   ├── special-offers/
│   │   ├── not-found/
│   │   ├── privacy-policy/
│   │   └── terms/
│   ├── services/            # Injectable services
│   │   ├── menu.service.ts
│   │   ├── reservation.service.ts
│   │   ├── testimonial.service.ts
│   │   ├── gallery.service.ts
│   │   └── cart.service.ts
│   ├── models/              # TypeScript interfaces
│   ├── app.routes.ts
│   ├── app.config.ts
│   └── app.component.ts
├── styles/
│   └── global.scss          # Design system & global styles
└── index.html
```

---

## Notes

- All images load from Unsplash CDN — replace with production assets for deployment
- The reservation form simulates API submission — wire to a real backend endpoint in `reservation.service.ts`
- The cart service uses Angular Signals for reactive state
- Google Fonts (Cinzel + Poppins) load via CDN in `index.html`
- Replace `+880-1700-000000` and address with real contact details

---

Made with care for **SAVORA Restaurant** — Every Flavor Has a Story.
