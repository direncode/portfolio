import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://direncode.com";
  const routes = ["", "/thesis", "/btut", "/crystara", "/niv"];
  const now = new Date();
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1.0 : r === "/thesis" ? 0.9 : 0.7,
  }));
}
