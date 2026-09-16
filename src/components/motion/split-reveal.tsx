"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { usePageTransition } from "@/components/transitions/page-transition-context";
import { gsap, SplitText, useGSAP } from "@/lib/motion/gsap";
import { cn } from "@/lib/utils/cn";

interface SplitRevealProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  /** "scroll" animates when entering the viewport, "load" once the page transition has finished. */
  trigger?: "scroll" | "load";
  /** Split granularity. Lines read as the most refined; words suit shorter labels. */
  type?: "lines" | "words";
  delay?: number;
  stagger?: number;
  id?: string;
}

/**
 * Masked line-by-line text reveal built on GSAP SplitText.
 *
 * `autoSplit` re-splits when fonts finish loading or the element resizes (line
 * breaks change), and returning the tween from `onSplit` lets SplitText kill
 * and rebuild it so the animation never targets stale line elements.
 */
export function SplitReveal({
  as: Component = "div",
  children,
  className,
  trigger = "scroll",
  type = "lines",
  delay = 0,
  stagger = 0.09,
  id,
}: SplitRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const transition = usePageTransition();
  const waitingForTransition = trigger === "load" && Boolean(transition?.isTransitioning);

  useGSAP(
    () => {
      const element = ref.current;
      if (!element || waitingForTransition) return;

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        element.dataset.splitReady = "true";
        return;
      }

      const split = SplitText.create(element, {
        type: type === "lines" ? "lines" : "words,lines",
        mask: type,
        linesClass: "split-line",
        autoSplit: true,
        onSplit(self) {
          element.dataset.splitReady = "true";
          const targets = type === "lines" ? self.lines : self.words;
          return gsap.from(targets, {
            yPercent: 115,
            rotate: 1.5,
            transformOrigin: "0% 100%",
            duration: 1.5,
            ease: "expoOut",
            stagger,
            delay,
            scrollTrigger:
              trigger === "scroll" ? { trigger: element, start: "top 88%", once: true } : undefined,
          });
        },
      });

      return () => split.revert();
    },
    { scope: ref, dependencies: [waitingForTransition, trigger, type, delay, stagger] },
  );

  return (
    <Component ref={ref} id={id} data-split-reveal="" className={cn(className)}>
      {children}
    </Component>
  );
}
