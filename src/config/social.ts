import { SocialNetwork, type SocialLinkType } from '@/types/social';

export const SOCIAL_LINKS: readonly SocialLinkType[] = [
  {
    id: SocialNetwork.FACEBOOK,
    href: 'https://www.facebook.com/goodrequest',
    label: 'Facebook',
  },
  {
    id: SocialNetwork.INSTAGRAM,
    href: 'https://www.instagram.com/goodrequest',
    label: 'Instagram',
  },
];
