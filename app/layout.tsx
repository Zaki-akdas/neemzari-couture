import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import ScrollProgress from "@/components/ScrollProgress";

// Self-hosted, optimized fonts (downloaded at build time).
const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const title = "Neemzari Couture Brampton | Indian Bridal & Couture";
const description =
  "Discover Neemzari Couture in Brampton for bridal lehengas, sarees, sherwanis, occasion wear and personalized Indian couture styling.";

export const metadata: Metadata = {
  metadataBase: new URL("https://neemzari-couture.example.com"),
  title: {
    default: title,
    template: `%s | ${SITE.name}`,
  },
  description,
  keywords: [
    "Neemzari Couture Brampton",
    "Indian bridal wear Brampton",
    "Indian bridal boutique Brampton",
    "Lehenga Brampton",
    "Sherwani Brampton",
    "Indian wedding dresses Brampton",
    "Indian fashion Brampton",
    "Bridal couture Brampton",
    "Indian clothing near me",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://neemzari-couture.example.com",
    siteName: SITE.name,
    title,
    description,
    images: [{ url: "/images/hero.jpg", width: 1600, height: 900, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://neemzari-couture.example.com" },
};

export const viewport: Viewport = {
  themeColor: "#4a1221",
  width: "device-width",
  initialScale: 1,
  // Allow env(safe-area-inset-*) so the sticky mobile action bar clears
  // the iOS home indicator.
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: SITE.name,
  alternateName: SITE.registeredName,
  description,
  url: "https://neemzari-couture.example.com",
  image: "https://neemzari-couture.example.com/images/store.jpg",
  telephone: SITE.phone.tel,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.postal,
    addressCountry: "CA",
  },
  geo: { "@type": "GeoCoordinates", latitude: 43.7766, longitude: -79.7396 },
  openingHoursSpecification: SITE.hours
    .filter((h) => !h.closed)
    .map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek:
        h.days.includes("Tuesday")
          ? ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
          : ["Sunday"],
      opens: "12:00",
      closes: "18:00",
    })),
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-ivory text-espresso">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        <AnnouncementBar />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
