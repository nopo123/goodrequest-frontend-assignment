export const COLORS = {
  primary: '#4F46E5',
  primaryDark: '#4338CA',
  primaryDarker: '#3730A3',
  primaryLight: '#EEF2FF',
  primarySoft: '#E0E7FF',
  textPrimary: '#111827',
  textSecondary: '#374151',
  textTertiary: '#667085',
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
  xl: 24,
  pill: 999,
} as const;

export const SHADOWS = {
  xs: '0 1px 2px rgba(16, 24, 40, 0.05)',
  card: '0 1px 3px rgba(16, 24, 40, 0.10), 0 1px 2px rgba(16, 24, 40, 0.06)',
  raised:
    '0 12px 16px -4px rgba(16, 24, 40, 0.08), 0 4px 6px -2px rgba(16, 24, 40, 0.03)',
  focus: '0 0 0 4px rgba(79, 70, 229, 0.24)',
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
  none: 0,
  xxs: 2,
  xs: 4,
  sm: 6,
  md: 8,
  lg: 12,
  xl: 16,
  xl2: 20,
  xl3: 24,
  xl4: 32,
  xl5: 40,
  xl6: 48,
  xl7: 64,
  xl8: 80,
  xl9: 96,
  xl10: 128,
} as const;

export const CONTENT_MAX_WIDTH = 1440;

export const SPLIT_LAYOUT_MIN_WIDTH = 1170;

export const SPLIT_LAYOUT_MEDIA = `@media (min-width:${SPLIT_LAYOUT_MIN_WIDTH}px)`;

export const FONT_FAMILY =
  "var(--font-app-sans), 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif";
