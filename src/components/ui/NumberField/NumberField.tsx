'use client';

import FormHelperText from '@mui/material/FormHelperText';

import {
  NumberFieldInput,
  NumberFieldRoot,
  NumberFieldRow,
  NumberFieldUnit,
  NumberFieldUnitSpacer,
} from './NumberField.styled';

const DEFAULT_FIELD_WIDTH = 220;

type NumberFieldProps = {
  readonly id: string;
  readonly name: string;
  readonly value: string;
  readonly ariaLabel: string;
  readonly unit?: string;
  readonly placeholder?: string;
  readonly error?: string;
  readonly fieldWidth?: number;
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
  fieldWidth = DEFAULT_FIELD_WIDTH,
  onChange,
  onBlur,
}: NumberFieldProps) => {
  const hasError = error !== undefined;
  const errorId = `${id}-error`;
  const hasUnit = unit !== undefined;

  return (
    <NumberFieldRoot spacing={1}>
      <NumberFieldRow hasError={hasError} fieldWidth={fieldWidth}>
        {hasUnit && <NumberFieldUnitSpacer aria-hidden="true">{unit}</NumberFieldUnitSpacer>}

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
