import type { TypographyVariantsOptions } from '@mui/material/styles';
import type { CSSProperties } from 'react';

import { BREAKPOINTS, COLORS, COMPACT_HEIGHT_MEDIA, FONT_FAMILY } from './tokens';

type ResponsiveFontSizes = {
  readonly sm?: number;
  readonly md?: number;
  readonly lg?: number;
};

export const pxToRem = (value: number): string => `${value / 16}rem`;

const responsiveFontSizes = ({ sm, md, lg }: ResponsiveFontSizes) => ({
  ...(sm === undefined
    ? null
    : { [`@media (min-width:${BREAKPOINTS.tablet}px)`]: { fontSize: pxToRem(sm) } }),
  ...(md === undefined
    ? null
    : { [`@media (min-width:${BREAKPOINTS.laptop}px)`]: { fontSize: pxToRem(md) } }),
  ...(lg === undefined
    ? null
    : { [`@media (min-width:${BREAKPOINTS.desktop}px)`]: { fontSize: pxToRem(lg) } }),
});

export const typography: TypographyVariantsOptions = {
  fontFamily: FONT_FAMILY,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  display: {
    fontWeight: 400,
    fontSize: pxToRem(40),
    lineHeight: 48 / 40,
    letterSpacing: '-0.3px',
    color: COLORS.textPrimary,
    ...responsiveFontSizes({ sm: 48, md: 60 }),
    [COMPACT_HEIGHT_MEDIA]: { fontSize: pxToRem(40) },
  },
  h1: {
    fontWeight: 700,
    fontSize: pxToRem(32),
    lineHeight: 56 / 48,
    letterSpacing: '-0.3px',
    color: COLORS.textPrimary,
    ...responsiveFontSizes({ sm: 40, md: 48 }),
    [COMPACT_HEIGHT_MEDIA]: { fontSize: pxToRem(32) },
  },
  h2: {
    fontWeight: 700,
    fontSize: pxToRem(24),
    lineHeight: 38 / 30,
    letterSpacing: '-0.015em',
    color: COLORS.textPrimary,
    ...responsiveFontSizes({ sm: 28, md: 30 }),
  },
  h3: {
    fontWeight: 600,
    fontSize: pxToRem(20),
    lineHeight: 32 / 24,
    color: COLORS.textPrimary,
    ...responsiveFontSizes({ sm: 22, md: 24 }),
  },
  h4: {
    fontWeight: 600,
    fontSize: pxToRem(16),
    lineHeight: 28 / 18,
    color: COLORS.textPrimary,
    ...responsiveFontSizes({ sm: 18 }),
  },
  h5: {
    fontWeight: 600,
    fontSize: pxToRem(16),
    lineHeight: 24 / 16,
    color: COLORS.textPrimary,
  },
  h6: {
    fontWeight: 600,
    fontSize: pxToRem(15),
    lineHeight: 22 / 15,
    color: COLORS.textPrimary,
  },
  subtitle1: {
    fontWeight: 500,
    fontSize: pxToRem(18),
    lineHeight: 28 / 18,
    color: COLORS.textPrimary,
  },
  subtitle2: {
    fontWeight: 500,
    fontSize: pxToRem(16),
    lineHeight: 24 / 16,
    color: COLORS.textPrimary,
  },
  body1: {
    fontWeight: 400,
    fontSize: pxToRem(16),
    lineHeight: 24 / 16,
    color: COLORS.textPrimary,
  },
  body2: {
    fontWeight: 400,
    fontSize: pxToRem(14),
    lineHeight: 20 / 14,
    color: COLORS.textPrimary,
  },
  caption: {
    fontWeight: 400,
    fontSize: pxToRem(13),
    lineHeight: 18 / 13,
    color: COLORS.textSecondary,
  },
  overline: {
    fontWeight: 600,
    fontSize: pxToRem(12),
    lineHeight: 18 / 12,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    color: COLORS.textSecondary,
  },
  button: {
    fontWeight: 500,
    fontSize: pxToRem(15),
    lineHeight: 24 / 15,
    textTransform: 'none',
  },
};

declare module '@mui/material/styles' {
  interface TypographyVariants {
    display: CSSProperties;
  }

  interface TypographyVariantsOptions {
    display?: CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    display: true;
  }
}
