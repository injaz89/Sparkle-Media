import type { MetadataRoute } from "next";

const BASE_URL = "https://sparklemedia.lk";

const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about/life-at-sparkle", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/faqs", priority: 0.6, changeFrequency: "monthly" },
  { path: "/life", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/tech-lab/web-development", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/tech-lab/software-development", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/digital-lab/content-marketing", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/digital-lab/email-marketing", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/digital-lab/paid-media", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/digital-lab/sem", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/digital-lab/seo", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/digital-lab/social-media", priority: 0.6, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
