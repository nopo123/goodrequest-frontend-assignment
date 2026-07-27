'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { DONATION_STEP_SLUGS } from '@/components/donation/DonationForm/constants';
import { AppRoute, DONATION_STEP_QUERY_PARAM } from '@/routes/routes';
import { DonationStep } from '@/types/donation';

const buildStepHref = (step: DonationStep): string => {
  if (step === DonationStep.SHELTER) return AppRoute.DONATION;

  const slug = DONATION_STEP_SLUGS[step];

  return `${AppRoute.DONATION}?${DONATION_STEP_QUERY_PARAM}=${slug}`;
};

export const useDonationStepUrl = (step: DonationStep): void => {
  const router = useRouter();

  useEffect(() => {
    const href = buildStepHref(step);
    const currentHref = `${window.location.pathname}${window.location.search}`;

    if (currentHref === href) return;

    router.replace(href, { scroll: false });
  }, [step, router]);
};
