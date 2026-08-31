"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { lookbook } from "@/lib/data";
import { whatsappLookUrl } from "@/lib/whatsapp";
import { Container, Arrow, WhatsAppIcon } from "@/components/ui";
import Reveal from "@/components/Reveal";

const FILTERS = ["All", "Bridal", "Groom", "Reception", "Party", "Family", "Details"];

export default function BridalLookbook() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<number | null>(null);
  const reduce = useReducedMotion();

  const items = useMemo(
    () => (filter === "All" ? lookbook : lookbook.filter((l) => l.category === filter)),
    [filter],
  );

  const close = useCallback(() => setActive(null), []);
  const go = useCallback(
    (dir: number) => {
      setActive((cur) => (cur === null ? cur : (cur + dir + items.length) % items.length));
    },
    [items.length],
  );

  // Keyboard + scroll lock for the lightbox.
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, go]);

  // Touch swipe support for mobile lightbox navigation.
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      const dy = e.changedTouches[0].clientY - touchStartY.current;
      // Only trigger if horizontal swipe is dominant (dx > dy) and far enough.
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
        if (dx < 0) go(1); // swipe left → next
        else go(-1);       // swipe right → prev
      }
    },
    [go],
  );

  const activeItem = active !== null ? items[active] : null;
  const t = reduce ? { duration: 0 } : undefined;

  return (
    <>
      <section className="bg-ivory py-24 lg:py-32">
        <Container>
          <Reveal>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="eyebrow mb-4">The Lookbook</p>
              <h2 className="font-serif text-4xl leading-tight text-burgundy sm:text-5xl">
                A visual journal of <span className="italic text-gold">moments.</span>
              </h2>
            </div>
          </Reveal>

          {/* Filters */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-4 py-2 text-[0.66rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300 ${
                  filter === f
                    ? "bg-burgundy text-ivory shadow-lg shadow-burgundy/20"
                    : "border border-espresso/15 text-espresso/60 hover:border-burgundy hover:text-burgundy"
                }`}
                aria-pressed={filter === f}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Gallery (animated on filter change) */}
          <motion.div layout className="grid grid-cols-2 gap-4 md:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {items.map((item, i) => (
                <motion.button
                  key={item.title}
                  layout
                  initial={reduce ? false : { opacity: 0, scale: 0.92, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={t}
                  onClick={() => setActive(items.indexOf(item))}
                  whileHover={reduce ? undefined : { y: -6 }}
                  className={`group relative overflow-hidden bg-espresso text-left ${
                    i === 0 ? "col-span-2 row-span-2 md:col-span-1" : ""
                  }`}
                  aria-label={`View ${item.title}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className={`img-zoom h-full w-full object-cover ${
                      i === 0 ? "aspect-[4/5] md:aspect-[3/4]" : "aspect-[3/4]"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-[2] translate-x-[-120%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-[1000ms] ease-out group-hover:translate-x-[120%]"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <p className="text-[0.6rem] tracking-[0.24em] uppercase text-gold-light">
                      {item.category}
                    </p>
                    <p className="mt-1 font-serif text-lg text-ivory">{item.title}</p>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>

          <p className="mt-8 text-center text-sm text-espresso/55">
            Tap any look to open the full-screen gallery. Enquiries open directly in WhatsApp.
          </p>
        </Container>
      </section>

      {/* Full-screen lightbox */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${activeItem.title} — Neemzari Couture lookbook`}
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={t}
            className="fixed inset-0 z-[90] flex flex-col bg-espresso/95 backdrop-blur-sm"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="flex items-center justify-between p-4 sm:p-6">
              <p className="text-[0.62rem] tracking-[0.26em] uppercase text-ivory/70">
                {activeItem.category}
              </p>
              <button
                onClick={close}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors hover:bg-ivory/10"
                aria-label="Close lookbook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="relative flex flex-1 items-center justify-center px-4 pb-6 sm:px-12">
              <button
                onClick={() => go(-1)}
                className="absolute left-2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:bg-ivory/10 sm:left-3 sm:h-12 sm:w-12"
                aria-label="Previous look"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="sm:h-[22px] sm:w-[22px]"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeItem.title}
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="max-h-[60vh] max-w-full object-contain sm:max-h-full"
                  initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? { opacity: 1 } : { opacity: 0 }}
                  transition={t}
                />
              </AnimatePresence>
              <button
                onClick={() => go(1)}
                className="absolute right-2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:bg-ivory/10 sm:right-3 sm:h-12 sm:w-12"
                aria-label="Next look"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="sm:h-[22px] sm:w-[22px]"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-ivory/15 px-4 py-4 sm:px-12 sm:p-5">
              <div>
                <p className="font-serif text-lg text-ivory sm:text-xl">{activeItem.title}</p>
                <div className="flex items-center gap-3">
                  <p className="text-[0.62rem] tracking-[0.22em] uppercase text-ivory/55">
                    Neemzari Couture
                  </p>
                  <span className="text-[0.6rem] tracking-[0.16em] text-ivory/40">
                    {active !== null ? `${active + 1} / ${items.length}` : ""}
                  </span>
                </div>
              </div>
              <Link href={`/looks/${activeItem.lookSlug}`} className="btn-gold !px-5 !py-3">
                View <span className="hidden sm:inline">Look</span>
                <Arrow className="h-4 w-4" />
              </Link>
              <a
                href={whatsappLookUrl(activeItem.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors hover:bg-ivory/10"
                aria-label="Enquire about this look"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
