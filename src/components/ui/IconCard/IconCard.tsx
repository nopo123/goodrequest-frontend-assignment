'use client';

import Typography from '@mui/material/Typography';
import type { ReactNode } from 'react';

import { SPACING } from '@/lib/theme/tokens';

import { IconBadge, IconCardHeading, IconCardRoot } from './IconCard.styled';

type IconCardProps = {
  readonly icon: ReactNode;
  readonly title: string;
  readonly description: string;
  readonly children?: ReactNode;
};

export const IconCard = ({ icon, title, description, children }: IconCardProps) => (
  <IconCardRoot useFlexGap sx={{ gap: `${SPACING.xl2}px` }}>
    <IconBadge>{icon}</IconBadge>

    <IconCardHeading useFlexGap sx={{ gap: `${SPACING.md}px` }}>
      <Typography variant="h4" component="h2">
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {description}
      </Typography>
    </IconCardHeading>

    {children}
  </IconCardRoot>
);
