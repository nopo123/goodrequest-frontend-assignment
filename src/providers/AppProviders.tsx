'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { ReactNode } from 'react';

import { DonationSubmissionProvider } from '@/context/DonationSubmissionContext';
import type { Language } from '@/types/i18n';

import { I18nProvider } from '../lib/i18n/I18nProvider';
import { QueryProvider } from '../lib/query/QueryProvider';
import { muiTheme } from '../lib/theme/mui-theme';

type AppProvidersProps = {
  readonly language: Language;
  readonly children: ReactNode;
};

export const AppProviders = ({ language, children }: AppProvidersProps) => (
  <AppRouterCacheProvider options={{ key: 'mui' }}>
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <QueryProvider>
        <I18nProvider language={language}>
          <DonationSubmissionProvider>{children}</DonationSubmissionProvider>
        </I18nProvider>
      </QueryProvider>
    </ThemeProvider>
  </AppRouterCacheProvider>
);
