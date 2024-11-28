const pages = ["/socials", "/pricing", "/work"];

import { projects } from "@/lib/data";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const workPages: MetadataRoute.Sitemap = projects.map((project) => {
    return {
      url: `https://unicorn-space.com/work/${project.slug}`,
      lastModified: new Date(project.year, 0, 1),
      changeFrequency: "monthly",
      priority: 0.8,
    };
  });
  return [
    {
      url: "https://unicorn-space.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://unicorn-space.com/socials",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://unicorn-space.com/pricing",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://unicorn-space.com/work",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...workPages,
  ];
}
