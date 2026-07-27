import type { Metadata } from 'next';

import { ContactView } from '@/views/contact/ContactView';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktné údaje nadácie Good boy – e-mail, adresa a telefón',
};

const ContactRoute = () => <ContactView />;

export default ContactRoute;
