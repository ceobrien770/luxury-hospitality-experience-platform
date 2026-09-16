import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge only knows Tailwind's default scale, so the custom type sizes
 * from globals.css must be registered or `text-display-lg` would be treated as
 * a colour and silently dropped when merged with `text-ivory`.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "display-xl",
            "display-lg",
            "display-md",
            "heading-lg",
            "heading-md",
            "heading-sm",
            "body-lg",
            "body",
            "caption",
            "eyebrow",
          ],
        },
      ],
      // Custom utility from globals.css; without this it would be read as a
      // text colour and removed whenever a colour class is merged in.
      "text-wrap": [{ text: ["balance-safe"] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
