import Link from "next/link";
import { Container, Arrow } from "@/components/ui";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";

const highlights = [
  "Bridal Lehengas",
  "Reception Outfits",
  "Custom Bridal Looks",
  "Family Wedding Styling",
];

export default function BridalSection() {
  return (
    <section className="relative bg-espresso py-24 text-ivory lg:py-36">
      <Container wide>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          {/* Imagery collage */}
          <div className="relative lg:col-span-6">
            <Reveal variant="fade-right">
              <div className="relative aspect-[3/4] overflow-hidden frame-gold">
                <Parallax
                  src="/images/look-bridal.jpg"
                  alt="Bridal lehengas and reception looks at Neemzari Couture"
                  className="h-full w-full"
                  strength={30}
                />
              </div>
            </Reveal>
            <Reveal delay={150} variant="scale">
              <div className="absolute -bottom-10 -right-4 hidden w-48 overflow-hidden border-4 border-espresso sm:block">
                <img
                  src="/images/detail-sequin.jpg"
                  alt="Embroidered bridal fabric detail"
                  className="aspect-[3/4] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          {/* Copy */}
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow mb-6 text-gold-light">The Bridal Collection</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl">
                For the bride who wants her moment to feel{" "}
                <span className="italic text-gold-light">her own.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ivory/75">
                Discover bridal and reception looks designed for unforgettable
                celebrations, with personalized styling and custom-fit options.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 text-sm text-ivory/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/#consult" className="btn-gold group">
                  Book Bridal Consultation
                  <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link href="/lookbook" className="btn-ghost-light group">
                  View Bridal Lookbook
                  <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
