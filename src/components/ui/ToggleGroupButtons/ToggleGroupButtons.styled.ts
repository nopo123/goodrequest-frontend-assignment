import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';

import { COLORS, COMPACT_HEIGHT_MEDIA, RADII, SPACING } from '@/lib/theme/tokens';
import type { ToggleGroupColumns } from '@/types/ui';

const COMPACT_GROUP_HEIGHT = 48;

type ToggleGroupRootProps = {
  readonly columns?: ToggleGroupColumns;
  readonly framed: boolean;
  readonly pill: boolean;
  readonly groupHeight: number;
};

export const ToggleGroupRoot = styled(ToggleButtonGroup, {
  shouldForwardProp: (prop) =>
    prop !== 'columns' && prop !== 'framed' && prop !== 'pill' && prop !== 'groupHeight',
})<ToggleGroupRootProps>(({ theme, columns, framed, pill, groupHeight }) => ({
  minHeight: groupHeight,
  '& .MuiToggleButton-root': {
    minHeight: framed ? groupHeight - SPACING.xs * 2 : groupHeight,
    paddingTop: 0,
    paddingBottom: 0,
  },
  [COMPACT_HEIGHT_MEDIA]: {
    minHeight: Math.min(groupHeight, COMPACT_GROUP_HEIGHT),
    '& .MuiToggleButton-root': {
      minHeight: framed
        ? Math.min(groupHeight, COMPACT_GROUP_HEIGHT) - SPACING.xs * 2
        : Math.min(groupHeight, COMPACT_GROUP_HEIGHT),
    },
  },
  ...(framed
    ? {
        gap: 0,
        padding: SPACING.xs,
        border: `1px solid ${COLORS.border}`,
        borderRadius: pill ? RADII.pill : RADII.md,
        backgroundColor: COLORS.surface,
        '& .MuiToggleButton-root': {
          minHeight: groupHeight - SPACING.xs * 2,
          paddingTop: 0,
          paddingBottom: 0,
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: COLORS.surfaceMuted,
          },
          '&.Mui-selected': {
            backgroundColor: COLORS.primary,
            '&:hover': {
              backgroundColor: COLORS.primaryDark,
            },
          },
        },
      }
    : null),
  ...(columns
    ? {
        display: 'grid',
        gridTemplateColumns: `repeat(${columns.xs ?? 1}, minmax(0, 1fr))`,
        [theme.breakpoints.up('sm')]: {
          gridTemplateColumns: `repeat(${columns.sm ?? columns.xs ?? 1}, minmax(0, 1fr))`,
        },
      }
    : null),
}));
