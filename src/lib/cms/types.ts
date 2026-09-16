/**
 * Content model shared by every CMS provider.
 *
 * Components only ever consume these normalised shapes, so swapping the local
 * content source for Sanity (or another headless CMS) never touches the UI.
 */
import type { PortableTextBlock } from "@portabletext/types";

export type Slug = string;

export interface ImageAsset {
  /** Absolute URL of the original asset (CDN base URL without transform params). */
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Tiny base64 data URL shown while the full image loads. */
  lqip?: string;
  /** Dominant colour used as a paint-cheap placeholder. */
  color?: string;
  /** Focal point in the range 0–1, used for `object-position` when cropping. */
  hotspot?: { x: number; y: number };
  credit?: string;
}

export interface VideoAsset {
  src: string;
  /** Lower-bitrate rendition served to small screens. */
  srcMobile?: string;
  poster: ImageAsset;
  width: number;
  height: number;
}

export interface Seo {
  title?: string;
  description?: string;
  image?: ImageAsset;
}

export interface Cta {
  label: string;
  href: string;
}

export interface Fact {
  label: string;
  value: string;
}

export type RichText = PortableTextBlock[];

export type PortableImageBlock = {
  _type: "imageBlock";
  _key: string;
  image: ImageAsset;
  caption?: string;
  layout?: "inset" | "wide" | "full";
};

export type PortableImagePairBlock = {
  _type: "imagePair";
  _key: string;
  images: [ImageAsset, ImageAsset];
  caption?: string;
};

export type PortableQuoteBlock = {
  _type: "pullQuote";
  _key: string;
  quote: string;
  attribution?: string;
};

export type ArticleBody = Array<
  PortableTextBlock | PortableImageBlock | PortableImagePairBlock | PortableQuoteBlock
>;

export interface StoryChapter {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  image: ImageAsset;
}

export interface Destination {
  _type: "destination";
  slug: Slug;
  name: string;
  country: string;
  region: string;
  /** One-line poetic summary used on cards. */
  tagline: string;
  intro: string;
  heroImage: ImageAsset;
  cardImage: ImageAsset;
  gallery: ImageAsset[];
  facts: Fact[];
  bestSeason: string;
  chapters: StoryChapter[];
  coordinates: { lat: number; lng: number };
  seo?: Seo;
}

export interface Suite {
  id: string;
  name: string;
  size: string;
  guests: number;
  description: string;
  image: ImageAsset;
  features: string[];
}

export interface Property {
  _type: "property";
  slug: Slug;
  name: string;
  destinationSlug: Slug;
  location: string;
  category: "villa" | "lodge" | "ryokan" | "riad" | "retreat" | "hotel";
  tagline: string;
  summary: string;
  description: RichText;
  heroImage: ImageAsset;
  cardImage: ImageAsset;
  gallery: ImageAsset[];
  highlights: Fact[];
  amenities: string[];
  suites: Suite[];
  dining: { title: string; body: string; image: ImageAsset };
  wellness: { title: string; body: string; image: ImageAsset };
  /** Indicative nightly rate, used for display only. */
  priceFrom: { amount: number; currency: "EUR" | "USD" | "GBP" | "JPY" };
  rooms: number;
  featured: boolean;
  seo?: Seo;
}

export type ExperienceCategory = "sea" | "culture" | "wellness" | "adventure" | "gastronomy";

export interface Experience {
  _type: "experience";
  slug: Slug;
  title: string;
  destinationSlug: Slug;
  category: ExperienceCategory;
  duration: string;
  summary: string;
  image: ImageAsset;
}

export type ArticleCategory = "Places" | "Craft" | "Table" | "Journeys" | "Wellbeing";

export interface Author {
  name: string;
  role: string;
}

export interface Article {
  _type: "article";
  slug: Slug;
  title: string;
  dek: string;
  category: ArticleCategory;
  author: Author;
  publishedAt: string;
  readingTime: number;
  heroImage: ImageAsset;
  body: ArticleBody;
  relatedDestinationSlug?: Slug;
  featured: boolean;
  seo?: Seo;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  context: string;
}

export interface PressMention {
  id: string;
  outlet: string;
  quote: string;
}

export interface HeroSlide {
  id: string;
  eyebrow: string;
  title: string;
  image: ImageAsset;
  video?: VideoAsset;
  href: string;
}

export interface HomePage {
  hero: { slides: HeroSlide[]; intervalMs: number };
  intro: { eyebrow: string; statement: string; cta: Cta };
  destinations: { eyebrow: string; title: string; slugs: Slug[] };
  story: { eyebrow: string; title: string; chapters: StoryChapter[] };
  parallax: { quote: string; attribution: string; images: [ImageAsset, ImageAsset, ImageAsset] };
  featuredStays: { eyebrow: string; title: string; slugs: Slug[] };
  experiences: { eyebrow: string; title: string; slugs: Slug[] };
  press: PressMention[];
  testimonials: Testimonial[];
  journal: { eyebrow: string; title: string };
  inquiry: { eyebrow: string; title: string; body: string; image: ImageAsset; cta: Cta };
  seo?: Seo;
}

export interface NavigationItem {
  label: string;
  href: string;
  /** Preview image shown in the full-screen menu on pointer devices. */
  image?: ImageAsset;
}

export interface SiteSettings {
  name: string;
  tagline: string;
  description: string;
  primaryNavigation: NavigationItem[];
  secondaryNavigation: NavigationItem[];
  legalNavigation: NavigationItem[];
  contact: { email: string; phone: string; address: string };
  social: { label: string; href: string }[];
  defaultSeoImage: ImageAsset;
}
