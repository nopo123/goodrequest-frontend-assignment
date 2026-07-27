import { ApiEndpoint, HttpMethod } from '@/enums/api.enums';
import type {
  ContributePayload,
  ContributeResponse,
  ContributionResults,
  Shelter,
} from '@/types/api.types';

import { request } from './http';
import {
  contributeResponseSchema,
  contributionResultsSchema,
  sheltersResponseSchema,
} from './schemas';

export const fetchShelters = async (
  search?: string,
  signal?: AbortSignal,
): Promise<Shelter[]> => {
  const response = await request({
    path: ApiEndpoint.SHELTERS,
    schema: sheltersResponseSchema,
    query: { search },
    signal,
  });

  return response.shelters;
};

export const fetchContributionResults = (
  search?: string,
  signal?: AbortSignal,
): Promise<ContributionResults> =>
  request({
    path: ApiEndpoint.SHELTERS_RESULTS,
    schema: contributionResultsSchema,
    query: { search },
    signal,
  });

export const postContribution = (
  payload: ContributePayload,
): Promise<ContributeResponse> =>
  request({
    path: ApiEndpoint.SHELTERS_CONTRIBUTE,
    schema: contributeResponseSchema,
    method: HttpMethod.POST,
    body: payload,
  });
