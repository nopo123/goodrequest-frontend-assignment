'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { DonationForm } from '@/components/donation/DonationForm/DonationForm';
import { SiteFooter } from '@/components/layout/SiteFooter/SiteFooter';
import { SplitLayout } from '@/components/layout/SplitLayout/SplitLayout';
import { ImageFrame } from '@/components/ui/layout/layout.styled';
import { DonationStepProvider } from '@/context/DonationStepContext';

const FORM_IMAGE_SRC = '/form-dog-page.jpg';

export const DonationView = () => {
  const { t } = useTranslation();

  return (
    <SplitLayout
      footer={<SiteFooter />}
      aside={
        <ImageFrame>
          <Image
            src={FORM_IMAGE_SRC}
            alt={t('imageAlt.dogOnBeach')}
            fill
            sizes="602px"
            style={{ objectFit: 'cover' }}
            priority
          />
        </ImageFrame>
      }
    >
      <DonationStepProvider>
        <DonationForm />
      </DonationStepProvider>
    </SplitLayout>
  );
};
