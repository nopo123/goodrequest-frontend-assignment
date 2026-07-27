'use client';

import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

type TranslateParams = Readonly<Record<string, string | number>>;

export const useTranslateFieldError = () => {
  const { t } = useTranslation();

  return useCallback(
    (errorKey: string | undefined, params?: TranslateParams): string | undefined => {
      if (errorKey === undefined) return undefined;
      return t(errorKey, params ?? {});
    },
    [t],
  );
};
