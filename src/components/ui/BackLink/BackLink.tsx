'use client';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';

import { BackLinkRoot } from './BackLink.styled';

type BackLinkProps = {
  readonly href: string;
  readonly label: string;
};

export const BackLink = ({ href, label }: BackLinkProps) => (
  <BackLinkRoot component={Link} href={href} underline="none" variant="body2">
    <ArrowBackIcon fontSize="small" />
    {label}
  </BackLinkRoot>
);
