import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import { COLORS } from '@/lib/theme/tokens';
import { pxToRem } from '@/lib/theme/typography';

export const StatsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(4),
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
}));

export const StatItem = styled(Stack)({
  alignItems: 'center',
  textAlign: 'center',
}) as typeof Stack;

export const StatValue = styled(Typography)({
  color: COLORS.primary,
  fontWeight: 500,
}) as typeof Typography;

export const StatLabel = styled(Typography)({
  fontSize: pxToRem(18),
  lineHeight: 24 / 18,
  fontWeight: 500,
  letterSpacing: 0,
  color: COLORS.textPrimary,
}) as typeof Typography;
