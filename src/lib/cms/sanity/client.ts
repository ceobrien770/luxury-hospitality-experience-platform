import "server-only";

import { sanityConfig } from "./config";

type QueryParams = Record<string, string | number | boolean | string[]>;

/**
 * Minimal GROQ client over Sanity's HTTP API.
 *
 * Using `fetch` directly keeps the server bundle small, and caching is handled
 * one level up by `use cache` in lib/cms/index.ts. Authenticated requests go to
 * the live API; public ones use the edge-cached API CDN.
 */
export async function sanityFetch<T>(query: string, params: QueryParams = {}): Promise<T> {
  const { projectId, dataset, apiVersion, token } = sanityConfig;
  const host = token ? "api.sanity.io" : "apicdn.sanity.io";
  const url = new URL(`https://${projectId}.${host}/v${apiVersion}/data/query/${dataset}`);

  url.searchParams.set("query", query);
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(`$${key}`, JSON.stringify(value));
  }

  const response = await fetch(url, {
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`Sanity query failed (${response.status}): ${detail.slice(0, 300)}`);
  }

  const body = (await response.json()) as { result: T };
  return body.result;
}
