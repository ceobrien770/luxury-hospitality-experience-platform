"use client";

import { LazyMotion, MotionConfig } from "motion/react";
import type { ReactNode } from "react";

const loadFeatures = () => import("@/lib/motion/motion-features").then((mod) => mod.default);

/**
 * Motion (Framer Motion) setup.
 *
 * `LazyMotion strict` forces components to use the lightweight `m.*` elements
 * (import * as m from "motion/react-m"), cutting ~30kb from first load, and
 * the animation features are fetched after hydration. `reducedMotion="user"`
 * makes every Motion animation respect the OS setting automatically.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user" transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}>
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
