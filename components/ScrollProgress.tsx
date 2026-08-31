"use client";

import { motion, useScroll, useSpring } from "motion/react";

/**
 * Thin gold reading-progress bar at the very top of the page.
 * Smoothly follows scroll position; no-op under reduced motion (still shows,
 * just static width 0 since scaleX stays ~0 — acceptable and unobtrusive).
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[80] h-[3px] w-full origin-left bg-gradient-to-r from-gold via-burgundy to-emerald"
      style={{ scaleX }}
    />
  );
}
