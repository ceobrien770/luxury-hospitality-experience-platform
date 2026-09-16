import type { Article, Destination, Experience, HomePage, Property, SiteSettings } from "./types";

/**
 * Contract every content provider implements. Providers return normalised
 * types, never raw CMS documents.
 */
export interface ContentSource {
  getSiteSettings(): Promise<SiteSettings>;
  getHomePage(): Promise<HomePage>;
  getDestinations(): Promise<Destination[]>;
  getDestination(slug: string): Promise<Destination | null>;
  getProperties(): Promise<Property[]>;
  getProperty(slug: string): Promise<Property | null>;
  getExperiences(): Promise<Experience[]>;
  getArticles(): Promise<Article[]>;
  getArticle(slug: string): Promise<Article | null>;
}

export type CmsTag =
  "cms" | "settings" | "home" | "destination" | "property" | "experience" | "article";
