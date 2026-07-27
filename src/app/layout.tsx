import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

import { AppProviders } from '@/lib/providers/AppProviders';
import {
  OPEN_GRAPH_BASE,
  SEO_STRINGS,
  SITE_NAME,
  SITE_URL,
  TWITTER_BASE,
} from '@/lib/seo/seo';
import { COLORS } from '@/lib/theme/tokens';

const inter = Inter({
  variable: '--font-app-sans',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SEO_STRINGS.donateDescription,
  openGraph: {
    ...OPEN_GRAPH_BASE,
    title: SITE_NAME,
    description: SEO_STRINGS.donateDescription,
  },
  twitter: TWITTER_BASE,
};

export const viewport: Viewport = {
  themeColor: COLORS.primary,
};

type RootLayoutProps = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="sk" className={inter.variable}>
    <body>
      <AppProviders>{children}</AppProviders>
    </body>
  </html>
);

export default RootLayout;
