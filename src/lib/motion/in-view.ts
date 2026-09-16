"use client";

type Callback = (entry: IntersectionObserverEntry) => void;

const observers = new Map<string, IntersectionObserver>();
const callbacks = new WeakMap<Element, Callback>();

function getObserver(rootMargin: string, threshold: number) {
  const key = `${rootMargin}|${threshold}`;
  let observer = observers.get(key);
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) callbacks.get(entry.target)?.(entry);
      },
      { rootMargin, threshold },
    );
    observers.set(key, observer);
  }
  return observer;
}

/**
 * Observes an element with a shared IntersectionObserver (one observer per
 * option set instead of one per component). Returns an unobserve function.
 */
export function observeInView(
  element: Element,
  callback: Callback,
  { rootMargin = "0px 0px -10% 0px", threshold = 0 } = {},
) {
  const observer = getObserver(rootMargin, threshold);
  callbacks.set(element, callback);
  observer.observe(element);
  return () => {
    observer.unobserve(element);
    callbacks.delete(element);
  };
}
