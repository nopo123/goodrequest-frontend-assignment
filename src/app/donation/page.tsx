import type { Metadata } from 'next';

import { DONATION_STEP_SLUG_ORDER } from '@/components/donation/DonationForm/constants';
import { SEO_STRINGS, buildPageMetadata } from '@/lib/seo/seo';
import { AppRoute, DONATION_STEP_QUERY_PARAM } from '@/routes/routes';
import { DonationStepSlug } from '@/types/donation';
import { DonationView } from '@/views/donation/DonationView';

type SearchParamValue = string | readonly string[] | undefined;

type DonationRouteProps = {
  readonly searchParams: Promise<Readonly<Record<string, SearchParamValue>>>;
};

type StepSeo = {
  readonly title: string;
  readonly description: string;
};

const STEP_SEO: Readonly<Record<DonationStepSlug, StepSeo>> = {
  [DonationStepSlug.SHELTER]: {
    title: SEO_STRINGS.shelterStepTitle,
    description: SEO_STRINGS.donateDescription,
  },
  [DonationStepSlug.DONOR]: {
    title: SEO_STRINGS.donorStepTitle,
    description: SEO_STRINGS.donorStepDescription,
  },
  [DonationStepSlug.SUMMARY]: {
    title: SEO_STRINGS.summaryStepTitle,
    description: SEO_STRINGS.summaryStepDescription,
  },
};

const isDonationStepSlug = (value: string): value is DonationStepSlug =>
  DONATION_STEP_SLUG_ORDER.some((slug) => slug === value);

const resolveStepSlug = (value: SearchParamValue): DonationStepSlug => {
  if (typeof value !== 'string') return DonationStepSlug.SHELTER;
  if (!isDonationStepSlug(value)) return DonationStepSlug.SHELTER;

  return value;
};

export const generateMetadata = async ({
  searchParams,
}: DonationRouteProps): Promise<Metadata> => {
  const resolvedSearchParams = await searchParams;
  const slug = resolveStepSlug(resolvedSearchParams[DONATION_STEP_QUERY_PARAM]);
  const { title, description } = STEP_SEO[slug];

  return buildPageMetadata({
    title,
    description,
    canonicalPath: AppRoute.DONATION,
  });
};

const DonationRoute = () => <DonationView />;

export default DonationRoute;
