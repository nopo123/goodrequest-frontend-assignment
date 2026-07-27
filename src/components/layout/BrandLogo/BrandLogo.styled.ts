import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

export const LogoLink = styled(Stack)({
  alignItems: 'center',
  textDecoration: 'none',
}) as typeof Stack;

export const LogoMark = styled('img')({
  width: 31,
  height: 31,
  display: 'block',
});
