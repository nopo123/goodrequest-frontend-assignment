import type { Metadata } from 'next';

import { DONATION_STEP_SLUG_ORDER } from '@/components/donation/DonationForm/constants';
import { resolveRequestLanguage } from '@/lib/i18n/server';
import { buildPageMetadata, getSeoStrings } from '@/lib/seo/seo';
import { AppRoute, DONATION_STEP_QUERY_PARAM } from '@/routes/routes';
import { DonationStepSlug } from '@/types/donation';
import type { Language } from '@/types/i18n';
import { DonationView } from '@/views/donation/DonationView';

type SearchParamValue = string | readonly string[] | undefined;

type DonationRouteProps = {
  readonly searchParams: Promise<Readonly<Record<string, SearchParamValue>>>;
};

type StepSeo = {
  readonly title: string;
  readonly description: string;
};

const buildStepSeo = (
  language: Language,
): Readonly<Record<DonationStepSlug, StepSeo>> => {
  const strings = getSeoStrings(language);

  return {
    [DonationStepSlug.SHELTER]: {
      title: strings.shelterStepTitle,
      description: strings.donateDescription,
    },
    [DonationStepSlug.DONOR]: {
      title: strings.donorStepTitle,
      description: strings.donorStepDescription,
    },
    [DonationStepSlug.SUMMARY]: {
      title: strings.summaryStepTitle,
      description: strings.summaryStepDescription,
    },
  };
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
  const [language, resolvedSearchParams] = await Promise.all([
    resolveRequestLanguage(),
    searchParams,
  ]);

  const slug = resolveStepSlug(resolvedSearchParams[DONATION_STEP_QUERY_PARAM]);
  const { title, description } = buildStepSeo(language)[slug];

  return buildPageMetadata({
    language,
    title,
    description,
    canonicalPath: AppRoute.DONATION,
  });
};

const DonationRoute = () => <DonationView />;

export default DonationRoute;
