import { isValidPhoneNumber } from 'libphonenumber-js';
import { z } from 'zod';

import { DonationType, PhoneCountry } from '@/types/donation';
import { MAX_AMOUNT_DECIMALS } from '@/utils/format';

import {
  FIRST_NAME_MAX_LENGTH,
  FIRST_NAME_MIN_LENGTH,
  LAST_NAME_MAX_LENGTH,
  LAST_NAME_MIN_LENGTH,
  MAX_AMOUNT,
  MAX_DONORS,
  MIN_AMOUNT,
  PHONE_COUNTRY_CALLING_CODES,
} from './constants';

const emailFormatSchema = z.email();

const RUN_ALWAYS = { when: () => true } as const;

const donorSchema = z
  .object({
    firstName: z
      .string()
      .refine(
        (value) =>
          value.trim().length === 0 || value.trim().length >= FIRST_NAME_MIN_LENGTH,
        { message: 'validation.firstName.min' },
      )
      .refine((value) => value.trim().length <= FIRST_NAME_MAX_LENGTH, {
        message: 'validation.firstName.max',
      }),
    lastName: z
      .string()
      .refine((value) => value.trim().length > 0, {
        message: 'validation.lastName.required',
      })
      .refine(
        (value) =>
          value.trim().length === 0 || value.trim().length >= LAST_NAME_MIN_LENGTH,
        { message: 'validation.lastName.min' },
      )
      .refine((value) => value.trim().length <= LAST_NAME_MAX_LENGTH, {
        message: 'validation.lastName.max',
      }),
    email: z
      .string()
      .refine((value) => value.trim().length > 0, {
        message: 'validation.email.required',
      })
      .refine(
        (value) =>
          value.trim().length === 0 || emailFormatSchema.safeParse(value.trim()).success,
        { message: 'validation.email.invalid' },
      ),
    phoneCountry: z.enum(PhoneCountry),
    phone: z.string(),
  })
  .superRefine((donor, ctx) => {
    const nationalNumber = donor.phone.replace(/\s/g, '');

    if (nationalNumber.length === 0) {
      ctx.addIssue({
        code: 'custom',
        path: ['phone'],
        message: 'validation.phone.required',
      });
      return;
    }

    const callingCode = PHONE_COUNTRY_CALLING_CODES[donor.phoneCountry];
    const isValid = isValidPhoneNumber(
      `${callingCode}${nationalNumber}`,
      donor.phoneCountry,
    );

    if (!isValid) {
      ctx.addIssue({
        code: 'custom',
        path: ['phone'],
        message: 'validation.phone.invalid',
      });
    }
  }, RUN_ALWAYS);

export const donationSchema = z
  .object({
    donationType: z.enum(DonationType),
    shelterId: z.number().nullable(),
    amount: z.string(),
    donors: z.array(donorSchema).min(1).max(MAX_DONORS),
    consent: z.literal(true, { message: 'validation.consent.required' }),
  })
  .superRefine((values, ctx) => {
    const needsShelter = values.donationType === DonationType.SPECIFIC_SHELTER;

    if (needsShelter && values.shelterId === null) {
      ctx.addIssue({
        code: 'custom',
        path: ['shelterId'],
        message: 'validation.shelter.required',
      });
    }

    const normalizedAmount = values.amount.replace(',', '.').trim();

    if (normalizedAmount.length === 0) {
      ctx.addIssue({
        code: 'custom',
        path: ['amount'],
        message: 'validation.amount.required',
      });
      return;
    }

    const parsedAmount = Number(normalizedAmount);

    if (!Number.isFinite(parsedAmount)) {
      ctx.addIssue({
        code: 'custom',
        path: ['amount'],
        message: 'validation.amount.invalid',
      });
      return;
    }

    const decimalDigits = normalizedAmount.split('.')[1]?.length ?? 0;

    if (decimalDigits > MAX_AMOUNT_DECIMALS) {
      ctx.addIssue({
        code: 'custom',
        path: ['amount'],
        message: 'validation.amount.decimals',
      });
      return;
    }

    if (parsedAmount < MIN_AMOUNT) {
      ctx.addIssue({
        code: 'custom',
        path: ['amount'],
        message: 'validation.amount.min',
      });
      return;
    }

    if (parsedAmount > MAX_AMOUNT) {
      ctx.addIssue({
        code: 'custom',
        path: ['amount'],
        message: 'validation.amount.max',
      });
    }
  }, RUN_ALWAYS);
