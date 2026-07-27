'use client';

import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';

import { DonationFormActions } from '@/components/donation/DonationFormActions/DonationFormActions';
import { DonorStep } from '@/components/donation/steps/DonorStep/DonorStep';
import { ShelterStep } from '@/components/donation/steps/ShelterStep/ShelterStep';
import { SummaryStep } from '@/components/donation/steps/SummaryStep/SummaryStep';
import { FormStepper } from '@/components/ui/FormStepper/FormStepper';
import { useDonationStep } from '@/context/DonationStepContext';
import { DONATION_STEP_ORDER } from './constants';
import {
  buildContributePayload,
  createInitialDonationValues,
  createInitialDonorValues,
} from './payload';
import { donationSchema } from './schema';
import { buildStepTouched, hasStepErrors } from '../steps/steps';
import { useSubmitContribution } from '@/hooks/donation/useSubmitContribution';
import { ApiError } from '@/lib/lib';
import {
  DonationStep,
  type DonationFormValues,
  type DonorFormValues,
} from '@/types/donation';
import type { StepperItem } from '@/types/ui';
import { zodFormikValidate } from '@/utils/zodFormikValidate';

import { ActionsSlot, FormRoot } from './DonationForm.styled';

const STEP_LABEL_KEYS: Readonly<Record<DonationStep, string>> = {
  [DonationStep.SHELTER]: 'stepper.shelter',
  [DonationStep.DONOR]: 'stepper.donor',
  [DonationStep.SUMMARY]: 'stepper.confirmation',
};

const validateDonation = zodFormikValidate<DonationFormValues>(donationSchema);

export const DonationForm = () => {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const {
    currentStep,
    visitedStep,
    isFirstStep,
    isLastStep,
    goToNextStep,
    goToPreviousStep,
    goToStep,
    resetSteps,
  } = useDonationStep();
  const { mutateAsync } = useSubmitContribution();

  const formik = useFormik<DonationFormValues>({
    initialValues: createInitialDonationValues(),
    validate: validateDonation,
    onSubmit: async (values, helpers) => {
      try {
        await mutateAsync(buildContributePayload(values));
        enqueueSnackbar(t('success.title'), { variant: 'success' });
        helpers.resetForm();
        resetSteps();
      } catch (submitError) {
        const message =
          submitError instanceof ApiError
            ? submitError.message
            : t('errors.submitGeneric');
        enqueueSnackbar(message, { variant: 'error' });
      }
    },
  });

  const stepperItems: readonly StepperItem[] = DONATION_STEP_ORDER.map((step) => ({
    id: step,
    label: t(STEP_LABEL_KEYS[step]),
  }));

  const handleNext = async () => {
    const validationErrors = await formik.validateForm();

    if (hasStepErrors(currentStep, validationErrors)) {
      await formik.setTouched(buildStepTouched(currentStep, formik.values));
      return;
    }

    goToNextStep();
  };

  const handleDonorFieldChange = <TField extends keyof DonorFormValues>(
    index: number,
    field: TField,
    value: DonorFormValues[TField],
  ) => {
    const nextDonors = formik.values.donors.map((donor, donorIndex) =>
      donorIndex === index ? { ...donor, [field]: value } : donor,
    );
    void formik.setFieldValue('donors', nextDonors);
  };

  return (
    <FormRoot onSubmit={formik.handleSubmit} noValidate>
      <FormStepper
        items={stepperItems}
        activeIndex={currentStep}
        maxReachableIndex={visitedStep}
        ariaLabel={t('stepper.label')}
        onStepSelect={(index) => goToStep(index as DonationStep)}
      />

      {currentStep === DonationStep.SHELTER && (
        <ShelterStep
            values={formik.values}
            errors={formik.errors}
            touched={formik.touched}
            onDonationTypeChange={(donationType) =>
              void formik.setFieldValue('donationType', donationType)
            }
            onShelterChange={(shelterId) =>
              void formik.setFieldValue('shelterId', shelterId)
            }
          onAmountChange={(amount) => void formik.setFieldValue('amount', amount)}
          onFieldBlur={(field) => void formik.setFieldTouched(field, true)}
        />
      )}

      {currentStep === DonationStep.DONOR && (
        <DonorStep
          values={formik.values}
          errors={formik.errors}
          touched={formik.touched}
          onDonorFieldChange={handleDonorFieldChange}
          onDonorFieldBlur={(index, field) =>
            void formik.setFieldTouched(`donors.${index}.${field}`, true)
          }
          onAddDonor={() =>
            void formik.setFieldValue('donors', [
              ...formik.values.donors,
              createInitialDonorValues(),
            ])
          }
          onRemoveDonor={(index) =>
            void formik.setFieldValue(
              'donors',
              formik.values.donors.filter((_donor, donorIndex) => donorIndex !== index),
            )
          }
        />
      )}

      {currentStep === DonationStep.SUMMARY && (
        <SummaryStep
          values={formik.values}
          errors={formik.errors}
          touched={formik.touched}
          onConsentChange={(consent) => void formik.setFieldValue('consent', consent)}
          onConsentBlur={() => void formik.setFieldTouched('consent', true)}
        />
      )}

      <ActionsSlot>
        <DonationFormActions
          isBackDisabled={isFirstStep}
          isSubmitStep={isLastStep}
          isSubmitting={formik.isSubmitting}
          onBack={goToPreviousStep}
          onNext={handleNext}
        />
      </ActionsSlot>
    </FormRoot>
  );
};
