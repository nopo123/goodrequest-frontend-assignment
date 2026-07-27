'use client';

import FormHelperText from '@mui/material/FormHelperText';
import Stack from '@mui/material/Stack';
import type { ReactNode } from 'react';

import { FieldLabel, OptionalHint } from './FormField.styled';

type FormFieldProps = {
  readonly htmlFor: string;
  readonly label: string;
  readonly children: ReactNode;
  readonly optionalHint?: string;
  readonly error?: string;
  readonly helperText?: string;
};

export const FormField = ({
  htmlFor,
  label,
  children,
  optionalHint,
  error,
  helperText,
}: FormFieldProps) => {
  const message = error ?? helperText;
  const hasError = error !== undefined;

  return (
    <Stack spacing={0.75}>
      <FieldLabel component="label" htmlFor={htmlFor}>
        {label}
        {optionalHint !== undefined && <OptionalHint> ({optionalHint})</OptionalHint>}
      </FieldLabel>

      {children}

      {message !== undefined && (
        <FormHelperText error={hasError} id={`${htmlFor}-message`}>
          {message}
        </FormHelperText>
      )}
    </Stack>
  );
};
