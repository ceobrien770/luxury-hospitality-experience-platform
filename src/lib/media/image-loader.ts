"use client";

import type { ImageLoaderProps } from "next/image";

/** Image CDNs that resize on the fly with imgix-compatible query parameters. */
const TRANSFORMING_HOSTS = new Set(["images.unsplash.com", "cdn.sanity.io"]);

/**
 * Wikimedia Commons only renders thumbnails at a fixed set of widths; any other
 * width is rejected, so requests snap up to the nearest supported step.
 */
const WIKIMEDIA_WIDTHS = [500, 960, 1280, 1920, 3840];
const WIKIMEDIA_HOSTS = new Set(["upload.wikimedia.org", "thumb.wikimedia.org"]);

function wikimediaThumbnail(url: URL, width: number) {
  const step = WIKIMEDIA_WIDTHS.find((candidate) => candidate >= width) ?? 3840;
  url.pathname = url.pathname.replace(/\/\d+px-/, `/${step}px-`);
  url.search = "";
  return url.toString();
}

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

  if (WIKIMEDIA_HOSTS.has(url.hostname) && /\/\d+px-/.test(url.pathname)) {
    return wikimediaThumbnail(url, width);
  }

  // Unknown hosts: keep the original, adding the width so srcset entries stay unique.
  url.searchParams.set("w", String(width));
  return url.toString();
}
