import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

const DIVIDER_PADDING = 16;

const DIVIDER_GAP = 10;

const DIVIDER_SPACING = DIVIDER_PADDING + DIVIDER_GAP;

export const SectionDivider = styled(Divider)({
  marginTop: DIVIDER_SPACING,
  marginBottom: DIVIDER_SPACING,
}) as typeof Divider;
