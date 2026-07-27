'use client';

import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useState, type FormEvent } from 'react';

import { DonationFormActions } from '@/components/donation/DonationFormActions/DonationFormActions';
import { DonorStep } from '@/components/donation/steps/DonorStep/DonorStep';
import { ShelterStep } from '@/components/donation/steps/ShelterStep/ShelterStep';
import { SummaryStep } from '@/components/donation/steps/SummaryStep/SummaryStep';
import { FormStepper } from '@/components/ui/FormStepper/FormStepper';
import { useDonationStep } from '@/context/DonationStepContext';
import { useDonationSubmission } from '@/context/DonationSubmissionContext';
import { AppRoute } from '@/routes/routes';
import { DONATION_STEP_ORDER } from './constants';
import {
  buildContributePayload,
  createInitialDonationValues,
  createInitialDonorValues,
} from './payload';
import { donationSchema } from './schema';
import { buildStepTouched, hasStepErrors } from '../steps/steps';
import { useDonationStepUrl } from '@/hooks/donation/useDonationStepUrl';
import { useSubmitContribution } from '@/hooks/donation/useSubmitContribution';
import { ApiError } from '@/lib/lib';
import {
  DonationStep,
  type DonationFormValues,
  type DonorFormValues,
} from '@/types/donation';
import type { TranslateFn } from '@/types/i18n';
import type { SheltersState } from '@/types/shelters';
import type { StepperItem } from '@/types/ui';
import { zodFormikValidate } from '@/utils/zodFormikValidate';

import { ActionsSlot, FormRoot } from './DonationForm.styled';

const STEP_LABEL_KEYS: Readonly<Record<DonationStep, string>> = {
  [DonationStep.SHELTER]: 'stepper.shelter',
  [DonationStep.DONOR]: 'stepper.donor',
  [DonationStep.SUMMARY]: 'stepper.confirmation',
};

const validateDonation = zodFormikValidate<DonationFormValues>(donationSchema);

type DonationFormProps = {
  readonly t: TranslateFn;
  readonly locale: string;
  readonly shelters: SheltersState;
};

export const DonationForm = ({ t, locale, shelters }: DonationFormProps) => {
  const router = useRouter();
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
  const {
    currentStep,
    visitedStep,
    isFirstStep,
    isLastStep,
    goToNextStep,
    goToPreviousStep,
    goToStep,
  } = useDonationStep();
  const { hasSubmitted, markSubmitted } = useDonationSubmission();
  const { mutateAsync } = useSubmitContribution({ markSubmitted });

  useDonationStepUrl(currentStep);

  const formik = useFormik<DonationFormValues>({
    initialValues: createInitialDonationValues(),
    validate: validateDonation,
    onSubmit: async (values, { setStatus }) => {
      try {
        await mutateAsync(buildContributePayload(values));
        router.push(AppRoute.THANK_YOU);
      } catch (submitFailure) {
        setStatus(
          submitFailure instanceof ApiError
            ? submitFailure.message
            : t('errors.submitGeneric'),
        );
        goToStep(DonationStep.SUMMARY);
      }
    },
  });

  const { isSubmitting, status } = formik;
  const submitError = typeof status === 'string' ? status : undefined;
  const isSubmitLocked = isSubmitting || hasSubmitted;

  const resetSubmitAttempt = () => {
    setHasAttemptedSubmit(false);
    formik.setStatus(undefined);
    void formik.setFieldTouched('consent', false);
  };

  const isStepRevealed = (step: DonationStep): boolean =>
    step < visitedStep || hasAttemptedSubmit;

  const stepperItems: readonly StepperItem[] = DONATION_STEP_ORDER.map((step) => ({
    id: step,
    label: t(STEP_LABEL_KEYS[step]),
    hasError: isStepRevealed(step) && hasStepErrors(step, formik.errors),
  }));

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitLocked) return;

    setHasAttemptedSubmit(true);
    formik.setStatus(undefined);

    const validationErrors = await formik.validateForm();
    const firstInvalidStep = DONATION_STEP_ORDER.find((step) =>
      hasStepErrors(step, validationErrors),
    );

    if (firstInvalidStep !== undefined) {
      await formik.setTouched(buildStepTouched(firstInvalidStep, formik.values));
      goToStep(firstInvalidStep);
      return;
    }

    await formik.submitForm();
  };

  const handleNext = async () => {
    const validationErrors = await formik.validateForm();

    if (hasStepErrors(currentStep, validationErrors)) {
      await formik.setTouched(buildStepTouched(currentStep, formik.values));
      return;
    }

    resetSubmitAttempt();
    goToNextStep();
  };

  const handleBack = () => {
    resetSubmitAttempt();
    goToPreviousStep();
  };

  const handleStepSelect = (index: number) => {
    resetSubmitAttempt();
    goToStep(index as DonationStep);
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
    <FormRoot onSubmit={handleFormSubmit} noValidate>
      <FormStepper
        items={stepperItems}
        activeIndex={currentStep}
        maxReachableIndex={visitedStep}
        ariaLabel={t('stepper.label')}
        errorLabel={t('stepper.hasError')}
        onStepSelect={isSubmitLocked ? undefined : handleStepSelect}
      />

      {currentStep === DonationStep.SHELTER && (
        <ShelterStep
          t={t}
          shelters={shelters}
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
          t={t}
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
          t={t}
          locale={locale}
          shelters={shelters}
          values={formik.values}
          errors={formik.errors}
          touched={formik.touched}
          submitError={submitError}
          onConsentChange={(consent) => void formik.setFieldValue('consent', consent)}
          onConsentBlur={() => void formik.setFieldTouched('consent', true)}
        />
      )}

      <ActionsSlot>
        <DonationFormActions
          t={t}
          isBackDisabled={isFirstStep}
          isSubmitStep={isLastStep}
          isSubmitting={isSubmitLocked}
          onBack={handleBack}
          onNext={handleNext}
          step={currentStep}
        />
      </ActionsSlot>
    </FormRoot>
  );
};
