import type { Experience } from "../../types";
import { images } from "./images";

/**
 * Signature experiences, grouped by destination in the same editorial order as
 * the destinations module. Each is arranged privately through the concierge.
 */
export const experiences: Experience[] = [
  {
    _type: "experience",
    slug: "riva-coastline-charter",
    title: "The Coast by Mahogany Launch",
    destinationSlug: "amalfi-coast",
    category: "sea",
    duration: "Full day",
    summary:
      "Board a restored 1960s mahogany launch at Positano before the first ferries leave. Your skipper, born in Praiano, runs out to the islands of Li Galli, then east beneath the cliffs to the fjord at Furore, stopping wherever the water turns green over limestone. Lunch is ashore in Marina di Praia.",
    image: images["yachting-ocean-18"],
  },
  {
    _type: "experience",
    slug: "lemon-grove-lunch",
    title: "Lunch in the Lemon Grove",
    destinationSlug: "amalfi-coast",
    category: "gastronomy",
    duration: "4 hours",
    summary:
      "Walk the terraces above Minori with a third-generation grower, beneath pergolas of chestnut poles where sfusato lemons ripen slowly in the shade. Lunch is laid under the leaves: scialatielli with clams, provola grilled on lemon leaves, a salad of lemon, fennel and mint, and a cold Ravello bianco.",
    image: images["dining-12"],
  },
  {
    _type: "experience",
    slug: "kaiseki-with-a-master",
    title: "Kaiseki with a Master",
    destinationSlug: "kyoto",
    category: "gastronomy",
    duration: "3 hours",
    summary:
      "Take one of eight seats at the hinoki counter of a Gion chef who trained for two decades before opening his own door. He cooks what the market offered that morning, hamo in July, matsutake in October, over nine courses that close with rice from the donabe and a bowl of whisked matcha.",
    image: images["dining-13"],
  },
  {
    _type: "experience",
    slug: "dawn-zazen",
    title: "Zazen at Dawn",
    destinationSlug: "kyoto",
    category: "wellness",
    duration: "2 hours",
    summary:
      "Before the gates open to visitors, a monk of a Rinzai sub-temple receives you in the meditation hall at half past five. Forty minutes of sitting, marked by the clap of wooden blocks and a single bell, then green tea on the veranda as first light reaches the raked gravel.",
    image: images["kyoto-11"],
  },
  {
    _type: "experience",
    slug: "atlas-sunrise-trek",
    title: "Atlas Sunrise Trek",
    destinationSlug: "marrakech",
    category: "adventure",
    duration: "Full day",
    summary:
      "Leave Marrakech at four for the Imlil valley, where an Amazigh guide and his mule wait by lantern light. Climb through walnut groves to the Tizi n'Tamatert pass as the first sun strikes the snow on Toubkal, then descend to his family's house for msemen, amlou and mint tea.",
    image: images["marrakech-20"],
  },
  {
    _type: "experience",
    slug: "hammam-ritual",
    title: "The Hammam Ritual",
    destinationSlug: "marrakech",
    category: "wellness",
    duration: "2 hours",
    summary:
      "In a vaulted room of warm tadelakt, an attendant works black olive soap into the skin, then scrubs with a kessa glove until the body feels entirely new. Rhassoul clay from the Middle Atlas follows, then rinses of orange-blossom water and an hour of rest with argan oil and mint tea.",
    image: images["marrakech-18"],
  },
  {
    _type: "experience",
    slug: "glacier-grey-expedition",
    title: "Glacier Grey Expedition",
    destinationSlug: "patagonia",
    category: "adventure",
    duration: "Full day",
    summary:
      "Cross Lago Grey by boat, past icebergs calved from a front thirty metres high, to the edge of the glacier. There, guides fit crampons for three hours on the ice among blue seracs, meltwater channels and crevasses, before the crossing home with the Paine massif behind you.",
    image: images["patagonia-14"],
  },
  {
    _type: "experience",
    slug: "caldera-sunset-sail",
    title: "Caldera Sunset Sail",
    destinationSlug: "cyclades",
    category: "sea",
    duration: "5 hours",
    summary:
      "Board a wooden two-masted schooner at Ammoudi in the late afternoon and follow the inner rim of the caldera: a swim in the warm springs off Palea Kameni, grilled octopus and Assyrtiko on deck, then a slow drift north as the sun sets and Oia lights up along the cliff.",
    image: images["yachting-ocean-23"],
  },
  {
    _type: "experience",
    slug: "volcanic-wine-cellars",
    title: "The Volcanic Wine Cellars",
    destinationSlug: "cyclades",
    category: "gastronomy",
    duration: "Half day",
    summary:
      "With a winemaker from Pyrgos, walk vineyards of pumice and ash where Assyrtiko vines are woven into low kouloura baskets against the wind. Then descend into a canava cut from the volcanic rock to taste from the barrel, ending with a Vinsanto of sun-dried grapes aged twelve years in oak.",
    image: images["dining-19"],
  },
  {
    _type: "experience",
    slug: "uluwatu-temple-at-dusk",
    title: "Uluwatu Temple at Dusk",
    destinationSlug: "bali",
    category: "culture",
    duration: "4 hours",
    summary:
      "Arrive at Pura Luhur Uluwatu in the late afternoon with a guide from nearby Pecatu, who ties your sarong and sash at the gate. Walk the cliff path seventy metres above the Indian Ocean as the light softens, then watch the Kecak performed in the open amphitheatre at sunset.",
    image: images["bali-29"],
  },
];
