import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import { COLORS } from '@/lib/theme/tokens';

export const FieldLabel = styled(Typography)({
  display: 'block',
  color: COLORS.textPrimary,
  fontSize: '0.875rem',
  fontWeight: 500,
}) as typeof Typography;

export const OptionalHint = styled('span')({
  color: COLORS.textMuted,
  fontWeight: 400,
});
