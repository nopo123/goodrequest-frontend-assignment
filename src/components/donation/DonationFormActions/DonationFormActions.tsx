'use client';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

import { ActionsRow, BackButton } from './DonationFormActions.styled';

type DonationFormActionsProps = {
  readonly isBackDisabled: boolean;
  readonly isSubmitStep: boolean;
  readonly isSubmitting: boolean;
  readonly onBack: () => void;
  readonly onNext: () => void;
};

export const DonationFormActions = ({
  isBackDisabled,
  isSubmitStep,
  isSubmitting,
  onBack,
  onNext,
}: DonationFormActionsProps) => {
  const { t } = useTranslation();

  return (
    <ActionsRow direction="row" spacing={2}>
      <BackButton
        type="button"
        variant="text"
        startIcon={<ArrowBackIcon />}
        disabled={isBackDisabled || isSubmitting}
        onClick={onBack}
      >
        {t('common.back')}
      </BackButton>

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
