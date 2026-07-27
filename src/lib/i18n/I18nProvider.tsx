'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';

import { initI18n, resolveBrowserLanguage } from './config';

type I18nProviderProps = {
  readonly children: ReactNode;
};

export const I18nProvider = ({ children }: I18nProviderProps) => {
  const [instance] = useState(initI18n);

  useEffect(() => {
    const browserLanguage = resolveBrowserLanguage();

    if (browserLanguage !== instance.language) {
      void instance.changeLanguage(browserLanguage);
    }
  }, [instance]);

  useEffect(() => {
    const syncDocumentLanguage = (language: string) => {
      document.documentElement.lang = language;
    };

    syncDocumentLanguage(instance.language);
    instance.on('languageChanged', syncDocumentLanguage);

    return () => {
      instance.off('languageChanged', syncDocumentLanguage);
    };
  }, [instance]);

  return <I18nextProvider i18n={instance}>{children}</I18nextProvider>;
};
