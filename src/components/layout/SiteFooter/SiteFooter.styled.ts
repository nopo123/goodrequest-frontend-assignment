import MuiLink from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import { COLORS } from '@/lib/theme/tokens';
import { pxToRem } from '@/lib/theme/typography';

export const FooterRow = styled(Stack)(({ theme }) => ({
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  [theme.breakpoints.up('sm')]: {
    alignItems: 'center',
  },
})) as typeof Stack;

export const FooterNav = styled(Stack)({
  alignItems: 'center',
}) as typeof Stack;

export const FooterNavLink = styled(MuiLink)({
  fontSize: pxToRem(16),
  lineHeight: 24 / 16,
  fontWeight: 400,
  letterSpacing: 0,
  color: COLORS.textTertiary,
}) as typeof MuiLink;
