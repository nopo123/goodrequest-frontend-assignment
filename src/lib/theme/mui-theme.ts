import { createTheme } from '@mui/material/styles';

import {
  BREAKPOINTS,
  COLORS,
  FONT_FAMILY,
  RADII,
  SHADOWS,
  SPACING_UNIT,
  TRANSITIONS,
} from './tokens';

export const muiTheme = createTheme({
  spacing: SPACING_UNIT,
  shape: {
    borderRadius: 12,
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
    secondary: {
      main: COLORS.accent,
      light: COLORS.accentLight,
      contrastText: COLORS.textPrimary,
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
    info: {
      main: COLORS.info,
    },
    text: {
      primary: COLORS.textPrimary,
      secondary: COLORS.textSecondary,
      disabled: COLORS.textDisabled,
    },
    divider: COLORS.border,
    background: {
      default: COLORS.background,
      paper: COLORS.surface,
    },
  },
  typography: {
    fontFamily: FONT_FAMILY,
    h1: { fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em' },
    h2: { fontSize: '2rem', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.015em' },
    h3: { fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.3 },
    h4: { fontSize: '1.25rem', fontWeight: 600, lineHeight: 1.35 },
    h5: { fontSize: '1.125rem', fontWeight: 600, lineHeight: 1.4 },
    h6: { fontSize: '1rem', fontWeight: 600, lineHeight: 1.45 },
    body1: { fontSize: '1rem', lineHeight: 1.6 },
    body2: { fontSize: '0.875rem', lineHeight: 1.55 },
    caption: { fontSize: '0.8125rem', lineHeight: 1.45 },
    button: { fontSize: '1rem', fontWeight: 600, textTransform: 'none' },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: RADII.pill,
          padding: '12px 28px',
          transition: `background-color ${TRANSITIONS.fast}, box-shadow ${TRANSITIONS.fast}, transform ${TRANSITIONS.fast}`,
          '&:focus-visible': {
            boxShadow: SHADOWS.focus,
          },
          '&:not(:disabled):active': {
            transform: 'translateY(1px)',
          },
        },
        sizeLarge: {
          padding: '14px 32px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: RADII.md,
          backgroundColor: COLORS.surface,
          transition: `box-shadow ${TRANSITIONS.fast}`,
          '&.Mui-focused': {
            boxShadow: SHADOWS.focus,
          },
        },
        notchedOutline: {
          borderColor: COLORS.border,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: COLORS.textSecondary,
          '&.Mui-focused': {
            color: COLORS.primary,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          marginTop: '6px',
          fontSize: '0.8125rem',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        rounded: {
          borderRadius: RADII.lg,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          borderRadius: RADII.sm,
          '&:focus-visible': {
            boxShadow: SHADOWS.focus,
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          '&:focus-visible': {
            boxShadow: SHADOWS.focus,
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: RADII.md,
          alignItems: 'flex-start',
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          borderRadius: RADII.md,
          boxShadow: SHADOWS.raised,
        },
      },
    },
  },
});
