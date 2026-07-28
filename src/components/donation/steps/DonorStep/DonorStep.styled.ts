import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

export const DonorStepRoot = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    flexGrow: 1,
  },
})) as typeof Stack;

export const DonorListSection = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    flex: 1,
    minHeight: 0,
  },
})) as typeof Stack;
