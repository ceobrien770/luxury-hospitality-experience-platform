"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/motion/gsap";

const LenisContext = createContext<Lenis | null>(null);

/** The active Lenis instance, or null when smooth scrolling is disabled. */
export function useLenis() {
  return useContext(LenisContext);
}

/**
 * Smooth scrolling driven by GSAP's ticker so Lenis and ScrollTrigger read the
 * same scroll position on the same frame (no parallax jitter).
 *
 * Disabled for `prefers-reduced-motion` and on touch devices, where native
 * momentum scrolling already feels right and is cheaper.
 */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarse = window.matchMedia("(pointer: coarse)");
    let instance: Lenis | null = null;

    const update = (time: number) => instance?.raf(time * 1000);

    function start() {
      if (instance || reduced.matches || coarse.matches) return;
      instance = new Lenis({
        autoRaf: false,
        lerp: 0.1,
        wheelMultiplier: 0.9,
        anchors: { offset: -80 },
      });
      instance.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(update);
      gsap.ticker.lagSmoothing(0);
      setLenis(instance);
    }

    function stop() {
      if (!instance) return;
      gsap.ticker.remove(update);
      instance.destroy();
      instance = null;
      setLenis(null);
    }

    function sync() {
      if (reduced.matches || coarse.matches) stop();
      else start();
    }

    sync();
    reduced.addEventListener("change", sync);
    coarse.addEventListener("change", sync);

    return () => {
      reduced.removeEventListener("change", sync);
      coarse.removeEventListener("change", sync);
      stop();
    };
  }, []);

  // New route: start at the top and recalculate trigger positions once the
  // incoming page has laid out.
  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true, force: true });
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [pathname, lenis]);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
