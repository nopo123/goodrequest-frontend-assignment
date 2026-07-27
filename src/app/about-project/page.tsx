import type { Metadata } from 'next';

import { SEO_STRINGS, buildPageMetadata } from '@/lib/seo/seo';
import { AppRoute } from '@/routes/routes';
import { AboutProjectView } from '@/views/aboutProject/AboutProjectView';

export const metadata: Metadata = buildPageMetadata({
  title: SEO_STRINGS.aboutTitle,
  description: SEO_STRINGS.aboutDescription,
  canonicalPath: AppRoute.ABOUT_PROJECT,
});

const AboutProjectRoute = () => <AboutProjectView />;

export default AboutProjectRoute;
