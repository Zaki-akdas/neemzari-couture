import Link from "next/link";
import { SITE } from "@/lib/site";
import { Container, Arrow } from "@/components/ui";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";

const notes = [
  "Ornate chandeliers",
  "Rich fabrics",
  "Indian couture",
  "Luxury showroom",
];

export default function StoreExperience() {
  return (
    <section className="relative overflow-hidden bg-ivory py-24 lg:py-32">
      <Container wide>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Copy */}
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow mb-6">The Store Experience</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-burgundy sm:text-5xl">
                Come experience the <span className="italic text-gold">collection.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-espresso/70">
                See the fabrics, details and silhouettes in person and speak
                with the team about your perfect look.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <ul className="mt-8 grid grid-cols-2 gap-x-8 gap-y-3">
                {notes.map((n) => (
                  <li key={n} className="flex items-center gap-3 text-sm text-espresso/75">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {n}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={280}>
              <Link href="/visit" className="btn-primary group mt-10">
                Visit the Store
                <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          {/* Image */}
          <Reveal variant="fade-left" className="lg:col-span-6">
            <div className="relative aspect-[16/10] overflow-hidden frame-gold">
              <Parallax
                src="/images/store.jpg"
                alt="Neemzari Couture showroom interior"
                className="h-full w-full"
                strength={30}
              />
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-espresso/70 p-5 backdrop-blur-sm">
                <p className="text-[0.62rem] tracking-[0.22em] uppercase text-ivory/80">
                  {SITE.address.plaza}
                </p>
                <a href={`tel:${SITE.phone.tel}`} className="text-xs tracking-[0.16em] uppercase text-gold-light hover:text-ivory">
                  {SITE.phone.display}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
