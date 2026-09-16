import type { SiteSettings } from "../../types";
import { images } from "./images";

export const siteSettings: SiteSettings = {
  name: "Solenne",
  tagline: "Places that stay with you",
  description:
    "Small, deeply rooted places to stay and privately arranged journeys across Italy, Japan, Morocco, Chile, Greece and Indonesia.",
  primaryNavigation: [
    { label: "Destinations", href: "/destinations", image: images["kyoto-34"] },
    { label: "Stays", href: "/stays", image: images["pools-exteriors-01"] },
    { label: "Experiences", href: "/experiences", image: images["marrakech-23"] },
    { label: "Journal", href: "/journal", image: images["interiors-15"] },
  ],
  secondaryNavigation: [
    { label: "Our story", href: "/about" },
    { label: "Private journeys", href: "/inquire" },
    { label: "Contact", href: "/inquire" },
  ],
  legalNavigation: [
    { label: "Privacy", href: "/legal/privacy" },
    { label: "Terms", href: "/legal/terms" },
  ],
  contact: {
    email: "journeys@solenne.example",
    phone: "+44 20 7946 0321",
    address: "12 Albemarle Street, London W1S 4HW",
  },
  social: [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Pinterest", href: "https://www.pinterest.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
  ],
  defaultSeoImage: images["cyclades-15"],
};
