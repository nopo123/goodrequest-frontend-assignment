import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const ROW_MIN_HEIGHT = 32;

export const DefinitionListRoot = styled(Stack)({
  margin: 0,
}) as typeof Stack;

export const DefinitionRowStack = styled(Stack)(({ theme }) => ({
  minHeight: ROW_MIN_HEIGHT,
  alignItems: 'flex-start',
  justifyContent: 'center',
  [theme.breakpoints.up('sm')]: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})) as typeof Stack;

export const DefinitionValue = styled(Typography)(({ theme }) => ({
  margin: 0,
  fontWeight: 600,
  [theme.breakpoints.up('sm')]: {
    textAlign: 'right',
  },
})) as typeof Typography;
