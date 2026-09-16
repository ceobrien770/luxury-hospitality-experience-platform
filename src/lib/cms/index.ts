import "server-only";

import { cacheLife, cacheTag } from "next/cache";
import { localSource } from "./local";
import { isSanityConfigured, sanitySource } from "./sanity";
import type { ContentSource } from "./source";
import type { Article, Destination, Experience, Property } from "./types";

/**
 * Public data API used by routes and server components.
 *
 * Each accessor is cached with `use cache` and tagged per document type so a
 * CMS webhook can revalidate exactly what changed (see app/api/revalidate).
 */
function source(): ContentSource {
  return isSanityConfigured() ? sanitySource : localSource;
}

export async function getSiteSettings() {
  "use cache";
  cacheLife("hours");
  cacheTag("cms", "settings");
  return source().getSiteSettings();
}

export async function getHomePage() {
  "use cache";
  cacheLife("hours");
  cacheTag("cms", "home");
  return source().getHomePage();
}

export async function getDestinations(): Promise<Destination[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("cms", "destination");
  return source().getDestinations();
}

export async function getDestination(slug: string) {
  "use cache";
  cacheLife("hours");
  cacheTag("cms", "destination", `destination:${slug}`);
  return source().getDestination(slug);
}

export async function getProperties(): Promise<Property[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("cms", "property");
  return source().getProperties();
}

export async function getProperty(slug: string) {
  "use cache";
  cacheLife("hours");
  cacheTag("cms", "property", `property:${slug}`);
  return source().getProperty(slug);
}

export async function getExperiences(): Promise<Experience[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("cms", "experience");
  return source().getExperiences();
}

export async function getArticles(): Promise<Article[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("cms", "article");
  const articles = await source().getArticles();
  return [...articles].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export async function getArticle(slug: string) {
  "use cache";
  cacheLife("hours");
  cacheTag("cms", "article", `article:${slug}`);
  return source().getArticle(slug);
}

/* Derived queries ------------------------------------------------------- */

export async function getPropertiesByDestination(destinationSlug: string) {
  const properties = await getProperties();
  return properties.filter((property) => property.destinationSlug === destinationSlug);
}

export async function getExperiencesByDestination(destinationSlug: string) {
  const experiences = await getExperiences();
  return experiences.filter((experience) => experience.destinationSlug === destinationSlug);
}

/** Picks documents by slug, preserving the editor-defined order. */
export function pickBySlug<T extends { slug: string }>(items: T[], slugs: string[]) {
  const bySlug = new Map(items.map((item) => [item.slug, item]));
  return slugs.map((slug) => bySlug.get(slug)).filter((item): item is T => Boolean(item));
}

/** The next item in a list, wrapping around — used for "next destination" links. */
export function getNextItem<T extends { slug: string }>(items: T[], slug: string) {
  const index = items.findIndex((item) => item.slug === slug);
  if (index === -1 || items.length < 2) return null;
  return items[(index + 1) % items.length];
}

export async function getRelatedArticles(article: Article, limit = 3) {
  const articles = await getArticles();
  const others = articles.filter((candidate) => candidate.slug !== article.slug);
  const sameCategory = others.filter((candidate) => candidate.category === article.category);
  const rest = others.filter((candidate) => candidate.category !== article.category);
  return [...sameCategory, ...rest].slice(0, limit);
}
