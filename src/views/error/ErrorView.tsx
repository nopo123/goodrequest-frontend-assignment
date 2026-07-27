'use client';

import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import Button from '@mui/material/Button';
import MuiLink from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { SiteFooter } from '@/components/layout/SiteFooter/SiteFooter';
import { SplitLayout } from '@/components/layout/SplitLayout/SplitLayout';
import { MessagePanel } from '@/components/ui/MessagePanel/MessagePanel';
import { HOME_ROUTE } from '@/config/navigation';
import { MessageTone } from '@/types/ui';

import { ErrorActionsRow } from './ErrorView.styled';

type ErrorViewProps = {
  readonly digest?: string;
  readonly onRetry: () => void;
};

export const ErrorView = ({ digest, onRetry }: ErrorViewProps) => {
  const { t } = useTranslation();

  return (
    <SplitLayout footer={<SiteFooter />}>
      <MessagePanel
        icon={<ErrorOutlineOutlinedIcon fontSize="inherit" />}
        title={t('errorPage.title')}
        description={t('errorPage.description')}
        tone={MessageTone.ERROR}
      >
        <ErrorActionsRow direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button
            variant="contained"
            size="large"
            startIcon={<RefreshOutlinedIcon />}
            onClick={onRetry}
          >
            {t('errorPage.retry')}
          </Button>

          <MuiLink
            component={Link}
            href={HOME_ROUTE}
            underline="hover"
            color="text.secondary"
            variant="body2"
          >
            {t('common.backToForm')}
          </MuiLink>
        </ErrorActionsRow>

        {digest !== undefined && (
          <Typography variant="caption">{t('errorPage.digest', { digest })}</Typography>
        )}
      </MessagePanel>
    </SplitLayout>
  );
};
