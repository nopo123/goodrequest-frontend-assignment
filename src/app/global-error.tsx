'use client';

import type { CSSProperties } from 'react';

import { sk } from '@/lib/i18n/locales/sk';
import { COLORS, FONT_FAMILY, RADII } from '@/lib/theme/tokens';

const bodyStyle: CSSProperties = {
  margin: 0,
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 20,
  fontFamily: FONT_FAMILY,
  backgroundColor: COLORS.background,
  color: COLORS.textPrimary,
};

const panelStyle: CSSProperties = {
  maxWidth: 480,
  textAlign: 'center',
};

const titleStyle: CSSProperties = {
  margin: '0 0 12px',
  fontSize: 28,
  lineHeight: 1.2,
  fontWeight: 700,
};

const descriptionStyle: CSSProperties = {
  margin: '0 0 24px',
  fontSize: 16,
  lineHeight: 1.5,
  color: COLORS.textSecondary,
};

const buttonStyle: CSSProperties = {
  font: 'inherit',
  fontWeight: 500,
  padding: '12px 24px',
  border: 0,
  borderRadius: RADII.sm,
  cursor: 'pointer',
  backgroundColor: COLORS.primary,
  color: '#FFFFFF',
};

const linkStyle: CSSProperties = {
  color: COLORS.primary,
};

type GlobalErrorProps = {
  readonly error: Error & { readonly digest?: string };
  readonly reset: () => void;
};

const GlobalError = ({ reset }: GlobalErrorProps) => (
  <html lang="sk">
    <body style={bodyStyle}>
      <main style={panelStyle}>
        <h1 style={titleStyle}>{sk.errorPage.fatalTitle}</h1>

        <p style={descriptionStyle}>
          {sk.errorPage.fatalDescription}{' '}
          <a href={`mailto:${sk.contact.emailValue}`} style={linkStyle}>
            {sk.contact.emailValue}
          </a>
        </p>

        <button type="button" onClick={() => reset()} style={buttonStyle}>
          {sk.errorPage.retry}
        </button>
      </main>
    </body>
  </html>
);

export default GlobalError;
