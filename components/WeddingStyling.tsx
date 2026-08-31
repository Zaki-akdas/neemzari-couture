import Link from "next/link";
import { Container, Arrow } from "@/components/ui";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";

const audience = ["Bridal", "Groom", "Parents", "Bridesmaids", "Family"];

export default function WeddingStyling() {
  return (
    <section className="bg-ivory-deep py-24 lg:py-32">
      <Container wide>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Image */}
          <Reveal variant="fade-right" className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden frame-gold">
              <Parallax
                src="/images/family-styling.jpg"
                alt="Coordinated family wedding styling"
                className="h-full w-full"
                strength={30}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="text-[0.6rem] tracking-[0.28em] uppercase text-gold-light">
                  Family &amp; Wedding Styling
                </p>
                <p className="mt-1 font-serif text-2xl text-ivory">One celebration</p>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow mb-6">Family &amp; Wedding Styling</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-burgundy sm:text-5xl">
                One celebration. <span className="italic text-gold">Every look.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-espresso/70">
                Build a cohesive wedding wardrobe for brides, grooms and family
                members with personalized styling guidance.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-8 flex flex-wrap gap-3">
                {audience.map((a) => (
                  <span
                    key={a}
                    className="rounded-full border border-espresso/15 px-4 py-2 text-[0.66rem] tracking-[0.14em] uppercase text-espresso/70"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={280}>
              <Link href="/#consult" className="btn-primary group mt-10">
                Plan Your Wedding Looks
                <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
