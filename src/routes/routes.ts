export enum AppRoute {
  DONATION = '/donation',
  ABOUT_PROJECT = '/about-project',
  CONTACT = '/contact',
}

export type NavLinkType = {
  readonly href: AppRoute;
  readonly labelKey: string;
};
