import { createTheme } from '@mui/material/styles';

import {
  BREAKPOINTS,
  COLORS,
  RADII,
  SHADOWS,
  SPACING,
  SPACING_UNIT,
  TRANSITIONS,
} from './tokens';
import { typography } from './typography';

export const muiTheme = createTheme({
  spacing: SPACING_UNIT,
  shape: {
    borderRadius: RADII.md,
  },
  breakpoints: {
    values: {
      xs: BREAKPOINTS.mobile,
      sm: BREAKPOINTS.tablet,
      md: BREAKPOINTS.laptop,
      lg: BREAKPOINTS.desktop,
      xl: 1536,
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: COLORS.primary,
      dark: COLORS.primaryDark,
      light: COLORS.primaryLight,
      contrastText: '#FFFFFF',
    },
    error: {
      main: COLORS.error,
      light: COLORS.errorLight,
    },
    success: {
      main: COLORS.success,
      light: COLORS.successLight,
    },
    warning: {
      main: COLORS.warning,
    },
    text: {
      primary: COLORS.textPrimary,
      secondary: COLORS.textSecondary,
      disabled: COLORS.textDisabled,
    },
    divider: COLORS.borderSubtle,
    background: {
      default: COLORS.background,
      paper: COLORS.surface,
    },
  },
  typography,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: COLORS.background,
          color: COLORS.textPrimary,
        },
        '@media (prefers-reduced-motion: reduce)': {
          '*, *::before, *::after': {
            animationDuration: '0.01ms !important',
            transitionDuration: '0.01ms !important',
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: RADII.sm,
          padding: '12px 24px',
          transition: `background-color ${TRANSITIONS.fast}, box-shadow ${TRANSITIONS.fast}`,
        },
        sizeLarge: {
          padding: '14px 28px',
        },
        text: {
          color: COLORS.textPrimary,
          '&:hover': {
            backgroundColor: COLORS.surfaceSunken,
          },
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          gap: 8,
        },
        grouped: {
          border: 0,
          borderRadius: `${RADII.sm}px !important`,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '0.9375rem',
          color: COLORS.textPrimary,
          backgroundColor: COLORS.surfaceSunken,
          transition: `background-color ${TRANSITIONS.base}, color ${TRANSITIONS.base}`,
          '&:hover': {
            backgroundColor: COLORS.border,
          },
          '&.Mui-selected': {
            backgroundColor: COLORS.primary,
            color: '#FFFFFF',
            '&:hover': {
              backgroundColor: COLORS.primaryDark,
            },
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: RADII.sm,
          backgroundColor: COLORS.surfaceMuted,
          transition: `border-color ${TRANSITIONS.fast}`,
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent',
          },
          '&.Mui-focused': {
            backgroundColor: COLORS.surface,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: COLORS.primary,
          },
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: COLORS.error,
          },
        },
        input: {
          '&::placeholder': {
            color: COLORS.textMuted,
            opacity: 1,
          },
        },
        notchedOutline: {
          borderColor: 'transparent',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: COLORS.textMuted,
          fontSize: '0.875rem',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          marginTop: 6,
          fontSize: '0.8125rem',
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          padding: 0,
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          marginRight: 0,
          gap: SPACING.md,
          alignItems: 'center',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: RADII.lg,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: RADII.sm,
          alignItems: 'flex-start',
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          borderRadius: RADII.sm,
          boxShadow: SHADOWS.raised,
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          color: COLORS.surface,
          border: `1px solid ${COLORS.border}`,
          borderRadius: RADII.pill,
          '& .MuiStepIcon-text': {
            fill: COLORS.textTertiary,
            fontSize: '0.75rem',
            fontWeight: 600,
          },
          '&.Mui-active': {
            color: COLORS.primary,
            borderColor: COLORS.primary,
            '& .MuiStepIcon-text': {
              fill: '#FFFFFF',
            },
          },
          '&.Mui-completed': {
            color: COLORS.primary,
            borderColor: COLORS.primary,
            backgroundColor: COLORS.surface,
          },
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          fontSize: '0.9375rem',
          fontWeight: 500,
          color: COLORS.textTertiary,
          '&.Mui-active': {
            fontWeight: 600,
            color: COLORS.textPrimary,
          },
          '&.Mui-completed': {
            color: COLORS.textSecondary,
          },
        },
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        line: {
          borderColor: COLORS.border,
        },
      },
    },
  },
});
