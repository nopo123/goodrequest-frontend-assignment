import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import { COLORS, RADII, SPACING } from '@/lib/theme/tokens';

const BADGE_SIZE = 48;

export const IconCardRoot = styled(Stack)({
  alignItems: 'center',
  textAlign: 'center',
  paddingTop: SPACING.xl2,
  paddingBottom: SPACING.xl2,
}) as typeof Stack;

export const IconBadge = styled(Box)({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: BADGE_SIZE,
  height: BADGE_SIZE,
  borderRadius: RADII.md,
  backgroundColor: COLORS.primaryLight,
  color: COLORS.primary,
});

export const IconCardHeading = styled(Stack)({
  alignItems: 'center',
}) as typeof Stack;
