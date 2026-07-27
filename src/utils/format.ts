export const CURRENCY = 'EUR';

export const CURRENCY_SYMBOL = '€';

export const MAX_AMOUNT_DECIMALS = 2;

export const formatCurrency = (value: number, locale: string): string =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: CURRENCY,
    maximumFractionDigits: value % 1 === 0 ? 0 : MAX_AMOUNT_DECIMALS,
  }).format(value);

export const formatCount = (value: number, locale: string): string =>
  new Intl.NumberFormat(locale).format(value);
