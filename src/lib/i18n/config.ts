import i18next, { type i18n as I18nInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en } from './locales/en';
import { sk } from './locales/sk';

export enum Language {
  SK = 'sk',
  EN = 'en',
}

export const DEFAULT_LANGUAGE = Language.SK;

export const LANGUAGE_STORAGE_KEY = 'goodboy.language';

export const SUPPORTED_LANGUAGES = [Language.SK, Language.EN] as const;

export const isSupportedLanguage = (value: string): value is Language =>
  SUPPORTED_LANGUAGES.some((language) => language === value);

export const initI18n = (): I18nInstance => {
  if (!i18next.isInitialized) {
    i18next.use(initReactI18next).init({
      resources: {
        [Language.SK]: { translation: sk },
        [Language.EN]: { translation: en },
      },
      lng: DEFAULT_LANGUAGE,
      fallbackLng: DEFAULT_LANGUAGE,
      supportedLngs: SUPPORTED_LANGUAGES,
      interpolation: { escapeValue: false },
    });
  }

  return i18next;
};
