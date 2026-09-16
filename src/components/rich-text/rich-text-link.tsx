import type { ReactNode } from "react";
import { TransitionLink } from "@/components/transitions/transition-link";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils/cn";

/**
 * Inline editorial underline: a quiet resting hairline with a solid line that
 * draws across it on hover or keyboard focus. The resting line is the link cue
 * on its own (ink and umber are too close in value to rely on colour), so it
 * stays at 40% rather than fading into the page.
 *
 * It is painted with two background layers rather than a transformed
 * pseudo-element because links wrap across lines, and only backgrounds follow
 * every line fragment (the default sliced box decoration makes the line draw
 * through the fragments in reading order). The animated area is one pixel row,
 * so the paint cost is negligible. Retracting towards the right on hover-out
 * comes from swapping the anchor position while the line is fully drawn.
 */
export const richTextLinkClass = cn(
  "bg-no-repeat pb-[0.08em] text-current",
  "bg-[linear-gradient(currentColor,currentColor),linear-gradient(color-mix(in_oklab,currentColor_40%,transparent),color-mix(in_oklab,currentColor_40%,transparent))]",
  "bg-[length:0%_1px,100%_1px] bg-[position:100%_100%,0_100%]",
  "transition-[background-size] duration-700 ease-out-expo",
  "hover-fine:bg-[length:100%_1px,100%_1px] hover-fine:bg-[position:0_100%,0_100%]",
  "focus-visible:bg-[length:100%_1px,100%_1px] focus-visible:bg-[position:0_100%,0_100%]",
);

type LinkKind = "internal" | "external" | "same-tab" | "invalid";

/** Hosts are never trusted here: anything that is not a known-safe scheme renders as plain text. */
function classifyHref(href: string): LinkKind {
  if (href.startsWith("/") && !href.startsWith("//")) return "internal";
  if (href.startsWith("#") || /^(mailto|tel):/i.test(href)) return "same-tab";
  if (/^https?:\/\//i.test(href) || href.startsWith("//")) return "external";
  return "invalid";
}

interface RichTextLinkProps {
  href: string | undefined;
  children: ReactNode;
  className?: string;
}

/**
 * Link annotation renderer. Internal paths go through the page transition,
 * external URLs open in a new tab with a visible arrow and an announced hint,
 * and malformed or unsafe hrefs (e.g. `javascript:`) degrade to plain text.
 */
export function RichTextLink({ href, children, className }: RichTextLinkProps) {
  const target = href?.trim() ?? "";
  const kind = target ? classifyHref(target) : "invalid";
  const classes = cn(richTextLinkClass, className);

  if (kind === "invalid") return <>{children}</>;

  if (kind === "internal") {
    return (
      <TransitionLink href={target} className={classes}>
        {children}
      </TransitionLink>
    );
  }

  if (kind === "same-tab") {
    return (
      <a href={target} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <a
      href={target}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("group/link", classes)}
    >
      {children}
      {/* Keeps the arrow on the same line as the last word. */}
      <span className="whitespace-nowrap">
        &#8288;
        <Icon
          name="arrow-up-right"
          size={12}
          strokeWidth={1.5}
          className="ml-[0.15em] inline-block size-[0.7em] align-baseline transition-transform duration-700 ease-out-expo group-focus-visible/link:translate-x-[0.12em] group-focus-visible/link:-translate-y-[0.12em] group-hover-fine/link:translate-x-[0.12em] group-hover-fine/link:-translate-y-[0.12em] motion-reduce:transition-none"
        />
      </span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
