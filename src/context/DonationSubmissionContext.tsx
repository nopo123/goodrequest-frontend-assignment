'use client';

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

type DonationSubmissionContextValue = {
  readonly hasSubmitted: boolean;
  readonly markSubmitted: () => void;
  readonly clearSubmitted: () => void;
};

const DonationSubmissionContext = createContext<DonationSubmissionContextValue | null>(
  null,
);

type DonationSubmissionProviderProps = {
  readonly children: ReactNode;
};

export const DonationSubmissionProvider = ({
  children,
}: DonationSubmissionProviderProps) => {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const markSubmitted = useCallback(() => setHasSubmitted(true), []);

  const clearSubmitted = useCallback(() => setHasSubmitted(false), []);

  const value = useMemo<DonationSubmissionContextValue>(
    () => ({ hasSubmitted, markSubmitted, clearSubmitted }),
    [hasSubmitted, markSubmitted, clearSubmitted],
  );

  return (
    <DonationSubmissionContext.Provider value={value}>
      {children}
    </DonationSubmissionContext.Provider>
  );
};

export const useDonationSubmission = (): DonationSubmissionContextValue => {
  const context = useContext(DonationSubmissionContext);

  if (context === null) {
    throw new Error(
      'useDonationSubmission must be used inside DonationSubmissionProvider',
    );
  }

  return context;
};
