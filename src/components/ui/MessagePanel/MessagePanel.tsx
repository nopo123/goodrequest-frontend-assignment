'use client';

import Typography from '@mui/material/Typography';
import type { ReactNode } from 'react';

import { MessageTone } from '@/types/ui';

import { MessageBadge, MessagePanelRoot } from './MessagePanel.styled';

type MessagePanelProps = {
  readonly icon: ReactNode;
  readonly title: string;
  readonly description: string;
  readonly tone?: MessageTone;
  readonly children?: ReactNode;
};

export const MessagePanel = ({
  icon,
  title,
  description,
  tone = MessageTone.BRAND,
  children,
}: MessagePanelProps) => (
  <MessagePanelRoot spacing={3}>
    <MessageBadge tone={tone}>{icon}</MessageBadge>

    <Typography variant="h1">{title}</Typography>

    <Typography variant="body1">{description}</Typography>

    {children}
  </MessagePanelRoot>
);
