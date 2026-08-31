import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import LocationSection from "@/components/LocationSection";
import StoreExperience from "@/components/StoreExperience";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Visit Us",
  description: `Visit Neemzari Couture at ${SITE.address.full} inside Jaipur Gore Plaza. See hours and get directions.`,
  openGraph: {
    title: `Visit Us | ${SITE.name}`,
    description: "Visit our Brampton showroom inside Jaipur Gore Plaza.",
  },
};

export default function VisitPage() {
  return (
    <>
      <PageHeader
        eyebrow="Visit Us"
        title="Come experience the collection."
        description="Feel the fabrics, see the details and plan your perfect look in person."
        image="/images/store.jpg"
      />
      <LocationSection />
      <StoreExperience />
      <WhatsAppCTA />
    </>
  );
}
