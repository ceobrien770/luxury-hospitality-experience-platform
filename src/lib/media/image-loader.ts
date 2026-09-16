"use client";

import type { ImageLoaderProps } from "next/image";

/** Image CDNs that resize on the fly with imgix-compatible query parameters. */
const TRANSFORMING_HOSTS = new Set(["images.unsplash.com", "cdn.sanity.io"]);

/**
 * Global next/image loader (configured in next.config.ts).
 *
 * Unsplash (imgix) and the Sanity image CDN resize, re-encode to AVIF/WebP and
 * cache at the edge, so requesting the exact srcset width from them avoids a
 * second optimisation hop through the Next.js server and keeps TTFB for images
 * independent of the app's region.
 */
export default function cdnImageLoader({ src, width, quality }: ImageLoaderProps) {
  if (src.startsWith("/")) {
    // Local assets in /public are already optimised at build time.
    return `${src}${src.includes("?") ? "&" : "?"}w=${width}`;
  }

  const url = new URL(src);
  if (TRANSFORMING_HOSTS.has(url.hostname)) {
    url.searchParams.set("auto", "format");
    url.searchParams.set("fit", url.searchParams.get("fit") ?? "max");
    url.searchParams.set("w", String(width));
    url.searchParams.set("q", String(quality ?? 72));
    return url.toString();
  }

  // Hosts without transforms (e.g. Wikimedia thumbnails): keep the URL, add the
  // width as a cache-distinguishing hint so srcset entries stay unique.
  url.searchParams.set("w", String(width));
  return url.toString();
}
