import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import CustomCouture from "@/components/CustomCouture";
import ConsultationSection from "@/components/ConsultationSection";
import CollectionShowcase from "@/components/CollectionShowcase";

export const metadata: Metadata = {
  title: "Custom Couture",
  description:
    "Bespoke outfits, tailoring and personalized styling at Neemzari Couture Brampton. Start your consultation.",
  openGraph: {
    title: `Custom Couture | ${SITE.name}`,
    description:
      "Personalized styling, design consultation and custom wedding attire.",
  },
};

export default function CustomCouturePage() {
  return (
    <>
      <PageHeader
        eyebrow="Custom Couture"
        title="Made around your vision."
        description="Bespoke outfits, tailoring and personal styling — designed around you."
        image="/images/custom.jpg"
      />
      <CustomCouture />
      <CollectionShowcase title="Built to order." filter="Custom" />
      <ConsultationSection />
    </>
  );
}
