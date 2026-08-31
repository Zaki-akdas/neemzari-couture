import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import BridalLookbook from "@/components/BridalLookbook";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Lookbook",
  description:
    "A cinematic lookbook of bridal, groom, reception, party and detail looks from Neemzari Couture Brampton.",
  openGraph: {
    title: `Lookbook | ${SITE.name}`,
    description:
      "Explore the Neemzari Couture lookbook — bridal, groom, reception, party and detail looks.",
  },
};

export default function LookbookPage() {
  return (
    <>
      <PageHeader
        eyebrow="Lookbook"
        title="A visual journal of moments."
        description="Bridal, groom, reception, party and detail looks — enquire about any piece."
        image="/images/hero.jpg"
      />
      <BridalLookbook />
      <WhatsAppCTA />
    </>
  );
}
