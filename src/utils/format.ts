const CURRENCY = 'EUR';

export const formatCurrency = (value: number, locale: string): string =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: CURRENCY,
    maximumFractionDigits: value % 1 === 0 ? 0 : 2,
  }).format(value);

export const formatCount = (value: number, locale: string): string =>
  new Intl.NumberFormat(locale).format(value);
