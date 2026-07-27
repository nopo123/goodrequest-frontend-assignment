'use client';

import { useQuery } from '@tanstack/react-query';

import { sheltersApi } from '@/api/shelters';
import { queryKeys } from '@/lib/query/query-keys';

export const useShelters = (search?: string) =>
  useQuery({
    queryKey: queryKeys.shelters(search),
    queryFn: ({ signal }) => sheltersApi.getShelters(search, signal),
    select: (response) => response.shelters,
  });
