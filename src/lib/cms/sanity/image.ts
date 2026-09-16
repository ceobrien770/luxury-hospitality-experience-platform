import type { ImageAsset } from "../types";
import { sanityConfig } from "./config";

/** Shape returned by the `imageProjection` GROQ fragment in queries.ts. */
export interface SanityImage {
  alt?: string;
  credit?: string;
  hotspot?: { x: number; y: number };
  asset?: {
    _id: string;
    url?: string;
    metadata?: {
      lqip?: string;
      dimensions?: { width: number; height: number };
      palette?: { dominant?: { background?: string } };
    };
  };
}

/**
 * Sanity asset ids encode dimensions and format: image-<hash>-<w>x<h>-<ext>.
 * Parsing them means a valid CDN URL can be built even when metadata is missing.
 */
function parseAssetId(id: string) {
  const match = /^image-([a-f0-9]+)-(\d+)x(\d+)-(\w+)$/.exec(id);
  if (!match) return null;
  const [, hash, width, height, extension] = match;
  return { hash, width: Number(width), height: Number(height), extension };
}

export function toImageAsset(image: SanityImage | null | undefined): ImageAsset | undefined {
  if (!image?.asset?._id) return undefined;
  const parsed = parseAssetId(image.asset._id);
  if (!parsed) return undefined;

  const { projectId, dataset } = sanityConfig;
  const src =
    image.asset.url ??
    `https://cdn.sanity.io/images/${projectId}/${dataset}/${parsed.hash}-${parsed.width}x${parsed.height}.${parsed.extension}`;
  const dimensions = image.asset.metadata?.dimensions;

  return {
    src,
    alt: image.alt ?? "",
    width: dimensions?.width ?? parsed.width,
    height: dimensions?.height ?? parsed.height,
    lqip: image.asset.metadata?.lqip,
    color: image.asset.metadata?.palette?.dominant?.background,
    hotspot: image.hotspot ? { x: image.hotspot.x, y: image.hotspot.y } : undefined,
    credit: image.credit,
  };
}

/** Like toImageAsset but throws, for fields the schema marks as required. */
export function requireImage(image: SanityImage | null | undefined, field: string): ImageAsset {
  const asset = toImageAsset(image);
  if (!asset) throw new Error(`Sanity document is missing required image "${field}"`);
  return asset;
}

export function toImageAssets(images: SanityImage[] | null | undefined): ImageAsset[] {
  return (images ?? []).map(toImageAsset).filter((asset): asset is ImageAsset => Boolean(asset));
}
