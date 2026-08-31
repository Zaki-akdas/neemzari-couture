"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui";

const frames = [
  { src: "/images/detail-sequin.jpg", caption: "Sequin & Threadwork" },
  { src: "/images/dupatta-detail.jpg", caption: "Dupatta & Borders" },
  { src: "/images/detail.jpg", caption: "Embroidery" },
];

/**
 * Details Make the Look — an immersive full-screen textile section with slow,
 * automatic crossfades. Pauses when the user prefers reduced motion.
 */
export default function TextileDetail() {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = setInterval(() => {
      if (!paused.current) setIndex((i) => (i + 1) % frames.length);
    }, 5200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onVisibility = () => {
      paused.current = document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  return (
    <section className="relative overflow-hidden bg-espresso">
      <Container wide>
        <div className="py-24 lg:py-36">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="eyebrow mb-4 text-gold-light">Craftsmanship</p>
            <h2 className="font-serif text-4xl leading-tight text-ivory sm:text-5xl">
              Details make the <span className="italic text-gold-light">look.</span>
            </h2>
          </div>

          {/* Crossfade frame */}
          <div className="relative mx-auto aspect-[16/10] max-w-5xl overflow-hidden frame-gold">
            {frames.map((f, i) => (
              <img
                key={f.src + i}
                src={f.src}
                alt={`${f.caption} — Indian couture textile detail`}
                loading="lazy"
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-6">
              <p className="text-[0.62rem] tracking-[0.26em] uppercase text-ivory/80">
                {frames[index].caption}
              </p>
              <div className="flex items-center gap-2">
                {frames.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Show ${frames[i].caption}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === index ? "w-6 bg-gold" : "w-1.5 bg-ivory/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-ivory/55">
            Embroidery, threadwork, beading, borders and dupatta detail. See the
            texture up close at the store.
          </p>
        </div>
      </Container>
    </section>
  );
}
