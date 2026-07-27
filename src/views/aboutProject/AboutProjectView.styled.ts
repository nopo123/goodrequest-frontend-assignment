import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import { COLORS, SPACING } from '@/lib/theme/tokens';

export const StatsBand = styled(Box)({
  paddingTop: SPACING.xl7,
  paddingBottom: SPACING.xl7,
  borderTop: `1px solid ${COLORS.borderSubtle}`,
  borderBottom: `1px solid ${COLORS.borderSubtle}`,
});
