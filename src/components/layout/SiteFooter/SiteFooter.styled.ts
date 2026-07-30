import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

export const FooterRow = styled(Stack)(({ theme }) => ({
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  [theme.breakpoints.up('sm')]: {
    alignItems: 'center',
  },
})) as typeof Stack;
