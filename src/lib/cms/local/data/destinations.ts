import type { Destination } from "../../types";
import { images } from "./images";

/**
 * The six destinations in the collection. Order is editorial and is preserved
 * on listing pages. Slugs are referenced by properties, experiences, articles
 * and the home page, so they must not change.
 */
export const destinations: Destination[] = [
  {
    _type: "destination",
    slug: "amalfi-coast",
    name: "Amalfi Coast",
    country: "Italy",
    region: "Campania",
    tagline: "Lemon terraces stepping down to a glass-green sea",
    intro:
      "Between Positano and Vietri, the Lattari mountains fall almost straight into the Tyrrhenian, and every town is built on whatever ledge the rock allows. Lemons grow on terraces held up by dry-stone walls, beneath pergolas of chestnut poles. Mornings in Ravello are quiet enough to hear the bells of the Duomo from the garden. Afternoons belong to the water: a launch to Li Galli, a swim beneath the cliffs at Furore. We know the coast best in May and late September, when the road is calm, the sea is warm and dinner is served on terraces that still hold the heat of the day.",
    heroImage: images["amalfi-01"],
    cardImage: images["yachting-ocean-16"],
    gallery: [
      images["pools-exteriors-17"],
      images["yachting-ocean-24"],
      images["nature-texture-12"],
      images["dining-21"],
      images["dining-15"],
      images["yachting-ocean-15"],
    ],
    facts: [
      {
        label: "Getting there",
        value: "Fly to Naples, then 90 minutes by car along the coast road",
      },
      { label: "Best season", value: "May to June, and September to mid-October" },
      { label: "Time zone", value: "Central European Time (UTC+1, UTC+2 in summer)" },
      { label: "Language", value: "Italian, with Neapolitan in kitchens and harbours" },
      { label: "Signature", value: "Sfusato lemons, ripened in the shade of chestnut pergolas" },
    ],
    bestSeason: "May to June, September to October",
    chapters: [
      {
        id: "amalfi-coast-morning",
        eyebrow: "Morning",
        title: "Cool water in a walled garden",
        body: "Ravello sits 350 metres above the sea, and the first hour of the day is the coolest. Swim in a pool walled with old stone and shaded by cypress while the bells of the Duomo count out eight o'clock. Breakfast follows beneath the vines: ricotta from Agerola, green figs and bread still warm from the bakery below the piazza.",
        image: images["pools-exteriors-18"],
      },
      {
        id: "amalfi-coast-afternoon",
        eyebrow: "Afternoon",
        title: "The horizon at eye level",
        body: "By two o'clock the coast road is slow, and the sensible place to be is near the water. In Positano the terraces are cut so close to the sea that a pool seems to run straight into it. Take a daybed, a book and a lemon granita, and let the ferries to Capri draw their pale lines across the bay.",
        image: images["pools-exteriors-23"],
      },
      {
        id: "amalfi-coast-evening",
        eyebrow: "Evening",
        title: "Aperitivo as the stone cools",
        body: "In the hour before dinner the limestone gives back the heat it gathered all day. A spritz with rosemary from the garden, a dish of taralli, the lamps of the Cetara anchovy boats appearing far out at sea. Dinner is late and unhurried: scialatielli with clams, grilled pezzogna, a slice of delizia al limone to finish.",
        image: images["dining-07"],
      },
    ],
    coordinates: { lat: 40.634, lng: 14.6027 },
    seo: {
      title: "The Amalfi Coast: Ravello and Positano",
      description:
        "Lemon terraces, limestone cliffs and quiet mornings in Ravello. Private villas, coastal charters and the best seasons to travel the Amalfi Coast.",
    },
  },
  {
    _type: "destination",
    slug: "kyoto",
    name: "Kyoto",
    country: "Japan",
    region: "Kansai",
    tagline: "Gravel raked at dawn, lanterns lit at dusk",
    intro:
      "For more than a thousand years Kyoto was the capital, and it still keeps its finest rooms behind plain wooden gates. Some sixteen hundred temples, a few no larger than a tea room, hold gardens that are raked, swept and pruned before most visitors are awake. We stay in Arashiyama, on the western edge of the city, where the river leaves the Hozu gorge and the bamboo is quiet at seven. Come in November for the maples, in early April for the blossom, or in the stillness of January, when snow settles on the Golden Pavilion.",
    heroImage: images["kyoto-03"],
    cardImage: images["kyoto-04"],
    gallery: [
      images["kyoto-06"],
      images["kyoto-12"],
      images["kyoto-14"],
      images["kyoto-17"],
      images["kyoto-21"],
      images["kyoto-16"],
      images["kyoto-23"],
    ],
    facts: [
      {
        label: "Getting there",
        value:
          "Fly to Kansai International, then 90 minutes by car; from Tokyo, 2 hours 15 by Shinkansen",
      },
      { label: "Best season", value: "Mid-November to early December, and early April" },
      { label: "Time zone", value: "Japan Standard Time (UTC+9)" },
      { label: "Language", value: "Japanese" },
      { label: "Signature", value: "Kaiseki that follows the season week by week" },
    ],
    bestSeason: "November, early April and the quiet of January",
    chapters: [
      {
        id: "kyoto-morning",
        eyebrow: "Morning",
        title: "The bamboo before seven",
        body: "By nine the path through the Arashiyama grove is a procession. At a quarter to seven it belongs to the wind, the soft knock of culm against culm and a gardener retying the brushwood fence. Walk back along the Oi River to breakfast: grilled fish, rice, white saikyo miso and thin slices of senmaizuke turnip.",
        image: images["kyoto-07"],
      },
      {
        id: "kyoto-afternoon",
        eyebrow: "Afternoon",
        title: "Fifteen stones and a wall",
        body: "The garden at Ryoan-ji holds fifteen stones, and from no seat on the veranda can all of them be seen at once. Arrive at three, after the school groups have gone, and sit for as long as the light allows. The earthen wall behind was mixed with oil, and five centuries of seepage have drawn a landscape of their own.",
        image: images["kyoto-10"],
      },
      {
        id: "kyoto-evening",
        eyebrow: "Evening",
        title: "Lanterns along the stone lanes",
        body: "When the day visitors leave, Higashiyama becomes a neighbourhood again. Lanterns come on outside the machiya of Ninenzaka, shutters roll down on the pottery shops, and the Yasaka pagoda darkens against the hills. Dinner is at a counter of eight seats in Gion, where the chef has bought from the same Nishiki fishmonger for thirty years.",
        image: images["kyoto-02"],
      },
    ],
    coordinates: { lat: 35.0116, lng: 135.7681 },
    seo: {
      title: "Kyoto: Temples, Gardens and Arashiyama",
      description:
        "Dawn gardens, kaiseki counters and a ryokan in Arashiyama. How to know Kyoto slowly, with private access and in the right season.",
    },
  },
  {
    _type: "destination",
    slug: "marrakech",
    name: "Marrakech & the Atlas",
    country: "Morocco",
    region: "Marrakech-Safi",
    tagline: "Cool courtyards, desert silence, snow on the Atlas",
    intro:
      "Marrakech is a city of walls that open inwards. Step off a lane of handcarts and moped horns into a riad, and the noise falls away into orange trees, running water and the slow geometry of zellige. On clear winter mornings the High Atlas stands white above the palms, less than two hours' drive away. Forty minutes south-west, the Agafay, a stone desert of pale hills, holds the kind of silence the medina never does. Between them lies a week of contrasts: mint tea on a roof terrace at dusk, breakfast in the Imlil valley, a night under wool blankets and a very large sky.",
    heroImage: images["marrakech-01"],
    cardImage: images["marrakech-09"],
    gallery: [
      images["marrakech-07"],
      images["marrakech-28"],
      images["marrakech-17"],
      images["marrakech-31"],
      images["marrakech-11"],
      images["marrakech-30"],
      images["marrakech-27"],
    ],
    facts: [
      {
        label: "Getting there",
        value: "Direct from London in 3 hours 40; the medina is 20 minutes from the airport",
      },
      { label: "Best season", value: "March to May, and October to November" },
      { label: "Time zone", value: "UTC+1 (UTC+0 during Ramadan)" },
      { label: "Language", value: "Darija, Tamazight and French" },
      { label: "Signature", value: "Tadelakt hammams and mint tea poured from a height" },
    ],
    bestSeason: "March to May, October to November",
    chapters: [
      {
        id: "marrakech-morning",
        eyebrow: "Morning",
        title: "Terraces below the snowline",
        body: "Leave the city before the heat and drive south into Al Haouz, where the road climbs past villages built from the same earth they stand on. Olive terraces are fed by irrigation channels older than anyone can date. Stop at a family house for bread from a clay oven, amlou of almonds and argan, and tea poured from a height.",
        image: images["marrakech-19"],
      },
      {
        id: "marrakech-afternoon",
        eyebrow: "Afternoon",
        title: "Water and tile in the madrasa",
        body: "In the heat of the afternoon, the Ben Youssef Madrasa is the coolest room in the medina. Hundreds of students once lived in small cells around its courtyard. Today there is only the long reflecting pool, cedar carved with Kufic inscriptions, stucco cut into palms and pine cones, and walls of zellige set by hand, one small glazed piece at a time.",
        image: images["marrakech-06"],
      },
      {
        id: "marrakech-evening",
        eyebrow: "Evening",
        title: "The lamp-makers of Haddadine",
        body: "As the call to prayer rises from the Koutoubia, the souks begin to glow. In Souk Haddadine, the metalworkers' quarter, pierced brass lanterns are lit to show buyers the patterns they throw. Walk with a guide who knows which workshops still hammer by hand, then climb to a roof terrace for pastilla and a tanjia slow-cooked in hammam embers.",
        image: images["marrakech-16"],
      },
    ],
    coordinates: { lat: 31.6295, lng: -7.9811 },
    seo: {
      title: "Marrakech and the Atlas Mountains",
      description:
        "Riad courtyards in the medina, a kasbah in the Agafay Desert and mornings in the High Atlas. A private journey through Marrakech and beyond.",
    },
  },
  {
    _type: "destination",
    slug: "patagonia",
    name: "Patagonia",
    country: "Chile",
    region: "Magallanes",
    tagline: "Granite towers, glacial lakes and a restless sky",
    intro:
      "At the southern end of the Andes, the Paine massif rises out of the steppe almost without warning: towers of pale granite capped with dark sedimentary rock, above lakes coloured by glacial flour. Weather arrives from the ice field in minutes, and a single afternoon can hold sun, sleet and a rainbow over Lago Nordenskjöld. Guanacos graze by the gravel road; condors ride the air above the Cuernos; in winter, pumas cross the snow in daylight. Days here are measured in walking and riding, and they end beside a fire of lenga wood with a glass of Carménère.",
    heroImage: images["patagonia-02"],
    cardImage: images["patagonia-10"],
    gallery: [
      images["patagonia-04"],
      images["patagonia-12"],
      images["patagonia-17"],
      images["patagonia-22"],
      images["patagonia-23"],
      images["patagonia-31"],
      images["patagonia-09"],
    ],
    facts: [
      {
        label: "Getting there",
        value: "Santiago to Puerto Natales in 3 hours, then 2½ hours by road",
      },
      { label: "Best season", value: "October to April for walking; June to August for pumas" },
      { label: "Time zone", value: "Magallanes Time (UTC−3, all year)" },
      { label: "Language", value: "Spanish" },
      { label: "Signature", value: "Cordero al palo, roasted slowly over an open fire" },
    ],
    bestSeason: "October to April, and winter for stillness",
    chapters: [
      {
        id: "patagonia-morning",
        eyebrow: "Morning",
        title: "Stillness on Lago Grey",
        body: "The wind usually rests until mid-morning, and those first hours are worth rising for. Lago Grey lies flat enough to hold the whole range upside down, with icebergs drifting south from the glacier at its head. Walk the grey pebble beach to the peninsula with a flask of coffee and a guide who can name every bird in the lenga.",
        image: images["patagonia-15"],
      },
      {
        id: "patagonia-afternoon",
        eyebrow: "Afternoon",
        title: "Riding out across the steppe",
        body: "Horses are how this country was worked, and they remain the best way to cross it. Ride with a baqueano from a neighbouring estancia over open pampa, through calafate scrub and across shallow rivers, the Cuernos growing larger by the hour. Tea is taken in the lee of a boulder: mate passed from hand to hand, torta frita still warm.",
        image: images["patagonia-08"],
      },
      {
        id: "patagonia-evening",
        eyebrow: "Evening",
        title: "Lavender light on Nordenskjöld",
        body: "In December the sun sets after ten, and evening is long enough for a second walk. On the shore of Lago Nordenskjöld the wind drops, the water stills around smooth boulders, and the snowfields turn peach, then lavender, then grey. Dinner follows by the fire: centolla from the Strait of Magellan, lamb from the estancia, a Carménère from Colchagua.",
        image: images["patagonia-05"],
      },
    ],
    coordinates: { lat: -50.98, lng: -73.03 },
    seo: {
      title: "Patagonia: Torres del Paine, Chile",
      description:
        "Granite towers, glacial lakes and open steppe. A lodge on Lago Grey, walks on the ice and long southern evenings in Chilean Patagonia.",
    },
  },
  {
    _type: "destination",
    slug: "cyclades",
    name: "The Cyclades",
    country: "Greece",
    region: "Santorini & Milos",
    tagline: "White villages on the rim of a flooded volcano",
    intro:
      "Some 3,600 years ago an eruption emptied the heart of Santorini and the sea rushed in. What remains is a crescent of cliffs, banded red, black and cream, with Oia and Imerovigli balanced along the rim high above the water. Milos, a few hours west by fast ferry, is its quieter counterpart: coves of white pumice, sulphur-yellow rock and fishing villages whose boathouse doors are painted the colours of the boats. Travel in late May or September, when the meltemi is gentle, the sea has warmed and the evening crowds on the caldera path have thinned.",
    heroImage: images["cyclades-04"],
    cardImage: images["cyclades-18"],
    gallery: [
      images["cyclades-19"],
      images["cyclades-16"],
      images["yachting-ocean-21"],
      images["cyclades-28"],
      images["cyclades-11"],
      images["yachting-ocean-22"],
      images["cyclades-31"],
    ],
    facts: [
      {
        label: "Getting there",
        value: "Athens to Santorini in 45 minutes; Milos by fast ferry in about 3 hours",
      },
      { label: "Best season", value: "Late May to June, and September to mid-October" },
      { label: "Time zone", value: "Eastern European Time (UTC+2, UTC+3 in summer)" },
      { label: "Language", value: "Greek" },
      { label: "Signature", value: "Assyrtiko from vines woven into low baskets" },
    ],
    bestSeason: "Late May to June, September to October",
    chapters: [
      {
        id: "cyclades-morning",
        eyebrow: "Morning",
        title: "Oia before the shutters open",
        body: "At seven the lanes of Oia are swept, watered and nearly empty. A baker carries trays along the marble path, a woman whitewashes the step outside her door, and a bell rings over a caldera still pale with haze. Take the long stair down to Ammoudi for a swim off the rocks, then climb back slowly for breakfast.",
        image: images["cyclades-06"],
      },
      {
        id: "cyclades-afternoon",
        eyebrow: "Afternoon",
        title: "White rock and clear water",
        body: "Milos was made by the same volcanic arc as Santorini, but its stone is paler and its coast more private. At Sarakiniko, wind and sea have worn the pumice into smooth white shapes around a narrow inlet of glass-clear water. Arrive after four, when the day boats have gone, and swim until the rock turns gold.",
        image: images["cyclades-25"],
      },
      {
        id: "cyclades-evening",
        eyebrow: "Evening",
        title: "The long gold hour in Oia",
        body: "Oia faces west, and at sunset the whole village turns to watch. We prefer a private terrace, well away from the castle walls where the crowds gather, with a bottle of Assyrtiko and a plate of fava, the island's yellow pulse, dressed with capers. When the sun has gone and the applause has faded, the windmills hold the last of the light.",
        image: images["cyclades-15"],
      },
    ],
    coordinates: { lat: 36.4618, lng: 25.3753 },
    seo: {
      title: "The Cyclades: Santorini and Milos",
      description:
        "A villa on the caldera rim in Oia, volcanic wine cellars and sunset sails. The Cyclades, travelled quietly and in the gentler months.",
    },
  },
  {
    _type: "destination",
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    region: "Uluwatu & Ubud",
    tagline: "Limestone cliffs, rice terraces and offerings at every threshold",
    intro:
      "Bali is two islands in one journey. In the south, the Bukit peninsula ends in limestone cliffs above the Indian Ocean, where surfers wait on the reef and the temple at Uluwatu watches the sun go down. Ninety minutes north, Ubud sits among river gorges and rice terraces still watered by subak, a thousand-year-old system of shared channels overseen by the temples. Everywhere, small palm-leaf trays of flowers and rice are set on doorsteps, dashboards and shrines. We suggest four nights by the sea, four in the hills, and the dry months between May and September.",
    heroImage: images["bali-14"],
    cardImage: images["bali-03"],
    gallery: [
      images["bali-11"],
      images["bali-16"],
      images["bali-35"],
      images["bali-30"],
      images["bali-04"],
      images["bali-45"],
    ],
    facts: [
      {
        label: "Getting there",
        value: "Singapore to Denpasar in 2 hours 40; then 45 minutes to Uluwatu or 90 to Ubud",
      },
      { label: "Best season", value: "April to October, the dry season" },
      { label: "Time zone", value: "Central Indonesia Time (UTC+8)" },
      { label: "Language", value: "Balinese and Indonesian" },
      { label: "Signature", value: "The Kecak at sunset, above the Indian Ocean" },
    ],
    bestSeason: "April to October",
    chapters: [
      {
        id: "bali-morning",
        eyebrow: "Morning",
        title: "Along the ridge at Campuhan",
        body: "The Campuhan ridge walk begins where two rivers meet below Ubud, at the temple of Gunung Lebah. Set out at half past six, before the heat settles in the valley, on a narrow path through alang-alang grass with jungle falling away on either side. At the top, in Bangkiang Sidem, a family serves black rice pudding and Balinese coffee.",
        image: images["bali-32"],
      },
      {
        id: "bali-afternoon",
        eyebrow: "Afternoon",
        title: "Water shared between the terraces",
        body: "Each terrace receives its water in turn, released from the one above by a farmers' association that meets at the village temple. Walk the narrow bunds between the paddies with a farmer who has worked them for forty years, past egrets, ducks and a small shrine to Dewi Sri, goddess of rice, dressed each morning with fresh flowers.",
        image: images["bali-15"],
      },
      {
        id: "bali-evening",
        eyebrow: "Evening",
        title: "The cliffs at Uluwatu turn gold",
        body: "On the Bukit, evening comes quickly. The cliffs below Pura Luhur Uluwatu turn gold, then rose; surfers paddle in from the reef at Suluban; long-tailed macaques settle along the temple wall. Stay for the Kecak, a ring of voices chanting as the sun drops into the ocean, then return to the villa for grilled snapper and sambal matah.",
        image: images["bali-28"],
      },
    ],
    coordinates: { lat: -8.5069, lng: 115.2625 },
    seo: {
      title: "Bali: Uluwatu and Ubud",
      description:
        "Clifftop villas above the Indian Ocean at Uluwatu and a rice-field retreat in Ubud. Temples, terraces and the unhurried rhythm of Bali.",
    },
  },
];
