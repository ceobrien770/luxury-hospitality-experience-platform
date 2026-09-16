import "server-only";

import type { ContentSource } from "../source";
import type {
  Article,
  ArticleBody,
  Destination,
  Experience,
  HeroSlide,
  HomePage,
  Property,
  Seo,
  SiteSettings,
  StoryChapter,
} from "../types";
import { sanityFetch } from "./client";
import { requireImage, toImageAsset, toImageAssets, type SanityImage } from "./image";
import {
  articleQuery,
  articlesQuery,
  destinationQuery,
  destinationsQuery,
  experiencesQuery,
  homePageQuery,
  propertiesQuery,
  propertyQuery,
  siteSettingsQuery,
} from "./queries";

export { isSanityConfigured } from "./config";

/**
 * Replaces every ImageAsset field in T with the raw Sanity image shape, so raw
 * query results are typed without duplicating each interface by hand.
 */
type Raw<T> = T extends string | number | boolean | null | undefined
  ? T
  : T extends { src: string; alt: string; width: number }
    ? SanityImage
    : T extends Array<infer Item>
      ? Array<Raw<Item>>
      : T extends object
        ? { [K in keyof T]: Raw<T[K]> }
        : T;

function mapSeo(seo: Raw<Seo> | undefined): Seo | undefined {
  if (!seo) return undefined;
  return {
    title: seo.title,
    description: seo.description,
    image: toImageAsset(seo.image as SanityImage),
  };
}

function mapChapter(chapter: Raw<StoryChapter>): StoryChapter {
  return { ...chapter, image: requireImage(chapter.image as SanityImage, "chapter.image") };
}

function mapDestination(raw: Raw<Destination>): Destination {
  return {
    ...raw,
    _type: "destination",
    heroImage: requireImage(raw.heroImage as SanityImage, "heroImage"),
    cardImage: requireImage(raw.cardImage as SanityImage, "cardImage"),
    gallery: toImageAssets(raw.gallery as SanityImage[]),
    facts: raw.facts ?? [],
    chapters: (raw.chapters ?? []).map(mapChapter),
    seo: mapSeo(raw.seo),
  };
}

function mapProperty(raw: Raw<Property>): Property {
  return {
    ...raw,
    _type: "property",
    heroImage: requireImage(raw.heroImage as SanityImage, "heroImage"),
    cardImage: requireImage(raw.cardImage as SanityImage, "cardImage"),
    gallery: toImageAssets(raw.gallery as SanityImage[]),
    highlights: raw.highlights ?? [],
    amenities: raw.amenities ?? [],
    suites: (raw.suites ?? []).map((suite) => ({
      ...suite,
      features: suite.features ?? [],
      image: requireImage(suite.image as SanityImage, "suite.image"),
    })),
    dining: { ...raw.dining, image: requireImage(raw.dining.image as SanityImage, "dining.image") },
    wellness: {
      ...raw.wellness,
      image: requireImage(raw.wellness.image as SanityImage, "wellness.image"),
    },
    seo: mapSeo(raw.seo),
  };
}

function mapExperience(raw: Raw<Experience>): Experience {
  return { ...raw, _type: "experience", image: requireImage(raw.image as SanityImage, "image") };
}

type RawBodyBlock = { _type: string; _key: string; [key: string]: unknown };

function mapArticleBody(body: RawBodyBlock[] | undefined): ArticleBody {
  return (body ?? []).map((block) => {
    switch (block._type) {
      case "imageBlock":
        return { ...block, image: requireImage(block.image as SanityImage, "imageBlock.image") };
      case "imagePair": {
        const [first, second] = toImageAssets(block.images as SanityImage[]);
        return { ...block, images: [first, second] };
      }
      default:
        return block;
    }
  }) as ArticleBody;
}

function mapArticle(raw: Raw<Article>): Article {
  return {
    ...raw,
    _type: "article",
    readingTime: Math.max(1, raw.readingTime ?? 1),
    heroImage: requireImage(raw.heroImage as SanityImage, "heroImage"),
    body: mapArticleBody(raw.body as unknown as RawBodyBlock[]),
    seo: mapSeo(raw.seo),
  };
}

function mapHeroSlide(raw: Raw<HeroSlide>): HeroSlide {
  const image = requireImage(raw.image as SanityImage, "hero.slide.image");
  return {
    ...raw,
    image,
    video: raw.video ? { ...raw.video, poster: image } : undefined,
  };
}

export const sanitySource: ContentSource = {
  async getSiteSettings() {
    const raw = await sanityFetch<Raw<SiteSettings>>(siteSettingsQuery);
    return {
      ...raw,
      primaryNavigation: (raw.primaryNavigation ?? []).map((item) => ({
        ...item,
        image: toImageAsset(item.image as SanityImage),
      })),
      secondaryNavigation: raw.secondaryNavigation ?? [],
      legalNavigation: raw.legalNavigation ?? [],
      social: raw.social ?? [],
      defaultSeoImage: requireImage(raw.defaultSeoImage as SanityImage, "defaultSeoImage"),
    } as SiteSettings;
  },

  async getHomePage() {
    const raw = await sanityFetch<Raw<HomePage>>(homePageQuery);
    const parallaxImages = toImageAssets(raw.parallax.images as SanityImage[]);
    return {
      ...raw,
      hero: { ...raw.hero, slides: raw.hero.slides.map(mapHeroSlide) },
      story: { ...raw.story, chapters: raw.story.chapters.map(mapChapter) },
      parallax: {
        ...raw.parallax,
        images: [parallaxImages[0], parallaxImages[1], parallaxImages[2]],
      },
      inquiry: {
        ...raw.inquiry,
        image: requireImage(raw.inquiry.image as SanityImage, "inquiry.image"),
      },
      seo: mapSeo(raw.seo),
    } as HomePage;
  },

  async getDestinations() {
    const raw = await sanityFetch<Raw<Destination>[]>(destinationsQuery);
    return raw.map(mapDestination);
  },

  async getDestination(slug) {
    const raw = await sanityFetch<Raw<Destination> | null>(destinationQuery, { slug });
    return raw ? mapDestination(raw) : null;
  },

  async getProperties() {
    const raw = await sanityFetch<Raw<Property>[]>(propertiesQuery);
    return raw.map(mapProperty);
  },

  async getProperty(slug) {
    const raw = await sanityFetch<Raw<Property> | null>(propertyQuery, { slug });
    return raw ? mapProperty(raw) : null;
  },

  async getExperiences() {
    const raw = await sanityFetch<Raw<Experience>[]>(experiencesQuery);
    return raw.map(mapExperience);
  },

  async getArticles() {
    const raw = await sanityFetch<Raw<Article>[]>(articlesQuery);
    return raw.map(mapArticle);
  },

  async getArticle(slug) {
    const raw = await sanityFetch<Raw<Article> | null>(articleQuery, { slug });
    return raw ? mapArticle(raw) : null;
  },
};
