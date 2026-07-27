import { headers } from 'next/headers';

import { Language } from '@/types/i18n';

import { DEFAULT_LANGUAGE, isSupportedLanguage } from './languages';

const ACCEPT_LANGUAGE_HEADER = 'accept-language';

const DEFAULT_QUALITY = 1;

const QUALITY_PREFIX = 'q=';

type LanguageRange = {
  readonly tag: string;
  readonly quality: number;
};

const parseQuality = (parameters: readonly string[]): number => {
  const qualityParameter = parameters.find((parameter) =>
    parameter.startsWith(QUALITY_PREFIX),
  );

  if (qualityParameter === undefined) return DEFAULT_QUALITY;

  const quality = Number.parseFloat(qualityParameter.slice(QUALITY_PREFIX.length));

  return Number.isFinite(quality) ? quality : DEFAULT_QUALITY;
};

const parseLanguageRanges = (header: string): LanguageRange[] =>
  header
    .split(',')
    .map((part) => {
      const [tag = '', ...parameters] = part.split(';').map((value) => value.trim());

      return { tag: tag.toLowerCase(), quality: parseQuality(parameters) };
    })
    .filter((range) => range.tag.length > 0 && range.quality > 0)
    .sort((left, right) => right.quality - left.quality);

export const resolveAcceptLanguage = (header: string | null): Language => {
  if (header === null) return DEFAULT_LANGUAGE;

  for (const range of parseLanguageRanges(header)) {
    const baseTag = range.tag.split('-')[0];

    if (baseTag !== undefined && isSupportedLanguage(baseTag)) return baseTag;
  }

  return DEFAULT_LANGUAGE;
};

export const resolveRequestLanguage = async (): Promise<Language> => {
  const requestHeaders = await headers();

  return resolveAcceptLanguage(requestHeaders.get(ACCEPT_LANGUAGE_HEADER));
};
