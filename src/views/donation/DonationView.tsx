'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { DonationForm } from '@/components/donation/DonationForm/DonationForm';
import { SiteFooter } from '@/components/layout/SiteFooter/SiteFooter';
import { SplitLayout } from '@/components/layout/SplitLayout/SplitLayout';
import { ImageFrame } from '@/components/ui/layout/layout.styled';
import { DonationStepProvider } from '@/context/DonationStepContext';
import { useShelters } from '@/hooks/shelters/useShelters';
import type { SheltersState } from '@/types/shelters';

const FORM_IMAGE_SRC = '/form-dog-page.jpg';

export const DonationView = () => {
  const { t, i18n } = useTranslation();
  const { data, isPending, isError } = useShelters();

  const shelters: SheltersState = {
    items: data ?? [],
    isPending,
    isError,
  };

  return (
    <SplitLayout
      footer={<SiteFooter t={t} />}
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
        <DonationForm t={t} locale={i18n.language} shelters={shelters} />
      </DonationStepProvider>
    </SplitLayout>
  );
};
