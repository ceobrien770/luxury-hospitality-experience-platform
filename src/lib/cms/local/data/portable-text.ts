import type {
  PortableTextBlock,
  PortableTextMarkDefinition,
  PortableTextSpan,
} from "@portabletext/types";
import type {
  ImageAsset,
  PortableImageBlock,
  PortableImagePairBlock,
  PortableQuoteBlock,
} from "../../types";

/**
 * Tiny authoring helpers that produce Sanity-compatible Portable Text, so the
 * bundled content exercises exactly the same renderer as CMS content.
 *
 * Inline syntax inside text: *emphasis*, **strong**, [label](/internal-or-https-url).
 * Keys are generated from a per-document prefix and counter, which keeps them
 * stable between builds (random keys would break hydration and caching).
 */
export function createPortableText(prefix: string) {
  let counter = 0;
  const key = () => `${prefix}-${(counter++).toString(36)}`;

  function parseInline(text: string) {
    const children: PortableTextSpan[] = [];
    const markDefs: PortableTextMarkDefinition[] = [];
    const pattern = /\*\*(.+?)\*\*|\*(.+?)\*|\[(.+?)\]\((.+?)\)/g;
    let lastIndex = 0;

    for (const match of text.matchAll(pattern)) {
      const index = match.index ?? 0;
      if (index > lastIndex) {
        children.push({
          _type: "span",
          _key: key(),
          text: text.slice(lastIndex, index),
          marks: [],
        });
      }
      const [, strong, em, linkText, href] = match;
      if (strong) children.push({ _type: "span", _key: key(), text: strong, marks: ["strong"] });
      else if (em) children.push({ _type: "span", _key: key(), text: em, marks: ["em"] });
      else if (linkText && href) {
        const markKey = key();
        markDefs.push({ _type: "link", _key: markKey, href });
        children.push({ _type: "span", _key: key(), text: linkText, marks: [markKey] });
      }
      lastIndex = index + match[0].length;
    }

    if (lastIndex < text.length || children.length === 0) {
      children.push({ _type: "span", _key: key(), text: text.slice(lastIndex), marks: [] });
    }
    return { children, markDefs };
  }

  function block(
    style: string,
    text: string,
    extra: Partial<PortableTextBlock> = {},
  ): PortableTextBlock {
    return { _type: "block", _key: key(), style, ...parseInline(text), ...extra };
  }

  return {
    p: (text: string) => block("normal", text),
    h2: (text: string) => block("h2", text),
    h3: (text: string) => block("h3", text),
    blockquote: (text: string) => block("blockquote", text),
    bullet: (text: string) => block("normal", text, { listItem: "bullet", level: 1 }),
    image: (
      image: ImageAsset,
      options: { caption?: string; layout?: PortableImageBlock["layout"] } = {},
    ): PortableImageBlock => ({ _type: "imageBlock", _key: key(), image, ...options }),
    imagePair: (
      first: ImageAsset,
      second: ImageAsset,
      caption?: string,
    ): PortableImagePairBlock => ({
      _type: "imagePair",
      _key: key(),
      images: [first, second],
      caption,
    }),
    pullQuote: (quote: string, attribution?: string): PortableQuoteBlock => ({
      _type: "pullQuote",
      _key: key(),
      quote,
      attribution,
    }),
  };
}
