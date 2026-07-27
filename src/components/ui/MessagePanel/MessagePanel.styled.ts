import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import { COLORS, RADII } from '@/lib/theme/tokens';
import { MessageTone } from '@/types/ui';

const BADGE_SIZE = 64;

const BADGE_ICON_SIZE = 32;

type ToneColors = {
  readonly background: string;
  readonly foreground: string;
};

const TONE_COLORS: Readonly<Record<MessageTone, ToneColors>> = {
  [MessageTone.BRAND]: {
    background: COLORS.primaryLight,
    foreground: COLORS.primary,
  },
  [MessageTone.ERROR]: {
    background: COLORS.errorLight,
    foreground: COLORS.error,
  },
};

type MessageBadgeProps = {
  readonly tone: MessageTone;
};

export const MessagePanelRoot = styled(Stack)({
  alignItems: 'center',
  textAlign: 'center',
}) as typeof Stack;

export const MessageBadge = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'tone',
})<MessageBadgeProps>(({ tone }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: BADGE_SIZE,
  height: BADGE_SIZE,
  borderRadius: RADII.pill,
  backgroundColor: TONE_COLORS[tone].background,
  color: TONE_COLORS[tone].foreground,
  fontSize: BADGE_ICON_SIZE,
}));
