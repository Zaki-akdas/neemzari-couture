import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import BrandIntro from "@/components/BrandIntro";
import CategoryGrid from "@/components/CategoryGrid";
import BridalSection from "@/components/BridalSection";
import SherwaniSection from "@/components/SherwaniSection";
import CustomCouture from "@/components/CustomCouture";
import ConsultationSection from "@/components/ConsultationSection";
import BridalLookbook from "@/components/BridalLookbook";
import Testimonials from "@/components/Testimonials";
import StoreExperience from "@/components/StoreExperience";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

/**
 * Homepage — curated for desktop. Sections that have their own dedicated
 * pages (CollectionGrid, OccasionWear, TextileDetail, WeddingStyling,
 * LocationSection) are removed to keep the homepage focused and concise.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <BrandIntro />
      <CategoryGrid />
      <BridalSection />
      <SherwaniSection />
      <CustomCouture />
      <ConsultationSection />
      <BridalLookbook />
      <Testimonials />
      <StoreExperience />
      <WhatsAppCTA />
      <FAQ />
      <FinalCTA />
    </>
  );
}
