export type ShelterType = {
  readonly id: number;
  readonly name: string;
};

export type SheltersResponseType = {
  readonly shelters: readonly ShelterType[];
};

export type ContributionResultsType = {
  readonly contributors: number;
  readonly contribution: number | null;
};

export type ContributorType = {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phone?: string | null;
};

export type ContributeDto = {
  readonly contributors: readonly ContributorType[];
  readonly shelterID?: number | null;
  readonly value: number;
};
