export const sanityConfig = {
  projectId: process.env.SANITY_PROJECT_ID ?? "",
  dataset: process.env.SANITY_DATASET ?? "production",
  apiVersion: process.env.SANITY_API_VERSION ?? "2025-02-19",
  token: process.env.SANITY_API_READ_TOKEN ?? "",
};

export function isSanityConfigured() {
  return sanityConfig.projectId.length > 0;
}
