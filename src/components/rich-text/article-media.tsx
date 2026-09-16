import type { PortableTextTypeComponentProps } from "@portabletext/react";
import { CmsImage } from "@/components/media/cms-image";
import { ParallaxImage } from "@/components/media/parallax-image";
import { Reveal } from "@/components/motion/reveal";
import type { ImageAsset, PortableImageBlock, PortableImagePairBlock } from "@/lib/cms/types";
import { cn } from "@/lib/utils/cn";

type ImageLayout = NonNullable<PortableImageBlock["layout"]>;

/**
 * Image settles from a gentle zoom while its frame is unmasked by `Reveal`.
 * Gated on scripting so a no-JS visitor never sees a permanently zoomed crop.
 */
const settleImageClass =
  "motion-safe:[@media(scripting:enabled)]:scale-[1.12] motion-safe:transition-transform motion-safe:duration-[1800ms] motion-safe:ease-out-expo group-data-revealed/media:scale-100";

interface LayoutSpec {
  figure: string;
  /** Portrait shots are cropped to this ratio (width / height) so they never tower over the text. */
  minAspectRatio: number;
  sizes: string;
}

/*
 * Vertical rhythm: figures carry a smaller bottom margin than top margin
 * because the following paragraph adds its own top margin (grid items never
 * collapse margins), which makes the space above and below match. An image
 * placed straight after a heading stays attached to it.
 */
const afterHeadingClass = "[:is(h2,h3)+&]:mt-8 md:[:is(h2,h3)+&]:mt-10";

const layouts: Record<Exclude<ImageLayout, "full">, LayoutSpec> = {
  inset: {
    figure: "col-[prose] mt-14 mb-8 md:mt-20 md:mb-13",
    minAspectRatio: 4 / 5,
    sizes: "(min-width: 45rem) 40rem, calc(100vw - 2.5rem)",
  },
  wide: {
    figure: "col-[wide] mt-16 mb-10 md:mt-28 md:mb-21",
    minAspectRatio: 4 / 3,
    sizes: "(min-width: 110rem) 86rem, (min-width: 64rem) 78vw, calc(100vw - 2.5rem)",
  },
};

const pairSizes =
  "(min-width: 110rem) 42rem, (min-width: 64rem) 38vw, (min-width: 48rem) 46vw, calc(100vw - 2.5rem)";

function uniqueCredits(images: ImageAsset[]) {
  return [...new Set(images.map((image) => image.credit?.trim()).filter(Boolean))].join(", ");
}

interface FigureCaptionProps {
  caption?: string;
  credit?: string;
  className?: string;
}

/**
 * Eyebrow-styled caption with the photographer credit set apart in sentence
 * case. The hairline is sized in the eyebrow's own ems so it always centres on
 * the first line of text.
 */
function FigureCaption({ caption, credit, className }: FigureCaptionProps) {
  const text = caption?.trim();
  if (!text && !credit) return null;

  return (
    <figcaption
      className={cn("eyebrow mt-4 flex gap-4 leading-[1.7] text-umber md:mt-5", className)}
    >
      <span aria-hidden className="mt-[0.85em] h-px w-6 shrink-0 bg-current/35" />
      <span className="flex min-w-0 flex-1 flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-8">
        {text ? <span className="max-w-[40rem] text-pretty">{text}</span> : null}
        {credit ? (
          <span className="text-caption font-normal tracking-normal text-umber/80 normal-case md:text-right">
            Photograph: {credit}
          </span>
        ) : null}
      </span>
    </figcaption>
  );
}

function aspectRatioFor(image: ImageAsset, minimum: number) {
  const ratio = image.width > 0 && image.height > 0 ? image.width / image.height : minimum;
  return Math.max(ratio, minimum);
}

/** `imageBlock`: inset (prose width), wide (≈10 of 12 columns) or full-bleed with parallax. */
export function ArticleImage({ value }: PortableTextTypeComponentProps<PortableImageBlock>) {
  const { image, caption, layout = "inset" } = value;
  if (!image?.src) return null;

  if (layout === "full") {
    return (
      <figure className="col-[full] mt-20 mb-14 grid grid-cols-subgrid first:mt-0 md:mt-32 md:mb-25">
        {/*
         * Photography passes under the fixed header, which needs its light-on-dark
         * scheme. This one fades rather than unmasks: Chrome defers lazy-loading
         * an image on a composited parallax layer until a clip-path around it
         * opens, which would reveal an empty frame.
         */}
        <div data-header-theme="dark" className="col-[full]">
          <Reveal effect="fade" className="group/media">
            <ParallaxImage
              image={image}
              sizes="100vw"
              speed={0.1}
              className="aspect-[4/3] bg-parchment md:aspect-[16/9]"
              imageClassName={settleImageClass}
            />
          </Reveal>
        </div>
        <FigureCaption caption={caption} credit={uniqueCredits([image])} className="col-[wide]" />
      </figure>
    );
  }

  const spec = layouts[layout] ?? layouts.inset;
  return (
    <figure className={cn(spec.figure, afterHeadingClass, "first:mt-0")}>
      <div
        className="relative bg-parchment"
        style={{ aspectRatio: aspectRatioFor(image, spec.minAspectRatio) }}
      >
        <Reveal effect="clip-up" className="group/media absolute inset-0 overflow-hidden">
          <CmsImage image={image} fill sizes={spec.sizes} className={settleImageClass} />
        </Reveal>
      </div>
      <FigureCaption caption={caption} credit={uniqueCredits([image])} />
    </figure>
  );
}

/**
 * `imagePair`: two portrait frames side by side from md, stacked on phones, one
 * shared caption. If one image is missing the other is centred at the same
 * frame size rather than left hanging in half of the grid.
 */
export function ArticleImagePair({
  value,
}: PortableTextTypeComponentProps<PortableImagePairBlock>) {
  const images = (value.images ?? []).filter((image): image is ImageAsset => Boolean(image?.src));
  if (images.length === 0) return null;

  return (
    <figure
      className={cn("col-[wide] mt-16 mb-10 md:mt-28 md:mb-21", afterHeadingClass, "first:mt-0")}
    >
      <div
        className={cn(
          "grid gap-3 md:gap-6 lg:gap-8",
          images.length > 1 ? "md:grid-cols-2" : "md:mx-auto md:w-1/2",
        )}
      >
        {images.map((image, index) => (
          <Reveal
            key={`${image.src}-${index}`}
            effect="clip-up"
            delay={index * 140}
            className="group/media relative aspect-[4/5] overflow-hidden bg-parchment"
          >
            <CmsImage image={image} fill sizes={pairSizes} className={settleImageClass} />
          </Reveal>
        ))}
      </div>
      <FigureCaption caption={value.caption} credit={uniqueCredits(images)} />
    </figure>
  );
}
