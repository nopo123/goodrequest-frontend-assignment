import MuiLink from '@mui/material/Link';
import { styled } from '@mui/material/styles';

import { COLORS } from '@/lib/theme/tokens';

export const BackLinkRoot = styled(MuiLink)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  alignSelf: 'flex-start',
  color: COLORS.textPrimary,
  fontWeight: 500,
  '&:hover': {
    color: COLORS.primary,
  },
})) as typeof MuiLink;
