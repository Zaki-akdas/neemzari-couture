import { SITE } from "./site";

/**
 * ─────────────────────────────────────────────────────────────
 *  Neemzari Couture — content data
 *
 *  All names, colourways, availability and pricing here are EDITABLE
 *  PLACEHOLDERS for the demo. Replace them with real Neemzari Couture
 *  photography and verified details before launch. Nothing here should
 *  be treated as a confirmed fact or an actual product name/price.
 * ─────────────────────────────────────────────────────────────
 */

export interface Garment {
  slug: string;
  name: string;
  category: "Bridal" | "Sherwani" | "Occasion" | "Custom";
  image: string;
  detailImage?: string;
  description: string;
  colours?: string[];
  customizable: boolean;
  note?: string;
}

export const categories = [
  {
    id: "bridal",
    eyebrow: "For the bride",
    title: "Bridal Couture",
    blurb: "Bridal lehengas, reception looks and wedding ensembles.",
    items: ["Bridal Lehengas", "Bridal Outfits", "Reception Looks"],
    cta: "Explore Bridal",
    href: "/bridal",
    image: "/images/bridal.jpg",
  },
  {
    id: "sherwani",
    eyebrow: "For the groom",
    title: "Sherwanis",
    blurb: "Traditional and contemporary groomswear with refined detailing.",
    items: ["Traditional", "Contemporary", "Wedding Looks"],
    cta: "Explore Sherwanis",
    href: "/sherwanis",
    image: "/images/sherwani.jpg",
  },
  {
    id: "occasion",
    eyebrow: "For the celebration",
    title: "Party & Occasion",
    blurb: "Sarees, dresses and lehengas for special occasions.",
    items: ["Sarees", "Dresses", "Lehengas", "Special-event Looks"],
    cta: "Explore Occasion Wear",
    href: "/occasion-wear",
    image: "/images/occasion.jpg",
  },
  {
    id: "custom",
    eyebrow: "Made around you",
    title: "Custom Couture",
    blurb: "Bespoke outfits, tailoring and personal styling.",
    items: ["Bespoke Outfits", "Tailoring", "Personal Styling"],
    cta: "Start Your Consultation",
    href: "/custom-couture",
    image: "/images/custom.jpg",
  },
];

/** Digital Couture Catalogue — editable placeholder looks. */
export const catalogue: Garment[] = [
  {
    slug: "heritage-bridal-lehenga",
    name: "Heritage Bridal Lehenga",
    category: "Bridal",
    image: "/images/bridal.jpg",
    detailImage: "/images/detail-sequin.jpg",
    description:
      "A grand bridal silhouette with layered dupattas and intricate embroidered detailing. Available for consultation and custom fit.",
    colours: ["Deep Burgundy", "Maroon", "Emerald"],
    customizable: true,
    note: "Available for consultation",
  },
  {
    slug: "royal-reception-set",
    name: "Royal Reception Set",
    category: "Bridal",
    image: "/images/reception-boutique.jpg",
    detailImage: "/images/detail-sequin.jpg",
    description:
      "A cinematic reception look with rich fabric and jewellery-forward styling. Personalised to your colour and silhouette.",
    colours: ["Emerald", "Antique Gold"],
    customizable: true,
    note: "Available for consultation",
  },
  {
    slug: "rose-bridal-ensemble",
    name: "Rose Bridal Ensemble",
    category: "Bridal",
    image: "/images/bridal-rose.jpg",
    detailImage: "/images/dupatta-detail.jpg",
    description:
      "A romantic bridal ensemble in rose and ivory with pearl detailing — a luminous choice for the celebration.",
    colours: ["Rose Gold", "Ivory", "Blush"],
    customizable: true,
    note: "Available for consultation",
  },
  {
    slug: "ivory-groom-sherwani",
    name: "Ivory Groom Sherwani",
    category: "Sherwani",
    image: "/images/sherwani.jpg",
    detailImage: "/images/detail-sequin.jpg",
    description:
      "A refined groom's sherwani with tonal embroidery and a draped silk dupatta. Tailored to fit.",
    colours: ["Ivory", "Champagne"],
    customizable: true,
    note: "Available for consultation",
  },
  {
    slug: "midnight-navy-sherwani",
    name: "Midnight Navy Sherwani",
    category: "Sherwani",
    image: "/images/sherwani-navy.jpg",
    detailImage: "/images/detail-sequin.jpg",
    description:
      "A contemporary navy-and-gold sherwani for the modern groom — bold, elegant and tailored.",
    colours: ["Midnight Navy", "Gold"],
    customizable: true,
    note: "Available for consultation",
  },
  {
    slug: "regal-wedding-sherwani",
    name: "Regal Wedding Sherwani",
    category: "Sherwani",
    image: "/images/groom-wedding.jpg",
    detailImage: "/images/detail-sequin.jpg",
    description:
      "A regal full wedding sherwani with a dramatic dupatta — ceremonial, polished and made to lead the moment.",
    colours: ["Ivory", "Gold"],
    customizable: true,
    note: "Available for consultation",
  },
  {
    slug: "emerald-silk-saree",
    name: "Emerald Silk Saree",
    category: "Occasion",
    image: "/images/saree-gold.jpg",
    detailImage: "/images/dupatta-detail.jpg",
    description:
      "A luxurious silk saree with an intricate gold border — an occasion classic with contemporary appeal.",
    colours: ["Emerald", "Burgundy", "Blush"],
    customizable: false,
    note: "Available for consultation",
  },
  {
    slug: "sunlit-occasion-lehenga",
    name: "Sunlit Occasion Lehenga",
    category: "Occasion",
    image: "/images/engagement-look.jpg",
    detailImage: "/images/detail-sequin.jpg",
    description:
      "A soft, sunlit occasion look with delicate embroidery and kundan jewellery — made for the celebration.",
    colours: ["Coral", "Gold"],
    customizable: true,
    note: "Available for consultation",
  },
  {
    slug: "atelier-bespoke-piece",
    name: "Atelier Custom Piece",
    category: "Custom",
    image: "/images/custom.jpg",
    detailImage: "/images/detail-sequin.jpg",
    description:
      "A bespoke piece designed around your vision in the Neemzari atelier. Fully customisable in colour, fabric and silhouette.",
    colours: ["Your palette"],
    customizable: true,
    note: "By consultation",
  },
  {
    slug: "coordinated-family-look",
    name: "Coordinated Family Look",
    category: "Custom",
    image: "/images/family-styling.jpg",
    detailImage: "/images/dupatta-detail.jpg",
    description:
      "A cohesive wedding wardrobe built for the whole family, styled to feel like one celebration.",
    colours: ["Emerald", "Ivory", "Burgundy"],
    customizable: true,
    note: "By consultation",
  },
  {
    slug: "gilded-detail-dupatta",
    name: "Gilded Detail Dupatta",
    category: "Occasion",
    image: "/images/dupatta-detail.jpg",
    detailImage: "/images/detail-sequin.jpg",
    description:
      "A detail shot of embroidered dupattas and borders — explore the textile detail in person.",
    colours: ["Antique Gold on Red"],
    customizable: true,
    note: "Available for consultation",
  },
];

/** Cinematic lookbook — editorial gallery. All images are unique. */
export const lookbook = [
  {
    category: "Bridal",
    title: "The Grand Bridal Look",
    image: "/images/bridal.jpg",
    lookSlug: "heritage-bridal-lehenga",
  },
  {
    category: "Reception",
    title: "Emerald Reception Moment",
    image: "/images/reception-boutique.jpg",
    lookSlug: "royal-reception-set",
  },
  {
    category: "Bridal",
    title: "The Rose Bride",
    image: "/images/bridal-rose.jpg",
    lookSlug: "rose-bridal-ensemble",
  },
  {
    category: "Groom",
    title: "The Refined Groom",
    image: "/images/sherwani.jpg",
    lookSlug: "ivory-groom-sherwani",
  },
  {
    category: "Groom",
    title: "Midnight Navy",
    image: "/images/sherwani-navy.jpg",
    lookSlug: "midnight-navy-sherwani",
  },
  {
    category: "Groom",
    title: "The Regal Groom",
    image: "/images/groom-wedding.jpg",
    lookSlug: "regal-wedding-sherwani",
  },
  {
    category: "Reception",
    title: "Affair in Silk",
    image: "/images/saree-gold.jpg",
    lookSlug: "emerald-silk-saree",
  },
  {
    category: "Party",
    title: "Sunlit Occasion",
    image: "/images/engagement-look.jpg",
    lookSlug: "sunlit-occasion-lehenga",
  },
  {
    category: "Details",
    title: "Sequin & Threadwork",
    image: "/images/detail-sequin.jpg",
    lookSlug: "gilded-detail-dupatta",
  },
  {
    category: "Details",
    title: "Dupatta & Borders",
    image: "/images/dupatta-detail.jpg",
    lookSlug: "gilded-detail-dupatta",
  },
  {
    category: "Family",
    title: "One Celebration",
    image: "/images/family-styling.jpg",
    lookSlug: "coordinated-family-look",
  },
];

/** Editorial testimonial placeholders — replace with authentic reviews. */
export const testimonials = [
  {
    quote:
      "Verified customer testimonial goes here. Share your experience with our styling, fit and service.",
    name: "Client Name",
    role: "Verified Customer",
  },
  {
    quote:
      "Verified customer testimonial goes here. Share your experience with our styling, fit and service.",
    name: "Client Name",
    role: "Verified Customer",
  },
  {
    quote:
      "Verified customer testimonial goes here. Share your experience with our styling, fit and service.",
    name: "Client Name",
    role: "Verified Customer",
  },
];

/** Custom couture consultation process. */
export const processSteps = [
  {
    step: "01",
    title: "Share Your Vision",
    text: "Tell us about your event, style and preferences.",
  },
  {
    step: "02",
    title: "Consult with a Stylist",
    text: "Discuss silhouettes, fabrics, colours and details.",
  },
  {
    step: "03",
    title: "Refine the Look",
    text: "Customize the design and fit around your requirements.",
  },
  {
    step: "04",
    title: "Prepare for Your Moment",
    text: "Finalize your outfit for the celebration.",
  },
];

/** FAQ — grounded, honest answers without unverified claims. */
export const faqs = [
  {
    q: "Where is Neemzari Couture located?",
    a: `We're inside Jaipur Gore Plaza at ${SITE.address.full}. See our Visit page for hours and directions.`,
  },
  {
    q: "What kind of clothing does Neemzari offer?",
    a: "We carry premium Indian bridal, wedding and occasion couture — bridal lehengas, reception looks, sarees, dresses, party wear and sherwanis, with a focus on personalized styling and custom tailoring.",
  },
  {
    q: "Can I book a styling consultation?",
    a: "Yes — our primary way to start is a consultation. Book online or reach out via WhatsApp or phone and a stylist will help you plan your look.",
  },
  {
    q: "Do you offer custom and bespoke designs?",
    a: "Yes. We work with you to shape a look around your vision, event and budget. Discuss silhouettes, fabrics, colours and details with a stylist.",
  },
  {
    q: "How do I enquire about a specific look?",
    a: "Use the 'Enquire via WhatsApp' button on any look to message us about availability, customization and pricing.",
  },
  {
    q: "What are your opening hours?",
    a: SITE.hours
      .map((h) => `${h.days}: ${h.time}`)
      .join(" · ") + ` — ${SITE.hoursNote}`,
  },
];

export const eventTypes = [
  "Wedding",
  "Reception",
  "Engagement",
  "Party",
  "Family Event",
  "Other",
];

export const lookingFor = [
  "Bridal",
  "Lehenga",
  "Saree",
  "Sherwani",
  "Reception",
  "Party Wear",
  "Custom Outfit",
  "Family Styling",
];
