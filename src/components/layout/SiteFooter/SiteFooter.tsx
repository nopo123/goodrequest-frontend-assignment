'use client';

import InstagramIcon from '@mui/icons-material/Instagram';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import { BrandLogo } from '@/components/layout/BrandLogo/BrandLogo';
import { SOCIAL_LINKS } from '@/config/social';
import type { TranslateFn } from '@/types/i18n';
import { SocialNetwork } from '@/types/social';

import { FooterRow } from './SiteFooter.styled';

const SOCIAL_ICONS = {
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
    </FooterRow>
  </Stack>
);
