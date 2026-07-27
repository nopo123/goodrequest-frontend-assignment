'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState, type ReactNode } from 'react';

import { ApiError } from '../lib';

const STALE_TIME_MS = 60_000;

const RETRYABLE_ATTEMPTS = 2;

type QueryProviderProps = {
  readonly children: ReactNode;
};

const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: STALE_TIME_MS,
        refetchOnWindowFocus: false,
        retry: (failureCount, error) => {
          const isClientError =
            error instanceof ApiError && error.status !== undefined && error.status < 500;
          if (isClientError) return false;
          return failureCount < RETRYABLE_ATTEMPTS;
        },
      },
      mutations: {
        retry: false,
      },
    },
  });

export const QueryProvider = ({ children }: QueryProviderProps) => {
  const [queryClient] = useState(createQueryClient);

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
