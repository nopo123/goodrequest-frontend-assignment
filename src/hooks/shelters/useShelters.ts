'use client';

import { useQuery } from '@tanstack/react-query';

import { fetchShelters } from '@/lib/api/shelters.api';
import { queryKeys } from '@/lib/query/query-keys';

export const useShelters = (search?: string) =>
  useQuery({
    queryKey: queryKeys.shelters(search),
    queryFn: ({ signal }) => fetchShelters(search, signal),
  });
