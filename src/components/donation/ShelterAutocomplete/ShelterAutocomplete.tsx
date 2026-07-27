'use client';

import { useTranslation } from 'react-i18next';

import { AutocompleteField } from '@/components/ui/AutocompleteField/AutocompleteField';
import { useShelters } from '@/hooks/shelters/useShelters';
import type { ShelterType } from '@/types/shelters';

type ShelterAutocompleteProps = {
  readonly value: number | null;
  readonly error?: string;
  readonly isRequired: boolean;
  readonly onChange: (shelterId: number | null) => void;
  readonly onBlur: () => void;
};

export const ShelterAutocomplete = ({
  value,
  error,
  isRequired,
  onChange,
  onBlur,
}: ShelterAutocompleteProps) => {
  const { t } = useTranslation();
  const { data: shelters, isPending, isError } = useShelters();

  const options = shelters ?? [];
  const selectedShelter = options.find((shelter) => shelter.id === value) ?? null;

  return (
    <AutocompleteField<ShelterType>
      id="shelterId"
      name="shelterId"
      label={t('shelterStep.shelterLabel')}
      optionalHint={isRequired ? undefined : t('common.optional')}
      options={options}
      value={selectedShelter}
      placeholder={t('shelterStep.shelterPlaceholder')}
      error={error}
      helperText={isError ? t('shelterStep.shelterError') : undefined}
      isLoading={isPending}
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
