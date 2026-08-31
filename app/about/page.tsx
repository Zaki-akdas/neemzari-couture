import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import BrandIntro from "@/components/BrandIntro";
import StoreExperience from "@/components/StoreExperience";
import Testimonials from "@/components/Testimonials";
import ConsultationSection from "@/components/ConsultationSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Neemzari Couture — a premium Brampton destination for Indian bridal, wedding and occasion couture.",
  openGraph: {
    title: `About | ${SITE.name}`,
    description:
      "A premium Brampton destination for Indian bridal, wedding and occasion couture.",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A showroom brought to life."
        description="Indian craftsmanship, contemporary design and personalized styling."
        image="/images/store.jpg"
      />
      <BrandIntro />
      <StoreExperience />
      <Testimonials />
      <ConsultationSection />
    </>
  );
}
