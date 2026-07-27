'use client';

import FormHelperText from '@mui/material/FormHelperText';
import type { ReactNode } from 'react';

import {
  NumberFieldInput,
  NumberFieldRoot,
  NumberFieldRow,
  NumberFieldUnit,
} from './NumberField.styled';

const MIN_INPUT_CHARACTERS = 2;

const INPUT_CHARACTER_PADDING = 1;

const computeInputSize = (value: string): number =>
  Math.max(MIN_INPUT_CHARACTERS, value.length + INPUT_CHARACTER_PADDING);

type NumberFieldProps = {
  readonly id: string;
  readonly name: string;
  readonly value: string;
  readonly ariaLabel: string;
  readonly unit?: ReactNode;
  readonly placeholder?: string;
  readonly error?: string;
  readonly onChange: (value: string) => void;
  readonly onBlur: () => void;
};

export const NumberField = ({
  id,
  name,
  value,
  ariaLabel,
  unit,
  placeholder = '0',
  error,
  onChange,
  onBlur,
}: NumberFieldProps) => {
  const hasError = error !== undefined;
  const errorId = `${id}-error`;
  const hasUnit = unit !== undefined;

  return (
    <NumberFieldRoot spacing={1}>
      <NumberFieldRow hasError={hasError}>
        <NumberFieldInput
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          inputMode="decimal"
          autoComplete="off"
          onChange={(event) => onChange(event.target.value)}
          onBlur={onBlur}
          slotProps={{
            input: {
              'aria-label': ariaLabel,
              'aria-invalid': hasError,
              'aria-describedby': hasError ? errorId : undefined,
              size: computeInputSize(value),
            },
          }}
        />

        {hasUnit && <NumberFieldUnit>{unit}</NumberFieldUnit>}
      </NumberFieldRow>

      {hasError && (
        <FormHelperText error id={errorId}>
          {error}
        </FormHelperText>
      )}
    </NumberFieldRoot>
  );
};
