'use client';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';

import { DonationStep } from '@/types/donation';
import type { TranslateFn } from '@/types/i18n';

import { ActionsRow, BackButton } from './DonationFormActions.styled';

type DonationFormActionsProps = {
  readonly t: TranslateFn;
  readonly isBackDisabled: boolean;
  readonly isSubmitStep: boolean;
  readonly isSubmitting: boolean;
  readonly onBack: () => void;
  readonly onNext: () => void;
  readonly step: DonationStep;
};

export const DonationFormActions = ({
  t,
  isBackDisabled,
  isSubmitStep,
  isSubmitting,
  onBack,
  onNext,
  step,
}: DonationFormActionsProps) => {
  const hasBackButton = step !== DonationStep.SHELTER;

  return (
    <ActionsRow
      direction="row"
      spacing={2}
      sx={{ justifyContent: hasBackButton ? 'space-between' : 'flex-end' }}
    >
      {hasBackButton && (
        <BackButton
          type="button"
          variant="text"
          startIcon={<ArrowBackIcon />}
          disabled={isBackDisabled || isSubmitting}
          onClick={onBack}
        >
          {t('common.back')}
        </BackButton>
      )}

      {isSubmitStep ? (
        <Button type="submit" variant="contained" size="large" loading={isSubmitting}>
          {t('summaryStep.submit')}
        </Button>
      ) : (
        <Button
          type="button"
          variant="contained"
          size="large"
          endIcon={<ArrowForwardIcon />}
          onClick={onNext}
        >
          {t('common.continue')}
        </Button>
      )}
    </ActionsRow>
  );
};
