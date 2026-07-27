export const COLORS = {
  primary: '#4F46E5',
  primaryDark: '#4338CA',
  primaryLight: '#EEF2FF',
  onPrimary: '#FFFFFF',
  textPrimary: '#111827',
  textSecondary: '#374151',
  textTertiary: '#4B5563',
  textMuted: '#9CA3AF',
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
} as const;

export const RADII = {
  sm: 8,
  md: 12,
  lg: 16,
  pill: 999,
} as const;

export const SHADOWS = {
  raised:
    '0 12px 16px -4px rgba(16, 24, 40, 0.08), 0 4px 6px -2px rgba(16, 24, 40, 0.03)',
} as const;

export const TRANSITIONS = {
  fast: '140ms cubic-bezier(0.4, 0, 0.2, 1)',
  base: '240ms cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

export const BREAKPOINTS = {
  mobile: 0,
  tablet: 600,
  laptop: 900,
  desktop: 1200,
} as const;

export const SPACING_UNIT = 8;

export const SPACING = {
  xs: 4,
  md: 8,
  lg: 10,
  xl: 16,
  xl2: 20,
  xl6: 60,
  xl7: 64,
  xl8: 80,
} as const;

export const CONTENT_MAX_WIDTH = 1440;

const SPLIT_LAYOUT_MIN_WIDTH = 1170;

export const SPLIT_LAYOUT_MEDIA = `@media (min-width:${SPLIT_LAYOUT_MIN_WIDTH}px)`;

export const FONT_FAMILY =
  "var(--font-app-sans), 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif";
