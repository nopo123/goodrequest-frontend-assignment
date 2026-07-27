import type { MetadataRoute } from 'next';

import { SITE_URL } from '@/lib/seo/seo';
import { AppRoute } from '@/routes/routes';

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    allow: '/',
    disallow: AppRoute.THANK_YOU,
  },
  sitemap: `${SITE_URL}/sitemap.xml`,
});

export default robots;
