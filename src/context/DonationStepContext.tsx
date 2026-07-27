'use client';

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
  type ReactNode,
} from 'react';

import { DONATION_STEP_ORDER } from '@/components/donation/DonationForm/constants';
import {
  DonationStep,
  DonationStepActionType,
  type DonationStepAction,
  type DonationStepState,
} from '@/types/donation';

const FIRST_STEP = DONATION_STEP_ORDER[0];

const LAST_STEP = DONATION_STEP_ORDER[DONATION_STEP_ORDER.length - 1];

const INITIAL_STATE: DonationStepState = {
  currentStep: FIRST_STEP,
  visitedStep: FIRST_STEP,
};

type DonationStepContextValue = {
  readonly currentStep: DonationStep;
  readonly visitedStep: DonationStep;
  readonly isFirstStep: boolean;
  readonly isLastStep: boolean;
  readonly goToNextStep: () => void;
  readonly goToPreviousStep: () => void;
  readonly goToStep: (step: DonationStep) => void;
};

const DonationStepContext = createContext<DonationStepContextValue | null>(null);

const clampStep = (step: number): DonationStep => {
  if (step < FIRST_STEP) return FIRST_STEP;
  if (step > LAST_STEP) return LAST_STEP;
  return step as DonationStep;
};

const donationStepReducer = (
  state: DonationStepState,
  action: DonationStepAction,
): DonationStepState => {
  switch (action.type) {
    case DonationStepActionType.NEXT: {
      const nextStep = clampStep(state.currentStep + 1);
      return {
        currentStep: nextStep,
        visitedStep: Math.max(state.visitedStep, nextStep) as DonationStep,
      };
    }
    case DonationStepActionType.PREVIOUS:
      return { ...state, currentStep: clampStep(state.currentStep - 1) };
    case DonationStepActionType.GO_TO: {
      const requestedStep = clampStep(action.step);
      if (requestedStep > state.visitedStep) return state;
      return { ...state, currentStep: requestedStep };
    }
    default:
      return state;
  }
};

type DonationStepProviderProps = {
  readonly children: ReactNode;
};

export const DonationStepProvider = ({ children }: DonationStepProviderProps) => {
  const [state, dispatch] = useReducer(donationStepReducer, INITIAL_STATE);

  const goToNextStep = useCallback(
    () => dispatch({ type: DonationStepActionType.NEXT }),
    [],
  );

  const goToPreviousStep = useCallback(
    () => dispatch({ type: DonationStepActionType.PREVIOUS }),
    [],
  );

  const goToStep = useCallback(
    (step: DonationStep) => dispatch({ type: DonationStepActionType.GO_TO, step }),
    [],
  );

  const value = useMemo<DonationStepContextValue>(
    () => ({
      currentStep: state.currentStep,
      visitedStep: state.visitedStep,
      isFirstStep: state.currentStep === FIRST_STEP,
      isLastStep: state.currentStep === LAST_STEP,
      goToNextStep,
      goToPreviousStep,
      goToStep,
    }),
    [state, goToNextStep, goToPreviousStep, goToStep],
  );

  return (
    <DonationStepContext.Provider value={value}>{children}</DonationStepContext.Provider>
  );
};

export const useDonationStep = (): DonationStepContextValue => {
  const context = useContext(DonationStepContext);

  if (context === null) {
    throw new Error('useDonationStep must be used inside DonationStepProvider');
  }

  return context;
};
