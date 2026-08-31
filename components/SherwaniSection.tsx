import Link from "next/link";
import { Container, Arrow } from "@/components/ui";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";

export default function SherwaniSection() {
  return (
    <section className="relative overflow-hidden bg-ivory py-24 lg:py-32">
      <Container wide>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Copy */}
          <div className="order-2 lg:order-1 lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-6">Grooms &amp; Men</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-burgundy sm:text-5xl">
                The groom, <span className="italic text-gold">redefined.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-espresso/70">
                Sherwanis, wedding attire and contemporary Indian formalwear
                &mdash; tailored to the moment, styled around you.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <ul className="mt-8 space-y-3">
                {["Sherwanis", "Wedding Attire", "Contemporary Indian Formalwear"].map(
                  (t) => (
                    <li key={t} className="flex items-center gap-3 text-sm text-espresso/75">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {t}
                    </li>
                  ),
                )}
              </ul>
            </Reveal>
            <Reveal delay={280}>
              <Link href="/sherwanis" className="btn-outline group mt-10">
                Explore Groomswear
                <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          {/* Image */}
          <Reveal variant="fade-left" className="order-1 lg:order-2 lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden frame-gold lg:aspect-[16/10]">
              <Parallax
                src="/images/sherwani.jpg"
                alt="Ivory and gold sherwani for a groom"
                className="h-full w-full"
                strength={36}
              />
              <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between p-7">
                <div>
                  <p className="text-[0.6rem] tracking-[0.28em] uppercase text-gold-light">
                    Groomswear
                  </p>
                  <p className="mt-1 font-serif text-2xl text-ivory">The Ivory Sherwani</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
