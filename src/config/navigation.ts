import { AppRoute, type NavLinkType } from '@/routes/routes';

export const HOME_ROUTE = AppRoute.DONATION;

export const FOOTER_NAV_LINKS: readonly NavLinkType[] = [
  { href: AppRoute.CONTACT, labelKey: 'nav.contact' },
  { href: AppRoute.ABOUT_PROJECT, labelKey: 'nav.about' },
];
