import type { Metadata } from 'next';

import { resolveRequestLanguage } from '@/lib/i18n/server';
import { buildPageMetadata, getSeoStrings } from '@/lib/seo/seo';
import { AppRoute } from '@/routes/routes';
import { AboutProjectView } from '@/views/aboutProject/AboutProjectView';

export const generateMetadata = async (): Promise<Metadata> => {
  const language = await resolveRequestLanguage();
  const strings = getSeoStrings(language);

  return buildPageMetadata({
    language,
    title: strings.aboutTitle,
    description: strings.aboutDescription,
    canonicalPath: AppRoute.ABOUT_PROJECT,
  });
};

const AboutProjectRoute = () => <AboutProjectView />;

export default AboutProjectRoute;
