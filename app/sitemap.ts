import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://diren.vercel.app";
  const routes = [
    "",
    "/primitives",
    "/btut",
    "/crystara",
    "/niv",
    "/participatory-data-estate",
    "/convergence",
    "/about",
    "/forward",
  ];
  const now = new Date();
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1.0 : 0.7,
  }));
}
