import { Language } from '@/types/i18n';

export const DEFAULT_LANGUAGE = Language.SK;

export const SUPPORTED_LANGUAGES = [Language.SK, Language.EN] as const;

export const isSupportedLanguage = (value: string): value is Language =>
  SUPPORTED_LANGUAGES.some((language) => language === value);
