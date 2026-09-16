import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { TransitionLink } from "@/components/transitions/transition-link";
import { cn } from "@/lib/utils/cn";
import { Icon, type IconName } from "./icon";

export type ButtonVariant = "solid" | "outline" | "ghost";
export type ButtonTone = "ink" | "ivory";
export type ButtonSize = "md" | "lg";

interface ButtonStyleProps {
  variant?: ButtonVariant;
  tone?: ButtonTone;
  size?: ButtonSize;
  icon?: IconName;
  className?: string;
  children: ReactNode;
}

type ButtonAsLink = ButtonStyleProps &
  Omit<ComponentPropsWithoutRef<"a">, "href" | "children" | "className"> & { href: string };

type ButtonAsButton = ButtonStyleProps &
  Omit<ComponentPropsWithoutRef<"button">, "children" | "className"> & { href?: undefined };

export type ButtonProps = ButtonAsLink | ButtonAsButton;

const base =
  "group/button relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full font-sans font-medium uppercase tracking-[0.18em] transition-colors duration-500 ease-out-expo disabled:pointer-events-none disabled:opacity-40";

const sizes: Record<ButtonSize, string> = {
  md: "h-11 px-6 text-[0.6875rem]",
  lg: "h-14 px-8 text-xs",
};

const variants: Record<ButtonVariant, Record<ButtonTone, string>> = {
  solid: {
    ink: "bg-ink text-ivory hover-fine:bg-charcoal",
    ivory: "bg-ivory text-ink hover-fine:bg-parchment",
  },
  outline: {
    ink: "border border-ink/25 text-ink hover-fine:border-ink",
    ivory: "border border-ivory/35 text-ivory hover-fine:border-ivory",
  },
  ghost: {
    ink: "px-0! text-ink",
    ivory: "px-0! text-ivory",
  },
};

export function buttonClassName({
  variant = "solid",
  tone = "ink",
  size = "md",
  className,
}: Pick<ButtonStyleProps, "variant" | "tone" | "size" | "className">) {
  return cn(base, sizes[size], variants[variant][tone], className);
}

/** Label that rolls upward on hover — a pure CSS effect, no JavaScript. */
function RollingLabel({ children }: { children: ReactNode }) {
  return (
    <span className="relative block overflow-hidden">
      <span className="block transition-transform duration-700 ease-out-expo group-hover/button:-translate-y-full motion-reduce:transition-none">
        {children}
      </span>
      <span
        aria-hidden
        className="absolute inset-0 block translate-y-full transition-transform duration-700 ease-out-expo group-hover/button:translate-y-0 motion-reduce:transition-none"
      >
        {children}
      </span>
    </span>
  );
}

export function Button(props: ButtonProps) {
  const { variant = "solid", tone = "ink", size = "md", icon, className, children } = props;
  const classes = buttonClassName({ variant, tone, size, className });

  const content = (
    <>
      <RollingLabel>{children}</RollingLabel>
      {icon ? (
        <Icon
          name={icon}
          size={16}
          className="transition-transform duration-700 ease-out-expo group-hover/button:translate-x-1"
        />
      ) : null}
      {variant === "ghost" ? (
        <span
          aria-hidden
          className="absolute inset-x-0 bottom-2 h-px origin-right scale-x-0 bg-current transition-transform duration-700 ease-out-expo group-hover/button:origin-left group-hover/button:scale-x-100"
        />
      ) : null}
    </>
  );

  if (props.href !== undefined) {
    const {
      variant: _v,
      tone: _t,
      size: _s,
      icon: _i,
      className: _c,
      children: _ch,
      ...rest
    } = props;
    const isExternal = /^(https?:|mailto:|tel:)/.test(props.href);
    if (isExternal) {
      return (
        <a className={classes} {...rest}>
          {content}
        </a>
      );
    }
    return (
      <TransitionLink className={classes} {...rest}>
        {content}
      </TransitionLink>
    );
  }

  const {
    variant: _v,
    tone: _t,
    size: _s,
    icon: _i,
    className: _c,
    children: _ch,
    href: _h,
    ...rest
  } = props;
  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}
