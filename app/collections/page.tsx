import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import CategoryGrid from "@/components/CategoryGrid";
import CollectionShowcase from "@/components/CollectionShowcase";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Explore the Neemzari Couture collections — bridal, sherwanis, occasion wear and custom couture in Brampton.",
  openGraph: {
    title: `Collections | ${SITE.name}`,
    description:
      "Explore the Neemzari Couture collections — bridal, sherwanis, occasion wear and custom couture.",
  },
};

export default function CollectionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Collection"
        title="Couture for every moment."
        description="From bridal to occasion, each look is curated and made available for consultation."
        image="/images/hero.jpg"
      />
      <CategoryGrid />
      <CollectionShowcase title="The full catalogue." />
      <WhatsAppCTA />
    </>
  );
}
