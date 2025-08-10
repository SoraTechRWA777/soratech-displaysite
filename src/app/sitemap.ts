import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'
  const lastModified = new Date()
  return [
    { url: `${base}/`, lastModified },
  ]
}


