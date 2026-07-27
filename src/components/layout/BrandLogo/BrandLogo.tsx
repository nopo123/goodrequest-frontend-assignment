'use client';

import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { HOME_ROUTE } from '@/config/navigation';

import { LogoLink, LogoMark } from './BrandLogo.styled';

export const BrandLogo = () => {
  const { t } = useTranslation();

  return (
    <LogoLink component={Link} href={HOME_ROUTE} direction="row" spacing={1}>
      <LogoMark src="/good-boy.svg" alt="" aria-hidden="true" />
      <Typography component="span" variant="h4" color="text.primary">
        {t('common.appName')}
      </Typography>
    </LogoLink>
  );
};
