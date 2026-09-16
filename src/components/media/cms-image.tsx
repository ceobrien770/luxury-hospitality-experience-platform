import Image, { type ImageProps } from "next/image";
import type { ImageAsset } from "@/lib/cms/types";
import { cn } from "@/lib/utils/cn";

type CmsImageProps = Omit<
  ImageProps,
  "src" | "alt" | "width" | "height" | "placeholder" | "blurDataURL"
> & {
  image: ImageAsset;
  /** Overrides the CMS alt text, e.g. `""` when the image is decorative in context. */
  alt?: string;
  /**
   * Required: tells the browser which srcset candidate to download. Getting it
   * wrong is the most common cause of oversized images, so it is never optional.
   */
  sizes: string;
};

/**
 * next/image bound to the CMS image model: intrinsic dimensions prevent layout
 * shift, the LQIP/dominant colour paint instantly, and the CMS hotspot drives
 * `object-position` so art direction survives every responsive crop.
 */
export function CmsImage({
  image,
  alt,
  fill,
  className,
  style,
  quality = 72,
  ...props
}: CmsImageProps) {
  const objectPosition = image.hotspot
    ? `${Math.round(image.hotspot.x * 100)}% ${Math.round(image.hotspot.y * 100)}%`
    : undefined;

  return (
    <Image
      src={image.src}
      alt={alt ?? image.alt}
      {...(fill ? { fill: true } : { width: image.width, height: image.height })}
      placeholder={image.lqip ? "blur" : "empty"}
      blurDataURL={image.lqip}
      quality={quality}
      className={cn(fill && "object-cover", className)}
      style={{ objectPosition, backgroundColor: image.color, ...style }}
      {...props}
    />
  );
}
