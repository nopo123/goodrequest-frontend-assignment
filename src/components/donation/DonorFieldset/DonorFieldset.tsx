'use client';

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import type { RefCallback } from 'react';

import { PhoneNumberField } from '@/components/ui/PhoneNumberField/PhoneNumberField';
import { TextInputField } from '@/components/ui/TextInputField/TextInputField';
import { TwoColumnGrid } from '@/components/ui/layout/layout.styled';
import {
  PHONE_COUNTRY_CALLING_CODES,
  PHONE_COUNTRY_ORDER,
} from '@/components/donation/DonationForm/constants';
import { PhoneCountry, type DonorFormValues } from '@/types/donation';
import type { TranslateFn } from '@/types/i18n';
import type { PhoneCountryOption } from '@/types/ui';

import { DonorFieldsetRoot, DonorHeaderRow } from './DonorFieldset.styled';

const PHONE_COUNTRIES: readonly PhoneCountryOption[] = PHONE_COUNTRY_ORDER.map(
  (country) => ({
    value: country,
    countryCode: country.toLowerCase(),
    callingCode: PHONE_COUNTRY_CALLING_CODES[country],
  }),
);

type DonorFieldErrors = Readonly<Partial<Record<keyof DonorFormValues, string>>>;

type DonorFieldsetProps = {
  readonly t: TranslateFn;
  readonly index: number;
  readonly donor: DonorFormValues;
  readonly errors: DonorFieldErrors;
  readonly isRemovable: boolean;
  readonly showTitle: boolean;
  readonly ref?: RefCallback<HTMLElement>;
  readonly onFieldChange: <TField extends keyof DonorFormValues>(
    field: TField,
    value: DonorFormValues[TField],
  ) => void;
  readonly onFieldBlur: (field: keyof DonorFormValues) => void;
  readonly onRemove: () => void;
};

export const DonorFieldset = ({
  t,
  index,
  donor,
  errors,
  isRemovable,
  showTitle,
  ref,
  onFieldChange,
  onFieldBlur,
  onRemove,
}: DonorFieldsetProps) => {
  const donorNumber = index + 1;

  return (
    <DonorFieldsetRoot ref={ref} component="fieldset" spacing={2}>
      {showTitle && (
        <DonorHeaderRow direction="row" spacing={1}>
          <Typography component="legend" variant="h5">
            {t('donorStep.donorTitle', { index: donorNumber })}
          </Typography>
          {isRemovable && (
            <IconButton
              aria-label={t('donorStep.removeDonor', { index: donorNumber })}
              onClick={onRemove}
              size="small"
            >
              <DeleteOutlinedIcon fontSize="small" />
            </IconButton>
          )}
        </DonorHeaderRow>
      )}

      <TwoColumnGrid>
        <TextInputField
          id={`donors.${index}.firstName`}
          name={`donors.${index}.firstName`}
          label={t('donorStep.firstName')}
          optionalHint={t('common.optional')}
          placeholder={t('donorStep.firstNamePlaceholder')}
          autoComplete="given-name"
          value={donor.firstName}
          error={errors.firstName}
          onChange={(value) => onFieldChange('firstName', value)}
          onBlur={() => onFieldBlur('firstName')}
        />

        <TextInputField
          isRequired
          id={`donors.${index}.lastName`}
          name={`donors.${index}.lastName`}
          label={t('donorStep.lastName')}
          placeholder={t('donorStep.lastNamePlaceholder')}
          autoComplete="family-name"
          value={donor.lastName}
          error={errors.lastName}
          onChange={(value) => onFieldChange('lastName', value)}
          onBlur={() => onFieldBlur('lastName')}
        />
      </TwoColumnGrid>

      <TextInputField
        isRequired
        id={`donors.${index}.email`}
        name={`donors.${index}.email`}
        type="email"
        label={t('donorStep.email')}
        placeholder={t('donorStep.emailPlaceholder')}
        autoComplete="email"
        value={donor.email}
        error={errors.email}
        onChange={(value) => onFieldChange('email', value)}
        onBlur={() => onFieldBlur('email')}
      />

      <PhoneNumberField
        id={`donors.${index}.phone`}
        name={`donors.${index}.phone`}
        label={t('donorStep.phone')}
        countries={PHONE_COUNTRIES}
        countryValue={donor.phoneCountry}
        phoneValue={donor.phone}
        countryAriaLabel={t('donorStep.phoneCountryLabel')}
        placeholder={t('donorStep.phonePlaceholder')}
        error={errors.phone}
        onCountryChange={(value) => onFieldChange('phoneCountry', value as PhoneCountry)}
        onPhoneChange={(value) => onFieldChange('phone', value)}
        onBlur={() => onFieldBlur('phone')}
      />
    </DonorFieldsetRoot>
  );
};
