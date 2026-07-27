'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';

import type { Language } from '@/types/i18n';

import { createI18nInstance } from './config';

type I18nProviderProps = {
  readonly language: Language;
  readonly children: ReactNode;
};

export const I18nProvider = ({ language, children }: I18nProviderProps) => {
  const [instance] = useState(() => createI18nInstance(language));

  useEffect(() => {
    if (instance.language === language) return;

    void instance.changeLanguage(language);
  }, [instance, language]);

  return <I18nextProvider i18n={instance}>{children}</I18nextProvider>;
};
