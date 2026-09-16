import type { HomePage } from "../../types";
import { images } from "./images";

export const homePage: HomePage = {
  hero: {
    intervalMs: 7000,
    slides: [
      {
        id: "hero-kyoto",
        eyebrow: "Kyoto, Japan",
        title: "Dusk from the eastern hills",
        image: images["kyoto-01"],
        href: "/destinations/kyoto",
      },
      {
        id: "hero-patagonia",
        eyebrow: "Patagonia, Chile",
        title: "Glacier water beneath granite horns",
        image: images["patagonia-04"],
        href: "/destinations/patagonia",
      },
      {
        id: "hero-cyclades",
        eyebrow: "The Cyclades, Greece",
        title: "Evening on the caldera rim",
        image: images["cyclades-22"],
        href: "/destinations/cyclades",
      },
      {
        id: "hero-bali",
        eyebrow: "Bali, Indonesia",
        title: "Morning mist over the rice terraces",
        image: images["bali-13"],
        href: "/destinations/bali",
      },
    ],
  },

  intro: {
    eyebrow: "Who we are",
    statement:
      "We look for places with a particular kind of quiet: a ryokan where rain sets the rhythm of the day, a house above the sea where lunch runs on until the swifts come out. We keep them few, we know them intimately, and we build each journey around the hours you will carry home.",
    cta: { label: "Our story", href: "/about" },
  },

  destinations: {
    eyebrow: "Destinations",
    title: "Six places, known closely",
    slugs: ["amalfi-coast", "kyoto", "marrakech", "patagonia", "cyclades", "bali"],
  },

  story: {
    eyebrow: "Our philosophy",
    title: "Three things we never hurry",
    chapters: [
      {
        id: "story-arrival",
        eyebrow: "01 — Arrival",
        title: "You are expected",
        body: "A driver who knows the back road, a cold towel scented with lemon leaf or hinoki, a room shown to you by the person who will look after it. There is no desk to queue at and nothing to sign on the way in. We begin our work long before you land, so the first hour can simply be yours.",
        image: images["interiors-07"],
      },
      {
        id: "story-craft",
        eyebrow: "02 — Rooms & craft",
        title: "Made by hands from nearby",
        body: "Lime plaster in Oia, tadelakt in the medina, hinoki baths in Arashiyama. Our rooms are built and mended by craftspeople who live within a morning's drive, in stone, wood and linen that soften with use. Nothing is imported for effect, and very little is new.",
        image: images["interiors-06"],
      },
      {
        id: "story-time",
        eyebrow: "03 — Time",
        title: "Days without a timetable",
        body: "Breakfast is served when you wake. The boat leaves when the sea allows. We plan carefully so that nothing needs planning while you are with us, and we leave the best hours open for the weather, the light and whatever you happen to notice first.",
        image: images["nature-texture-06"],
      },
    ],
  },

  parallax: {
    quote:
      "Months later, we still wake before dawn listening for rain in the bamboo and the quiet knock that meant tea.",
    attribution: "— A. & M., guests at Hoshizora",
    images: [images["kyoto-25"], images["kyoto-19"], images["kyoto-17"]],
  },

  featuredStays: {
    eyebrow: "Where to stay",
    title: "Small houses with deep roots",
    slugs: [
      "villa-limonaia",
      "hoshizora-ryokan",
      "kasbah-agafay",
      "lago-grey-lodge",
      "caldera-house",
      "batu-cliff-villas",
    ],
  },

  experiences: {
    eyebrow: "Experiences",
    title: "Days arranged around the light",
    slugs: [
      "riva-coastline-charter",
      "kaiseki-with-a-master",
      "hammam-ritual",
      "glacier-grey-expedition",
      "caldera-sunset-sail",
      "uluwatu-temple-at-dusk",
    ],
  },

  press: [
    {
      id: "press-longhand-quarterly",
      outlet: "Longhand Quarterly",
      quote: "A company that measures a journey in hours well spent rather than places ticked off.",
    },
    {
      id: "press-unhurried-review",
      outlet: "The Unhurried Review",
      quote:
        "Every house is small enough that the staff know how you take your coffee by the second morning.",
    },
    {
      id: "press-meridian-review",
      outlet: "Meridian Review",
      quote: "The most considered collection of places to stay we have come across in years.",
    },
    {
      id: "press-lime-and-loom",
      outlet: "Lime & Loom",
      quote:
        "Craft here is not a design theme. It is the plasterer, the weaver and the cook, all living down the road.",
    },
    {
      id: "press-horizon-letters",
      outlet: "Horizon Letters",
      quote:
        "Solenne arranges the parts of travel nobody photographs, which turn out to be the parts you keep.",
    },
  ],

  testimonials: [
    {
      id: "testimonial-lago-grey",
      quote:
        "We had planned every day and abandoned the plan on the first morning. Our guide read the wind off the lake, moved the ice hike to Thursday and gave us the clearest day of the season.",
      author: "Clara & James H.",
      context: "Lago Grey Lodge, March 2026",
    },
    {
      id: "testimonial-villa-limonaia",
      quote:
        "Lunch under the pergola became the fixed point of our week. Nobody ever asked what we wanted to do next, yet the right thing always seemed ready: the boat at Minori, a walk through the lemons, a very long siesta.",
      author: "Eleanor W.",
      context: "Villa Limonaia, June 2026",
    },
    {
      id: "testimonial-kasbah-agafay",
      quote:
        "The desert was colder and quieter than we expected. Each evening someone had lit the fire before we thought to ask, and we sat wrapped in blankets until the last light left the Atlas.",
      author: "Daniel & Priya S.",
      context: "Kasbah Agafay, February 2026",
    },
  ],

  journal: {
    eyebrow: "The Journal",
    title: "Notes on place, craft and the table",
  },

  inquiry: {
    eyebrow: "Private journeys",
    title: "Where would you like to wake up?",
    body: "Every journey begins with a conversation. Tell us when you can travel and how you would like the days to feel. Your journey designer will shape the stays, the routes and the quiet in between, and reply within one working day.",
    image: images["other-01"],
    cta: { label: "Begin your journey", href: "/inquire" },
  },

  seo: {
    title: "Solenne — Places that stay with you",
    description:
      "Small, deeply rooted places to stay and privately arranged journeys on the Amalfi Coast and in Kyoto, Marrakech, Patagonia, the Cyclades and Bali.",
  },
};
