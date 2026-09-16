"use client";

/**
 * Single entry point for GSAP. Plugins are registered once here so components
 * never register them ad hoc (which duplicates work and breaks tree-shaking).
 */
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

let registered = false;

function register() {
  if (registered || typeof window === "undefined") return;
  registered = true;

  gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase, useGSAP);

  // Mirror the CSS easing tokens in globals.css so CSS and GSAP motion match.
  CustomEase.create("luxe", "0.65, 0.05, 0.36, 1");
  CustomEase.create("expoOut", "0.19, 1, 0.22, 1");
  CustomEase.create("quartInOut", "0.76, 0, 0.24, 1");

  gsap.defaults({ ease: "expoOut", duration: 1.2 });

  // Mobile browsers resize the viewport when the URL bar collapses; refreshing
  // every ScrollTrigger on that resize causes visible jumps.
  ScrollTrigger.config({ ignoreMobileResize: true });
}

register();

export { gsap, ScrollTrigger, SplitText, CustomEase, useGSAP };

/** Durations (seconds) shared across GSAP timelines. */
export const durations = {
  fast: 0.45,
  base: 0.9,
  slow: 1.4,
  page: 0.85,
} as const;
