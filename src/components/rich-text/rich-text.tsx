import {
  PortableText,
  type PortableTextComponentProps,
  type PortableTextComponents,
} from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { Heading } from "@/components/ui/heading";
import type { RichText as RichTextValue } from "@/lib/cms/types";
import { cn } from "@/lib/utils/cn";
import {
  UnknownType,
  createListComponents,
  createMarks,
  serifEmphasisClass,
  warnMissingComponent,
  type RichTextTone,
} from "./shared";

export type RichTextSize = "md" | "lg";

const sizeClasses: Record<RichTextSize, string> = {
  md: "text-body",
  lg: "text-body-lg",
};

const toneClasses: Record<RichTextTone, { text: string; heading: string; rule: string }> = {
  light: { text: "text-umber", heading: "text-ink", rule: "border-ink/15" },
  dark: { text: "text-ivory/70", heading: "text-ivory", rule: "border-ivory/20" },
};

function Paragraph({ children }: PortableTextComponentProps<PortableTextBlock>) {
  // Spacing in ems keeps the rhythm proportional for both sizes.
  return <p className="mt-[1.1em] text-pretty first:mt-0">{children}</p>;
}

/** Distinct identity on purpose: the library spots missing styles by component identity. */
function UnknownStyleParagraph(props: PortableTextComponentProps<PortableTextBlock>) {
  return <Paragraph {...props} />;
}

/**
 * Subheadings share one look at description scale. Regular weight keeps them
 * from reading lighter than the sans body copy; `text-balance` is repeated
 * because merging a colour class drops the Heading's own balance utility.
 */
const subheadingClass = cn("mt-[2.2em] font-normal text-balance first:mt-0", serifEmphasisClass);

function buildComponents(tone: RichTextTone): PortableTextComponents {
  const colors = toneClasses[tone];

  function HeadingTwo({ children }: PortableTextComponentProps<PortableTextBlock>) {
    return (
      <Heading as="h2" size="sm" className={cn(subheadingClass, colors.heading)}>
        {children}
      </Heading>
    );
  }

  function HeadingThree({ children }: PortableTextComponentProps<PortableTextBlock>) {
    return (
      <Heading as="h3" size="sm" className={cn(subheadingClass, colors.heading)}>
        {children}
      </Heading>
    );
  }

  function BlockQuote({ children }: PortableTextComponentProps<PortableTextBlock>) {
    return (
      <blockquote
        className={cn(
          "mt-[1.6em] border-l pl-5 font-serif text-heading-sm font-light italic first:mt-0 md:pl-6 [&_em]:not-italic",
          serifEmphasisClass,
          colors.rule,
          colors.heading,
        )}
      >
        {children}
      </blockquote>
    );
  }

  return {
    block: { normal: Paragraph, h2: HeadingTwo, h3: HeadingThree, blockquote: BlockQuote },
    marks: createMarks(tone),
    ...createListComponents({ tone, className: "mt-[1.1em] first:mt-0" }),
    unknownType: UnknownType,
    unknownBlockStyle: UnknownStyleParagraph,
  };
}

/** Built once per tone at module load, so renders never recreate component identities. */
const componentsByTone: Record<RichTextTone, PortableTextComponents> = {
  light: buildComponents("light"),
  dark: buildComponents("dark"),
};

interface RichTextProps {
  value: RichTextValue | null | undefined;
  className?: string;
  size?: RichTextSize;
  /** Colour scheme of the surface behind the text. */
  tone?: RichTextTone;
}

/**
 * Compact Portable Text renderer for descriptions (properties, suites,
 * destinations): paragraphs, subheadings, emphasis, links and simple lists.
 * No drop cap or media breakouts, and it never sets its own width.
 */
export function RichText({ value, className, size = "md", tone = "light" }: RichTextProps) {
  if (!value?.length) return null;

  return (
    <div className={cn(sizeClasses[size], "wrap-break-word", toneClasses[tone].text, className)}>
      <PortableText
        value={value}
        components={componentsByTone[tone]}
        onMissingComponent={warnMissingComponent}
      />
    </div>
  );
}
