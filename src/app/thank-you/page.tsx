import type { Metadata } from 'next';

import { ThankYouView } from '@/views/thankYou/ThankYouView';

export const metadata: Metadata = {
  title: 'Ďakujeme',
  description: 'Potvrdenie o odoslaní príspevku nadácii Good boy',
  robots: { index: false, follow: false },
};

const ThankYouRoute = () => <ThankYouView />;

export default ThankYouRoute;
