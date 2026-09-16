"use client";

import type { MouseEvent } from "react";
import { useLenis } from "@/components/motion/smooth-scroll-provider";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils/cn";

const focusableSelector =
  'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])';

interface BackToTopProps {
  className?: string;
}

export function BackToTop({ className }: BackToTopProps) {
  const lenis = useLenis();

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (lenis && !reduced) {
      lenis.scrollTo(0, { duration: 1.8 });
    } else {
      window.scrollTo({ top: 0, behavior: reduced ? "instant" : "smooth" });
    }

    // Keyboard activation (detail 0) would otherwise leave focus at the very end
    // of the document; hand it to the first stop at the top (the skip link).
    // Candidates that cannot take focus (inside a hidden route) are skipped.
    if (event.detail === 0) {
      for (const candidate of document.body.querySelectorAll<HTMLElement>(focusableSelector)) {
        candidate.focus({ preventScroll: true });
        if (document.activeElement === candidate) break;
      }
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "group/top -my-1 inline-flex min-h-11 items-center gap-4 text-ivory/70 transition-colors duration-500 hover-fine:text-ivory",
        className,
      )}
    >
      <span className="eyebrow max-sm:sr-only">Back to top</span>
      <span
        aria-hidden
        className="relative flex size-11 items-center justify-center overflow-hidden rounded-full border border-ivory/25 transition-colors duration-700 ease-out-expo group-hover/top:border-ivory"
      >
        <Icon
          name="arrow-down"
          size={16}
          className="rotate-180 transition-transform duration-700 ease-out-expo group-hover/top:-translate-y-[220%] motion-reduce:transition-none"
        />
        <Icon
          name="arrow-down"
          size={16}
          className="absolute translate-y-[220%] rotate-180 transition-transform duration-700 ease-out-expo group-hover/top:translate-y-0 motion-reduce:transition-none"
        />
      </span>
    </button>
  );
}
