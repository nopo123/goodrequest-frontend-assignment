export enum ApiEndpoint {
  SHELTERS = '/api/v1/shelters/',
  SHELTERS_RESULTS = '/api/v1/shelters/results',
  SHELTERS_CONTRIBUTE = '/api/v1/shelters/contribute',
}

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
}

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  'https://frontend-assignment-api.goodrequest.dev';
