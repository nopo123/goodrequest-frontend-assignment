'use client';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { FormikErrors, FormikTouched } from 'formik';

import { SUMMARY_LIST_MAX_HEIGHT } from '@/components/donation/DonationForm/constants';
import { getDonationFieldError } from '@/components/donation/DonationForm/errors';
import {
  buildFullPhoneNumber,
  parseAmount,
} from '@/components/donation/DonationForm/payload';
import { CheckboxField } from '@/components/ui/CheckboxField/CheckboxField';
import { DefinitionList } from '@/components/ui/DefinitionList/DefinitionList';
import { ScrollArea } from '@/components/ui/ScrollArea/ScrollArea';
import { SectionDivider } from '@/components/ui/SectionDivider/SectionDivider';
import { SECTION_STACK_SPACING } from '@/lib/theme/tokens';
import { DonationType, type DonationFormValues } from '@/types/donation';
import type { TranslateFn } from '@/types/i18n';
import type { SheltersState } from '@/types/shelters';
import type { DefinitionRow } from '@/types/ui';
import { formatCurrency } from '@/utils/format';
import { translateFieldError } from '@/utils/translateFieldError';

const CONSENT_FIELD_ID = 'consent';

type SummaryStepProps = {
  readonly t: TranslateFn;
  readonly locale: string;
  readonly shelters: SheltersState;
  readonly values: DonationFormValues;
  readonly errors: FormikErrors<DonationFormValues>;
  readonly touched: FormikTouched<DonationFormValues>;
  readonly submitError?: string;
  readonly onConsentChange: (consent: boolean) => void;
  readonly onConsentBlur: () => void;
};

export const SummaryStep = ({
  t,
  locale,
  shelters,
  values,
  errors,
  touched,
  submitError,
  onConsentChange,
  onConsentBlur,
}: SummaryStepProps) => {
  const isSpecificShelter = values.donationType === DonationType.SPECIFIC_SHELTER;
  const selectedShelter = shelters.items.find(
    (shelter) => shelter.id === values.shelterId,
  );
  const consentError = translateFieldError(
    t,
    getDonationFieldError(errors, touched, 'consent'),
  );

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
      value: formatCurrency(parseAmount(values.amount), locale),
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
    <Stack spacing={SECTION_STACK_SPACING}>
      <Typography variant="h1">{t('summaryStep.title')}</Typography>

      <Stack spacing={2}>
        <Typography variant="h5" component="h2">
          {t('summaryStep.sectionTitle')}
        </Typography>

        <Box>
          <ScrollArea
            maxHeight={SUMMARY_LIST_MAX_HEIGHT}
            ariaLabel={t('summaryStep.sectionTitle')}
          >
            <DefinitionList groups={[donationRows, donorRows]} />
          </ScrollArea>

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
