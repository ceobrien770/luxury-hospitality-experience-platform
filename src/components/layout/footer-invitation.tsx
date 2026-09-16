import { TransitionLink } from "@/components/transitions/transition-link";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils/cn";

interface FooterInvitationProps {
  /** Brand name used in the supporting line. */
  name: string;
  className?: string;
}

/** The footer's primary call to action: a large serif line that opens the enquiry flow. */
export function FooterInvitation({ name, className }: FooterInvitationProps) {
  return (
    <div className={cn("max-w-[44rem]", className)}>
      <p className="eyebrow text-ivory/60">Private journeys</p>

      <h2 className="mt-8 font-serif text-display-md font-light text-ivory md:mt-10">
        <TransitionLink href="/inquire" className="group/invite">
          Begin a{" "}
          {/* Kept on one line so the arrow never wraps away from the words it belongs to. */}
          <span className="inline-flex items-center gap-x-5 whitespace-nowrap md:gap-x-8">
            <em className="relative italic">
              conversation
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-[0.02em] h-px origin-right scale-x-0 bg-ivory/60 transition-transform duration-1000 ease-out-expo group-hover/invite:origin-left group-hover/invite:scale-x-100 group-focus-visible/invite:origin-left group-focus-visible/invite:scale-x-100 motion-reduce:transition-none"
              />
            </em>
            <span
              aria-hidden
              className="relative flex size-12 shrink-0 translate-y-[0.06em] items-center justify-center overflow-hidden rounded-full border border-ivory/30 transition-colors duration-700 ease-out-expo group-hover/invite:border-ivory group-hover/invite:bg-ivory group-hover/invite:text-ink md:size-[4.5rem]"
            >
              <Icon
                name="arrow-right"
                size={22}
                className="transition-transform duration-700 ease-out-expo group-hover/invite:translate-x-[250%] motion-reduce:transition-none"
              />
              <Icon
                name="arrow-right"
                size={22}
                className="absolute -translate-x-[250%] transition-transform duration-700 ease-out-expo group-hover/invite:translate-x-0 motion-reduce:transition-none"
              />
            </span>
          </span>
        </TransitionLink>
      </h2>

      <p className="mt-8 max-w-md text-body text-ivory/70 md:mt-10">
        Every {name} journey is composed by hand. Tell us where you would like to be, and one of our
        travel designers will write back within a day.
      </p>
    </div>
  );
}
