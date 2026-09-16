import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils/cn";

type EyebrowProps = ComponentPropsWithoutRef<"p"> & {
  /** Optional leading index, e.g. "01". */
  index?: string;
};

export function Eyebrow({ index, className, children, ...props }: EyebrowProps) {
  return (
    <p className={cn("eyebrow flex items-center gap-3 text-current/70", className)} {...props}>
      {index ? (
        <>
          <span className="tabular-nums">{index}</span>
          <span aria-hidden className="h-px w-8 bg-current/40" />
        </>
      ) : null}
      <span>{children}</span>
    </p>
  );
}
