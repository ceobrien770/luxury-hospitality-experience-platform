"use client";

import { useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};
const getYear = () => new Date().getFullYear();
const getServerYear = () => null;

interface FooterCopyrightProps {
  name: string;
  className?: string;
}

/**
 * Copyright line with the current year. The year is read on the client only:
 * a prerendered page would otherwise freeze the build year into its HTML (and
 * reading the clock during a Cache Components prerender is an error).
 */
export function FooterCopyright({ name, className }: FooterCopyrightProps) {
  const year = useSyncExternalStore(noopSubscribe, getYear, getServerYear);

  return (
    <p className={className}>
      © {year === null ? "" : `${year} `}
      {name}. All rights reserved.
    </p>
  );
}
