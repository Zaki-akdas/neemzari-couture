"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { testimonials } from "@/lib/data";
import { Container } from "@/components/ui";
import Reveal from "@/components/Reveal";

function Stars() {
  return (
    <div className="flex items-center justify-center gap-1 text-gold" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      6500,
    );
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <section className="bg-burgundy py-24 text-ivory lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow mb-5 text-gold-light">Client Stories</p>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
              Trust, because it <span className="italic">matters.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ivory/65">
              For wedding attire, personal service and important celebrations,
              trust matters.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-12">
              <Stars />
              <div className="relative mt-6 min-h-[9rem] sm:min-h-[8rem]">
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={index}
                    initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? { opacity: 1 } : { opacity: 0, y: -16 }}
                    transition={reduce ? { duration: 0 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="font-serif text-2xl leading-snug text-ivory sm:text-3xl"
                  >
                    &ldquo;{testimonials[index].quote}&rdquo;
                  </motion.blockquote>
                </AnimatePresence>
              </div>
              <AnimatePresence mode="wait">
                <motion.p
                  key={`author-${index}`}
                  initial={reduce ? { opacity: 1 } : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={reduce ? { duration: 0 } : { duration: 0.4 }}
                  className="mt-6 text-sm tracking-[0.16em] uppercase text-ivory/60"
                >
                  &mdash; {testimonials[index].name}
                </motion.p>
              </AnimatePresence>
              <p className="mt-1 text-xs tracking-[0.2em] uppercase text-gold-light">
                {testimonials[index].role}
              </p>
            </div>
          </Reveal>

          <div className="mt-10 flex items-center justify-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-gold" : "w-1.5 bg-ivory/30"
                }`}
              />
            ))}
          </div>

          <p className="mt-10 text-xs text-ivory/40">
            Placeholder testimonials for the demo. Real client reviews will appear
            here at launch.
          </p>
        </div>
      </Container>
    </section>
  );
}
