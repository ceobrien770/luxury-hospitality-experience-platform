"use client";

import { createContext, useContext } from "react";

export interface NavigateOptions {
  replace?: boolean;
}

export interface PageTransitionApi {
  /** Plays the exit transition, navigates, then plays the enter transition. */
  navigate: (href: string, options?: NavigateOptions) => void;
  /** True from the moment an exit animation starts until the enter animation ends. */
  isTransitioning: boolean;
}

export const PageTransitionContext = createContext<PageTransitionApi | null>(null);

/** Returns the transition API, or null when rendered outside the provider. */
export function usePageTransition() {
  return useContext(PageTransitionContext);
}
