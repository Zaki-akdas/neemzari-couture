import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import OccasionWear from "@/components/OccasionWear";
import CollectionShowcase from "@/components/CollectionShowcase";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Occasion Wear",
  description:
    "Sarees, lehengas, dresses and contemporary Indian occasion wear at Neemzari Couture Brampton.",
  openGraph: {
    title: `Occasion Wear | ${SITE.name}`,
    description:
      "Sarees, lehengas and dresses for every special occasion.",
  },
};

export default function OccasionWearPage() {
  return (
    <>
      <PageHeader
        eyebrow="Occasion Wear"
        title="Made for the invitation."
        description="Sarees, lehengas, dresses and contemporary Indian outfits for the celebrations ahead."
        image="/images/occasion.jpg"
      />
      <OccasionWear />
      <CollectionShowcase title="Occasion looks." filter="Occasion" />
      <WhatsAppCTA />
    </>
  );
}
