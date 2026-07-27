import type { MetadataRoute } from 'next';

import { SITE_URL } from '@/lib/seo/seo';
import { AppRoute } from '@/routes/routes';

const PRIMARY_PRIORITY = 1;

const SECONDARY_PRIORITY = 0.8;

const INDEXABLE_ROUTES: readonly AppRoute[] = [
  AppRoute.DONATION,
  AppRoute.ABOUT_PROJECT,
  AppRoute.CONTACT,
];

const sitemap = (): MetadataRoute.Sitemap => {
  const lastModified = new Date();

  return INDEXABLE_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: route === AppRoute.DONATION ? PRIMARY_PRIORITY : SECONDARY_PRIORITY,
  }));
};

export default sitemap;
