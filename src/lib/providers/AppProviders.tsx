'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import type { ReactNode } from 'react';

import { I18nProvider } from '../i18n/I18nProvider';
import { QueryProvider } from '../query/QueryProvider';
import { muiTheme } from '../theme/mui-theme';

const SNACKBAR_AUTO_HIDE_MS = 5000;

type AppProvidersProps = {
  readonly children: ReactNode;
};

export const AppProviders = ({ children }: AppProvidersProps) => (
  <AppRouterCacheProvider options={{ key: 'mui' }}>
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={SNACKBAR_AUTO_HIDE_MS}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <QueryProvider>
          <I18nProvider>{children}</I18nProvider>
        </QueryProvider>
      </SnackbarProvider>
    </ThemeProvider>
  </AppRouterCacheProvider>
);
