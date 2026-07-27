import api from '@/lib/lib';
import type { ApiMessagesResponse } from '@/types/api';
import type {
  ContributeDto,
  ContributionResultsType,
  SheltersResponseType,
} from '@/types/shelters';

export const sheltersApi = {
  getShelters: async (
    search?: string,
    signal?: AbortSignal,
  ): Promise<SheltersResponseType> => {
    return await api.get('/api/v1/shelters/', { params: { search }, signal });
  },

  getResults: async (
    search?: string,
    signal?: AbortSignal,
  ): Promise<ContributionResultsType> => {
    return await api.get('/api/v1/shelters/results', {
      params: { search },
      signal,
    });
  },

  contribute: async (body: ContributeDto): Promise<ApiMessagesResponse> => {
    return await api.post('/api/v1/shelters/contribute', body);
  },
};
