import "server-only";

import type { ContentSource } from "../source";
import { articles } from "./data/articles";
import { destinations } from "./data/destinations";
import { experiences } from "./data/experiences";
import { homePage } from "./data/home";
import { properties } from "./data/properties";
import { siteSettings } from "./data/settings";

/**
 * Bundled content used when no CMS credentials are configured. It mirrors the
 * Sanity schema one-to-one, so the site is fully browsable in development,
 * previews and CI without network access to the CMS.
 */
export const localSource: ContentSource = {
  async getSiteSettings() {
    return siteSettings;
  },
  async getHomePage() {
    return homePage;
  },
  async getDestinations() {
    return destinations;
  },
  async getDestination(slug) {
    return destinations.find((destination) => destination.slug === slug) ?? null;
  },
  async getProperties() {
    return properties;
  },
  async getProperty(slug) {
    return properties.find((property) => property.slug === slug) ?? null;
  },
  async getExperiences() {
    return experiences;
  },
  async getArticles() {
    return articles;
  },
  async getArticle(slug) {
    return articles.find((article) => article.slug === slug) ?? null;
  },
};
