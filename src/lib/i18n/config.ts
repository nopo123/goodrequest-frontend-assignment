import i18next, { type i18n as I18nInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en } from './locales/en';
import { sk } from './locales/sk';

export enum Language {
  SK = 'sk',
  EN = 'en',
}

const DEFAULT_LANGUAGE = Language.SK;

const SUPPORTED_LANGUAGES = [Language.SK, Language.EN] as const;

const DEFAULT_NAMESPACE = 'translation';

const RESOURCES = {
  [Language.SK]: { [DEFAULT_NAMESPACE]: sk },
  [Language.EN]: { [DEFAULT_NAMESPACE]: en },
} as const;

const isSupportedLanguage = (value: string): value is Language =>
  SUPPORTED_LANGUAGES.some((language) => language === value);

export const resolveBrowserLanguage = (): Language => {
  const preferred =
    navigator.languages !== undefined && navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language];

  for (const candidate of preferred) {
    const baseTag = candidate.split('-')[0]?.toLowerCase();
    if (baseTag !== undefined && isSupportedLanguage(baseTag)) return baseTag;
  }

  return DEFAULT_LANGUAGE;
};

export const initI18n = (): I18nInstance => {
  if (!i18next.isInitialized) {
    i18next.use(initReactI18next).init({
      resources: RESOURCES,
      lng: DEFAULT_LANGUAGE,
      fallbackLng: DEFAULT_LANGUAGE,
      supportedLngs: SUPPORTED_LANGUAGES,
      interpolation: { escapeValue: false },
    });

    return i18next;
  }

  for (const language of SUPPORTED_LANGUAGES) {
    i18next.addResourceBundle(
      language,
      DEFAULT_NAMESPACE,
      RESOURCES[language][DEFAULT_NAMESPACE],
      true,
      true,
    );
  }

  return i18next;
};
