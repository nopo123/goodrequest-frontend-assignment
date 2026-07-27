'use client';

import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { LANGUAGE_STORAGE_KEY, type Language } from './config';

type UseLanguageResult = {
  readonly language: string;
  readonly changeLanguage: (next: Language) => void;
};

export const useLanguage = (): UseLanguageResult => {
  const { i18n } = useTranslation();

  const changeLanguage = useCallback(
    (next: Language) => {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, next);
      void i18n.changeLanguage(next);
    },
    [i18n],
  );

  return { language: i18n.language, changeLanguage };
};
