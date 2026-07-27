import type { Metadata } from 'next';

import { sk } from '@/lib/i18n/locales/sk';
import type { AppRoute } from '@/routes/routes';

const DEFAULT_SITE_URL = 'http://localhost:3000';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;

export const SITE_NAME = 'Nadácia Good boy';

export const SEO_STRINGS = sk.meta;

const OG_IMAGE_PATH = '/og-image.jpg';

const OG_IMAGE_WIDTH = 1200;

const OG_IMAGE_HEIGHT = 630;

const OG_IMAGE = {
  url: OG_IMAGE_PATH,
  width: OG_IMAGE_WIDTH,
  height: OG_IMAGE_HEIGHT,
  alt: sk.contact.imageAlt,
};

export const OPEN_GRAPH_BASE = {
  type: 'website' as const,
  locale: 'sk_SK',
  siteName: SITE_NAME,
  images: [OG_IMAGE],
};

export const TWITTER_BASE = {
  card: 'summary_large_image' as const,
  images: [OG_IMAGE_PATH],
};

type PageMetadataInput = {
  readonly title: string;
  readonly description: string;
  readonly canonicalPath: AppRoute;
};

export const buildPageMetadata = ({
  title,
  description,
  canonicalPath,
}: PageMetadataInput): Metadata => ({
  title,
  description,
  alternates: { canonical: canonicalPath },
  openGraph: {
    ...OPEN_GRAPH_BASE,
    title,
    description,
    url: canonicalPath,
  },
  twitter: {
    ...TWITTER_BASE,
    title,
    description,
  },
});
