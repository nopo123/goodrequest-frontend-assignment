import type { Metadata } from 'next';

import { AboutProjectView } from '@/views/aboutProject/AboutProjectView';

export const metadata: Metadata = {
  title: 'O projekte',
  description:
    'Nadácia Good boy zachraňuje opustené a týrané psy a hľadá im milujúci domov',
};

const AboutProjectRoute = () => <AboutProjectView />;

export default AboutProjectRoute;
