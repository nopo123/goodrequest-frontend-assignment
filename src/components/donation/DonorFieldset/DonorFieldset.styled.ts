import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

export const DonorFieldsetRoot = styled(Stack)({
  border: 0,
  padding: 0,
  margin: 0,
  minInlineSize: 0,
}) as typeof Stack;

export const DonorHeaderRow = styled(Stack)({
  alignItems: 'center',
  justifyContent: 'space-between',
}) as typeof Stack;
