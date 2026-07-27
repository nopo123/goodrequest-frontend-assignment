'use client';

import { useQuery } from '@tanstack/react-query';

import { fetchContributionResults } from '@/lib/api/shelters.api';
import { queryKeys } from '@/lib/query/query-keys';

export const useContributionResults = (search?: string) =>
  useQuery({
    queryKey: queryKeys.sheltersResults(search),
    queryFn: ({ signal }) => fetchContributionResults(search, signal),
  });
