"use client";

import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/motion/gsap";
import { motionQueries } from "@/lib/motion/hooks";
import { cn } from "@/lib/utils/cn";

interface FooterWordmarkProps {
  name: string;
  /** Short line set into the open space above the lowercase letters on wider screens. */
  caption?: string;
  className?: string;
}

/**
 * Edge-to-edge brand wordmark whose letters rise out of a clip mask once, the
 * first time it scrolls into view.
 *
 * Sizing: Cormorant Light "Solenne" at -0.035em tracking measures 2.755em of
 * ink, so 36.29 container-query units (`cqi`, with a `vw` fallback) span the
 * container, and the negative indent cancels the "S" side bearing so the ink,
 * not the glyph box, meets the left gutter. `cqi` keeps the fit exact even
 * after the container stops growing on very wide screens.
 */
export function FooterWordmark({ name, caption, className }: FooterWordmarkProps) {
  const scopeRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const captionRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const text = textRef.current;
      const scope = scopeRef.current;
      if (!text || !scope) return;

      const mm = gsap.matchMedia();

      mm.add(motionQueries.motion, () => {
        const split = SplitText.create(text, { type: "chars", aria: "none" });
        text.dataset.splitReady = "true";

        const timeline = gsap.timeline({
          scrollTrigger: { trigger: scope, start: "top 90%", once: true },
        });
        timeline.from(split.chars, {
          yPercent: 118,
          duration: 1.6,
          ease: "expoOut",
          stagger: 0.075,
        });
        if (captionRef.current) {
          timeline.from(
            captionRef.current,
            { autoAlpha: 0, y: 16, duration: 1.4, ease: "expoOut" },
            0.45,
          );
        }

        return () => {
          timeline.scrollTrigger?.kill();
          timeline.kill();
          split.revert();
        };
      });

      mm.add(motionQueries.reduced, () => {
        text.dataset.splitReady = "true";
      });

      return () => mm.revert();
    },
    // revertOnUpdate: without it a changed name would split the old characters a second time.
    { scope: scopeRef, dependencies: [name, caption], revertOnUpdate: true },
  );

  return (
    <div ref={scopeRef} className={cn("@container relative select-none", className)}>
      {caption ? (
        <p
          ref={captionRef}
          className="mb-3 font-serif text-heading-sm font-light text-ivory/60 italic md:absolute md:top-[10cqi] md:right-0 md:mb-0"
        >
          {caption}
        </p>
      ) : null}

      {/* Clips vertically only: top padding keeps ascenders inside the mask, and its bottom edge is the line the letters rise from. */}
      <div
        aria-hidden
        className="overflow-x-visible overflow-y-clip pt-[0.14em] text-[length:calc((min(100vw,var(--container-site))-2*var(--spacing-gutter))*0.3629)] leading-[0.8] supports-[width:1cqi]:text-[length:36.29cqi]"
      >
        <p
          ref={textRef}
          data-split-reveal=""
          className="-ml-[0.0625em] font-serif font-light tracking-[-0.035em] whitespace-nowrap text-ivory"
        >
          {name}
        </p>
      </div>
    </div>
  );
}
