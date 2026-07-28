import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import { COLORS, RADII } from '@/lib/theme/tokens';

const SCROLLBAR_WIDTH = 8;

type ScrollAreaRootProps = {
  readonly areaMaxHeight: number | string;
};

export const ScrollAreaRoot = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'areaMaxHeight',
})<ScrollAreaRootProps>(({ theme, areaMaxHeight }) => ({
  maxHeight: areaMaxHeight,
  overflowY: 'auto',
  paddingRight: theme.spacing(1.5),
  [theme.breakpoints.up('md')]: {
    flexGrow: 1,
  },
  scrollbarWidth: 'thin',
  scrollbarColor: `${COLORS.border} transparent`,
  '&::-webkit-scrollbar': {
    width: SCROLLBAR_WIDTH,
  },
  '&::-webkit-scrollbar-track': {
    background: 'transparent',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: COLORS.border,
    borderRadius: RADII.pill,
  },
  '&:focus-visible': {
    outline: `2px solid ${COLORS.primary}`,
    outlineOffset: 2,
  },
}));
