'use client';

import { useQuery } from '@tanstack/react-query';

import { sheltersApi } from '@/api/shelters';
import { queryKeys } from '@/lib/query/query-keys';

export const useContributionResults = () =>
  useQuery({
    queryKey: queryKeys.sheltersResults,
    queryFn: ({ signal }) => sheltersApi.getResults(signal),
    refetchOnWindowFocus: true,
  });
