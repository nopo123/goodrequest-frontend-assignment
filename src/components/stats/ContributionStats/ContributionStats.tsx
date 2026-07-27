'use client';

import Alert from '@mui/material/Alert';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

import { StatItem, StatValue, StatsGrid } from './ContributionStats.styled';

const SKELETON_WIDTH = 160;

const SKELETON_HEIGHT = 64;

type ContributionStatsProps = {
  readonly totalRaised?: string;
  readonly totalRaisedLabel: string;
  readonly contributors?: string;
  readonly contributorsLabel: string;
  readonly errorMessage?: string;
};

export const ContributionStats = ({
  totalRaised,
  totalRaisedLabel,
  contributors,
  contributorsLabel,
  errorMessage,
}: ContributionStatsProps) => {
  if (errorMessage !== undefined) {
    return <Alert severity="error">{errorMessage}</Alert>;
  }

  return (
    <StatsGrid>
      <StatItem spacing={1}>
        {totalRaised === undefined ? (
          <Skeleton variant="text" width={SKELETON_WIDTH} height={SKELETON_HEIGHT} />
        ) : (
          <StatValue variant="display">{totalRaised}</StatValue>
        )}
        <Typography variant="body1" color="text.secondary">
          {totalRaisedLabel}
        </Typography>
      </StatItem>

      <StatItem spacing={1}>
        {contributors === undefined ? (
          <Skeleton variant="text" width={SKELETON_WIDTH} height={SKELETON_HEIGHT} />
        ) : (
          <StatValue variant="display">{contributors}</StatValue>
        )}
        <Typography variant="body1" color="text.secondary">
          {contributorsLabel}
        </Typography>
      </StatItem>
    </StatsGrid>
  );
};
