import { z } from 'zod';

export enum ApiMessageType {
  ERROR = 'ERROR',
  WARNING = 'WARNING',
  INFO = 'INFO',
  SUCCESS = 'SUCCESS',
}

export const shelterSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const sheltersResponseSchema = z.object({
  shelters: z.array(shelterSchema).default([]),
});

export const contributionResultsSchema = z.object({
  contributors: z.number(),
  contribution: z.number().nullable(),
});

export const apiMessageSchema = z.object({
  message: z.string(),
  type: z.enum(ApiMessageType),
});

export const contributeResponseSchema = z.object({
  messages: z.array(apiMessageSchema).default([]),
});

export const contributorPayloadSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phone: z.string().nullable().optional(),
});

export const contributePayloadSchema = z.object({
  contributors: z.array(contributorPayloadSchema).min(1),
  shelterID: z.number().nullable().optional(),
  value: z.number().min(0),
});

export type Shelter = z.infer<typeof shelterSchema>;
export type SheltersResponse = z.infer<typeof sheltersResponseSchema>;
export type ContributionResults = z.infer<typeof contributionResultsSchema>;
export type ApiMessage = z.infer<typeof apiMessageSchema>;
export type ContributeResponse = z.infer<typeof contributeResponseSchema>;
export type ContributorPayload = z.infer<typeof contributorPayloadSchema>;
export type ContributePayload = z.infer<typeof contributePayloadSchema>;
