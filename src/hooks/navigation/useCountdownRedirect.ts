'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import type { AppRoute } from '@/routes/routes';

const SECOND_IN_MS = 1000;

export const useCountdownRedirect = (seconds: number, route: AppRoute): number => {
  const router = useRouter();
  const [secondsLeft, setSecondsLeft] = useState(seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((previousSeconds) => Math.max(previousSeconds - 1, 0));
    }, SECOND_IN_MS);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (secondsLeft > 0) return;

    router.replace(route);
  }, [secondsLeft, route, router]);

  return secondsLeft;
};
