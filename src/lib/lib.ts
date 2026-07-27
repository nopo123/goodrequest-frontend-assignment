import axios, { AxiosError } from 'axios';

import { ApiMessageType, type ApiMessagesResponse } from '@/types/api';

const REQUEST_TIMEOUT_MS = 20000;

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!BASE_URL) {
  throw new Error(
    'NEXT_PUBLIC_API_BASE_URL is not set. Copy .env.example to .env.local and fill it in.',
  );
}

export class ApiError extends Error {
  readonly status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: REQUEST_TIMEOUT_MS,
  headers: { 'Content-Type': 'application/json' },
});

const resolveErrorMessage = (
  error: AxiosError<Partial<ApiMessagesResponse>>,
): string => {
  const messages = error.response?.data?.messages ?? [];
  const errorMessage = messages.find(
    (message) => message.type === ApiMessageType.ERROR,
  );

  return errorMessage?.message ?? messages[0]?.message ?? error.message;
};

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error: AxiosError<Partial<ApiMessagesResponse>>) =>
    Promise.reject(
      new ApiError(resolveErrorMessage(error), error.response?.status),
    ),
);

export default axiosInstance;
