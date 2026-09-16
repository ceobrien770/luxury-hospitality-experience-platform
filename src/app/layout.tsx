import type { Metadata, Viewport } from "next";
import { MotionProvider } from "@/components/motion/motion-provider";
import { SmoothScrollProvider } from "@/components/motion/smooth-scroll-provider";
import { absoluteUrl, siteConfig } from "@/lib/site/config";
import { cormorant, interTight } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description:
    "A private collection of residences, retreats and journeys in the world's most quietly extraordinary places.",
  alternates: { canonical: absoluteUrl("/") },
  openGraph: { type: "website", siteName: siteConfig.name, locale: siteConfig.locale },
};

export const viewport: Viewport = {
  themeColor: "#151310",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${cormorant.variable} ${interTight.variable}`}>
      <body>
        <a
          href="#main"
          className="eyebrow fixed top-4 left-4 z-[100] -translate-y-24 rounded-full bg-ink px-5 py-3 text-ivory transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <MotionProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
