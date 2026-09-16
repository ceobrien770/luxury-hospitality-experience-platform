"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";
import { observeInView } from "@/lib/motion/in-view";
import { cn } from "@/lib/utils/cn";

export type RevealEffect = "fade-up" | "fade" | "clip-up" | "scale-in";

interface RevealProps {
  as?: ElementType;
  effect?: RevealEffect;
  /** Delay in milliseconds, useful for manual staggering. */
  delay?: number;
  className?: string;
  children: ReactNode;
}

/**
 * Scroll-triggered entrance using a shared IntersectionObserver and CSS
 * transitions. Deliberately GSAP-free: simple one-shot reveals don't need a
 * timeline engine, and CSS transitions run off the main thread where possible.
 * Styles live in globals.css under `[data-reveal]`.
 */
export function Reveal({
  as: Component = "div",
  effect = "fade-up",
  delay = 0,
  className,
  children,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const unobserve = observeInView(element, (entry) => {
      if (!entry.isIntersecting) return;
      element.dataset.revealed = "true";
      unobserve();
    });
    return unobserve;
  }, []);

  return (
    <Component
      ref={ref}
      data-reveal={effect}
      className={cn(className)}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Component>
  );
}
