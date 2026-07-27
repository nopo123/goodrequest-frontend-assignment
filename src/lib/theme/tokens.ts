export const COLORS = {
  primary: '#1F6FEB',
  primaryDark: '#1552B8',
  primaryLight: '#E9F1FE',
  accent: '#F5A524',
  accentLight: '#FEF3E0',
  textPrimary: '#101828',
  textSecondary: '#5B6B82',
  textDisabled: '#98A5B8',
  border: '#DEE4ED',
  borderStrong: '#C3CDDB',
  surface: '#FFFFFF',
  surfaceMuted: '#F6F8FC',
  background: '#F2F5FA',
  success: '#12805C',
  successLight: '#E4F5EF',
  error: '#D62D4B',
  errorLight: '#FDEBEE',
  warning: '#B76E00',
  info: '#1F6FEB',
} as const;

export const RADII = {
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  pill: '999px',
} as const;

export const SHADOWS = {
  card: '0 1px 2px rgba(16, 24, 40, 0.04), 0 4px 16px rgba(16, 24, 40, 0.06)',
  raised: '0 8px 32px rgba(16, 24, 40, 0.12)',
  focus: `0 0 0 4px rgba(31, 111, 235, 0.16)`,
} as const;

export const TRANSITIONS = {
  fast: '140ms cubic-bezier(0.4, 0, 0.2, 1)',
  base: '240ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: '400ms cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

export const BREAKPOINTS = {
  mobile: 0,
  tablet: 600,
  laptop: 900,
  desktop: 1200,
} as const;

export const SPACING_UNIT = 8;

export const CONTENT_MAX_WIDTH = '1120px';

export const FONT_FAMILY =
  "var(--font-app-sans), 'Segoe UI', system-ui, -apple-system, sans-serif";

export const media = {
  tablet: `@media (min-width: ${BREAKPOINTS.tablet}px)`,
  laptop: `@media (min-width: ${BREAKPOINTS.laptop}px)`,
  desktop: `@media (min-width: ${BREAKPOINTS.desktop}px)`,
  reducedMotion: '@media (prefers-reduced-motion: reduce)',
} as const;

export const designTokens = {
  colors: COLORS,
  radii: RADII,
  shadows: SHADOWS,
  transitions: TRANSITIONS,
  breakpoints: BREAKPOINTS,
  spacingUnit: SPACING_UNIT,
  contentMaxWidth: CONTENT_MAX_WIDTH,
  fontFamily: FONT_FAMILY,
  media,
} as const;

export type DesignTokens = typeof designTokens;

export const spacing = (multiplier: number): string =>
  `${multiplier * SPACING_UNIT}px`;
