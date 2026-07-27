'use client';

import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { SiteFooter } from '@/components/layout/SiteFooter/SiteFooter';
import { SplitLayout } from '@/components/layout/SplitLayout/SplitLayout';
import { MessagePanel } from '@/components/ui/MessagePanel/MessagePanel';
import { useDonationSubmission } from '@/context/DonationSubmissionContext';
import { useCountdownRedirect } from '@/hooks/navigation/useCountdownRedirect';
import { AppRoute } from '@/routes/routes';

const REDIRECT_SECONDS = 7;

export const ThankYouView = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { hasSubmitted, clearSubmitted } = useDonationSubmission();
  const [isOpenedAfterSubmit] = useState(hasSubmitted);
  const secondsLeft = useCountdownRedirect(REDIRECT_SECONDS, AppRoute.DONATION);

  useEffect(() => {
    if (!isOpenedAfterSubmit) {
      router.replace(AppRoute.DONATION);
      return;
    }

    clearSubmitted();
  }, [isOpenedAfterSubmit, clearSubmitted, router]);

  if (!isOpenedAfterSubmit) return null;

  return (
    <SplitLayout footer={<SiteFooter />}>
      <MessagePanel
        icon={<FavoriteIcon fontSize="inherit" />}
        title={t('success.title')}
        description={t('success.description')}
      >
        <Typography variant="body2">
          {t('success.redirect', { seconds: secondsLeft })}
        </Typography>
      </MessagePanel>
    </SplitLayout>
  );
};
