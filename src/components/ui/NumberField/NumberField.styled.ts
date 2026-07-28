import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import { COLORS, COMPACT_HEIGHT_MEDIA, SPACING } from '@/lib/theme/tokens';
import { pxToRem } from '@/lib/theme/typography';

const MIN_FIELD_WIDTH = 50;

type NumberFieldRowProps = {
  readonly hasError: boolean;
};

export const NumberFieldRoot = styled(Stack)({
  alignItems: 'center',
}) as typeof Stack;

export const NumberFieldRow = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'hasError',
})<NumberFieldRowProps>(({ theme, hasError }) => ({
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'center',
  gap: SPACING.lg,
  minWidth: MIN_FIELD_WIDTH,
  maxWidth: '100%',
  paddingLeft: SPACING.xl2,
  paddingRight: SPACING.xl2,
  paddingBottom: theme.spacing(2),
  borderBottom: `2px solid ${
    hasError ? theme.palette.error.main : theme.palette.primary.main
  }`,
  transition: theme.transitions.create('border-color'),
  [COMPACT_HEIGHT_MEDIA]: {
    paddingBottom: theme.spacing(1),
  },
}));

export const NumberFieldInput = styled(InputBase)(({ theme }) => ({
  width: 'auto',
  '& input': {
    ...theme.typography.display,
    textAlign: 'center',
    padding: 0,
    height: 'auto',
    width: 'auto',
    fieldSizing: 'content',
  },
}));

export const NumberFieldUnit = styled('span')({
  flex: '0 0 auto',
  fontSize: pxToRem(24),
  lineHeight: 1,
  color: COLORS.textSecondary,
});
