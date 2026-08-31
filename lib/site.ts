/**
 * Central single source of truth for business identity, NAP, and links.
 * Keep this file updated so NAP (Name / Address / Phone) stays consistent
 * everywhere — important for local SEO.
 */

export const SITE = {
  // Brand
  name: "Neemzari Couture",
  nameShort: "Neemzari",
  registeredName: "Neemzari Couture Inc.",
  tagline: "Indian Couture • Bridal • Wedding • Occasion",
  positioning: "INDIAN COUTURE • BRIDAL ELEGANCE • PERSONALIZED DESIGN",
  slogan: "Your Vision. Your Fit. Your Couture.",

  // NAP — keep identical across the site.
  address: {
    street: "8887 The Gore Rd",
    city: "Brampton",
    state: "ON",
    postal: "L6P 2K9",
    country: "Canada",
    full: "8887 The Gore Rd, Brampton, ON L6P 2K9, Canada",
    plaza: "Inside Jaipur Gore Plaza",
  },

  phone: {
    display: "+1 647-819-3146",
    tel: "+16478193146",
  },

  hours: [
    { days: "Tuesday — Saturday", time: "12:00 PM – 6:00 PM", order: 1 },
    { days: "Sunday", time: "11:30 AM – 5:00 PM", order: 2 },
    { days: "Monday", time: "Closed", closed: true, order: 3 },
  ] as HoursConfig,
  hoursNote: "Hours may change for appointments and special occasions.",

  maps: {
    // Google Maps embed (pin on the Gore Rd address)
    embedUrl:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED ||
      "https://www.google.com/maps?q=8887+The+Gore+Rd,%20Brampton,%20ON%20L6P+2K9&output=embed",
    // We'd use an API key here for a richer embed; the free embed works for now.
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=8887+The+Gore+Rd,+Brampton,+ON+L6P+2K9",
    // Opens the user's preferred maps app on mobile.
    appleMapsUrl:
      "https://maps.apple.com/?daddr=8887+The+Gore+Rd,+Brampton,+ON+L6P+2K9",
  },

  // WhatsApp / contact config — set in .env.local
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "16478193146",
  },
} as const;

export type HoursConfig = {
  days: string;
  time: string;
  order: number;
  closed?: boolean;
}[];

export type HoursRow = HoursConfig[number];
