const SHELTERS_ROOT = 'shelters';

export const queryKeys = {
  sheltersList: [SHELTERS_ROOT, 'list'] as const,
  sheltersResults: [SHELTERS_ROOT, 'results'] as const,
} as const;
