import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

import { resolveRequestLanguage } from '@/lib/i18n/server';
import { AppProviders } from '@/providers/AppProviders';
import { buildRootMetadata } from '@/lib/seo/seo';
import { COLORS } from '@/lib/theme/tokens';

const inter = Inter({
  variable: '--font-app-sans',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

export const generateMetadata = async (): Promise<Metadata> =>
  buildRootMetadata(await resolveRequestLanguage());

export const viewport: Viewport = {
  themeColor: COLORS.primary,
};

type RootLayoutProps = {
  readonly children: ReactNode;
};

const RootLayout = async ({ children }: RootLayoutProps) => {
  const language = await resolveRequestLanguage();

  return (
    <html lang={language} className={inter.variable}>
      <body>
        <AppProviders language={language}>{children}</AppProviders>
      </body>
    </html>
  );
};

export default RootLayout;
