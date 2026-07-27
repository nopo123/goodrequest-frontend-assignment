'use client';

import SearchOffOutlinedIcon from '@mui/icons-material/SearchOffOutlined';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { SiteFooter } from '@/components/layout/SiteFooter/SiteFooter';
import { SplitLayout } from '@/components/layout/SplitLayout/SplitLayout';
import { MessagePanel } from '@/components/ui/MessagePanel/MessagePanel';
import { HOME_ROUTE } from '@/config/navigation';

export const NotFoundView = () => {
  const { t } = useTranslation();

  return (
    <SplitLayout footer={<SiteFooter t={t} />}>
      <MessagePanel
        icon={<SearchOffOutlinedIcon fontSize="inherit" />}
        title={t('notFound.title')}
        description={t('notFound.description')}
      >
        <Button component={Link} href={HOME_ROUTE} variant="contained" size="large">
          {t('common.backToForm')}
        </Button>
      </MessagePanel>
    </SplitLayout>
  );
};
