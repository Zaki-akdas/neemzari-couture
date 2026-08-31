import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import SherwaniSection from "@/components/SherwaniSection";
import CollectionShowcase from "@/components/CollectionShowcase";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Sherwanis & Groomswear",
  description:
    "Sherwanis, wedding attire and contemporary Indian formalwear at Neemzari Couture Brampton.",
  openGraph: {
    title: `Sherwanis & Groomswear | ${SITE.name}`,
    description:
      "Discover sherwanis and contemporary Indian formalwear for grooms.",
  },
};

export default function SherwanisPage() {
  return (
    <>
      <PageHeader
        eyebrow="Grooms & Men"
        title="The groom, redefined."
        description="Sherwanis, wedding attire and contemporary Indian formalwear — styled around you."
        image="/images/sherwani.jpg"
      />
      <SherwaniSection />
      <CollectionShowcase title="Groomswear looks." filter="Sherwani" />
      <WhatsAppCTA />
    </>
  );
}
