import type { sk } from "../lib/i18n/locales/sk";

export type LocaleShape<TSource> = {
  readonly [TKey in keyof TSource]: TSource[TKey] extends string
    ? string
    : LocaleShape<TSource[TKey]>;
};

export type TranslationResource = LocaleShape<typeof sk>;
