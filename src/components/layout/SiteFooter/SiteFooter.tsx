'use client';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Link from 'next/link';

import { BrandLogo } from '@/components/layout/BrandLogo/BrandLogo';
import { FOOTER_NAV_LINKS } from '@/config/navigation';
import { SOCIAL_LINKS } from '@/config/social';
import type { TranslateFn } from '@/types/i18n';
import { SocialNetwork } from '@/types/social';

import { FooterNav, FooterNavLink, FooterRow } from './SiteFooter.styled';

const SOCIAL_ICONS = {
  [SocialNetwork.FACEBOOK]: FacebookIcon,
  [SocialNetwork.INSTAGRAM]: InstagramIcon,
} as const;

type SiteFooterProps = {
  readonly t: TranslateFn;
};

export const SiteFooter = ({ t }: SiteFooterProps) => (
  <Stack component="footer" spacing={3}>
    <Divider />
    <FooterRow direction={{ xs: 'column', sm: 'row' }} spacing={2}>
      <BrandLogo label={t('common.appName')} />

      <FooterNav component="nav" aria-label={t('nav.label')} direction="row" spacing={3}>
        <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
          {SOCIAL_LINKS.map((social) => {
            const Icon = SOCIAL_ICONS[social.id];

            return (
              <IconButton
                key={social.id}
                component="a"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                size="small"
              >
                <Icon fontSize="small" />
              </IconButton>
            );
          })}
        </Stack>

        {FOOTER_NAV_LINKS.map((link) => (
          <FooterNavLink
            key={link.href}
            component={Link}
            href={link.href}
            underline="hover"
          >
            {t(link.labelKey)}
          </FooterNavLink>
        ))}
      </FooterNav>
    </FooterRow>
  </Stack>
);
