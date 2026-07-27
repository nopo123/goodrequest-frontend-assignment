'use client';

import { useCallback, useEffect, useRef, type RefCallback } from 'react';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

const resolveScrollBehavior = (): ScrollBehavior =>
  window.matchMedia(REDUCED_MOTION_QUERY).matches ? 'auto' : 'smooth';

export const useScrollIntoViewOnGrow = (count: number): RefCallback<HTMLElement> => {
  const nodeRef = useRef<HTMLElement | null>(null);
  const previousCountRef = useRef(count);

  const setNode = useCallback((node: HTMLElement | null) => {
    nodeRef.current = node;
  }, []);

  useEffect(() => {
    const hasGrown = count > previousCountRef.current;
    previousCountRef.current = count;

    if (!hasGrown) return;

    nodeRef.current?.scrollIntoView({
      behavior: resolveScrollBehavior(),
      block: 'nearest',
    });
  }, [count]);

  return setNode;
};
