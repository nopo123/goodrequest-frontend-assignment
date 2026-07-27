export const queryKeys = {
  shelters: (search?: string) => ['shelters', search ?? ''] as const,
  sheltersResults: (search?: string) => ['shelters', 'results', search ?? ''] as const,
  sheltersResultsPrefix: ['shelters', 'results'] as const,
} as const;
