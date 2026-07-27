'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { sheltersApi } from '@/api/shelters';
import { queryKeys } from '@/lib/query/query-keys';

export const useSubmitContribution = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: sheltersApi.contribute,
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: queryKeys.sheltersResultsPrefix,
      });
    },
  });
};
