import type { PortableTextTypeComponentProps } from "@portabletext/react";
import { SplitReveal } from "@/components/motion/split-reveal";
import type { PortableQuoteBlock } from "@/lib/cms/types";

/**
 * Strips quotation marks an editor may have typed, so marks are never doubled.
 * Double quotes always go. Single quotes also serve as apostrophes (a quote
 * may end "…the travellers’"), so they are only removed as a matched pair.
 */
function normaliseQuote(quote: string) {
  const text = quote
    .trim()
    .replace(/^["“”]+|["“”]+$/g, "")
    .trim();
  const singleQuoted = /^['‘]([\s\S]*)['’]$/.exec(text);
  return (singleQuoted ? singleQuoted[1] : text).trim();
}

/**
 * `pullQuote`: a display-size italic statement that breaks out wider than the
 * prose column, framed by hairlines and revealed line by line.
 */
export function ArticlePullQuote({ value }: PortableTextTypeComponentProps<PortableQuoteBlock>) {
  const quote = value.quote ? normaliseQuote(value.quote) : "";
  if (!quote) return null;
  const attribution = value.attribution?.trim();

  return (
    <figure className="col-[wide] mt-20 mb-14 border-y border-ink/10 py-14 text-center first:mt-0 md:mt-32 md:mb-25 md:py-24">
      <blockquote>
        <SplitReveal
          as="p"
          className="mx-auto max-w-[58rem] font-serif text-display-md font-light text-balance text-ink italic"
        >
          &ldquo;{quote}&rdquo;
        </SplitReveal>
      </blockquote>
      {attribution ? (
        <figcaption className="eyebrow mt-8 text-umber md:mt-12">{attribution}</figcaption>
      ) : null}
    </figure>
  );
}
