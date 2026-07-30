export enum SocialNetwork {
  FACEBOOK = 'facebook',
  INSTAGRAM = 'instagram',
}

export type SocialLinkType = {
  readonly id: SocialNetwork;
  readonly href: string;
  readonly label: string;
};
