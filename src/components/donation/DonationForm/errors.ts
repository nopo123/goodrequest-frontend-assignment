import type { FormikErrors, FormikTouched } from 'formik';

import type { DonationFormValues, DonorFormValues } from '@/types/donation';

export const getDonationFieldError = <TField extends keyof DonationFormValues>(
  errors: FormikErrors<DonationFormValues>,
  touched: FormikTouched<DonationFormValues>,
  field: TField,
): string | undefined => {
  const message = errors[field];
  if (touched[field] !== true) return undefined;
  return typeof message === 'string' ? message : undefined;
};

export const getDonorFieldError = (
  errors: FormikErrors<DonationFormValues>,
  touched: FormikTouched<DonationFormValues>,
  index: number,
  field: keyof DonorFormValues,
): string | undefined => {
  const donorErrors = errors.donors;
  if (!Array.isArray(donorErrors)) return undefined;

  const donorError = donorErrors[index];
  if (typeof donorError !== 'object' || donorError === null) return undefined;

  const isTouched = touched.donors?.[index]?.[field] === true;
  if (!isTouched) return undefined;

  const message = (donorError as FormikErrors<DonorFormValues>)[field];
  return typeof message === 'string' ? message : undefined;
};
