'use client';

import { useEffect } from 'react';

import { ErrorView } from '@/views/error/ErrorView';

type ErrorRouteProps = {
  readonly error: Error & { readonly digest?: string };
  readonly reset: () => void;
};

const ErrorRoute = ({ error, reset }: ErrorRouteProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <ErrorView digest={error.digest} onRetry={reset} />;
};

export default ErrorRoute;
