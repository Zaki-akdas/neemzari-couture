import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import BridalSection from "@/components/BridalSection";
import CollectionShowcase from "@/components/CollectionShowcase";
import TextileDetail from "@/components/TextileDetail";
import ConsultationSection from "@/components/ConsultationSection";

export const metadata: Metadata = {
  title: "Bridal Couture",
  description:
    "Bridal lehengas, reception outfits and custom bridal looks at Neemzari Couture Brampton. Book a bridal consultation.",
  openGraph: {
    title: `Bridal Couture | ${SITE.name}`,
    description:
      "Discover bridal lehengas, reception looks and custom bridal styling in Brampton.",
  },
};

export default function BridalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Bridal Couture"
        title="For the moment that marks your story."
        description="Bridal lehengas, reception looks and personalized styling for unforgettable celebrations."
        image="/images/bridal.jpg"
      />
      <BridalSection />
      <CollectionShowcase title="Bridal looks." filter="Bridal" />
      <TextileDetail />
      <ConsultationSection />
    </>
  );
}
