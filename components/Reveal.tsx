"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Variant = "fade-up" | "fade" | "scale" | "fade-left" | "fade-right" | "clip";

const initialVariants: Record<Variant, Record<string, number | string>> = {
  "fade-up": { opacity: 0, y: 28 },
  fade: { opacity: 0 },
  scale: { opacity: 0, scale: 0.94 },
  "fade-left": { opacity: 0, x: 28 },
  "fade-right": { opacity: 0, x: -28 },
  clip: { opacity: 0, clipPath: "inset(0 0 26% 0)" },
};

const shownState = { opacity: 1, x: 0, y: 0, scale: 1, clipPath: "inset(0 0 0 0)" };

/**
 * Reveal — scroll-triggered reveal built on Motion.
 *
 * Uses a useRef + IntersectionObserver directly instead of motion's
 * whileInView to avoid issues with dynamic motion components.
 * Includes a fallback timer so content is always visible even if the
 * observer doesn't fire.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  variant = "fade-up",
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "figure" | "header" | "span";
  variant?: Variant;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // If the user prefers reduced motion, skip the animation entirely.
  useEffect(() => {
    if (reduce) {
      setIsVisible(true);
    }
  }, [reduce]);

  // IntersectionObserver to detect when element enters the viewport.
  useEffect(() => {
    if (reduce || isVisible) return;
    const el = ref.current;
    if (!el) return;

    // Fallback: force visibility after 4 seconds regardless.
    const fallbackTimer = setTimeout(() => setIsVisible(true), 4000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
          clearTimeout(fallbackTimer);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -2% 0px" },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [reduce, isVisible, once]);

  const spring = { type: "spring" as const, stiffness: 90, damping: 22, mass: 0.8, delay };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduce ? shownState : initialVariants[variant]}
      animate={isVisible ? shownState : initialVariants[variant]}
      transition={reduce ? { duration: 0 } : spring}
    >
      {children}
    </motion.div>
  );
}
