import type { PortableTextBlock, PortableTextSpan, TypedObject } from "@portabletext/types";

/**
 * Framework-free helpers for Portable Text: plain-text extraction, reading
 * time and heading anchors. Kept outside the renderer so metadata, tables of
 * contents and structured data can use them without pulling in React.
 */

/** Any node that can appear in a Portable Text array (text blocks or custom objects). */
export type PortableTextNode = TypedObject & { _key?: string };

export interface PortableTextHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

/** Fallback used when a heading contains no sluggable characters (e.g. only emoji). */
const EMPTY_SLUG = "section";
const MAX_SLUG_LENGTH = 72;

/**
 * Ids the page shell already owns. A heading titled "Main" must not steal the
 * skip link's `#main` target, so these slugs start out as taken.
 */
const RESERVED_IDS = ["main", "top"] as const;

/** A switch rather than a lookup object, so styles like "constructor" never match prototype keys. */
function headingLevel(style: string | undefined): PortableTextHeading["level"] | undefined {
  switch (style) {
    case "h2":
      return 2;
    case "h3":
      return 3;
    default:
      return undefined;
  }
}

export function isTextBlock(node: PortableTextNode): node is PortableTextBlock {
  return node._type === "block" && Array.isArray((node as Partial<PortableTextBlock>).children);
}

function isSpan(child: unknown): child is PortableTextSpan {
  return (
    typeof child === "object" &&
    child !== null &&
    (child as { _type?: unknown })._type === "span" &&
    typeof (child as { text?: unknown }).text === "string"
  );
}

/** Concatenated span text of a single text block. Inline objects contribute nothing. */
export function blockText(block: PortableTextBlock) {
  return block.children
    .map((child) => (isSpan(child) ? child.text : ""))
    .join("")
    .trim();
}

/**
 * Plain text of every text block, separated by blank lines. Custom types
 * (images, pull quotes) are skipped: they either carry no prose or repeat it.
 */
export function toPlainText(blocks: ReadonlyArray<PortableTextNode> | null | undefined) {
  if (!blocks) return "";
  return blocks.filter(isTextBlock).map(blockText).filter(Boolean).join("\n\n");
}

/** Counts words in a string or in the plain text of a Portable Text array. */
export function wordCount(input: string | ReadonlyArray<PortableTextNode> | null | undefined) {
  const text = typeof input === "string" ? input : toPlainText(input);
  // Unicode-aware: combining marks (\p{M}) stay inside the word, so decomposed
  // accents and scripts with vowel signs (e.g. Devanagari) are not split apart.
  return text.match(/[\p{L}\p{N}][\p{L}\p{M}\p{N}'’-]*/gu)?.length ?? 0;
}

/** Whole minutes needed to read the text, never less than one. */
export function readingTimeMinutes(
  blocks: ReadonlyArray<PortableTextNode> | null | undefined,
  wordsPerMinute = 220,
) {
  const rate = wordsPerMinute > 0 ? wordsPerMinute : 220;
  return Math.max(1, Math.ceil(wordCount(blocks) / rate));
}

/**
 * URL-safe anchor slug: strips diacritics ("Côte" -> "cote"), spells out "&",
 * collapses everything else to single hyphens and caps the length so anchors
 * stay readable when shared.
 */
export function slugify(text: string) {
  const slug = text
    .normalize("NFKD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/['’]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");

  return slug.slice(0, MAX_SLUG_LENGTH).replace(/-+$/, "") || EMPTY_SLUG;
}

/**
 * Returns a slug function that de-duplicates within one document: repeated
 * headings become "notes", "notes-2", "notes-3". A suffixed slug that collides
 * with a literal heading ("Notes 2") keeps counting until it is unique. Ids in
 * `reserved` are treated as already used ("main" becomes "main-2").
 */
export function createSlugger(reserved: Iterable<string> = RESERVED_IDS) {
  /** Slug -> highest occurrence number handed out for it. */
  const seen = new Map<string, number>(Array.from(reserved, (id) => [id, 1]));
  return function uniqueSlug(text: string) {
    const base = slugify(text);
    let candidate = base;
    while (seen.has(candidate)) {
      const next = (seen.get(base) ?? 1) + 1;
      seen.set(base, next);
      candidate = `${base}-${next}`;
    }
    seen.set(candidate, 1);
    return candidate;
  };
}

interface HeadingEntry extends PortableTextHeading {
  node: PortableTextNode;
}

function collectHeadings(body: ReadonlyArray<PortableTextNode> | null | undefined) {
  const entries: HeadingEntry[] = [];
  if (!body) return entries;

  const uniqueSlug = createSlugger();
  for (const node of body) {
    // List items can carry a heading style; they render as list content, not anchors.
    if (!isTextBlock(node) || node.listItem) continue;
    const level = headingLevel(node.style);
    if (!level) continue;
    const text = blockText(node);
    if (!text) continue;
    entries.push({ id: uniqueSlug(text), text, level, node });
  }
  return entries;
}

/** h2/h3 headings in document order, e.g. for a table of contents. */
export function headingsFromBody(
  body: ReadonlyArray<PortableTextNode> | null | undefined,
): PortableTextHeading[] {
  return collectHeadings(body).map(({ id, text, level }) => ({ id, text, level }));
}

/**
 * Anchor ids keyed by the heading block object itself. The renderer uses this
 * instead of slugging while it renders, so ids always match `headingsFromBody`
 * exactly (including de-duplication, which depends on document order). Object
 * identity rather than `_key` keeps ids unique even when CMS content contains
 * duplicated or missing keys (e.g. blocks pasted twice).
 */
export function headingIdMap(
  body: ReadonlyArray<PortableTextNode> | null | undefined,
): Map<PortableTextNode, string> {
  return new Map(collectHeadings(body).map((entry) => [entry.node, entry.id]));
}
