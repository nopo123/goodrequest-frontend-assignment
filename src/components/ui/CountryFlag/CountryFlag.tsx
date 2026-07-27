'use client';

import { FlagImage } from './CountryFlag.styled';

const SUPPORTED_COUNTRY_CODES = ['sk', 'cz'] as const;

const DEFAULT_FLAG_SIZE = 20;

type CountryFlagProps = {
  readonly countryCode: string;
  readonly size?: number;
};

export const CountryFlag = ({
  countryCode,
  size = DEFAULT_FLAG_SIZE,
}: CountryFlagProps) => {
  const normalizedCode = countryCode.toLowerCase();
  const isSupported = SUPPORTED_COUNTRY_CODES.some((code) => code === normalizedCode);

  if (!isSupported) return null;

  return (
    <FlagImage
      src={`/flags/${normalizedCode}.svg`}
      alt=""
      aria-hidden="true"
      size={size}
    />
  );
};
