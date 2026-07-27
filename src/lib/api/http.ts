import type { ZodType } from 'zod';

import { API_BASE_URL, HttpMethod } from './config';
import { ApiMessageType, contributeResponseSchema } from './schemas';

type QueryParams = Readonly<Record<string, string | number | undefined | null>>;

type RequestConfig<TResponse> = {
  readonly path: string;
  readonly schema: ZodType<TResponse>;
  readonly method?: HttpMethod;
  readonly query?: QueryParams;
  readonly body?: unknown;
  readonly signal?: AbortSignal;
};

export class ApiError extends Error {
  readonly status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

export class ApiResponseShapeError extends Error {
  constructor(path: string) {
    super(`Unexpected response shape from ${path}`);
    this.name = 'ApiResponseShapeError';
  }
}

const buildUrl = (path: string, query?: QueryParams): string => {
  const url = new URL(path, API_BASE_URL);

  if (query) {
    for (const [key, value] of Object.entries(query)) {
      if (value === undefined || value === null || value === '') continue;
      url.searchParams.set(key, String(value));
    }
  }

  return url.toString();
};

const extractErrorMessage = async (
  response: Response,
  fallback: string,
): Promise<string> => {
  const payload = await response.json().catch(() => null);
  if (payload === null) return fallback;

  const parsed = contributeResponseSchema.safeParse(payload);
  if (!parsed.success) return fallback;

  const errorMessage = parsed.data.messages.find(
    (message) => message.type === ApiMessageType.ERROR,
  );

  return errorMessage?.message ?? parsed.data.messages[0]?.message ?? fallback;
};

export const request = async <TResponse>({
  path,
  schema,
  method = HttpMethod.GET,
  query,
  body,
  signal,
}: RequestConfig<TResponse>): Promise<TResponse> => {
  const response = await fetch(buildUrl(path, query), {
    method,
    signal,
    headers: body === undefined ? undefined : { 'Content-Type': 'application/json' },
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  if (!response.ok) {
    const message = await extractErrorMessage(
      response,
      `Request failed with status ${response.status}`,
    );
    throw new ApiError(message, response.status);
  }

  const payload = await response.json();
  const parsed = schema.safeParse(payload);

  if (!parsed.success) {
    throw new ApiResponseShapeError(path);
  }

  return parsed.data;
};
