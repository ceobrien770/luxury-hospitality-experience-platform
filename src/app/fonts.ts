import { Cormorant, Inter_Tight } from "next/font/google";

/**
 * Variable fonts, self-hosted by next/font at build time: no third-party
 * request, `size-adjust` fallbacks prevent layout shift while they load.
 */
export const cormorant = Cormorant({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});
