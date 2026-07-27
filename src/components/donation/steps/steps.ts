import type { FormikErrors, FormikTouched } from 'formik';

import { DonationStep, type DonationFormValues } from '@/types/donation';

const STEP_FIELD_KEYS: Readonly<
  Record<DonationStep, readonly (keyof DonationFormValues)[]>
> = {
  [DonationStep.SHELTER]: ['donationType', 'shelterId', 'amount'],
  [DonationStep.DONOR]: ['donors'],
  [DonationStep.SUMMARY]: ['consent'],
};

export const hasStepErrors = (
  step: DonationStep,
  errors: FormikErrors<DonationFormValues>,
): boolean => STEP_FIELD_KEYS[step].some((key) => errors[key] !== undefined);

export const buildStepTouched = (
  step: DonationStep,
  values: DonationFormValues,
): FormikTouched<DonationFormValues> => {
  if (step === DonationStep.DONOR) {
    return {
      donors: values.donors.map(() => ({
        firstName: true,
        lastName: true,
        email: true,
        phoneCountry: true,
        phone: true,
      })),
    };
  }

  if (step === DonationStep.SUMMARY) {
    return { consent: true };
  }

  return { donationType: true, shelterId: true, amount: true };
};
