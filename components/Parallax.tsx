"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

/**
 * Scroll-driven parallax image. Subtle, editorial — the image drifts a little
 * faster or slower than the scroll. Disabled when the user prefers reduced
 * motion (falls back to a static image).
 */
export default function Parallax({
  src,
  alt,
  className = "",
  imgClassName = "",
  speed = 0.12,
  strength = 40,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  /** How much the image drifts (px at extremes). */
  strength?: number;
  /** Positive = image moves slower than scroll (dolly-in feel). */
  speed?: number;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scale slightly so edges never show during the parallax drift.
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1.12]);
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${-strength}px`, reduce ? "0px" : `${strength}px`],
  );

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        className={`h-full w-full object-cover ${imgClassName}`}
        style={{ scale, y }}
      />
    </div>
  );
}
