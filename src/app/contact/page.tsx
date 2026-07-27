import type { Metadata } from 'next';

import { SEO_STRINGS, buildPageMetadata } from '@/lib/seo/seo';
import { AppRoute } from '@/routes/routes';
import { ContactView } from '@/views/contact/ContactView';

export const metadata: Metadata = buildPageMetadata({
  title: SEO_STRINGS.contactTitle,
  description: SEO_STRINGS.contactDescription,
  canonicalPath: AppRoute.CONTACT,
});

const ContactRoute = () => <ContactView />;

export default ContactRoute;
