'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { ReactNode } from 'react';

import { DonationSubmissionProvider } from '@/context/DonationSubmissionContext';

import { I18nProvider } from '../i18n/I18nProvider';
import { QueryProvider } from '../query/QueryProvider';
import { muiTheme } from '../theme/mui-theme';

type AppProvidersProps = {
  readonly children: ReactNode;
};

export const AppProviders = ({ children }: AppProvidersProps) => (
  <AppRouterCacheProvider options={{ key: 'mui' }}>
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <QueryProvider>
        <I18nProvider>
          <DonationSubmissionProvider>{children}</DonationSubmissionProvider>
        </I18nProvider>
      </QueryProvider>
    </ThemeProvider>
  </AppRouterCacheProvider>
);
