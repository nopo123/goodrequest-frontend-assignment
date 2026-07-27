import Stepper from '@mui/material/Stepper';
import { styled } from '@mui/material/styles';

import { COLORS } from '@/lib/theme/tokens';

export const StyledStepper = styled(Stepper)(({ theme }) => ({
  '& .MuiStepLabel-label': {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  '& .MuiStepConnector-root': {
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },
  '& .MuiStepButton-root.Mui-disabled': {
    cursor: 'default',
  },
  '& .Mui-disabled .MuiStepLabel-label': {
    color: COLORS.textMuted,
  },
  '& .Mui-disabled .MuiStepIcon-root': {
    color: COLORS.surface,
    borderColor: COLORS.borderSubtle,
  },
  '& .Mui-disabled .MuiStepIcon-text': {
    fill: COLORS.textMuted,
  },
}));

export const VisuallyHidden = styled('span')({
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  whiteSpace: 'nowrap',
  border: 0,
});
