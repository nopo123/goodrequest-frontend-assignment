'use client';

import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { FormikErrors, FormikTouched } from 'formik';
import { Fragment } from 'react';

import {
  DONOR_LIST_MAX_HEIGHT,
  MAX_DONORS,
} from '@/components/donation/DonationForm/constants';
import { getDonorFieldError } from '@/components/donation/DonationForm/errors';
import { DonorFieldset } from '@/components/donation/DonorFieldset/DonorFieldset';
import { ScrollArea } from '@/components/ui/ScrollArea/ScrollArea';
import { useScrollIntoViewOnGrow } from '@/hooks/ui/useScrollIntoViewOnGrow';
import type { DonationFormValues, DonorFormValues } from '@/types/donation';
import type { TranslateFn } from '@/types/i18n';
import { translateFieldError } from '@/utils/translateFieldError';

type DonorStepProps = {
  readonly t: TranslateFn;
  readonly values: DonationFormValues;
  readonly errors: FormikErrors<DonationFormValues>;
  readonly touched: FormikTouched<DonationFormValues>;
  readonly onDonorFieldChange: <TField extends keyof DonorFormValues>(
    index: number,
    field: TField,
    value: DonorFormValues[TField],
  ) => void;
  readonly onDonorFieldBlur: (index: number, field: keyof DonorFormValues) => void;
  readonly onAddDonor: () => void;
  readonly onRemoveDonor: (index: number) => void;
};

export const DonorStep = ({
  t,
  values,
  errors,
  touched,
  onDonorFieldChange,
  onDonorFieldBlur,
  onAddDonor,
  onRemoveDonor,
}: DonorStepProps) => {
  const donorCount = values.donors.length;
  const hasMultipleDonors = donorCount > 1;
  const canAddDonor = donorCount < MAX_DONORS;
  const lastDonorIndex = donorCount - 1;
  const setLastDonorNode = useScrollIntoViewOnGrow(donorCount);

  return (
    <Stack spacing={5}>
      <Typography variant="h1">{t('donorStep.title')}</Typography>

      <Stack spacing={2}>
        <Typography variant="h4" component="h2">
          {t('donorStep.sectionTitle')}
        </Typography>

        <ScrollArea
          maxHeight={DONOR_LIST_MAX_HEIGHT}
          ariaLabel={t('donorStep.sectionTitle')}
        >
          <Stack spacing={3}>
            {values.donors.map((donor, index) => (
              <Fragment key={index}>
                {index > 0 && <Divider />}
                <DonorFieldset
                  t={t}
                  ref={index === lastDonorIndex ? setLastDonorNode : undefined}
                  index={index}
                  donor={donor}
                  showTitle={hasMultipleDonors}
                  isRemovable={hasMultipleDonors}
                  errors={{
                    firstName: translateFieldError(
                      t,
                      getDonorFieldError(errors, touched, index, 'firstName'),
                    ),
                    lastName: translateFieldError(
                      t,
                      getDonorFieldError(errors, touched, index, 'lastName'),
                    ),
                    email: translateFieldError(
                      t,
                      getDonorFieldError(errors, touched, index, 'email'),
                    ),
                    phone: translateFieldError(
                      t,
                      getDonorFieldError(errors, touched, index, 'phone'),
                    ),
                  }}
                  onFieldChange={(field, value) =>
                    onDonorFieldChange(index, field, value)
                  }
                  onFieldBlur={(field) => onDonorFieldBlur(index, field)}
                  onRemove={() => onRemoveDonor(index)}
                />
              </Fragment>
            ))}

            {canAddDonor && (
              <Button
                type="button"
                variant="text"
                startIcon={<AddIcon />}
                onClick={onAddDonor}
                sx={{ alignSelf: 'flex-start', px: 0 }}
              >
                {t('donorStep.addDonor')}
              </Button>
            )}
          </Stack>
        </ScrollArea>
      </Stack>
    </Stack>
  );
};
