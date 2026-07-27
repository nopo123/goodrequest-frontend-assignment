'use client';

import MuiLink from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import type { ReactNode } from 'react';

type LinkOrTextProps = {
  readonly value: ReactNode;
  readonly href?: string;
};

export const LinkOrText = ({ value, href }: LinkOrTextProps) =>
  href === undefined ? (
    <Typography variant="body1" color="primary">
      {value}
    </Typography>
  ) : (
    <MuiLink href={href} underline="hover" color="primary" variant="body1">
      {value}
    </MuiLink>
  );
