import type { MetadataRoute } from 'next';
import { ARTICLES } from '@/lib/articles';
import { LEGAL_PAGES } from '@/lib/legal-pages';
import { siteConfig } from '@/lib/site.config';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.domain;

  const home: MetadataRoute.Sitemap = [{ url: base, changeFrequency: 'daily', priority: 1 }];

  const articles: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url: `${base}/blog/${article.slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const legal: MetadataRoute.Sitemap = LEGAL_PAGES.map((page) => ({
    url: `${base}/${page.slug}`,
    changeFrequency: 'yearly',
    priority: 0.3,
  }));

  return [...home, ...articles, ...legal];
}
