import type { Metadata } from 'next';

import { en } from '@/lib/i18n/locales/en';
import { sk } from '@/lib/i18n/locales/sk';
import type { AppRoute } from '@/routes/routes';
import { Language } from '@/types/i18n';
import type { TranslationResource } from '@/types/translation';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

const TRANSLATIONS: Readonly<Record<Language, TranslationResource>> = {
  [Language.SK]: sk,
  [Language.EN]: en,
};

const OG_LOCALES: Readonly<Record<Language, string>> = {
  [Language.SK]: 'sk_SK',
  [Language.EN]: 'en_US',
};

const OG_IMAGE_PATH = '/og-image.jpg';

const OG_IMAGE_WIDTH = 1200;

const OG_IMAGE_HEIGHT = 630;

const TWITTER_BASE = {
  card: 'summary_large_image' as const,
  images: [OG_IMAGE_PATH],
};

const buildOpenGraphBase = (language: Language) => ({
  type: 'website' as const,
  locale: OG_LOCALES[language],
  siteName: TRANSLATIONS[language].meta.siteName,
  images: [
    {
      url: OG_IMAGE_PATH,
      width: OG_IMAGE_WIDTH,
      height: OG_IMAGE_HEIGHT,
      alt: TRANSLATIONS[language].contact.imageAlt,
    },
  ],
});

export const getSeoStrings = (language: Language): TranslationResource['meta'] =>
  TRANSLATIONS[language].meta;

export const buildRootMetadata = (language: Language): Metadata => {
  const strings = getSeoStrings(language);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: strings.siteName,
      template: `%s | ${strings.siteName}`,
    },
    description: strings.donateDescription,
    openGraph: {
      ...buildOpenGraphBase(language),
      title: strings.siteName,
      description: strings.donateDescription,
    },
    twitter: TWITTER_BASE,
  };
};

type PageMetadataInput = {
  readonly language: Language;
  readonly title: string;
  readonly description: string;
  readonly canonicalPath: AppRoute;
};

export const buildPageMetadata = ({
  language,
  title,
  description,
  canonicalPath,
}: PageMetadataInput): Metadata => ({
  title,
  description,
  alternates: { canonical: canonicalPath },
  openGraph: {
    ...buildOpenGraphBase(language),
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
