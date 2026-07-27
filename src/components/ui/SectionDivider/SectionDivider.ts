import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

import { SPACING } from '@/lib/theme/tokens';

const DIVIDER_SPACING = SPACING.xl + SPACING.lg;

export const SectionDivider = styled(Divider)({
  marginTop: DIVIDER_SPACING,
  marginBottom: DIVIDER_SPACING,
}) as typeof Divider;
