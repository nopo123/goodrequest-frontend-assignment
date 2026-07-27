export enum AppRoute {
  DONATION = '/donation',
  ABOUT_PROJECT = '/about-project',
  CONTACT = '/contact',
  THANK_YOU = '/thank-you',
}

export type NavLinkType = {
  readonly href: AppRoute;
  readonly labelKey: string;
};
