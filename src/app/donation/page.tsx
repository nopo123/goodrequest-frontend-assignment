import type { Metadata } from 'next';

import { DonationView } from '@/views/donation/DonationView';

export const metadata: Metadata = {
  title: 'Vyberte si, ako chcete pomôcť',
  description:
    'Prispejte konkrétnemu útulku alebo celej nadácii Good boy a pomôžte psom nájsť domov',
};

const DonationRoute = () => <DonationView />;

export default DonationRoute;
