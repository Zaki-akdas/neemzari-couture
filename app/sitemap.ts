import type { MetadataRoute } from "next";
import { catalogue } from "@/lib/data";

const base = "https://neemzari-couture.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: "", priority: 1.0, changefreq: "weekly" },
    { path: "/collections", priority: 0.9, changefreq: "weekly" },
    { path: "/bridal", priority: 0.9, changefreq: "weekly" },
    { path: "/sherwanis", priority: 0.8, changefreq: "weekly" },
    { path: "/occasion-wear", priority: 0.8, changefreq: "weekly" },
    { path: "/custom-couture", priority: 0.8, changefreq: "weekly" },
    { path: "/lookbook", priority: 0.8, changefreq: "monthly" },
    { path: "/about", priority: 0.6, changefreq: "monthly" },
    { path: "/visit", priority: 0.7, changefreq: "monthly" },
  ].map((p) => ({
    url: `${base}${p.path}`,
    lastModified: new Date(),
    changeFrequency: p.changefreq as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: p.priority,
  }));

  const productPages = catalogue.map((g) => ({
    url: `${base}/looks/${g.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...productPages];
}
