import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/utils/cn";

export type HeadingSize = "display-xl" | "display-lg" | "display-md" | "lg" | "md" | "sm";

const sizeClasses: Record<HeadingSize, string> = {
  "display-xl": "text-display-xl",
  "display-lg": "text-display-lg",
  "display-md": "text-display-md",
  lg: "text-heading-lg",
  md: "text-heading-md",
  sm: "text-heading-sm",
};

type HeadingProps<T extends ElementType> = {
  as?: T;
  size?: HeadingSize;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

/** Serif display heading. The semantic level (`as`) is independent of the visual size. */
export function Heading<T extends ElementType = "h2">({
  as,
  size = "lg",
  className,
  ...props
}: HeadingProps<T>) {
  const Component = as ?? "h2";
  return (
    <Component
      className={cn("font-serif font-light text-balance-safe", sizeClasses[size], className)}
      {...props}
    />
  );
}
