import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import { FLUID_SPACING } from '@/lib/theme/tokens';

export const FormRoot = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: theme.spacing(5),
  minHeight: 0,
  [theme.breakpoints.up('md')]: {
    gap: FLUID_SPACING.sectionGap,
  },
}));

export const ActionsSlot = styled(Box)({
  marginTop: 'auto',
});
