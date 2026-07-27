import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import { ImageFrame } from '@/components/ui/layout/layout.styled';
import { SPACING } from '@/lib/theme/tokens';

export const ContactStack = styled(Stack)({
  flex: 1,
}) as typeof Stack;

export const ContactGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: SPACING.xl7,
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  },
}));

export const ContactImageFrame = styled(ImageFrame)({
  width: '100%',
  height: 'auto',
  aspectRatio: '2559 / 1706',
});
