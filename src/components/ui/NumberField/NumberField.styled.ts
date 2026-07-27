import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import { COLORS } from '@/lib/theme/tokens';
import { pxToRem } from '@/lib/theme/typography';

const UNIT_GAP = 10;

const MIN_FIELD_WIDTH = 50;

const HORIZONTAL_PADDING = 20;

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
  gap: UNIT_GAP,
  minWidth: MIN_FIELD_WIDTH,
  maxWidth: '100%',
  paddingLeft: HORIZONTAL_PADDING,
  paddingRight: HORIZONTAL_PADDING,
  paddingBottom: theme.spacing(2),
  borderBottom: `2px solid ${
    hasError ? theme.palette.error.main : theme.palette.primary.main
  }`,
  transition: theme.transitions.create('border-color'),
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
