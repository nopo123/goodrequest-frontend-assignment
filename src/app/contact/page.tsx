import type { Metadata } from 'next';

import { resolveRequestLanguage } from '@/lib/i18n/server';
import { buildPageMetadata, getSeoStrings } from '@/lib/seo/seo';
import { AppRoute } from '@/routes/routes';
import { ContactView } from '@/views/contact/ContactView';

export const generateMetadata = async (): Promise<Metadata> => {
  const language = await resolveRequestLanguage();
  const strings = getSeoStrings(language);

  return buildPageMetadata({
    language,
    title: strings.contactTitle,
    description: strings.contactDescription,
    canonicalPath: AppRoute.CONTACT,
  });
};

const ContactRoute = () => <ContactView />;

export default ContactRoute;
