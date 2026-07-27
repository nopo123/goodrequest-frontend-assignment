import type { TranslateFn } from '@/types/i18n';

type TranslateParams = Readonly<Record<string, string | number>>;

export const translateFieldError = (
  t: TranslateFn,
  errorKey: string | undefined,
  params?: TranslateParams,
): string | undefined => {
  if (errorKey === undefined) return undefined;

  return t(errorKey, params ?? {});
};
