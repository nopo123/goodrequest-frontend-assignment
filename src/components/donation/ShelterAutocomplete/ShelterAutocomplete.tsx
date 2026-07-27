'use client';

import { AutocompleteField } from '@/components/ui/AutocompleteField/AutocompleteField';
import type { TranslateFn } from '@/types/i18n';
import type { SheltersState, ShelterType } from '@/types/shelters';

type ShelterAutocompleteProps = {
  readonly t: TranslateFn;
  readonly shelters: SheltersState;
  readonly value: number | null;
  readonly error?: string;
  readonly isRequired: boolean;
  readonly onChange: (shelterId: number | null) => void;
  readonly onBlur: () => void;
};

export const ShelterAutocomplete = ({
  t,
  shelters,
  value,
  error,
  isRequired,
  onChange,
  onBlur,
}: ShelterAutocompleteProps) => {
  const selectedShelter = shelters.items.find((shelter) => shelter.id === value) ?? null;

  return (
    <AutocompleteField<ShelterType>
      id="shelterId"
      name="shelterId"
      label={t('shelterStep.shelterLabel')}
      optionalHint={isRequired ? undefined : t('common.optional')}
      options={shelters.items}
      value={selectedShelter}
      placeholder={t('shelterStep.shelterPlaceholder')}
      error={error}
      helperText={shelters.isError ? t('shelterStep.shelterError') : undefined}
      isLoading={shelters.isPending}
      isRequired={isRequired}
      loadingText={t('shelterStep.shelterLoading')}
      noOptionsText={t('shelterStep.shelterEmpty')}
      getOptionLabel={(shelter) => shelter.name}
      isOptionEqualToValue={(option, selected) => option.id === selected.id}
      onChange={(shelter) => onChange(shelter?.id ?? null)}
      onBlur={onBlur}
    />
  );
};
