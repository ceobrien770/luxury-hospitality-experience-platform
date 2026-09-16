"use client";

import { useRef } from "react";
import type { ImageAsset } from "@/lib/cms/types";
import { gsap, useGSAP } from "@/lib/motion/gsap";
import { motionQueries } from "@/lib/motion/hooks";
import { cn } from "@/lib/utils/cn";
import { CmsImage } from "./cms-image";

interface ParallaxImageProps {
  image: ImageAsset;
  sizes: string;
  alt?: string;
  /** Travel as a fraction of the frame height. 0.1 is subtle, 0.25 is dramatic. */
  speed?: number;
  preload?: boolean;
  quality?: number;
  /** Classes for the clipping frame — give it a size or aspect ratio. */
  className?: string;
  imageClassName?: string;
}

/**
 * Image that drifts inside its frame while the frame crosses the viewport.
 *
 * The inner layer is oversized by `speed` on both edges so the drift never
 * reveals a gap, and only `transform` is scrubbed, so the browser composites it
 * without re-layout. Reduced-motion users get a static image.
 */
export function ParallaxImage({
  image,
  sizes,
  alt,
  speed = 0.12,
  preload,
  quality,
  className,
  imageClassName,
}: ParallaxImageProps) {
  const frame = useRef<HTMLDivElement>(null);
  const layer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(motionQueries.motion, () => {
        // Travel is measured against the frame (not the oversized layer) and
        // recomputed on refresh so resizes never expose an edge.
        const travel = () => (frame.current?.offsetHeight ?? 0) * speed;
        gsap.fromTo(
          layer.current,
          { y: () => -travel() },
          {
            y: () => travel(),
            ease: "none",
            scrollTrigger: {
              trigger: frame.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        );
      });
      return () => mm.revert();
    },
    { scope: frame, dependencies: [speed] },
  );

  return (
    <div ref={frame} className={cn("relative overflow-hidden", className)}>
      <div
        ref={layer}
        className="absolute inset-x-0 will-change-transform"
        style={{ top: `${-speed * 100}%`, bottom: `${-speed * 100}%` }}
      >
        <CmsImage
          image={image}
          alt={alt}
          fill
          sizes={sizes}
          preload={preload}
          quality={quality}
          className={imageClassName}
        />
      </div>
    </div>
  );
}
