
import type { MetadataRoute } from 'next';
import { portfolioData } from '@/data/portfolioData';
import { getSortedPostsData } from '@/lib/posts';

// IMPORTANT: Replace this with your actual deployed website URL
const BASE_URL = 'https://dpublic.my.id';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '', // Home page
    '/experience',
    '/education',
    '/projects',
    '/skills',
    '/blog',
    '/contact',
    '/tailor-profile',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1.0 : 0.8, // Homepage gets higher priority
  }));

  // Add blog post entries
  const posts = getSortedPostsData();
  const blogEntries = posts.map(post => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...sitemapEntries, ...blogEntries];
}
