import { getAllSiteRoutes } from "../lib/site-data";

export default function sitemap() {
  return getAllSiteRoutes().map((route) => ({
    url: `https://mappedfutures.design${route}`,
    lastModified: "2026-03-08",
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
