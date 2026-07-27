'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postContribution } from '@/lib/api/shelters.api';
import { queryKeys } from '@/lib/query/query-keys';

export const useSubmitContribution = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postContribution,
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: queryKeys.sheltersResultsPrefix,
      });
    },
  });
};
