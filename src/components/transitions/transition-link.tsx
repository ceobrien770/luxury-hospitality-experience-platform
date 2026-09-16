"use client";

import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, MouseEvent, Ref } from "react";
import { usePageTransition } from "./page-transition-context";

export type TransitionLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> &
  Omit<LinkProps, "href"> & {
    href: string;
    ref?: Ref<HTMLAnchorElement>;
  };

function isModifiedEvent(event: MouseEvent<HTMLAnchorElement>) {
  const target = event.currentTarget.getAttribute("target");
  return (
    (target && target !== "_self") ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    event.button !== 0
  );
}

function isInternalHref(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

/**
 * Drop-in replacement for `next/link` that routes same-origin navigation
 * through the page transition provider. New-tab clicks, external URLs, hash
 * links and same-page links keep native behaviour.
 */
export function TransitionLink({ href, onClick, replace, ...props }: TransitionLinkProps) {
  const transition = usePageTransition();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented || !transition || isModifiedEvent(event)) return;
    if (!isInternalHref(href)) return;

    const url = new URL(href, window.location.href);
    const isSamePage =
      url.pathname === window.location.pathname && url.search === window.location.search;
    if (isSamePage) return;

    event.preventDefault();
    transition.navigate(href, { replace });
  }

  return <Link href={href} replace={replace} onClick={handleClick} {...props} />;
}
