'use client';

import Container from '@mui/material/Container';
import type { ReactNode } from 'react';

import {
  AsideColumn,
  MainRegion,
  PrimaryColumn,
  SplitGrid,
} from '@/components/ui/layout/layout.styled';
import { SPACING, SPLIT_LAYOUT_MEDIA } from '@/lib/theme/tokens';

const FULL_HEIGHT = `calc(100vh - ${SPACING.xl2 * 2}px)`;

type SplitLayoutProps = {
  readonly children: ReactNode;
  readonly aside?: ReactNode;
  readonly footer?: ReactNode;
  readonly asideWidth?: number;
  readonly contentVerticalPadding?: number;
};

export const SplitLayout = ({
  children,
  aside,
  footer,
  asideWidth,
  contentVerticalPadding = SPACING.xl6,
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
        px: {
          xs: `${SPACING.xl2}px`,
          md: `${SPACING.xl8}px`,
        },
        py: `${SPACING.xl2}px`,
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
