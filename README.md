# Neemzari Couture

A premium luxury Indian couture website for **Neemzari Couture** — an Indian
fashion and bridal couture boutique inside **Jaipur Gore Plaza**, Brampton, Ontario.

Built as a **production-grade Next.js 15 + TypeScript + Tailwind** app. It is
designed to feel like the digital extension of an upscale couture showroom:
editorial, exclusive and **consultation-driven** (not an e-commerce template).

> **Core concept** — *INDIAN COUTURE • BRIDAL ELEGANCE • PERSONALIZED DESIGN*
> **Positioning** — *Your Vision. Your Fit. Your Couture.*

---

## ✦ What makes it different

- **No "Add to Cart."** The primary conversions are **Book a Consultation**,
  **Consult with a Stylist**, **Enquire via WhatsApp** and **Visit the Store**.
- **Couture-first UX** — digital catalogue is presented as *looks* to view and
  enquire about, not a marketplace grid.
- **Luxury editorial aesthetic** — restrained ornamentation, confident
  typography, generous spacing, cinematic photography.
- **Mobile-first** — sticky **BOOK | WHATSAPP | CALL** bar, swipeable lookbook,
  full-screen lightbox, large imagery.
- **Local-SEO ready** — NAP, LocalBusiness `ClothingStore` schema, keywords,
  sitemap, robots.txt, Open Graph, image alt text, SSG.

---

## ✦ Tech stack

| Layer        | Choice                                   |
| ------------ | ---------------------------------------- |
| Framework    | Next.js 15 (App Router, React 19)        |
| Language     | TypeScript (strict)                      |
| Styling      | Tailwind CSS + a custom luxury palette   |
| Fonts        | Cormorant Garamond (serif) + Manrope (sans), self-hosted via `next/font` |
| Static gen   | 21 routes, SSG for catalogue + sitemap   |
| Images       | Native `<img>` (unoptimized for the demo; swap to `next/image` for AVIF/WebP + srcset) |
| CMS (future) | Supabase (`supabase/schema.sql` provided)|

---

## ✦ Getting started

```bash
cd neemzari-couture
npm install
npm run dev        # http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

---

## ✦ Project structure

```
neemzari-couture/
├── app/
│   ├── layout.tsx            # Fonts, metadata, JSON-LD schema, global nav/footer
│   ├── page.tsx              # Homepage — full courture experience
│   ├── globals.css           # Design system, animations, reduced-motion
│   ├── icon.svg / sitemap.ts / robots.ts / not-found.tsx
│   ├── collections/          # Full catalogue page
│   ├── bridal/  sherwanis/  occasion-wear/  custom-couture/
│   ├── lookbook/  about/  visit/
│   └── looks/[slug]/         # Product detail experience (SSG)
├── components/               # One component per spec'd section + primitives
├── lib/
│   ├── site.ts               # Single source of truth: NAP, hours, maps, phone
│   ├── data.ts               # Collections, catalogue, lookbook, testimonials, FAQ
│   └── whatsapp.ts           # Builds WhatsApp deep-links (dynamic look name)
└── supabase/schema.sql       # CMS foundation (collections/products/consultations…)
```

### Components (mirrors the requested structure)

`AnnouncementBar` · `Navbar` · `MobileActionBar` · `Hero` · `BrandIntro` ·
`CategoryGrid` · `CollectionGrid` · `ProductCard` · `LookGallery` · `BridalSection` ·
`BridalLookbook` · `SherwaniSection` · `OccasionWear` · `TextileDetail` ·
`CustomCouture` · `ConsultationSection` · `ConsultationForm` · `WeddingStyling` ·
`Testimonials` · `StoreExperience` · `LocationSection` · `OpeningHours` ·
`WhatsAppCTA` · `FAQ` · `FinalCTA` · `Footer` · `PageHeader` · `Reveal` · `ui`

---

## ✦ Business information

- **Brand:** Neemzari Couture (registered: Neemzari Couture Inc.)
- **Address:** 8887 The Gore Rd, Brampton, ON L6P 2K9, Canada — **Inside Jaipur Gore Plaza**
- **Phone:** +1 647-819-3146
- **Hours:** Tue–Sat 12:00–6:00 PM · Sun 11:30 AM–5:00 PM · Monday Closed

---

## ✦ Configuration (`.env.local`)

Copy `.env.example` → `.env.local` and set values.

| Variable | Purpose |
| -------- | ------- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp Business number (digits only). Defaults to `16478193146`. **Verify this line is on WhatsApp Business before launch.** |
| `NEXT_PUBLIC_GOOGLE_MAPS_EMBED` | Google Maps embed URL for the Location section. |
| `NEXT_PUBLIC_SUPABASE_URL` / `_ANON_KEY` | For a future Supabase integration. |
| `NEXT_PUBLIC_CONSULTATION_ENDPOINT` | Endpoint for the consultation form. Until set, the form shows an honest demo state + WhatsApp/Call fallback (no fake "received" claim). |

---

## ✦ Notes & honesty guardrails

The brief asked us to **not invent facts**. Accordingly:

- Testimonials are **clearly labelled placeholders** ("Verified customer
  testimonial goes here."), to be swapped for authentic reviews.
- Catalogue style names / colours are **editable placeholders**; no prices are
  shown. Availability, colourways and pricing are confirmed at consultation.
- The announcement bar avoids claiming live appointment availability.
- No years-in-business, designer or manufacturing claims were fabricated.
- The consultation form only shows the "Thank you… received" success state
  when a backend endpoint is configured; otherwise it routes to WhatsApp/phone.

---

## ✦ Next steps / roadmap

1. **Replace placeholder imagery** with real Neemzari Couture photography. The demo ships with 18 distinct editorial images (every catalogue look and lookbook item uses its own photo — no reuse).
2. **Verify the WhatsApp number** is enabled for WhatsApp Business; keep
   `.env.local` updated.
3. **Wire a backend** — set `NEXT_PUBLIC_CONSULTATION_ENDPOINT` or connect
   Supabase (`supabase/schema.sql`) so request submissions persist.
4. **Enable `next/image`** for automatic AVIF/WebP + responsive `srcset` when
   real assets are in place.
5. **Connect Instagram + Google Business reviews** (the layout is ready for it).
6. **Add appointment scheduling** in a future phase (not activated yet).

Remember the guiding principle: **sell the experience before you sell the
outfit** — *DISCOVER → ADMIRE → TRUST → ENQUIRE → CONSULT → VISIT*.
