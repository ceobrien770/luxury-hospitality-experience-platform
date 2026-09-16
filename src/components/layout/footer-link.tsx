import type { ReactNode } from "react";
import { TransitionLink } from "@/components/transitions/transition-link";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils/cn";

interface FooterLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  /** Opens in a new tab with an outbound arrow; use for third-party destinations. */
  external?: boolean;
}

const base =
  "group/link relative inline-flex items-center gap-2 transition-colors duration-500 ease-out-expo";

/**
 * Hairline that sweeps in from the left and retreats to the right. Tailwind v4
 * only applies `group-hover` on devices that can hover, so taps never leave it stuck.
 */
const underline =
  "relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-[0.05em] after:h-px after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-700 after:ease-out-expo group-hover/link:after:origin-left group-hover/link:after:scale-x-100 group-focus-visible/link:after:origin-left group-focus-visible/link:after:scale-x-100 motion-reduce:after:transition-none";

const isSchemeHref = (href: string) => /^(https?:|mailto:|tel:)/.test(href);

export function FooterLink({ href, children, className, external = false }: FooterLinkProps) {
  const label = <span className={underline}>{children}</span>;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cn(base, className)}>
        {label}
        <Icon
          name="arrow-up-right"
          size={14}
          className="opacity-50 transition-[translate,opacity] duration-700 ease-out-expo group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:opacity-100 motion-reduce:transition-none"
        />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }

  if (isSchemeHref(href)) {
    return (
      <a href={href} className={cn(base, className)}>
        {label}
      </a>
    );
  }

  return (
    <TransitionLink href={href} className={cn(base, className)}>
      {label}
    </TransitionLink>
  );
}
