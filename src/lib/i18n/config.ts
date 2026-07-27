import { createInstance, type i18n as I18nInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';

import { Language } from '@/types/i18n';

import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from './languages';
import { en } from './locales/en';
import { sk } from './locales/sk';

const DEFAULT_NAMESPACE = 'translation';

const RESOURCES = {
  [Language.SK]: { [DEFAULT_NAMESPACE]: sk },
  [Language.EN]: { [DEFAULT_NAMESPACE]: en },
} as const;

export const createI18nInstance = (language: Language): I18nInstance => {
  const instance = createInstance();

  instance.use(initReactI18next).init({
    resources: RESOURCES,
    lng: language,
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: SUPPORTED_LANGUAGES,
    interpolation: { escapeValue: false },
  });

  return instance;
};
