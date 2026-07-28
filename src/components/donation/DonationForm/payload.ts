import {
  DonationType,
  type DonationFormValues,
  type DonorFormValues,
} from '@/types/donation';
import type { ContributeDto, ContributorType } from '@/types/shelters';

import {
  DEFAULT_AMOUNT,
  DEFAULT_DONATION_TYPE,
  DEFAULT_PHONE_COUNTRY,
  PHONE_COUNTRY_CALLING_CODES,
} from './constants';

export const createInitialDonorValues = (): DonorFormValues => ({
  firstName: '',
  lastName: '',
  email: '',
  phoneCountry: DEFAULT_PHONE_COUNTRY,
  phone: '',
});

export const createInitialDonationValues = (): DonationFormValues => ({
  donationType: DEFAULT_DONATION_TYPE,
  shelterId: null,
  amount: String(DEFAULT_AMOUNT),
  donors: [createInitialDonorValues()],
  consent: false,
});

export const parseAmount = (amount: string): number =>
  Number(amount.replace(',', '.').trim());

export const buildFullPhoneNumber = (donor: DonorFormValues): string =>
  `${PHONE_COUNTRY_CALLING_CODES[donor.phoneCountry]}${donor.phone.replace(/\s/g, '')}`;

const buildContributor = (donor: DonorFormValues): ContributorType => {
  const firstName = donor.firstName.trim();

  return {
    ...(firstName.length === 0 ? null : { firstName }),
    lastName: donor.lastName.trim(),
    email: donor.email.trim(),
    phone: buildFullPhoneNumber(donor),
  };
};

export const buildContributePayload = (values: DonationFormValues): ContributeDto => ({
  contributors: values.donors.map(buildContributor),
  shelterID:
    values.donationType === DonationType.SPECIFIC_SHELTER ? values.shelterId : null,
  value: parseAmount(values.amount),
});
