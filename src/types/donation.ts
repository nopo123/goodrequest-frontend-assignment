export enum DonationType {
  SPECIFIC_SHELTER = 'SPECIFIC_SHELTER',
  WHOLE_FOUNDATION = 'WHOLE_FOUNDATION',
}

export enum DonationStep {
  SHELTER = 0,
  DONOR = 1,
  SUMMARY = 2,
}

export enum DonationStepSlug {
  SHELTER = 'shelter',
  DONOR = 'donor',
  SUMMARY = 'summary',
}

export enum PhoneCountry {
  SK = 'SK',
  CZ = 'CZ',
}

export enum DonationStepActionType {
  NEXT = 'NEXT',
  PREVIOUS = 'PREVIOUS',
  GO_TO = 'GO_TO',
}

export type DonorFormValues = {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phoneCountry: PhoneCountry;
  readonly phone: string;
};

export type DonationFormValues = {
  readonly donationType: DonationType;
  readonly shelterId: number | null;
  readonly amount: string;
  readonly donors: readonly DonorFormValues[];
  readonly consent: boolean;
};

export type DonationStepState = {
  readonly currentStep: DonationStep;
  readonly visitedStep: DonationStep;
};

export type DonationStepAction =
  | { readonly type: DonationStepActionType.NEXT }
  | { readonly type: DonationStepActionType.PREVIOUS }
  | { readonly type: DonationStepActionType.GO_TO; readonly step: DonationStep };
