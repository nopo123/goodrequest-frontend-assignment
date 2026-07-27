'use client';

import { useQuery } from '@tanstack/react-query';

import { sheltersApi } from '@/api/shelters';
import { queryKeys } from '@/lib/query/query-keys';

export const useShelters = () =>
  useQuery({
    queryKey: queryKeys.sheltersList,
    queryFn: ({ signal }) => sheltersApi.getShelters(signal),
    select: (response) => response.shelters,
  });
