import type {
  MissingComponentHandler,
  PortableTextComponentProps,
  PortableTextMarkComponentProps,
  PortableTextReactComponents,
  ReactPortableTextList,
} from "@portabletext/react";
import type { PortableTextListItemBlock } from "@portabletext/types";
import { cn } from "@/lib/utils/cn";
import { pad } from "@/lib/utils/format";
import { RichTextLink } from "./rich-text-link";

/**
 * Renderer pieces shared by `ArticleBody` and `RichText`, so marks, links and
 * lists look identical wherever editorial copy appears.
 */

export type RichTextTone = "light" | "dark";

interface LinkMarkDefinition {
  _type: "link";
  _key?: string;
  href?: string;
}

const NODE_LABELS: Record<Parameters<MissingComponentHandler>[1]["nodeType"], string> = {
  block: "block type",
  mark: "mark",
  blockStyle: "block style",
  listStyle: "list style",
  listItemStyle: "list item style",
};

/**
 * Content from a CMS can contain types this front end does not know yet (a new
 * schema deployed before the site). They must never crash a page, but they
 * should be visible to developers.
 */
export const warnMissingComponent: MissingComponentHandler = (_message, { type, nodeType }) => {
  if (process.env.NODE_ENV !== "development") return;
  const outcome = nodeType === "block" ? "it was not rendered" : "a default style was used";
  console.warn(`[rich-text] No renderer for ${NODE_LABELS[nodeType]} "${type}"; ${outcome}.`);
};

/** Unknown custom objects render nothing (the warning above is logged instead). */
export function UnknownType() {
  return null;
}

/**
 * For blocks already set in the serif (headings, quotes): emphasis keeps the
 * surrounding size instead of the optical enlargement used next to sans copy.
 */
export const serifEmphasisClass = "[&_em]:text-[1em]";

const strongTone: Record<RichTextTone, string> = {
  light: "text-ink",
  dark: "text-ivory",
};

export function createMarks(tone: RichTextTone): Partial<PortableTextReactComponents["marks"]> {
  function Strong({ children }: PortableTextMarkComponentProps) {
    return <strong className={cn("font-medium", strongTone[tone])}>{children}</strong>;
  }

  /**
   * Emphasis switches to the italic serif. Cormorant has a much smaller
   * x-height than Inter Tight, so it is optically enlarged; `leading-none`
   * stops the larger glyphs from stretching the line box. Serif contexts undo
   * the enlargement with `serifEmphasisClass`.
   */
  function Emphasis({ children }: PortableTextMarkComponentProps) {
    return <em className="font-serif text-[1.16em] leading-none italic">{children}</em>;
  }

  function Link({ value, children }: PortableTextMarkComponentProps<LinkMarkDefinition>) {
    return (
      <RichTextLink href={value?.href} className={strongTone[tone]}>
        {children}
      </RichTextLink>
    );
  }

  return { strong: Strong, em: Emphasis, link: Link };
}

interface ListOptions {
  /** Classes for top-level lists only (nested lists sit inside a list item). */
  className?: string;
  tone: RichTextTone;
}

const markerTone: Record<RichTextTone, string> = {
  light: "text-bronze",
  dark: "text-bronze-light",
};

const hairlineTone: Record<RichTextTone, string> = {
  light: "bg-bronze/70",
  dark: "bg-bronze-light/70",
};

export function createListComponents({ className, tone }: ListOptions) {
  function List({ value, children }: PortableTextComponentProps<ReactPortableTextList>) {
    const Tag = value.listItem === "number" ? "ol" : "ul";
    const nested = (value.level ?? 1) > 1;
    return (
      // Tailwind's preflight removes list-style, which makes Safari drop list semantics.
      <Tag role="list" className={cn(nested ? "mt-3" : className, "space-y-3")}>
        {children}
      </Tag>
    );
  }

  /**
   * Markers are real (decorative) elements rather than `::marker`, which can't
   * be sized or positioned consistently across browsers. The numeral inherits
   * the item's font size and line height, so its baseline always matches the
   * text beside it.
   */
  function ListItem({
    value,
    index,
    children,
  }: PortableTextComponentProps<PortableTextListItemBlock>) {
    const numbered = value.listItem === "number";
    return (
      <li className="relative pl-9 md:pl-11">
        {numbered ? (
          <span
            aria-hidden
            className={cn(
              "absolute top-0 left-0 font-serif lining-nums tabular-nums",
              markerTone[tone],
            )}
          >
            {pad(index + 1)}
          </span>
        ) : (
          <span aria-hidden className="absolute top-0 left-0 flex h-[1lh] items-center">
            <span className={cn("block h-px w-4 translate-y-[0.08em]", hairlineTone[tone])} />
          </span>
        )}
        {children}
      </li>
    );
  }

  return { list: List, listItem: ListItem };
}
