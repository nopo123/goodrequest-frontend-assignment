'use client';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { FormikErrors, FormikTouched } from 'formik';
import { useTranslation } from 'react-i18next';

import { getDonationFieldError } from '@/components/donation/DonationForm/errors';
import {
  buildFullPhoneNumber,
  parseAmount,
} from '@/components/donation/DonationForm/payload';
import { CheckboxField } from '@/components/ui/CheckboxField/CheckboxField';
import { DefinitionList } from '@/components/ui/DefinitionList/DefinitionList';
import { SectionDivider } from '@/components/ui/SectionDivider/SectionDivider';
import { useTranslateFieldError } from '@/hooks/form/useTranslateFieldError';
import { useShelters } from '@/hooks/shelters/useShelters';
import { DonationType, type DonationFormValues } from '@/types/donation';
import type { DefinitionRow } from '@/types/ui';
import { formatCurrency } from '@/utils/format';

const CONSENT_FIELD_ID = 'consent';

type SummaryStepProps = {
  readonly values: DonationFormValues;
  readonly errors: FormikErrors<DonationFormValues>;
  readonly touched: FormikTouched<DonationFormValues>;
  readonly submitError?: string;
  readonly onConsentChange: (consent: boolean) => void;
  readonly onConsentBlur: () => void;
};

export const SummaryStep = ({
  values,
  errors,
  touched,
  submitError,
  onConsentChange,
  onConsentBlur,
}: SummaryStepProps) => {
  const { t, i18n } = useTranslation();
  const translateError = useTranslateFieldError();
  const { data: shelters } = useShelters();

  const isSpecificShelter = values.donationType === DonationType.SPECIFIC_SHELTER;
  const selectedShelter = (shelters ?? []).find(
    (shelter) => shelter.id === values.shelterId,
  );
  const consentError = translateError(getDonationFieldError(errors, touched, 'consent'));

  const donationRows: readonly DefinitionRow[] = [
    {
      id: 'donationType',
      label: t('summaryStep.donationType'),
      value: isSpecificShelter
        ? t('summaryStep.donationTypeSpecific')
        : t('summaryStep.donationTypeGeneral'),
    },
    {
      id: 'shelter',
      label: t('summaryStep.shelter'),
      value: selectedShelter?.name ?? t('summaryStep.notFilled'),
    },
    {
      id: 'amount',
      label: t('summaryStep.amount'),
      value: formatCurrency(parseAmount(values.amount), i18n.language),
    },
  ];

  const donorRows: readonly DefinitionRow[] = values.donors.flatMap((donor, index) => [
    {
      id: `fullName-${index}`,
      label: t('summaryStep.fullName'),
      value: `${donor.firstName} ${donor.lastName}`.trim() || t('summaryStep.notFilled'),
    },
    {
      id: `email-${index}`,
      label: t('summaryStep.email'),
      value: donor.email || t('summaryStep.notFilled'),
    },
    {
      id: `phone-${index}`,
      label: t('summaryStep.phone'),
      value: donor.phone ? buildFullPhoneNumber(donor) : t('summaryStep.notFilled'),
    },
  ]);

  return (
    <Stack spacing={5}>
      <Typography variant="h1">{t('summaryStep.title')}</Typography>

      <Stack spacing={2}>
        <Typography variant="h6" component="h2">
          {t('summaryStep.sectionTitle')}
        </Typography>

        <Box>
          <DefinitionList groups={[donationRows, donorRows]} />

          <SectionDivider />

          <Stack spacing={2}>
            <CheckboxField
              id={CONSENT_FIELD_ID}
              name={CONSENT_FIELD_ID}
              label={t('summaryStep.consent')}
              isChecked={values.consent}
              error={consentError}
              onChange={onConsentChange}
              onBlur={onConsentBlur}
            />

            {submitError !== undefined && <Alert severity="error">{submitError}</Alert>}
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};
