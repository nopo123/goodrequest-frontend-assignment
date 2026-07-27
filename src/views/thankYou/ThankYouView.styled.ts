import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import { COLORS, RADII } from '@/lib/theme/tokens';

const HEART_BADGE_SIZE = 64;

const HEART_ICON_SIZE = 32;

export const ThankYouStack = styled(Stack)({
  alignItems: 'center',
  textAlign: 'center',
}) as typeof Stack;

export const HeartBadge = styled(Box)({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: HEART_BADGE_SIZE,
  height: HEART_BADGE_SIZE,
  borderRadius: RADII.pill,
  backgroundColor: COLORS.primaryLight,
  color: COLORS.primary,
  fontSize: HEART_ICON_SIZE,
});
