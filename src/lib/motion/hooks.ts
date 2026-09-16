"use client";

import { useEffect, useLayoutEffect, useSyncExternalStore } from "react";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

function subscribeToMedia(query: string) {
  return (callback: () => void) => {
    const mql = window.matchMedia(query);
    mql.addEventListener("change", callback);
    return () => mql.removeEventListener("change", callback);
  };
}

/**
 * Subscribes to a media query. Returns `serverFallback` during SSR and
 * hydration so markup matches, then the live value.
 */
export function useMediaQuery(query: string, serverFallback = false) {
  return useSyncExternalStore(
    subscribeToMedia(query),
    () => window.matchMedia(query).matches,
    () => serverFallback,
  );
}

export function usePrefersReducedMotion() {
  // Assume reduced motion on the server so nothing animates before hydration.
  return useMediaQuery("(prefers-reduced-motion: reduce)", true);
}

/** True on devices with a precise pointer that can hover (desktop/trackpad). */
export function useFinePointer() {
  return useMediaQuery("(hover: hover) and (pointer: fine)", false);
}

export const breakpoints = {
  md: "(min-width: 48rem)",
  lg: "(min-width: 64rem)",
  xl: "(min-width: 80rem)",
} as const;

/** Media query strings for `gsap.matchMedia()` so responsive timelines clean themselves up. */
export const motionQueries = {
  desktop: `${breakpoints.lg} and (prefers-reduced-motion: no-preference)`,
  mobile: "(max-width: 63.999rem) and (prefers-reduced-motion: no-preference)",
  motion: "(prefers-reduced-motion: no-preference)",
  reduced: "(prefers-reduced-motion: reduce)",
} as const;
