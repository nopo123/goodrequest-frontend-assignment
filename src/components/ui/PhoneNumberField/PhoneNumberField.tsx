'use client';

import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { CountryFlag } from '@/components/ui/CountryFlag/CountryFlag';
import { FormField } from '@/components/ui/FormField/FormField';
import type { PhoneCountryOption } from '@/types/ui';

import { CountryOption, CountrySelect, PhoneRow } from './PhoneNumberField.styled';

type PhoneNumberFieldProps = {
  readonly id: string;
  readonly name: string;
  readonly label: string;
  readonly countries: readonly PhoneCountryOption[];
  readonly countryValue: string;
  readonly phoneValue: string;
  readonly countryAriaLabel: string;
  readonly placeholder?: string;
  readonly error?: string;
  readonly onCountryChange: (value: string) => void;
  readonly onPhoneChange: (value: string) => void;
  readonly onBlur: () => void;
};

export const PhoneNumberField = ({
  id,
  name,
  label,
  countries,
  countryValue,
  phoneValue,
  countryAriaLabel,
  placeholder,
  error,
  onCountryChange,
  onPhoneChange,
  onBlur,
}: PhoneNumberFieldProps) => {
  const hasError = error !== undefined;
  const selectedCountry = countries.find((country) => country.value === countryValue);

  return (
    <FormField htmlFor={id} label={label} error={error}>
      <PhoneRow direction="row" spacing={2}>
        <CountrySelect
          value={countryValue}
          error={hasError}
          aria-label={countryAriaLabel}
          onChange={(event) => onCountryChange(String(event.target.value))}
          renderValue={(selected) => {
            const country = countries.find((option) => option.value === selected);

            return <CountryFlag countryCode={country?.countryCode ?? ''} />;
          }}
        >
          {countries.map((country) => (
            <MenuItem key={country.value} value={country.value}>
              <CountryOption direction="row" spacing={0.75}>
                <CountryFlag countryCode={country.countryCode} />
                <Typography component="span" variant="body2">
                  {country.callingCode}
                </Typography>
              </CountryOption>
            </MenuItem>
          ))}
        </CountrySelect>

        <TextField
          fullWidth
          id={id}
          name={name}
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          placeholder={placeholder}
          error={hasError}
          value={phoneValue}
          onChange={(event) => onPhoneChange(event.target.value)}
          onBlur={onBlur}
          slotProps={{
            input: {
              startAdornment:
                selectedCountry === undefined ? undefined : (
                  <InputAdornment position="start">
                    <Typography component="span" variant="body2">
                      {selectedCountry.callingCode}
                    </Typography>
                  </InputAdornment>
                ),
            },
            htmlInput: {
              'aria-invalid': hasError,
              'aria-describedby': hasError ? `${id}-message` : undefined,
            },
          }}
        />
      </PhoneRow>
    </FormField>
  );
};
