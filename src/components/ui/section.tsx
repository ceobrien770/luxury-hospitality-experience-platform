import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils/cn";

export type SectionTone = "light" | "sand" | "dark";

const toneClasses: Record<SectionTone, string> = {
  light: "bg-ivory text-ink",
  sand: "bg-parchment text-ink",
  dark: "bg-ink text-ivory",
};

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  tone?: SectionTone;
  spacing?: "default" | "compact" | "none";
};

/**
 * Page section with a background tone. `data-header-theme` lets the fixed
 * header switch its colour scheme to stay legible over dark sections.
 */
export function Section({
  tone = "light",
  spacing = "default",
  className,
  ...props
}: SectionProps) {
  return (
    <section
      data-header-theme={tone === "dark" ? "dark" : "light"}
      className={cn(
        "relative",
        toneClasses[tone],
        spacing === "default" && "py-section",
        spacing === "compact" && "py-section-sm",
        className,
      )}
      {...props}
    />
  );
}
