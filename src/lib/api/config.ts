const rawApiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!rawApiBaseUrl) {
  throw new Error(
    'NEXT_PUBLIC_API_BASE_URL is not set. Copy .env.example to .env.local and fill it in.',
  );
}

export const API_BASE_URL = rawApiBaseUrl;
