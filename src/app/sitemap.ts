
import type { MetadataRoute } from 'next';
import { portfolioData } from '@/data/portfolioData';

// IMPORTANT: Replace this with your actual deployed website URL
const BASE_URL = 'https://dpublic.my.id';

export const dynamic = 'force-static'; // Ensures the route is treated as static during export

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    '', // Home page
    '/experience',
    '/education',
    '/projects',
    '/skills',
    '/contact',
    '/tailor-profile',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1.0 : 0.8, // Homepage gets higher priority
  }));

  // If you had dynamic project pages (e.g., /projects/[id]), you would add them here:
  // const projectEntries = portfolioData.projects.map(project => ({
  //   url: `${BASE_URL}/projects/${project.id}`, // Assuming project.id can be used in a URL
  //   lastModified: new Date().toISOString(),
  //   changeFrequency: 'monthly',
  //   priority: 0.7,
  // }));
  // return [...sitemapEntries, ...projectEntries];

  return sitemapEntries;
}
