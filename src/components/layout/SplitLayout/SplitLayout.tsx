'use client';

import Container from '@mui/material/Container';
import type { ReactNode } from 'react';

import {
  AsideColumn,
  MainRegion,
  PrimaryColumn,
  SplitGrid,
} from '@/components/ui/layout/layout.styled';
import { CONTENT_MAX_WIDTH, SPLIT_LAYOUT_MEDIA } from '@/lib/theme/tokens';

const DEFAULT_CONTENT_VERTICAL_PADDING = 60;

const PAGE_EDGE_PADDING = 20;

const PAGE_HORIZONTAL_PADDING = 80;

const FULL_HEIGHT = `calc(100vh - ${PAGE_EDGE_PADDING * 2}px)`;

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
  contentVerticalPadding = DEFAULT_CONTENT_VERTICAL_PADDING,
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
          xs: CONTENT_MAX_WIDTH + PAGE_EDGE_PADDING * 2,
          md: CONTENT_MAX_WIDTH + PAGE_HORIZONTAL_PADDING * 2,
        },
        px: {
          xs: `${PAGE_EDGE_PADDING}px`,
          md: `${PAGE_HORIZONTAL_PADDING}px`,
        },
        py: `${PAGE_EDGE_PADDING}px`,
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
