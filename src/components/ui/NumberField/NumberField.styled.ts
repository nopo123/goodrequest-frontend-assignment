import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import { COLORS } from '@/lib/theme/tokens';
import { pxToRem } from '@/lib/theme/typography';

const UNIT_GAP = 10;

type NumberFieldRowProps = {
  readonly hasError: boolean;
  readonly fieldWidth: number;
};

export const NumberFieldRoot = styled(Stack)({
  alignItems: 'center',
}) as typeof Stack;

export const NumberFieldRow = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'hasError' && prop !== 'fieldWidth',
})<NumberFieldRowProps>(({ theme, hasError, fieldWidth }) => ({
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'center',
  gap: UNIT_GAP,
  width: `min(${fieldWidth}px, 100%)`,
  paddingBottom: theme.spacing(2),
  borderBottom: `2px solid ${
    hasError ? theme.palette.error.main : theme.palette.primary.main
  }`,
  transition: theme.transitions.create('border-color'),
}));

export const NumberFieldInput = styled(InputBase)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  '& input': {
    ...theme.typography.display,
    textAlign: 'center',
    padding: 0,
    height: 'auto',
  },
}));

export const NumberFieldUnit = styled('span')({
  flex: '0 0 auto',
  fontSize: pxToRem(24),
  lineHeight: 1,
  color: COLORS.textSecondary,
});

export const NumberFieldUnitSpacer = styled(NumberFieldUnit)({
  visibility: 'hidden',
});
