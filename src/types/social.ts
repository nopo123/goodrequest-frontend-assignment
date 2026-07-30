export enum SocialNetwork {
  INSTAGRAM = 'instagram',
}

export type SocialLinkType = {
  readonly id: SocialNetwork;
  readonly href: string;
  readonly label: string;
};
