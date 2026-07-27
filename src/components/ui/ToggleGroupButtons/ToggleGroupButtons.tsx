'use client';

import ToggleButton from '@mui/material/ToggleButton';

import type { ToggleGroupColumns, ToggleOption } from '@/types/ui';

import { ToggleGroupRoot } from './ToggleGroupButtons.styled';

const DEFAULT_GROUP_HEIGHT = 60;

type ToggleGroupButtonsProps<TValue extends string | number> = {
  readonly options: readonly ToggleOption<TValue>[];
  readonly value: TValue | null;
  readonly ariaLabel: string;
  readonly columns?: ToggleGroupColumns;
  readonly isFullWidth?: boolean;
  readonly hasFrame?: boolean;
  readonly isPill?: boolean;
  readonly height?: number;
  readonly size?: 'small' | 'medium' | 'large';
  readonly onChange: (value: TValue) => void;
};

export const ToggleGroupButtons = <TValue extends string | number>({
  options,
  value,
  ariaLabel,
  columns,
  isFullWidth = false,
  hasFrame = false,
  isPill = false,
  height = DEFAULT_GROUP_HEIGHT,
  size = 'medium',
  onChange,
}: ToggleGroupButtonsProps<TValue>) => (
  <ToggleGroupRoot
    exclusive
    size={size}
    fullWidth={isFullWidth}
    columns={columns}
    framed={hasFrame}
    pill={isPill}
    groupHeight={height}
    value={value}
    aria-label={ariaLabel}
    onChange={(_event, nextValue) => {
      if (nextValue === null) return;
      onChange(nextValue as TValue);
    }}
  >
    {options.map((option) => (
      <ToggleButton key={option.value} value={option.value} aria-label={option.ariaLabel}>
        {option.label}
      </ToggleButton>
    ))}
  </ToggleGroupRoot>
);
