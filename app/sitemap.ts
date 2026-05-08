import { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://floyet.com";

async function getBlogPosts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
      cache: "no-store",
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data?.data ?? [];
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();

  const blogUrls: MetadataRoute.Sitemap = posts.map((post: { slug: string; updatedAt?: string; publishedAt?: string }) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt || Date.now()),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const staticUrls: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${SITE_URL}/products`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/careers`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE_URL}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/help`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/status`, lastModified: new Date(), changeFrequency: "daily", priority: 0.4 },
    { url: `${SITE_URL}/privacy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/terms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/cookies`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];

  return [...staticUrls, ...blogUrls];
}
