'use client';

import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';

import type { StepperItem } from '@/types/ui';

import { StyledStepper } from './FormStepper.styled';

type FormStepperProps = {
  readonly items: readonly StepperItem[];
  readonly activeIndex: number;
  readonly maxReachableIndex?: number;
  readonly ariaLabel: string;
  readonly onStepSelect?: (index: number) => void;
};

export const FormStepper = ({
  items,
  activeIndex,
  maxReachableIndex,
  ariaLabel,
  onStepSelect,
}: FormStepperProps) => {
  const reachableIndex = maxReachableIndex ?? activeIndex;

  return (
    <StyledStepper nonLinear activeStep={activeIndex} aria-label={ariaLabel}>
      {items.map((item, index) => (
        <Step key={item.id} completed={index < activeIndex}>
          <StepButton
            disabled={onStepSelect === undefined || index > reachableIndex}
            onClick={() => onStepSelect?.(index)}
          >
            {item.label}
          </StepButton>
        </Step>
      ))}
    </StyledStepper>
  );
};
