'use client';

import type { ReactNode } from 'react';

import { ScrollAreaRoot } from './ScrollArea.styled';

type ScrollAreaProps = {
  readonly children: ReactNode;
  readonly ariaLabel: string;
  readonly maxHeight: number;
};

export const ScrollArea = ({ children, ariaLabel, maxHeight }: ScrollAreaProps) => (
  <ScrollAreaRoot
    areaMaxHeight={maxHeight}
    role="group"
    aria-label={ariaLabel}
    tabIndex={0}
  >
    {children}
  </ScrollAreaRoot>
);
