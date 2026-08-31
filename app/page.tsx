import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import BrandIntro from "@/components/BrandIntro";
import CategoryGrid from "@/components/CategoryGrid";
import CollectionGrid from "@/components/CollectionGrid";
import BridalSection from "@/components/BridalSection";
import SherwaniSection from "@/components/SherwaniSection";
import OccasionWear from "@/components/OccasionWear";
import TextileDetail from "@/components/TextileDetail";
import CustomCouture from "@/components/CustomCouture";
import ConsultationSection from "@/components/ConsultationSection";
import WeddingStyling from "@/components/WeddingStyling";
import BridalLookbook from "@/components/BridalLookbook";
import Testimonials from "@/components/Testimonials";
import StoreExperience from "@/components/StoreExperience";
import LocationSection from "@/components/LocationSection";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <BrandIntro />
      <CategoryGrid />
      <CollectionGrid />
      <BridalSection />
      <SherwaniSection />
      <OccasionWear />
      <TextileDetail />
      <CustomCouture />
      <ConsultationSection />
      <WeddingStyling />
      <BridalLookbook />
      <Testimonials />
      <StoreExperience />
      <LocationSection />
      <WhatsAppCTA />
      <FAQ />
      <FinalCTA />
    </>
  );
}
