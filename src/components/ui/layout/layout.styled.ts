import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import { SPLIT_LAYOUT_MEDIA } from '@/lib/theme/tokens';

const DEFAULT_ASIDE_WIDTH = 602;

const DEFAULT_FRAME_RADIUS = 20;

export const TwoColumnGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: '1fr 1fr',
  },
}));

type SplitGridProps = {
  readonly asideWidth?: number;
};

export const SplitGrid = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'asideWidth',
})<SplitGridProps>(({ theme, asideWidth = DEFAULT_ASIDE_WIDTH }) => ({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  gap: theme.spacing(5),
  alignItems: 'stretch',
  [SPLIT_LAYOUT_MEDIA]: {
    gridTemplateColumns: `minmax(0, 1fr) ${asideWidth}px`,
  },
}));

type PrimaryColumnProps = {
  readonly verticalPadding?: number;
};

export const PrimaryColumn = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'verticalPadding',
})<PrimaryColumnProps>(({ theme, verticalPadding = 0 }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: theme.spacing(5),
  minWidth: 0,
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    paddingTop: verticalPadding,
    paddingBottom: verticalPadding,
  },
}));

export const MainRegion = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  minWidth: 0,
}) as typeof Box;

export const AsideColumn = styled(Box)({
  display: 'none',
  [SPLIT_LAYOUT_MEDIA]: {
    display: 'block',
    height: '100%',
  },
});

type ImageFrameProps = {
  readonly radius?: number;
};

export const ImageFrame = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'radius',
})<ImageFrameProps>(({ radius = DEFAULT_FRAME_RADIUS }) => ({
  position: 'relative',
  height: '100%',
  borderRadius: radius,
  overflow: 'hidden',
}));
