'use client';

import Badge from '@mui/material/Badge';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';

import type { StepperItem } from '@/types/ui';

import { StyledStepper, VisuallyHidden } from './FormStepper.styled';

type FormStepperProps = {
  readonly items: readonly StepperItem[];
  readonly activeIndex: number;
  readonly maxReachableIndex?: number;
  readonly ariaLabel: string;
  readonly errorLabel?: string;
  readonly onStepSelect?: (index: number) => void;
};

export const FormStepper = ({
  items,
  activeIndex,
  maxReachableIndex,
  ariaLabel,
  errorLabel,
  onStepSelect,
}: FormStepperProps) => {
  const reachableIndex = maxReachableIndex ?? activeIndex;

  return (
    <StyledStepper nonLinear activeStep={activeIndex} aria-label={ariaLabel}>
      {items.map((item, index) => (
        <Step key={item.id} completed={index < activeIndex && item.hasError !== true}>
          <StepButton
            disabled={onStepSelect === undefined || index > reachableIndex}
            onClick={() => onStepSelect?.(index)}
          >
            <Badge
              variant="dot"
              color="error"
              invisible={item.hasError !== true}
              slotProps={{ badge: { 'aria-hidden': true } }}
            >
              {item.label}
            </Badge>
            {item.hasError === true && errorLabel !== undefined && (
              <VisuallyHidden> ({errorLabel})</VisuallyHidden>
            )}
          </StepButton>
        </Step>
      ))}
    </StyledStepper>
  );
};
