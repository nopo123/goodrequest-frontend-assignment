export type StepperItem = {
  readonly id: string | number;
  readonly label: string;
};

export type ToggleOption<TValue extends string | number> = {
  readonly value: TValue;
  readonly label: string;
  readonly ariaLabel?: string;
};

export type ToggleGroupColumns = {
  readonly xs?: number;
  readonly sm?: number;
};

export type PhoneCountryOption = {
  readonly value: string;
  readonly countryCode: string;
  readonly callingCode: string;
};

export type DefinitionRow = {
  readonly id: string;
  readonly label: string;
  readonly value: string;
};
