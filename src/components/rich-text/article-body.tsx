import {
  PortableText,
  type PortableTextComponentProps,
  type PortableTextComponents,
} from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import type { CSSProperties } from "react";
import { Heading } from "@/components/ui/heading";
import type { ArticleBody as ArticleBodyValue } from "@/lib/cms/types";
import { cn } from "@/lib/utils/cn";
import { blockText, headingIdMap, isTextBlock } from "@/lib/utils/portable-text";
import { ArticleImage, ArticleImagePair } from "./article-media";
import { ArticlePullQuote } from "./article-pull-quote";
import {
  UnknownType,
  createListComponents,
  createMarks,
  serifEmphasisClass,
  warnMissingComponent,
} from "./shared";

/** Render-time annotations added to a shallow copy of the body before rendering. */
type AnnotatedBlock = PortableTextBlock & {
  _anchorId?: string;
  _dropCap?: boolean;
};

/**
 * Heading ids depend on document order (duplicates get suffixes) and the drop
 * cap belongs to one paragraph only, so both are resolved once up front. The
 * block renderers can then stay static, stateless components.
 */
function annotateBody(body: ArticleBodyValue): ArticleBodyValue {
  const headingIds = headingIdMap(body);
  let dropCapAssigned = false;

  return body.map((node) => {
    if (!isTextBlock(node) || node.listItem) return node;

    const anchorId = headingIds.get(node);
    if (anchorId) return { ...node, _anchorId: anchorId } satisfies AnnotatedBlock;

    if (!dropCapAssigned && (node.style ?? "normal") === "normal" && blockText(node)) {
      dropCapAssigned = true;
      return { ...node, _dropCap: true } satisfies AnnotatedBlock;
    }
    return node;
  });
}

/*
 * Editorial grid with named columns. Text sits in `prose`, media can break out
 * to `wide` (≈10 of the site's 12 columns from lg) or `full` bleed. Using grid
 * lines instead of `100vw` + negative margins keeps full-bleed media exactly as
 * wide as the page, never extending beneath a desktop scrollbar.
 */
const gridStyle: CSSProperties = {
  gridTemplateColumns:
    "[full-start] minmax(0, 1fr) [wide-start] var(--rail) [prose-start] var(--prose) [prose-end] var(--rail) [wide-end] minmax(0, 1fr) [full-end]",
};

const gridVariables = cn(
  "[--prose:min(40rem,100%_-_2*var(--spacing-gutter))]",
  // Below lg the wide column spans the whole container.
  "[--rail:max(0px,(100%_-_2*var(--spacing-gutter)_-_var(--prose))*0.5)]",
  // From lg: half of (10/12 of the container content width) minus half the prose.
  "lg:[--rail:max(0px,(min(100%,var(--container-site))_-_2*var(--spacing-gutter))*0.416667_-_var(--prose)*0.5)]",
);

/**
 * Text that directly follows a heading sits closer to it than to the previous
 * section, so the heading reads as belonging to what comes after it.
 */
const afterHeadingClass = "[:is(h2,h3)+&]:mt-5 md:[:is(h2,h3)+&]:mt-6";

/**
 * A list item can carry a heading or quote style, in which case the library
 * renders that block inside the `<li>`, after the marker. Section spacing
 * would push it away from its own marker there.
 */
const inListItemClass = "[li>&]:mt-0";

/**
 * Three-line serif initial. A float is used (not `initial-letter`) so every
 * browser renders the same proportions; the size and negative leading are
 * tuned to Cormorant's cap height so the letter spans exactly three lines.
 */
const dropCapClass =
  "first-letter:float-left first-letter:mt-[0.093em] first-letter:mr-[0.06em] first-letter:font-serif first-letter:text-[5.95em] first-letter:leading-[0.615] first-letter:font-light first-letter:text-ink";

function Paragraph({ value, children }: PortableTextComponentProps<AnnotatedBlock>) {
  return (
    <p
      className={cn(
        "col-[prose] mt-6 text-pretty first:mt-0 md:mt-7",
        afterHeadingClass,
        value._dropCap && dropCapClass,
      )}
    >
      {children}
    </p>
  );
}

/**
 * Fallback for styles this renderer doesn't know (h1, h4…). It must be a
 * distinct component: the library detects a missing style by comparing
 * identities, so reusing `Paragraph` would flag every normal paragraph.
 */
function UnknownStyleParagraph(props: PortableTextComponentProps<AnnotatedBlock>) {
  return <Paragraph {...props} />;
}

function HeadingTwo({ value, children }: PortableTextComponentProps<AnnotatedBlock>) {
  return (
    <Heading
      as="h2"
      size="md"
      id={value._anchorId}
      className={cn(
        "col-[prose] mt-20 scroll-mt-8 text-balance text-ink first:mt-0 md:mt-24",
        serifEmphasisClass,
        inListItemClass,
      )}
    >
      {children}
    </Heading>
  );
}

/**
 * Regular rather than light weight: at heading-sm, light Cormorant has less
 * colour and a smaller x-height than the Inter Tight body copy around it, and
 * the subheading would read as quieter than the text it introduces.
 */
function HeadingThree({ value, children }: PortableTextComponentProps<AnnotatedBlock>) {
  return (
    <Heading
      as="h3"
      size="sm"
      id={value._anchorId}
      className={cn(
        "col-[prose] mt-14 scroll-mt-8 font-normal text-balance text-ink first:mt-0 md:mt-16",
        serifEmphasisClass,
        inListItemClass,
      )}
    >
      {children}
    </Heading>
  );
}

function BlockQuote({ children }: PortableTextComponentProps<AnnotatedBlock>) {
  return (
    <blockquote
      className={cn(
        "col-[prose] mt-10 mb-4 border-l border-ink/15 pl-6 font-serif text-heading-sm font-light text-pretty text-ink italic first:mt-0 md:mt-12 md:mb-5 md:pl-8",
        // Emphasis inside italic copy is set upright, the typographic convention.
        serifEmphasisClass,
        "[&_em]:not-italic",
        inListItemClass,
      )}
    >
      {children}
    </blockquote>
  );
}

const components: PortableTextComponents = {
  block: {
    normal: Paragraph,
    h2: HeadingTwo,
    h3: HeadingThree,
    blockquote: BlockQuote,
  },
  marks: createMarks("light"),
  ...createListComponents({
    tone: "light",
    className: cn("col-[prose] mt-8 first:mt-0 md:mt-9", afterHeadingClass),
  }),
  types: {
    imageBlock: ArticleImage,
    imagePair: ArticleImagePair,
    pullQuote: ArticlePullQuote,
  },
  unknownType: UnknownType,
  unknownBlockStyle: UnknownStyleParagraph,
};

interface ArticleBodyProps {
  body: ArticleBodyValue;
  className?: string;
}

/**
 * Long-form journal article: a centred prose column with drop cap, anchored
 * headings, lists and quotes, plus inset, wide, full-bleed and paired imagery
 * and display pull quotes. Place it full width; it provides its own gutters.
 */
export function ArticleBody({ body, className }: ArticleBodyProps) {
  if (!body?.length) return null;

  return (
    <div
      // `wrap-break-word` stops a long unbroken URL from overflowing the fixed prose track on phones.
      className={cn("grid text-body-lg wrap-break-word text-umber", gridVariables, className)}
      style={gridStyle}
    >
      <PortableText
        value={annotateBody(body)}
        components={components}
        onMissingComponent={warnMissingComponent}
      />
    </div>
  );
}
