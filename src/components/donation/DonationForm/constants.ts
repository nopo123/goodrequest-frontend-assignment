import {
  DonationStep,
  DonationStepSlug,
  DonationType,
  PhoneCountry,
} from '@/types/donation';

export const AMOUNT_PRESETS = [5, 10, 20, 30, 50, 100] as const;

export const DEFAULT_AMOUNT = 50;

export const MIN_AMOUNT = 1;

export const MAX_AMOUNT = 100000;

export const FIRST_NAME_MIN_LENGTH = 2;

export const FIRST_NAME_MAX_LENGTH = 20;

export const LAST_NAME_MIN_LENGTH = 2;

export const LAST_NAME_MAX_LENGTH = 30;

export const MAX_DONORS = 5;

export const DONOR_LIST_MAX_HEIGHT = 'clamp(240px, calc(100vh - 400px), 680px)';

export const SUMMARY_LIST_MAX_HEIGHT = 'clamp(240px, 40vh, 440px)';

export const DONATION_STEP_ORDER = [
  DonationStep.SHELTER,
  DonationStep.DONOR,
  DonationStep.SUMMARY,
] as const;

export const DONATION_STEP_SLUGS: Readonly<Record<DonationStep, DonationStepSlug>> = {
  [DonationStep.SHELTER]: DonationStepSlug.SHELTER,
  [DonationStep.DONOR]: DonationStepSlug.DONOR,
  [DonationStep.SUMMARY]: DonationStepSlug.SUMMARY,
};

export const DONATION_STEP_SLUG_ORDER = [
  DonationStepSlug.SHELTER,
  DonationStepSlug.DONOR,
  DonationStepSlug.SUMMARY,
] as const;

export const PHONE_COUNTRY_CALLING_CODES: Readonly<Record<PhoneCountry, string>> = {
  [PhoneCountry.SK]: '+421',
  [PhoneCountry.CZ]: '+420',
};

export const PHONE_COUNTRY_ORDER = [PhoneCountry.SK, PhoneCountry.CZ] as const;

export const DEFAULT_PHONE_COUNTRY = PhoneCountry.SK;

export const DEFAULT_DONATION_TYPE = DonationType.WHOLE_FOUNDATION;
