import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import { Container } from "@/components/ui";

export default function BrandIntro() {
  return (
    <section className="bg-ivory py-24 lg:py-32">
      <Container wide>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Image */}
          <Reveal variant="fade-right" className="lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden frame-gold">
              <Parallax
                src="/images/brand-intro.jpg"
                alt="A Neemzari Couture bride in maroon silk with gold embroidery"
                className="h-full w-full"
                strength={34}
              />
              <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                <p className="text-xs tracking-[0.22em] uppercase text-ivory/85">
                  Personalised styling • Custom fit
                </p>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow mb-6">The Neemzari Experience</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-burgundy sm:text-5xl lg:text-6xl">
                More than an <span className="italic text-gold">outfit.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <div className="hairline mt-7" />
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-7 text-lg leading-relaxed text-espresso/80">
                From bridal celebrations to special occasions, Neemzari Couture
                brings together Indian craftsmanship, contemporary design and
                personalized styling.
              </p>
              <p className="mt-5 text-base leading-relaxed text-espresso/70">
                Explore the collection, discover your preferred aesthetic and
                connect with a stylist to create a look that feels uniquely
                yours.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-10 border-t border-espresso/10 pt-8 text-[0.68rem] tracking-[0.24em] uppercase text-espresso/55">
                Your Vision. Your Fit.{" "}
                <span className="text-gold">Your Couture.</span>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
