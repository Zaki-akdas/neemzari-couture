import Link from "next/link";
import { processSteps } from "@/lib/data";
import { Container, Arrow } from "@/components/ui";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";

export default function CustomCouture() {
  return (
    <section className="relative overflow-hidden bg-ivory py-24 lg:py-32">
      <Container wide>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Copy + process */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow mb-6">Custom Couture</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-burgundy sm:text-5xl">
                Made around your <span className="italic text-gold">vision.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-espresso/70">
                Have something specific in mind? Connect with Neemzari Couture
                for personalized styling, design consultation and custom wedding
                attire.
              </p>
            </Reveal>

            <div className="mt-12 space-y-0">
              {processSteps.map((s, i) => (
                <Reveal key={s.step} delay={i * 90}>
                  <div className="group flex gap-6 border-t border-espresso/10 py-6 last:border-b">
                    <span className="font-serif text-3xl text-gold/80 transition-colors group-hover:text-gold">
                      {s.step}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-espresso">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-espresso/60">
                        {s.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Image */}
          <Reveal variant="fade-left" className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden frame-gold">
              <Parallax
                src="/images/custom.jpg"
                alt="Neemzari Couture atelier — bespoke tailoring"
                className="h-full w-full"
                strength={30}
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[0.6rem] tracking-[0.28em] uppercase text-gold-light">
                  The Atelier
                </p>
                <p className="mt-1 font-serif text-2xl text-ivory">
                  Bespoke, by consultation
                </p>
                <Link
                  href="/#consult"
                  className="btn-primary group mt-4 !px-6 !py-3"
                >
                  Start Your Consultation
                  <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
