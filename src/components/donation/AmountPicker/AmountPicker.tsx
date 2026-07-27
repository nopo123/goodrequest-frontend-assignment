'use client';

import Stack from '@mui/material/Stack';

import { NumberField } from '@/components/ui/NumberField/NumberField';
import { ToggleGroupButtons } from '@/components/ui/ToggleGroupButtons/ToggleGroupButtons';
import type { ToggleOption } from '@/types/ui';

const MOBILE_PRESET_COLUMNS = 3;

const AMOUNT_FIELD_WIDTH = 180;

type AmountPickerProps = {
  readonly id: string;
  readonly name: string;
  readonly value: string;
  readonly presets: readonly number[];
  readonly currencySymbol: string;
  readonly inputLabel: string;
  readonly presetGroupLabel: string;
  readonly selectedPreset: number | null;
  readonly error?: string;
  readonly formatPresetLabel: (preset: number) => string;
  readonly formatPresetAriaLabel: (preset: number) => string;
  readonly onChange: (value: string) => void;
  readonly onBlur: () => void;
};

export const AmountPicker = ({
  id,
  name,
  value,
  presets,
  currencySymbol,
  inputLabel,
  presetGroupLabel,
  selectedPreset,
  error,
  formatPresetLabel,
  formatPresetAriaLabel,
  onChange,
  onBlur,
}: AmountPickerProps) => {
  const presetOptions: readonly ToggleOption<number>[] = presets.map((preset) => ({
    value: preset,
    label: formatPresetLabel(preset),
    ariaLabel: formatPresetAriaLabel(preset),
  }));

  return (
    <Stack spacing={5}>
      <NumberField
        id={id}
        name={name}
        value={value}
        unit={currencySymbol}
        ariaLabel={inputLabel}
        fieldWidth={AMOUNT_FIELD_WIDTH}
        error={error}
        onChange={onChange}
        onBlur={onBlur}
      />

      <ToggleGroupButtons<number>
        options={presetOptions}
        value={selectedPreset}
        ariaLabel={presetGroupLabel}
        columns={{ xs: MOBILE_PRESET_COLUMNS, sm: presets.length }}
        onChange={(preset) => onChange(String(preset))}
      />
    </Stack>
  );
};
