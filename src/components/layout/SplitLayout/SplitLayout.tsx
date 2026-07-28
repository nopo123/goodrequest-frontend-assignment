'use client';

import Container from '@mui/material/Container';
import type { ReactNode } from 'react';

import {
  AsideColumn,
  MainRegion,
  PrimaryColumn,
  SplitGrid,
} from '@/components/ui/layout/layout.styled';
import {
  CONTENT_MAX_WIDTH,
  FLUID_SPACING,
  SPACING,
  SPLIT_LAYOUT_MEDIA,
} from '@/lib/theme/tokens';

const FULL_HEIGHT = `calc(100vh - (${FLUID_SPACING.pagePadding} * 2))`;

type SplitLayoutProps = {
  readonly children: ReactNode;
  readonly aside?: ReactNode;
  readonly footer?: ReactNode;
  readonly asideWidth?: number;
  readonly contentVerticalPadding?: number | string;
};

export const SplitLayout = ({
  children,
  aside,
  footer,
  asideWidth,
  contentVerticalPadding = FLUID_SPACING.contentPadding,
}: SplitLayoutProps) => {
  const hasAside = aside !== undefined;

  const content = (
    <PrimaryColumn
      verticalPadding={contentVerticalPadding}
      sx={hasAside ? undefined : { minHeight: { md: FULL_HEIGHT } }}
    >
      <MainRegion component="main">{children}</MainRegion>
      {footer}
    </PrimaryColumn>
  );

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        maxWidth: {
          xs: CONTENT_MAX_WIDTH + SPACING.xl2 * 2,
          md: CONTENT_MAX_WIDTH + SPACING.xl8 * 2,
        },
        px: {
          xs: `${SPACING.xl2}px`,
          md: `${SPACING.xl8}px`,
        },
        py: {
          xs: `${SPACING.xl2}px`,
          md: FLUID_SPACING.pagePadding,
        },
      }}
    >
      {hasAside ? (
        <SplitGrid
          asideWidth={asideWidth}
          sx={{ [SPLIT_LAYOUT_MEDIA]: { minHeight: FULL_HEIGHT } }}
        >
          {content}
          <AsideColumn>{aside}</AsideColumn>
        </SplitGrid>
      ) : (
        content
      )}
    </Container>
  );
};
