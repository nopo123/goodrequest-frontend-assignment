import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import { COLORS } from '@/lib/theme/tokens';

export const ActionsRow = styled(Stack)({
  alignItems: 'center',
  justifyContent: 'space-between',
}) as typeof Stack;

export const BackButton = styled(Button)({
  border: 0,
  backgroundColor: COLORS.surfaceMuted,
  color: COLORS.textPrimary,
  '&:hover': {
    backgroundColor: COLORS.surfaceSunken,
  },
  '&.Mui-disabled': {
    backgroundColor: COLORS.surfaceMuted,
    color: COLORS.textDisabled,
  },
}) as typeof Button;
