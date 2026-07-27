'use client';

import { useQuery } from '@tanstack/react-query';

import { sheltersApi } from '@/api/shelters';
import { queryKeys } from '@/lib/query/query-keys';

export const useContributionResults = (search?: string) =>
  useQuery({
    queryKey: queryKeys.sheltersResults(search),
    queryFn: ({ signal }) => sheltersApi.getResults(search, signal),
    refetchOnWindowFocus: true,
  });
