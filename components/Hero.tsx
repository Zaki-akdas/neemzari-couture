"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Arrow, PinIcon } from "@/components/ui";

/**
 * Cinematic luxury hero — slow scroll zoom + parallax, staggered letter
 * reveal, soft gold glow, and a subtle film-grain texture for an editorial
 * campaign feel. Fully respects prefers-reduced-motion.
 */
export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const handleScroll = () => {
      const y = window.scrollY;
      const scale = Math.max(1, 1 + y / 4800);
      if (bgRef.current) {
        bgRef.current.style.transform = `scale(${scale}) translateY(${y * 0.06}px)`;
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [reduce]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.28, delayChildren: 0.12 } },
  };
  const lineVariant = {
    hidden: { opacity: 0, y: "110%", rotate: 4 },
    show: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-espresso grain">
      {/* Background image with slow cinematic zoom */}
      <div
        ref={bgRef}
        className="absolute inset-0 -z-10 will-change-transform"
        style={{ transform: "scale(1.02)" }}
      >
        <img
          src="/images/hero.jpg"
          alt="Neemzari Couture bridal couture — intricate embroidery and luxury wedding styling"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </div>

      {/* Soft overlays + moving glow for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/20 to-espresso/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/50 via-transparent to-transparent" />
      <div className="glow absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-5 pb-28 sm:px-8 sm:pb-20 lg:justify-center lg:px-12 lg:pb-0">
        <div className="max-w-2xl">
          <motion.p
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="eyebrow mb-6 flex items-center gap-3 text-gold-light"
          >
            <span className="h-px w-8 bg-gold-light" />
            Neemzari Couture&nbsp;•&nbsp;Brampton
          </motion.p>

          <motion.h1
            variants={container}
            initial={reduce ? "show" : "hidden"}
            animate="show"
            className="font-serif text-[2.5rem] leading-[0.95] tracking-[0.01em] text-ivory sm:text-6xl lg:text-[5.2rem]"
          >
            <span className="block overflow-hidden">
              <motion.span variants={lineVariant} className="inline-block">
                Couture
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={lineVariant} className="inline-block">
                Made For
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={lineVariant} className="inline-block">
                Your <span className="italic text-gold-light">Moment.</span>
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1 }}
            className="mt-7 max-w-xl text-base text-ivory/85 sm:text-lg"
          >
            Traditional artistry meets contemporary Indian fashion, with
            personalized styling and custom wedding attire designed around you.
          </motion.p>

          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.25 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Link href="/#consult" className="btn-gold group">
              Book a Consultation
              <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link href="/collections" className="btn-ghost-light group">
              Explore Collections
              <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-12 flex items-center gap-2 text-[0.68rem] tracking-[0.24em] uppercase text-ivory/60"
          >
            <PinIcon className="h-3.5 w-3.5 text-gold" />
            Jaipur Gore Plaza&nbsp;•&nbsp;Brampton
          </motion.div>
        </div>
      </div>

      {/* Down scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-ivory/60 md:flex">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="text-[0.6rem] tracking-[0.3em] uppercase"
        >
          Scroll
        </motion.span>
        <span className="h-10 w-px animate-pulse bg-gradient-to-b from-ivory/60 to-transparent" />
      </div>
    </section>
  );
}
