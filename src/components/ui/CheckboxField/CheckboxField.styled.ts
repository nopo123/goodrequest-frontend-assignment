import { styled } from '@mui/material/styles';

import { COLORS } from '@/lib/theme/tokens';

const BOX_SIZE = 20;

const BOX_RADIUS = 5;

export const CheckboxBox = styled('span')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: '0 0 auto',
  width: BOX_SIZE,
  height: BOX_SIZE,
  borderRadius: BOX_RADIUS,
  border: `1px solid ${COLORS.border}`,
  backgroundColor: COLORS.surface,
});

export const CheckboxBoxChecked = styled(CheckboxBox)({
  borderColor: COLORS.primary,
  backgroundColor: COLORS.primaryLight,
  color: COLORS.primary,
});

export const CheckboxBoxError = styled(CheckboxBox)({
  borderColor: COLORS.error,
});
