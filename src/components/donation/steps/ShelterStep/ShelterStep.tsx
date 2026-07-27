'use client';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { FormikErrors, FormikTouched } from 'formik';
import { useTranslation } from 'react-i18next';

import { AmountPicker } from '@/components/donation/AmountPicker/AmountPicker';
import { ShelterAutocomplete } from '@/components/donation/ShelterAutocomplete/ShelterAutocomplete';
import { ToggleGroupButtons } from '@/components/ui/ToggleGroupButtons/ToggleGroupButtons';
import {
  AMOUNT_PRESETS,
  MAX_AMOUNT,
  MIN_AMOUNT,
} from '@/components/donation/DonationForm/constants';
import { getDonationFieldError } from '@/components/donation/DonationForm/errors';
import { parseAmount } from '@/components/donation/DonationForm/payload';
import { useTranslateFieldError } from '@/hooks/form/useTranslateFieldError';
import { DonationType, type DonationFormValues } from '@/types/donation';
import type { ToggleOption } from '@/types/ui';

const CURRENCY_SYMBOL = '€';

type ShelterStepProps = {
  readonly values: DonationFormValues;
  readonly errors: FormikErrors<DonationFormValues>;
  readonly touched: FormikTouched<DonationFormValues>;
  readonly onDonationTypeChange: (donationType: DonationType) => void;
  readonly onShelterChange: (shelterId: number | null) => void;
  readonly onAmountChange: (amount: string) => void;
  readonly onFieldBlur: (field: keyof DonationFormValues) => void;
};

export const ShelterStep = ({
  values,
  errors,
  touched,
  onDonationTypeChange,
  onShelterChange,
  onAmountChange,
  onFieldBlur,
}: ShelterStepProps) => {
  const { t } = useTranslation();
  const translateError = useTranslateFieldError();

  const typeOptions: readonly ToggleOption<DonationType>[] = [
    { value: DonationType.SPECIFIC_SHELTER, label: t('shelterStep.typeSpecific') },
    { value: DonationType.WHOLE_FOUNDATION, label: t('shelterStep.typeGeneral') },
  ];

  const isShelterRequired = values.donationType === DonationType.SPECIFIC_SHELTER;
  const parsedAmount = parseAmount(values.amount);
  const selectedPreset = AMOUNT_PRESETS.find((preset) => preset === parsedAmount) ?? null;

  return (
    <Stack spacing={5}>
      <Typography variant="h1">{t('shelterStep.title')}</Typography>

      <ToggleGroupButtons<DonationType>
        options={typeOptions}
        value={values.donationType}
        ariaLabel={t('shelterStep.typeLegend')}
        columns={{ xs: 1, sm: typeOptions.length }}
        isFullWidth
        hasFrame
        onChange={onDonationTypeChange}
      />

      <Stack spacing={2}>
        <Typography variant="h4" component="h2">
          {t('shelterStep.projectSectionTitle')}
        </Typography>

        <ShelterAutocomplete
          value={values.shelterId}
          error={translateError(getDonationFieldError(errors, touched, 'shelterId'))}
          isRequired={isShelterRequired}
          onChange={onShelterChange}
          onBlur={() => onFieldBlur('shelterId')}
        />
      </Stack>

      <Stack spacing={2}>
        <Typography variant="h4" component="h2">
          {t('shelterStep.amountLegend')}
        </Typography>

        <AmountPicker
          id="amount"
          name="amount"
          value={values.amount}
          presets={AMOUNT_PRESETS}
          currencySymbol={CURRENCY_SYMBOL}
          inputLabel={t('shelterStep.amountInputLabel')}
          presetGroupLabel={t('shelterStep.amountLegend')}
          error={translateError(getDonationFieldError(errors, touched, 'amount'), {
            min: MIN_AMOUNT,
            max: MAX_AMOUNT,
          })}
          selectedPreset={selectedPreset}
          formatPresetLabel={(preset) => `${preset} ${CURRENCY_SYMBOL}`}
          formatPresetAriaLabel={(preset) =>
            t('shelterStep.presetLabel', { amount: `${preset} ${CURRENCY_SYMBOL}` })
          }
          onChange={onAmountChange}
          onBlur={() => onFieldBlur('amount')}
        />
      </Stack>
    </Stack>
  );
};
