import type { z } from 'zod';

import type {
  apiMessageSchema,
  contributePayloadSchema,
  contributeResponseSchema,
  contributionResultsSchema,
  contributorPayloadSchema,
  shelterSchema,
  sheltersResponseSchema,
} from '@/lib/api/schemas';

export type Shelter = z.infer<typeof shelterSchema>;

export type SheltersResponse = z.infer<typeof sheltersResponseSchema>;

export type ContributionResults = z.infer<typeof contributionResultsSchema>;

export type ApiMessage = z.infer<typeof apiMessageSchema>;

export type ContributeResponse = z.infer<typeof contributeResponseSchema>;

export type ContributorPayload = z.infer<typeof contributorPayloadSchema>;

export type ContributePayload = z.infer<typeof contributePayloadSchema>;
