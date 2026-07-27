import type { Metadata } from 'next';

import { resolveRequestLanguage } from '@/lib/i18n/server';
import { getSeoStrings } from '@/lib/seo/seo';
import { ThankYouView } from '@/views/thankYou/ThankYouView';

export const generateMetadata = async (): Promise<Metadata> => {
  const strings = getSeoStrings(await resolveRequestLanguage());

  return {
    title: strings.thankYouTitle,
    description: strings.thankYouDescription,
    robots: { index: false, follow: false },
  };
};

const ThankYouRoute = () => <ThankYouView />;

export default ThankYouRoute;
