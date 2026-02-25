'use client';

import { useRef, useState, useEffect, type RefObject } from 'react';

interface UseInViewOptions extends IntersectionObserverInit {
  /** Only trigger once (stays true after first intersection) */
  once?: boolean;
}

interface UseInViewReturn {
  ref: RefObject<HTMLElement | null>;
  inView: boolean;
}

/**
 * Intersection Observer–based visibility detection.
 * Useful for triggering scroll-based animations.
 *
 * Note: Framer Motion ships its own `useInView`, but this hook gives us
 * a dependency-free alternative for components that don't need motion.
 */
export function useInView(options?: UseInViewOptions): UseInViewReturn {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const { once = false, root, rootMargin, threshold } = options ?? {};

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // If once was already triggered, skip creating a new observer
    if (once && inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry?.isIntersecting ?? false;
        setInView(isIntersecting);

        if (isIntersecting && once) {
          observer.unobserve(element);
        }
      },
      { root, rootMargin, threshold },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [root, rootMargin, threshold, once]);

  return { ref, inView };
}
