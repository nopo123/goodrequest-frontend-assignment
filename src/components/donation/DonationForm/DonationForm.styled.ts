import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const FormRoot = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: theme.spacing(5),
  minHeight: 0,
}));

export const ActionsSlot = styled(Box)({
  marginTop: 'auto',
});
