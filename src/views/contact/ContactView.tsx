'use client';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { SiteFooter } from '@/components/layout/SiteFooter/SiteFooter';
import { SplitLayout } from '@/components/layout/SplitLayout/SplitLayout';
import { BackLink } from '@/components/ui/BackLink/BackLink';
import { IconCard } from '@/components/ui/IconCard/IconCard';
import { LinkOrText } from '@/components/ui/LinkOrText/LinkOrText';
import { HOME_ROUTE } from '@/config/navigation';

import { ContactGrid, ContactImageFrame, ContactStack } from './ContactView.styled';

const CONTACT_IMAGE_SRC = '/contribution-dog-page.jpg';

type ContactChannel = {
  readonly id: string;
  readonly icon: ReactNode;
  readonly titleKey: string;
  readonly subtitleKey: string;
  readonly valueKey: string;
  readonly buildHref?: (value: string) => string;
};

const CONTACT_CHANNELS: readonly ContactChannel[] = [
  {
    id: 'email',
    icon: <EmailOutlinedIcon />,
    titleKey: 'contact.emailTitle',
    subtitleKey: 'contact.emailSubtitle',
    valueKey: 'contact.emailValue',
    buildHref: (value) => `mailto:${value}`,
  },
  {
    id: 'office',
    icon: <LocationOnOutlinedIcon />,
    titleKey: 'contact.officeTitle',
    subtitleKey: 'contact.officeSubtitle',
    valueKey: 'contact.officeValue',
  },
  {
    id: 'phone',
    icon: <PhoneOutlinedIcon />,
    titleKey: 'contact.phoneTitle',
    subtitleKey: 'contact.phoneSubtitle',
    valueKey: 'contact.phoneValue',
    buildHref: (value) => `tel:${value.replace(/\s/g, '')}`,
  },
];

export const ContactView = () => {
  const { t } = useTranslation();

  return (
    <SplitLayout footer={<SiteFooter />}>
      <ContactStack spacing={5}>
        <BackLink href={HOME_ROUTE} label={t('common.back')} />

        <Typography variant="h1">{t('contact.title')}</Typography>

        <ContactGrid>
          {CONTACT_CHANNELS.map((channel) => {
            const value = t(channel.valueKey);

            return (
              <IconCard
                key={channel.id}
                icon={channel.icon}
                title={t(channel.titleKey)}
                description={t(channel.subtitleKey)}
              >
                <LinkOrText value={value} href={channel.buildHref?.(value)} />
              </IconCard>
            );
          })}
        </ContactGrid>

        <ContactImageFrame>
          <Image
            src={CONTACT_IMAGE_SRC}
            alt={t('contact.imageAlt')}
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 32%' }}
          />
        </ContactImageFrame>
      </ContactStack>
    </SplitLayout>
  );
};
