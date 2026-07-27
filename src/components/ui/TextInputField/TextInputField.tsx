'use client';

import TextField from '@mui/material/TextField';
import type { HTMLInputTypeAttribute } from 'react';

import { FormField } from '@/components/ui/FormField/FormField';

type TextInputFieldProps = {
  readonly id: string;
  readonly name: string;
  readonly label: string;
  readonly value: string;
  readonly type?: HTMLInputTypeAttribute;
  readonly autoComplete?: string;
  readonly placeholder?: string;
  readonly optionalHint?: string;
  readonly error?: string;
  readonly helperText?: string;
  readonly isRequired?: boolean;
  readonly onChange: (value: string) => void;
  readonly onBlur: () => void;
};

export const TextInputField = ({
  id,
  name,
  label,
  value,
  type = 'text',
  autoComplete,
  placeholder,
  optionalHint,
  error,
  helperText,
  isRequired = false,
  onChange,
  onBlur,
}: TextInputFieldProps) => {
  const hasError = error !== undefined;

  return (
    <FormField
      htmlFor={id}
      label={label}
      optionalHint={optionalHint}
      error={error}
      helperText={helperText}
    >
      <TextField
        fullWidth
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={isRequired}
        error={hasError}
        onChange={(event) => onChange(event.target.value)}
        onBlur={onBlur}
        slotProps={{
          htmlInput: {
            'aria-invalid': hasError,
            'aria-describedby': hasError ? `${id}-message` : undefined,
          },
        }}
      />
    </FormField>
  );
};
