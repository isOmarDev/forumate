import { useCallback, useEffect, useRef } from 'react';

type UseIntersectionObserverOptions = IntersectionObserverInit & {
  once?: boolean;
};

export const useIntersectionObserver = <T extends HTMLElement>(
  callback: (entry: IntersectionObserverEntry) => void,
  options?: UseIntersectionObserverOptions,
) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const setNode = useCallback(
    (node: T | null) => {
      // cleanup previous observer
      observerRef.current?.disconnect();

      if (!node) return;

      observerRef.current = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              callback(entry);

              if (options?.once) {
                observer.unobserve(entry.target);
              }
            }
          });
        },
        options,
      );

      observerRef.current.observe(node);
    },
    [callback, options],
  );

  // safety cleanup on unmount
  useEffect(() => {
    return () => observerRef.current?.disconnect();
  }, []);

  return setNode;
};
