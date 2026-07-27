'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import type { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { I18nProvider } from '../i18n/I18nProvider';
import { QueryProvider } from '../query/QueryProvider';
import { GlobalStyle } from '../theme/GlobalStyle';
import { StyledComponentsRegistry } from '../theme/StyledComponentsRegistry';
import { muiTheme } from '../theme/mui-theme';
import { designTokens } from '../theme/tokens';

type AppProvidersProps = {
  readonly children: ReactNode;
};

export const AppProviders = ({ children }: AppProvidersProps) => (
  <AppRouterCacheProvider options={{ key: 'mui' }}>
    <StyledComponentsRegistry>
      <MuiThemeProvider theme={muiTheme}>
        <StyledThemeProvider theme={designTokens}>
          <GlobalStyle />
          <QueryProvider>
            <I18nProvider>{children}</I18nProvider>
          </QueryProvider>
        </StyledThemeProvider>
      </MuiThemeProvider>
    </StyledComponentsRegistry>
  </AppRouterCacheProvider>
);
