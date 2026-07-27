export const COLORS = {
  primary: '#4F46E5',
  primaryDark: '#4338CA',
  primaryDarker: '#3730A3',
  primaryLight: '#EEF2FF',
  primarySoft: '#E0E7FF',
  accent: '#4F46E5',
  accentLight: '#EEF2FF',
  textPrimary: '#101828',
  textSecondary: '#475467',
  textTertiary: '#667085',
  textDisabled: '#98A2B3',
  border: '#D0D5DD',
  borderSubtle: '#EAECF0',
  surface: '#FFFFFF',
  surfaceMuted: '#F9FAFB',
  surfaceSunken: '#F2F4F7',
  background: '#FFFFFF',
  success: '#079455',
  successLight: '#ECFDF3',
  error: '#D92D20',
  errorLight: '#FEF3F2',
  warning: '#DC6803',
  info: '#4F46E5',
} as const;

export const RADII = {
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  pill: '999px',
} as const;

export const SHADOWS = {
  xs: '0 1px 2px rgba(16, 24, 40, 0.05)',
  card: '0 1px 3px rgba(16, 24, 40, 0.10), 0 1px 2px rgba(16, 24, 40, 0.06)',
  raised: '0 12px 16px -4px rgba(16, 24, 40, 0.08), 0 4px 6px -2px rgba(16, 24, 40, 0.03)',
  focus: '0 0 0 4px rgba(79, 70, 229, 0.24)',
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

export const CONTENT_MAX_WIDTH = '1280px';

export const DESIGN_FRAME_WIDTH = 1440;

export const FONT_FAMILY =
  "var(--font-app-sans), 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif";

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
