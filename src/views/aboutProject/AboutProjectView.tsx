'use client';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

import { SiteFooter } from '@/components/layout/SiteFooter/SiteFooter';
import { SplitLayout } from '@/components/layout/SplitLayout/SplitLayout';
import { ContributionStats } from '@/components/stats/ContributionStats/ContributionStats';
import { BackLink } from '@/components/ui/BackLink/BackLink';
import { HOME_ROUTE } from '@/config/navigation';
import { useContributionResults } from '@/hooks/stats/useContributionResults';
import { formatCount, formatCurrency } from '@/utils/format';

import { StatsBand } from './AboutProjectView.styled';

export const AboutProjectView = () => {
  const { t, i18n } = useTranslation();
  const { data, isError } = useContributionResults();

  const totalRaised =
    data === undefined
      ? undefined
      : formatCurrency(data.contribution ?? 0, i18n.language);
  const contributors =
    data === undefined ? undefined : formatCount(data.contributors, i18n.language);

  return (
    <SplitLayout footer={<SiteFooter t={t} />}>
      <Stack spacing={5}>
        <BackLink href={HOME_ROUTE} label={t('common.back')} />

        <Typography variant="h1">{t('about.title')}</Typography>

        <Typography variant="body1">{t('about.intro')}</Typography>

        <StatsBand>
          <ContributionStats
            totalRaised={totalRaised}
            totalRaisedLabel={t('about.totalRaised')}
            contributors={contributors}
            contributorsLabel={t('about.contributors')}
            errorMessage={isError ? t('about.statsError') : undefined}
          />
        </StatsBand>

        <Typography variant="body1">{t('about.outro')}</Typography>
      </Stack>
    </SplitLayout>
  );
};
