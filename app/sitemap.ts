import type { MetadataRoute } from "next"
import { servicePages } from "@/lib/content"

const siteUrl = "https://tenex-doo.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/projekti`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...servicePages.map((service) => ({ url: `${siteUrl}/usluge/${service.slug}`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${siteUrl}/politika-privatnosti`, lastModified, changeFrequency: "yearly" as const, priority: 0.2 },
    { url: `${siteUrl}/uvjeti-koristenja`, lastModified, changeFrequency: "yearly" as const, priority: 0.2 },
  ]
}
