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
 * Reveal — modern scroll-triggered reveal built on Motion.
 * Elegant, spring-based transitions that respect prefers-reduced-motion
 * (renders fully visible with no motion when the user asks for less).
 *
 * Handles anchor-link navigation: elements already above the viewport
 * on mount are immediately shown so they don't stay invisible.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
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
  const [skipAnimation, setSkipAnimation] = useState(false);

  // If the element is already above the viewport on mount (e.g. after an
  // anchor-link jump), skip the entrance animation and show it immediately.
  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.bottom < 0) {
      setSkipAnimation(true);
    }
  }, [reduce]);

  const Comp = motion[Tag] as React.ElementType;

  const spring = { type: "spring" as const, stiffness: 90, damping: 22, mass: 0.8, delay };

  return (
    <Comp
      ref={ref}
      className={className}
      // When reduced motion is on, or element is above viewport on mount,
      // start visible so nothing animates.
      initial={reduce || skipAnimation ? shownState : initialVariants[variant]}
      whileInView={shownState}
      viewport={{ once, amount: 0.05, margin: "0px 0px -2% 0px" }}
      transition={reduce || skipAnimation ? { duration: 0 } : spring}
    >
      {children}
    </Comp>
  );
}
