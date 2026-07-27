import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import { COLORS } from '@/lib/theme/tokens';

export const StatsBand = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  borderTop: `1px solid ${COLORS.borderSubtle}`,
  borderBottom: `1px solid ${COLORS.borderSubtle}`,
}));
