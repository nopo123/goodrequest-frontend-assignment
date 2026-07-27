'use client';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { FormField } from '@/components/ui/FormField/FormField';

type AutocompleteFieldProps<TOption> = {
  readonly id: string;
  readonly name: string;
  readonly label: string;
  readonly options: readonly TOption[];
  readonly value: TOption | null;
  readonly optionalHint?: string;
  readonly placeholder?: string;
  readonly helperText?: string;
  readonly error?: string;
  readonly isLoading?: boolean;
  readonly isRequired?: boolean;
  readonly loadingText?: string;
  readonly noOptionsText?: string;
  readonly getOptionLabel: (option: TOption) => string;
  readonly isOptionEqualToValue: (option: TOption, value: TOption) => boolean;
  readonly onChange: (option: TOption | null) => void;
  readonly onBlur: () => void;
};

export const AutocompleteField = <TOption,>({
  id,
  name,
  label,
  options,
  value,
  optionalHint,
  placeholder,
  helperText,
  error,
  isLoading = false,
  isRequired = false,
  loadingText,
  noOptionsText,
  getOptionLabel,
  isOptionEqualToValue,
  onChange,
  onBlur,
}: AutocompleteFieldProps<TOption>) => (
  <FormField
    htmlFor={id}
    label={label}
    optionalHint={optionalHint}
    error={error}
    helperText={helperText}
  >
    <Autocomplete<TOption>
      id={id}
      options={options as TOption[]}
      value={value}
      loading={isLoading}
      loadingText={loadingText}
      noOptionsText={noOptionsText}
      getOptionLabel={getOptionLabel}
      isOptionEqualToValue={isOptionEqualToValue}
      onChange={(_event, option) => onChange(option)}
      onBlur={onBlur}
      renderInput={(params) => (
        <TextField
          {...params}
          name={name}
          placeholder={placeholder}
          required={isRequired}
          error={error !== undefined}
        />
      )}
    />
  </FormField>
);
