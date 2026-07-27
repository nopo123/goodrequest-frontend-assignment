'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { sheltersApi } from '@/api/shelters';
import { queryKeys } from '@/lib/query/query-keys';

interface SubmitContributionResultProps {
  readonly markSubmitted: () => void;
}

type SubmitContributionPayload = Parameters<typeof sheltersApi.contribute>[0];

type SubmitContributionResponse = Awaited<ReturnType<typeof sheltersApi.contribute>>;

interface SubmitContributionResult {
  readonly mutateAsync: (
    payload: SubmitContributionPayload,
  ) => Promise<SubmitContributionResponse>;
}

export const useSubmitContribution = ({
  markSubmitted,
}: SubmitContributionResultProps): SubmitContributionResult => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation<
    SubmitContributionResponse,
    Error,
    SubmitContributionPayload
  >({
    mutationFn: sheltersApi.contribute,
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: queryKeys.sheltersResultsPrefix,
      });
      markSubmitted();
    },
  });

  return {
    mutateAsync,
  };
};
