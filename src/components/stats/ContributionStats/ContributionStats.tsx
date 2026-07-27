'use client';

import Alert from '@mui/material/Alert';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

import { useContributionResults } from '@/hooks/stats/useContributionResults';
import { formatCount, formatCurrency } from '@/utils/format';

import { StatItem, StatValue, StatsGrid } from './ContributionStats.styled';

const SKELETON_WIDTH = 160;

const SKELETON_HEIGHT = 64;

export const ContributionStats = () => {
  const { t, i18n } = useTranslation();
  const { data, isPending, isError } = useContributionResults();

  if (isError) {
    return <Alert severity="error">{t('about.statsError')}</Alert>;
  }

  return (
    <StatsGrid>
      <StatItem spacing={1}>
        {isPending ? (
          <Skeleton variant="text" width={SKELETON_WIDTH} height={SKELETON_HEIGHT} />
        ) : (
          <StatValue variant="display">
            {formatCurrency(data.contribution ?? 0, i18n.language)}
          </StatValue>
        )}
        <Typography variant="body1" color="text.secondary">
          {t('about.totalRaised')}
        </Typography>
      </StatItem>

      <StatItem spacing={1}>
        {isPending ? (
          <Skeleton variant="text" width={SKELETON_WIDTH} height={SKELETON_HEIGHT} />
        ) : (
          <StatValue variant="display">
            {formatCount(data.contributors, i18n.language)}
          </StatValue>
        )}
        <Typography variant="body1" color="text.secondary">
          {t('about.contributors')}
        </Typography>
      </StatItem>
    </StatsGrid>
  );
};
