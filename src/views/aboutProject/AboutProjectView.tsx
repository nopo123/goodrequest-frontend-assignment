'use client';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

import { SiteFooter } from '@/components/layout/SiteFooter/SiteFooter';
import { SplitLayout } from '@/components/layout/SplitLayout/SplitLayout';
import { ContributionStats } from '@/components/stats/ContributionStats/ContributionStats';
import { BackLink } from '@/components/ui/BackLink/BackLink';
import { HOME_ROUTE } from '@/config/navigation';

import { StatsBand } from './AboutProjectView.styled';

export const AboutProjectView = () => {
  const { t } = useTranslation();

  return (
    <SplitLayout footer={<SiteFooter />}>
      <Stack spacing={5}>
        <BackLink href={HOME_ROUTE} label={t('common.back')} />

        <Typography variant="h1">{t('about.title')}</Typography>

        <Typography variant="body1">{t('about.intro')}</Typography>

        <StatsBand>
          <ContributionStats />
        </StatsBand>

        <Typography variant="body1">{t('about.outro')}</Typography>
      </Stack>
    </SplitLayout>
  );
};
