import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

export const PhoneRow = styled(Stack)({
  alignItems: 'flex-start',
}) as typeof Stack;

export const CountrySelect = styled(Select)({
  flex: '0 0 auto',
  width: 88,
  '& .MuiSelect-select': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const CountryOption = styled(Stack)({
  alignItems: 'center',
}) as typeof Stack;
