import api from '@/lib/lib';
import type { ApiMessagesResponse } from '@/types/api';
import type {
  ContributeDto,
  ContributionResultsType,
  SheltersResponseType,
} from '@/types/shelters';

export const sheltersApi = {
  getShelters: async (signal?: AbortSignal): Promise<SheltersResponseType> => {
    return await api.get('/api/v1/shelters/', { signal });
  },

  getResults: async (signal?: AbortSignal): Promise<ContributionResultsType> => {
    return await api.get('/api/v1/shelters/results', { signal });
  },

  contribute: async (body: ContributeDto): Promise<ApiMessagesResponse> => {
    return await api.post('/api/v1/shelters/contribute', body);
  },
};
