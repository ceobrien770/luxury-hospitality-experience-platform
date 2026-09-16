import type { Property } from "../../types";
import { images } from "./images";
import { createPortableText } from "./portable-text";

const limonaia = createPortableText("prop-villa-limonaia");
const mare = createPortableText("prop-casa-del-mare");
const hoshizora = createPortableText("prop-hoshizora-ryokan");
const assoura = createPortableText("prop-riad-assoura");
const agafay = createPortableText("prop-kasbah-agafay");
const lagoGrey = createPortableText("prop-lago-grey-lodge");
const caldera = createPortableText("prop-caldera-house");
const batu = createPortableText("prop-batu-cliff-villas");
const sawah = createPortableText("prop-sawah-retreat");

export const properties: Property[] = [
  {
    _type: "property",
    slug: "villa-limonaia",
    name: "Villa Limonaia",
    destinationSlug: "amalfi-coast",
    location: "Ravello, Amalfi Coast",
    category: "villa",
    tagline: "A frescoed house above the lemon terraces",
    summary:
      "An eighteenth-century house on the ridge at Ravello, with nine rooms, frescoed salons and terraces of sfusato lemons falling towards Minori. Lunch is laid under the pergola, the boat waits in the harbour below, and the evenings belong to the swifts and the bells of the Duomo.",
    description: [
      limonaia.p(
        "Villa Limonaia was built in the 1760s as a summer house for a family of Amalfi paper-makers, who wanted shade, clean air and a view of the sea they traded across. The house stands at the quiet end of Ravello, 350 metres above the Gulf of Salerno, with its back to the lanes of the old town and its face to the light.",
      ),
      limonaia.p(
        "Inside, the salons keep their original frescoes: painted pergolas, trailing vines and a ceiling of improbable birds, restored over four winters by a conservator from Naples. The floors are Vietri majolica, worn soft in the doorways. Nine rooms are furnished with walnut pieces found in the house and linen woven in Campania, and none of them has a television.",
      ),
      limonaia.h3("The terraces"),
      limonaia.p(
        "Below the house, eleven terraces of *sfusato amalfitano* lemons step down the hillside on dry-stone walls, beneath pergolas of chestnut poles. They have been worked since the 1920s by the Ruocco family, who also keep a few terraces of their own lower down and still cut their own poles; [The Lemon Keepers of Ravello](/journal/the-lemon-keepers-of-ravello) tells their story. A path runs through the groves to Minori in forty minutes.",
      ),
      limonaia.p(
        "Days take their shape from lunch, laid under the long pergola at one and rarely cleared before four. After that there is the pool among the cypresses, a siesta behind closed shutters, or the villa's wooden boat, moored at Minori for whenever someone thinks of the sea. In July and August, the concerts on the belvedere at Villa Rufolo are a ten-minute walk away.",
      ),
    ],
    heroImage: images["pools-exteriors-18"],
    cardImage: images["interiors-02"],
    gallery: [
      images["amalfi-01"],
      images["dining-20"],
      images["interiors-08"],
      images["dining-26"],
      images["nature-texture-10"],
      images["yachting-ocean-01"],
      images["spa-wellness-10"],
    ],
    highlights: [
      { label: "Setting", value: "Ravello, 350 metres above the Gulf of Salerno" },
      { label: "Arrival", value: "90 minutes by car from Naples airport" },
      { label: "Signature", value: "Lunch under the pergola, from the lemon terraces" },
      { label: "Season", value: "April to October; lemon blossom in spring" },
    ],
    amenities: [
      "Private chef and daily lunch on the pergola",
      "Pool among the cypresses",
      "Eleven terraces of lemon groves",
      "Mornings in the grove with the Ruocco family",
      "Library with an open fireplace",
      "Wooden boat moored at Minori",
      "Cellar of Tramonti and Furore wines",
      "Treatments in the garden pavilion",
      "Driver for Amalfi, Positano and Pompeii",
      "Tickets for the Ravello Festival",
      "Exclusive use for up to 18 guests",
    ],
    suites: [
      {
        id: "villa-limonaia-sala-degli-affreschi",
        name: "Sala degli Affreschi",
        size: "74 m²",
        guests: 2,
        description:
          "The villa's former music room, with a frescoed ceiling of painted pergolas, a bed dressed in Campanian linen and three tall windows onto the Gulf of Salerno. Shutters close to a green half-light in the afternoon.",
        image: images["interiors-02"],
        features: [
          "Original 1760s frescoes",
          "Sea-facing windows",
          "Walnut writing desk",
          "Majolica-tiled bathroom",
        ],
      },
      {
        id: "villa-limonaia-camera-del-giardino",
        name: "Camera del Giardino",
        size: "52 m²",
        guests: 2,
        description:
          "A pale, quiet room on the garden floor, with a canopy bed hung in muslin, an old map of the Amalfi republic above the desk and French windows that open straight onto the first lemon terrace.",
        image: images["interiors-11"],
        features: ["Canopy bed", "Private garden terrace", "Writing desk", "Rain shower"],
      },
      {
        id: "villa-limonaia-suite-della-torre",
        name: "Suite della Torre",
        size: "88 m²",
        guests: 3,
        description:
          "Two floors in the old tower at the corner of the garden: a bedroom beneath the beams, a marble bathroom with twin basins, and a roof terrace looking down the coast to Capo d'Orso.",
        image: images["interiors-16"],
        features: [
          "Private roof terrace",
          "Marble bathroom with twin basins",
          "Beamed bedroom",
          "Daybed for a third guest",
        ],
      },
    ],
    dining: {
      title: "Lunch under the pergola",
      body: "Rosaria cooks from the terraces and the morning boats at Cetara: scialatielli with clams, 'ndunderi with tomatoes from the garden, anchovies dressed with colatura, and a lemon cake that is never quite the same twice. Wine comes from the Tintore vines of Tramonti. When it rains, dinner moves into the glass-roofed lemon house, among the potted citrus.",
      image: images["dining-10"],
    },
    wellness: {
      title: "The garden pavilion",
      body: "A stone pavilion at the end of the lemon walk serves as the treatment room. Therapists come up from Amalfi to give long, unhurried massages with Campanian olive oil infused with peel from the terraces, and the windows stay open to the sound of the bees. Afterwards there is the pool, and a bench in the shade.",
      image: images["spa-wellness-04"],
    },
    priceFrom: { amount: 1450, currency: "EUR" },
    rooms: 9,
    featured: true,
    seo: {
      title: "Villa Limonaia, Ravello",
      description:
        "A frescoed eighteenth-century house in Ravello with nine rooms, eleven terraces of lemons, a pool among the cypresses and long lunches under the pergola.",
    },
  },

  {
    _type: "property",
    slug: "casa-del-mare",
    name: "Casa del Mare",
    destinationSlug: "amalfi-coast",
    location: "Positano, Amalfi Coast",
    category: "hotel",
    tagline: "Vaulted rooms stepping down to the Positano sea",
    summary:
      "A family house turned small hotel on the western slope of Positano, stepping down the cliff towards Fornillo in vaulted rooms and majolica floors. A lift cut through the rock leads to a bathing platform, and a wooden gozzo waits to take you out to Li Galli.",
    description: [
      mare.p(
        "Positano is a town built vertically, and Casa del Mare follows its lead. The house began as three fishermen's dwellings on the path to Fornillo, bought and joined together in the 1950s by a Neapolitan family who spent every summer here for three generations. The youngest of them now runs it as a hotel of twenty-two rooms, each a few steps lower than the last.",
      ),
      mare.p(
        "The rooms keep the bones of the old houses: barrel-vaulted ceilings, thick whitewashed walls, and majolica floors made in Vietri sul Mare to patterns copied from the originals. Every room faces the sea. Most have a terrace wide enough for breakfast, and a few have little more than that and the view, which is rather the point.",
      ),
      mare.h3("Down to the water"),
      mare.p(
        "A lift cut through the cliff drops to a bathing platform on the rocks, with loungers, a ladder into clear water and a small bar that makes one very good lemon granita. From there the hotel's wooden gozzo takes guests to swim off Li Galli, to lunch in a cove near Nerano, or simply along the coast at the hour when the cliffs turn pink.",
      ),
      mare.p(
        "For walkers, the [Path of the Gods](/destinations/amalfi-coast) begins at Bomerano, a short drive up into the mountains. The hotel sends a car in the morning and has something cold waiting at the bottom, three hours and a great many steps later.",
      ),
    ],
    heroImage: images["pools-exteriors-17"],
    cardImage: images["interiors-10"],
    gallery: [
      images["amalfi-01"],
      images["pools-exteriors-19"],
      images["dining-06"],
      images["dining-21"],
      images["dining-11"],
      images["yachting-ocean-20"],
      images["yachting-ocean-19"],
    ],
    highlights: [
      { label: "Setting", value: "Western Positano, above Fornillo beach" },
      { label: "Arrival", value: "90 minutes by car from Naples, or by sea in summer" },
      { label: "Signature", value: "A private bathing platform and wooden gozzo" },
      { label: "Season", value: "Late April to mid-October" },
    ],
    amenities: [
      "Rock-cut lift to a bathing platform",
      "Wooden gozzo for days on the water",
      "Sea-facing terrace restaurant",
      "Bar on the rocks, June to September",
      "Treatment rooms cut into the cliff",
      "Porters to meet every arrival at the road",
      "Boat transfers from Capri and Amalfi",
      "Cooking lessons with the kitchen team",
      "Guided walks on the Path of the Gods",
      "Library of Neapolitan writing",
    ],
    suites: [
      {
        id: "casa-del-mare-camera-fornillo",
        name: "Camera Fornillo",
        size: "34 m²",
        guests: 2,
        description:
          "A whitewashed room under a low vault, with a round table set by the window for breakfast, linen curtains that lift in the afternoon breeze, and a terrace looking west over Fornillo beach.",
        image: images["interiors-10"],
        features: ["Sea-view terrace", "Vaulted ceiling", "Vietri majolica floor", "Rain shower"],
      },
      {
        id: "casa-del-mare-suite-li-galli",
        name: "Suite Li Galli",
        size: "56 m²",
        guests: 2,
        description:
          "A corner suite with windows facing both the town and the open sea, a sitting room under a painted vault, and a bathroom in grey stone where the freestanding bath looks out towards the Li Galli islands.",
        image: images["interiors-17"],
        features: [
          "Views of the town and the open sea",
          "Freestanding stone bath",
          "Separate sitting room",
          "Terrace with daybed",
        ],
      },
      {
        id: "casa-del-mare-suite-terrazza",
        name: "Suite Terrazza",
        size: "82 m²",
        guests: 3,
        description:
          "The top of the house, and the best of its terraces: a private plunge pool that seems to run into the sea haze, a timber daybed for the long afternoons, and a bedroom that opens onto both.",
        image: images["pools-exteriors-23"],
        features: [
          "Private plunge pool",
          "Wraparound terrace",
          "Outdoor shower",
          "Sofa bed for a third guest",
        ],
      },
    ],
    dining: {
      title: "Terrazza Fornillo",
      body: "The restaurant is a vine-covered terrace hung over the water, open from breakfast until the last table leaves. The menu follows the fishermen of Positano and Cetara: raw red prawns, spaghetti with clams and lemon zest, pezzogna cooked in acqua pazza, and provolone del Monaco from the Lattari mountains. Wines come from Furore, Tramonti and the slopes of Vesuvius.",
      image: images["dining-02"],
    },
    wellness: {
      title: "The sea, first",
      body: "Mornings begin with a swim from the platform, when the water is at its clearest and the beach boats have not yet started. Treatments take place in two whitewashed rooms cut into the cliff: sea-salt and lemon scrubs, long massages with Campanian olive oil, and a facial using herbs gathered on the Lattari mountains.",
      image: images["spa-wellness-06"],
    },
    priceFrom: { amount: 890, currency: "EUR" },
    rooms: 22,
    featured: false,
    seo: {
      title: "Casa del Mare, Positano",
      description:
        "A twenty-two-room hotel stepping down the cliffs of Positano, with vaulted sea-view rooms, a bathing platform on the rocks and a wooden gozzo.",
    },
  },

  {
    _type: "property",
    slug: "hoshizora-ryokan",
    name: "Hoshizora",
    destinationSlug: "kyoto",
    location: "Arashiyama, Kyoto",
    category: "ryokan",
    tagline: "Tatami, hinoki and mist on the Oi River",
    summary:
      "Fourteen rooms of tatami, cedar and paper screens on the quiet south bank of the Oi River, upstream of Togetsukyo Bridge. Evenings are for kaiseki served in your room and a long soak in hinoki; mornings, for the bamboo grove before anyone else arrives.",
    description: [
      hoshizora.p(
        "Hoshizora stands on the south bank of the Oi River, a few hundred metres upstream from Togetsukyo Bridge, where the wooded slopes of Mount Arashi come down to the water and the crowds thin to almost nothing. The house was built as a timber merchant's riverside villa in the Taisho era, and rebuilt over three years by carpenters from northern Kyoto in polished Kitayama cedar, with the old joinery and scarcely a nail.",
      ),
      hoshizora.p(
        "There are fourteen rooms, each a sequence of tatami, sliding shoji and a wooden engawa over the garden or the water. The tokonoma holds a scroll and whatever is flowering that week. At night your futon is laid by the nakai who looks after you throughout your stay; in the morning it has gone before you finish your first cup of tea. Rooms carry names rather than numbers. Hoshizora itself means starry sky, which on a clear winter night above the river is simply a description.",
      ),
      hoshizora.h3("Water, fire, rice"),
      hoshizora.p(
        "Every room has its own bath of hinoki cypress, filled from a hot spring drawn from deep beneath the valley. The kitchen, led by Ryosuke Hanabusa, is small and exacting. Dinner is [kaiseki](/journal/a-kyoto-kitchen-before-dawn), eight or nine courses that follow the Kyoto calendar, from Nishiyama bamboo shoots in April to matsutake and chestnuts in October.",
      ),
      hoshizora.p(
        "If you wish, you will be woken at half past five, in time to cross the river, walk through the bamboo grove in near silence and sit zazen with a monk from a neighbouring temple before the first visitors reach Arashiyama.",
      ),
    ],
    heroImage: images["kyoto-05"],
    cardImage: images["kyoto-08"],
    gallery: [
      images["kyoto-22"],
      images["kyoto-35"],
      images["kyoto-20"],
      images["kyoto-40"],
      images["kyoto-51"],
      images["kyoto-39"],
      images["kyoto-58"],
    ],
    highlights: [
      { label: "Setting", value: "The south bank of the Oi River, Arashiyama" },
      { label: "Arrival", value: "25 minutes from Kyoto Station; 1 hour 45 from Kansai" },
      { label: "Signature", value: "Private hinoki baths and kaiseki in your room" },
      { label: "Season", value: "Late March for cherry blossom; November for maples" },
    ],
    amenities: [
      "Hinoki bath in every room",
      "Kaiseki dinner served in your room",
      "A dedicated nakai for each room",
      "Dawn zazen with a neighbouring temple",
      "Tea ceremony in the garden teahouse",
      "Private open-air bath by reservation",
      "Yukata, haori and geta provided",
      "Visits to Kyoto craft workshops",
      "Wagasa umbrellas for rainy days",
      "Private car to Kyoto Station",
    ],
    suites: [
      {
        id: "hoshizora-tsuki",
        name: "Tsuki",
        size: "58 m²",
        guests: 2,
        description:
          "Twelve tatami mats, a tokonoma with a seasonal scroll and a paper andon lamp that makes the whole room glow after dark. Shoji slide back onto an engawa over the moss garden and its stone lantern.",
        image: images["kyoto-08"],
        features: [
          "Twelve-mat tatami room",
          "Hinoki bath",
          "Engawa over the moss garden",
          "Tokonoma alcove",
        ],
      },
      {
        id: "hoshizora-kawa",
        name: "Kawa",
        size: "72 m²",
        guests: 2,
        description:
          "A corner room with two walls of shoji that open fully, so the tatami runs straight out to clipped azaleas, raked sand and the sound of the river beyond the wall. Best in May, when the azaleas flower.",
        image: images["kyoto-26"],
        features: [
          "Garden on two sides",
          "Hinoki bath",
          "Kotatsu table in winter",
          "Utensils for whisking matcha",
        ],
      },
      {
        id: "hoshizora-hoshi",
        name: "Hoshi",
        size: "96 m²",
        guests: 3,
        description:
          "The largest room, set apart at the top of the garden: two tatami rooms, a study with a writing desk and a private rotenburo under wooden eaves, screened by bamboo and open to the forested slopes of Arashiyama.",
        image: images["kyoto-45"],
        features: [
          "Private open-air stone bath",
          "Two tatami rooms and a study",
          "Views to the Arashiyama hills",
          "Futon for a third guest",
        ],
      },
    ],
    dining: {
      title: "Kaiseki",
      body: "Ryosuke Hanabusa and his four cooks begin before dawn. Dinner arrives in your room course by course, on lacquer and old Kiyomizu ware: a hassun that reads like a small landscape, sashimi, something grilled over binchotan, rice from the clay donabe. Breakfast comes at half past seven on a single tray: white miso, a trembling dashimaki omelette, salted mackerel and shibazuke from Ohara.",
      image: images["kyoto-09"],
    },
    wellness: {
      title: "Hinoki and hot water",
      body: "Bathing is the ritual here. Beyond the baths in every room, an open-air rotenburo sits in the cedar wood above the garden, reserved for one party at a time. Shiatsu is given on the tatami by a practitioner from Sagano, and at dawn a monk from a neighbouring temple leads zazen in the garden pavilion for anyone who wishes to sit.",
      image: images["kyoto-28"],
    },
    priceFrom: { amount: 190000, currency: "JPY" },
    rooms: 14,
    featured: true,
    seo: {
      title: "Hoshizora, Arashiyama",
      description:
        "A fourteen-room ryokan on the Oi River in Arashiyama, Kyoto, with private hinoki baths, kaiseki served in your room and dawn walks in the bamboo grove.",
    },
  },

  {
    _type: "property",
    slug: "riad-assoura",
    name: "Riad Assoura",
    destinationSlug: "marrakech",
    location: "The Medina, Marrakech",
    category: "riad",
    tagline: "A courtyard of orange trees behind a cedar door",
    summary:
      "Eleven rooms around two courtyards in Mouassine, behind an unmarked cedar door a few turns from the souks. Bitter orange trees shade a zellige fountain, tadelakt walls hold the cool, and the roof terrace looks across the medina to the Koutoubia and, in winter, the snow on the Atlas.",
    description: [
      assoura.p(
        "From the lane, Riad Assoura is an ochre wall and a cedar door studded with iron. Step through, and the noise of Mouassine falls away within a few paces. The house opens into two courtyards: one planted with bitter orange trees around a fountain of green and white zellige, the other paved in marble and almost silent.",
      ),
      assoura.p(
        "The riad was built in the nineteenth century for a family of spice merchants and restored over five years. Maâlem Abdellah Senhaji's workshop spent the better part of one of them on the courtyard alone, taking the cracked fountain wall down piece by piece, numbering every tile and relaying it, with new pieces cut by hand where the old could not be saved. [Zellige: A Mosaic of Patience](/journal/zellige-a-mosaic-of-patience) visits his workshop. The tadelakt walls were polished with river stones and black soap until they took on the sheen of wet clay.",
      ),
      assoura.p(
        "Eleven rooms open off the galleries above the courtyards, behind cedar doors repainted by a craftsman who still works two lanes away. Ceilings are high, beds are dressed in cotton woven in the Atlas, and every room has a brass lantern and a flask of orange-blossom water distilled from the trees below.",
      ),
      assoura.h3("On the roof"),
      assoura.p(
        "A narrow stair climbs to the roof terrace, with a green-tiled plunge pool, a canvas shade and a view across the rooftops to the Koutoubia. Breakfast is served up here in the cooler months, and at dusk, as the call to prayer passes from minaret to minaret across the city, mint tea arrives without anyone having to ask.",
      ),
    ],
    heroImage: images["marrakech-12"],
    cardImage: images["marrakech-13"],
    gallery: [
      images["marrakech-07"],
      images["dining-01"],
      images["marrakech-17"],
      images["marrakech-29"],
      images["marrakech-35"],
      images["spa-wellness-12"],
      images["marrakech-15"],
    ],
    highlights: [
      { label: "Setting", value: "Mouassine, in the heart of the medina" },
      { label: "Arrival", value: "20 minutes from Menara Airport, then a short walk" },
      { label: "Signature", value: "An orange-tree courtyard and a rooftop plunge pool" },
      { label: "Season", value: "March to May; October to December" },
    ],
    amenities: [
      "Rooftop terrace and plunge pool",
      "Private hammam",
      "Two courtyards with fountains",
      "Breakfast served wherever you choose",
      "Cookery lessons in the riad kitchen",
      "Guides to the souks and workshops",
      "Porters to meet you at the medina gate",
      "Library of books on Moroccan craft",
      "Private airport transfers",
      "Exclusive use for up to 22 guests",
    ],
    suites: [
      {
        id: "riad-assoura-chambre-des-orangers",
        name: "Chambre des Orangers",
        size: "38 m²",
        guests: 2,
        description:
          "A quiet room on the first gallery, with walls of soft tadelakt, a low bed of old cedar dressed in white cotton and a brass lamp overhead. Its carved shutters open straight into the branches of the orange trees.",
        image: images["interiors-13"],
        features: [
          "Tadelakt walls",
          "Shutters onto the courtyard",
          "Tadelakt rain shower",
          "Brass lanterns",
        ],
      },
      {
        id: "riad-assoura-suite-du-hammam",
        name: "Suite du Hammam",
        size: "54 m²",
        guests: 2,
        description:
          "A suite built around its bathroom, where a deep freestanding bath sits beneath a tall window against a wall of stacked stone. The bedroom beyond lies under a painted cedar ceiling, and the marble courtyard is just outside the door.",
        image: images["interiors-26"],
        features: [
          "Freestanding bath",
          "Painted cedar ceiling",
          "Opens onto the marble courtyard",
          "Fireplace for winter",
        ],
      },
      {
        id: "riad-assoura-suite-de-la-terrasse",
        name: "Suite de la Terrasse",
        size: "68 m²",
        guests: 3,
        description:
          "The only room on the roof, with its own terrace beside the green zellige plunge pool, a canopied daybed and a potted palm in a tall clay urn. At night the Koutoubia minaret glows above the rooftops.",
        image: images["marrakech-14"],
        features: [
          "Private roof terrace",
          "Canopied daybed",
          "Views to the Koutoubia",
          "Daybed for a third guest",
        ],
      },
    ],
    dining: {
      title: "The riad kitchen",
      body: "Khadija has cooked in this house for twenty years. Breakfast is msemen with amlou and orange-blossom honey, eaten in the courtyard. Dinner might be a lamb tanjia slow-cooked overnight in the embers of the neighbourhood hammam, a pigeon pastilla dusted with cinnamon, or seven-vegetable couscous on a Friday, served by lantern light on the terrace.",
      image: images["marrakech-34"],
    },
    wellness: {
      title: "Hammam",
      body: "The riad's private hammam is a vaulted room of warm tadelakt, heated from beneath the floor. A session follows the old order: steam, black olive soap, a scrub with the kessa glove, a mask of rhassoul clay from the Middle Atlas, then rinsing water poured from a copper bowl. Afterwards, rest in the marble courtyard with mint tea.",
      image: images["interiors-06"],
    },
    priceFrom: { amount: 480, currency: "EUR" },
    rooms: 11,
    featured: false,
    seo: {
      title: "Riad Assoura, Marrakech",
      description:
        "An eleven-room riad in Mouassine, in the Marrakech medina, with an orange-tree courtyard, hand-cut zellige, a private hammam and a rooftop plunge pool.",
    },
  },

  {
    _type: "property",
    slug: "kasbah-agafay",
    name: "Kasbah Agafay",
    destinationSlug: "marrakech",
    location: "Agafay Desert, Morocco",
    category: "retreat",
    tagline: "Rammed earth, canvas and the Atlas at dusk",
    summary:
      "Sixteen suites in a kasbah of rammed earth, on a ridge in the stone desert of Agafay, forty minutes from Marrakech. Tented pavilions face the High Atlas, dinner is cooked over fire, and after dark the only sound is the wind moving across the plateau.",
    description: [
      agafay.p(
        "Agafay is not a desert of dunes but of bare, folded hills, rose-coloured in the morning and grey-violet at dusk, with the High Atlas laid along the southern horizon. Kasbah Agafay sits on one of its ridges, forty minutes south-west of Marrakech and far enough from the road that at night the only light comes from lanterns and stars.",
      ),
      agafay.p(
        "The walls are *pisé*, earth rammed between timber shutters in the old way of the Atlas villages, raised by builders from the Ourika valley using soil dug on the site. They are half a metre thick, so rooms stay cool on September afternoons and hold the day's warmth on January nights, when the desert can fall close to freezing.",
      ),
      agafay.h3("Canvas and earth"),
      agafay.p(
        "Ten of the sixteen suites are tented pavilions of canvas and woven wool on cedar frames, each set on a stone platform with a terrace facing the mountains; on warm days the canvas rolls up to let the desert air through. The rest lie within the kasbah walls, around a courtyard with a single old olive tree. All have wood-burning stoves, deep baths and blankets woven by a women's cooperative in the Atlas foothills.",
      ),
      agafay.p(
        "There is a long pool cut into the ridge, a hammam, and horses for riding out into the hills at first light. On clear winter evenings the snow on Toubkal turns pink, then grey, and by then the fire on the terrace is already lit.",
      ),
    ],
    heroImage: images["marrakech-22"],
    cardImage: images["marrakech-21"],
    gallery: [
      images["marrakech-21"],
      images["pools-exteriors-04"],
      images["interiors-19"],
      images["dining-29"],
      images["nature-texture-08"],
      images["marrakech-39"],
      images["dining-17"],
    ],
    highlights: [
      { label: "Setting", value: "The Agafay stone desert, facing the High Atlas" },
      { label: "Arrival", value: "45 minutes by car from Marrakech Menara Airport" },
      { label: "Signature", value: "Tented suites and dinner cooked over fire" },
      { label: "Season", value: "October to April; cold, clear nights in winter" },
    ],
    amenities: [
      "Heated pool cut into the ridge",
      "Hammam with argan treatments",
      "Wood-burning stove in every suite",
      "Horse and camel walks at dawn",
      "Stargazing with a telescope",
      "Fire-pit terrace facing the Atlas",
      "Clay-oven bread and an open-fire kitchen",
      "Day trips to the Ourika valley and Imlil",
      "Picnics at Lalla Takerkoust lake",
      "Private transfers from Marrakech",
    ],
    suites: [
      {
        id: "kasbah-agafay-khaima-suite",
        name: "Khaima Suite",
        size: "64 m²",
        guests: 2,
        description:
          "A tented pavilion of canvas and woven wool on its own stone platform, with a cedar four-poster, a wood-burning stove and a deck of striped daybeds facing the Atlas across the empty hills.",
        image: images["pools-exteriors-10"],
        features: [
          "Private terrace with daybeds",
          "Wood-burning stove",
          "Copper bathtub",
          "Outdoor shower",
        ],
      },
      {
        id: "kasbah-agafay-pise-room",
        name: "Pisé Room",
        size: "46 m²",
        guests: 2,
        description:
          "Within the kasbah walls, half a metre of rammed earth keeps this room cool by day and warm by night. Striped blankets, rust-coloured linen and a pale wooden bed set against hand-rubbed clay plaster.",
        image: images["nature-texture-07"],
        features: ["Rammed-earth walls", "Courtyard entrance", "Fireplace", "Tadelakt shower"],
      },
      {
        id: "kasbah-agafay-atlas-pavilion",
        name: "Atlas Pavilion",
        size: "110 m²",
        guests: 4,
        description:
          "The largest suite, built around a boulder left where it was found. Floor-to-ceiling glass looks south to Toubkal, a glass-walled bath sits beside the bed, and a second bedroom opens onto a walled garden of olive and rosemary.",
        image: images["interiors-01"],
        features: [
          "Two bedrooms",
          "Private walled garden",
          "Glass-walled bathroom",
          "Plunge pool",
          "Views to Toubkal",
        ],
      },
    ],
    dining: {
      title: "Fire and clay",
      body: "The kitchen works almost entirely with fire. Bread is baked each morning in a clay oven by the gate; lamb for the mechoui roasts for hours in a pit dug into the ridge; vegetables from the kasbah garden go into tagines finished over charcoal. Dinner is served on the terrace under the stars, or by the stove in the library when the wind comes up.",
      image: images["dining-15"],
    },
    wellness: {
      title: "Argan and steam",
      body: "The hammam is a domed room of pale tadelakt at the heart of the kasbah, warmed by a wood fire. Treatments use argan oil pressed by a women's cooperative in the Souss valley, rose water from the Dadès and warm stones from the dry riverbed below the ridge. The pool, heated through the winter, looks straight at the mountains.",
      image: images["spa-wellness-02"],
    },
    priceFrom: { amount: 690, currency: "EUR" },
    rooms: 16,
    featured: true,
    seo: {
      title: "Kasbah Agafay, Morocco",
      description:
        "Sixteen tented and rammed-earth suites in the Agafay Desert, forty minutes from Marrakech, facing the High Atlas, with a hammam and dinners over fire.",
    },
  },

  {
    _type: "property",
    slug: "lago-grey-lodge",
    name: "Lago Grey Lodge",
    destinationSlug: "patagonia",
    location: "Torres del Paine, Chile",
    category: "lodge",
    tagline: "Timber, wind and the blue face of the ice",
    summary:
      "Twenty rooms of lenga wood and glass on the southern shore of Lago Grey, where icebergs drift down from the glacier and the Paine massif fills the sky to the north-east. Guides read the weather each morning, and the day is built around whatever the wind allows.",
    description: [
      lagoGrey.p(
        "Lago Grey lies on the western side of Torres del Paine, a long, cold lake fed by a glacier that flows out of the Southern Patagonian Ice Field. The lodge stands on its southern shore among lenga and ñirre trees, low to the ground and turned from the prevailing westerlies, with icebergs grounding on the beach below and the Paine massif rising to the north-east.",
      ),
      lagoGrey.p(
        "It was built of lenga timber and glass by builders from Puerto Natales, and roofed in corrugated zinc after the shearing sheds of the old Magallanes estancias. Inside it is warm and hushed: wool from the region's sheep farms, leather worn soft by use, a long hearth of local stone in the main hall. All twenty rooms face the water.",
      ),
      lagoGrey.h3("A day decided by the weather"),
      lagoGrey.p(
        "Patagonian weather changes by the hour, so nothing is fixed far in advance. Each evening a guide sits down with you to plan the next day, and each morning the wind revises it: a boat to the glacier face, an ice hike on Grey Glacier, a ride across the steppe with the lodge's baqueanos, or the long walk to the base of the towers.",
      ),
      lagoGrey.p(
        "In winter the park empties, the wind drops and a low gold light lies across the snow for most of the day. The lodge stays open with a smaller team and a slower pace, which some guests come to prefer. [Winter Light in Patagonia](/journal/winter-light-in-patagonia) makes the case.",
      ),
    ],
    heroImage: images["patagonia-15"],
    cardImage: images["pools-exteriors-15"],
    gallery: [
      images["pools-exteriors-15"],
      images["patagonia-32"],
      images["dining-05"],
      images["patagonia-26"],
      images["nature-texture-01"],
      images["patagonia-34"],
      images["patagonia-33"],
    ],
    highlights: [
      { label: "Setting", value: "The southern shore of Lago Grey, Torres del Paine" },
      { label: "Arrival", value: "Five hours by road from Punta Arenas" },
      { label: "Signature", value: "Daily excursions planned around the weather" },
      { label: "Season", value: "October to April; quiet winter stays from June" },
    ],
    amenities: [
      "All meals, drinks and guided excursions",
      "A private guide for each party",
      "Boat trips to the glacier face",
      "Ice hiking and kayaking on Lago Grey",
      "Horse riding with local baqueanos",
      "Puma tracking with local guides in winter",
      "Wood-fired hot tubs above the lake",
      "Lenga-wood sauna and massage room",
      "Map room for planning each day",
      "Binoculars and waterproofs in every room",
      "Transfers from Puerto Natales and Punta Arenas",
    ],
    suites: [
      {
        id: "lago-grey-lodge-lenga-room",
        name: "Lenga Room",
        size: "42 m²",
        guests: 2,
        description:
          "Floor-to-ceiling glass looks out through the lenga trees to the lake, with a leather reading chair set in the window and a bed made up in wool and linen for cold, bright mornings.",
        image: images["interiors-14"],
        features: [
          "Forest and lake views",
          "Leather reading chair",
          "Heated floors",
          "Rain shower",
        ],
      },
      {
        id: "lago-grey-lodge-glacier-suite",
        name: "Glacier Suite",
        size: "64 m²",
        guests: 2,
        description:
          "A corner suite on the upper floor, facing up the lake towards the ice. The bathroom is long and dark-tiled, with a freestanding tub beneath a high window, and binoculars wait on the sill for passing icebergs.",
        image: images["interiors-18"],
        features: [
          "Views up the lake to Grey Glacier",
          "Freestanding bath",
          "Sitting area with wood stove",
          "Binoculars and field guides",
        ],
      },
      {
        id: "lago-grey-lodge-casa-puesto",
        name: "Casa Puesto",
        size: "140 m²",
        guests: 4,
        description:
          "A restored shepherd's house of red timber a short walk along the shore, with two bedrooms, a stone fireplace and a private cook, and horses grazing in the paddock outside. For families, or anyone who wants the lake to themselves.",
        image: images["patagonia-06"],
        features: [
          "Two bedrooms",
          "Private cook and guide",
          "Stone fireplace",
          "Paddock with horses",
        ],
      },
    ],
    dining: {
      title: "The long table",
      body: "Dinner begins with a calafate sour by the fire and moves to long tables facing the lake. The kitchen cooks the food of Magallanes: lamb roasted slowly on an iron cross over open coals, king crab from the Strait, southern hake, and wild mushrooms gathered from the lenga woods in autumn. The cellar is Chilean, from coastal Sauvignon Blanc to old-vine Carignan from Maule.",
      image: images["dining-03"],
    },
    wellness: {
      title: "Heat after cold",
      body: "After a day in the wind, most guests go straight to the bathhouse. There is a sauna of lenga wood, two wood-fired hot tubs on a deck above the lake, and a treatment room where massages use rosehip oil pressed in southern Chile. Morning yoga takes place in the glass pavilion, whatever the weather is doing outside.",
      image: images["spa-wellness-05"],
    },
    priceFrom: { amount: 1650, currency: "USD" },
    rooms: 20,
    featured: true,
    seo: {
      title: "Lago Grey Lodge, Torres del Paine",
      description:
        "A twenty-room timber lodge on Lago Grey in Torres del Paine, Chile, with glacier views, private guides, horse riding and days planned around the weather.",
    },
  },

  {
    _type: "property",
    slug: "caldera-house",
    name: "Caldera House",
    destinationSlug: "cyclades",
    location: "Oia, Santorini",
    category: "villa",
    tagline: "Cave suites cut into the caldera at Oia",
    summary:
      "Eight cave suites carved into the cliff below Oia, whitewashed and cool, each opening onto a terrace above the drowned volcano. A pool cut into the rock faces the sunset without the crowds, and a stepped path leads down to the fish tavernas of Ammoudi.",
    description: [
      caldera.p(
        "Santorini's caldera was left by one of the largest eruptions in human history, and Oia is built along its northern rim. Caldera House occupies a stack of *yposkafa*, the cave houses that sailors and vineyard workers once dug into the soft volcanic rock: eight of them, joined by whitewashed stairs and terraces a little below the village lane.",
      ),
      caldera.p(
        "The caves were restored by a builder from Pyrgos whose family has worked the island's stone for four generations. He kept the vaults and the uneven curves of the original rooms, finished the walls in lime plaster and laid the floors in grey volcanic stone. The rock holds a steady temperature all year, so rooms that are cool in August feel sheltered on a windy October night.",
      ),
      caldera.h3("The pool at the edge"),
      caldera.p(
        "The pool is cut into the cliff on the lowest terrace, with nothing between its edge and Thirassia but air and water, and only four loungers set well apart. It faces west, which in Oia matters: at sunset, when the lanes above fill with people, the terrace stays quiet, and a glass of Assyrtiko arrives as the sun meets the sea.",
      ),
      caldera.p(
        "Mornings are best taken early. A stepped path leads down to Ammoudi Bay for a swim off the rocks, and the house's skipper will take you across the caldera for lunch on Thirassia. More of the islands, Milos among them, feature in our [Cyclades journeys](/destinations/cyclades).",
      ),
    ],
    heroImage: images["cyclades-05"],
    cardImage: images["cyclades-17"],
    gallery: [
      images["pools-exteriors-29"],
      images["cyclades-30"],
      images["cyclades-09"],
      images["cyclades-21"],
      images["cyclades-10"],
      images["cyclades-13"],
      images["cyclades-01"],
      images["cyclades-29"],
    ],
    highlights: [
      { label: "Setting", value: "The caldera rim below Oia, facing west" },
      { label: "Arrival", value: "30 minutes by car from Santorini airport" },
      { label: "Signature", value: "Cave suites and a pool above the caldera" },
      { label: "Season", value: "Late April to October; best in May and September" },
    ],
    amenities: [
      "Pool cut into the caldera cliff",
      "Private terrace for every suite",
      "Breakfast served on your terrace",
      "House cook for dinners at home",
      "Skippered boat from Ammoudi Bay",
      "Winery visits in Pyrgos and Megalochori",
      "Massage on your terrace",
      "Porters for luggage on the stairs",
      "Airport and port transfers",
      "Exclusive use for up to 16 guests",
    ],
    suites: [
      {
        id: "caldera-house-cave-suite",
        name: "Cave Suite",
        size: "45 m²",
        guests: 2,
        description:
          "A single vaulted room dug into the rock, whitewashed and nearly bare, where the light comes in through one deep opening and moves across the curved walls through the day. Cool in August, quiet always.",
        image: images["nature-texture-09"],
        features: [
          "Vaulted cave ceiling",
          "Private terrace",
          "Lime-plaster walls",
          "Walk-in stone shower",
        ],
      },
      {
        id: "caldera-house-anemos-suite",
        name: "Anemos Suite",
        size: "58 m²",
        guests: 2,
        description:
          "A bedroom of white linen and white walls, crossed by a single diagonal of sunlight in the late afternoon, with a sitting room beyond that opens onto a terrace looking straight across the caldera to Thirassia.",
        image: images["nature-texture-06"],
        features: [
          "Separate sitting room",
          "Caldera-view terrace",
          "Handwoven cotton bedspreads",
          "Stone bath",
        ],
      },
      {
        id: "caldera-house-kapetan-suite",
        name: "Kapetan Suite",
        size: "90 m²",
        guests: 3,
        description:
          "The uppermost suite, once a sea captain's house, with two cave bedrooms, a private plunge pool on its terrace and a view that takes in the windmills, the domed church and the whole curve of the caldera.",
        image: images["cyclades-08"],
        features: [
          "Private plunge pool",
          "Two cave bedrooms",
          "Outdoor dining terrace",
          "Views of the windmills",
        ],
      },
    ],
    dining: {
      title: "The terrace table",
      body: "Breakfast comes to your terrace: yoghurt with thyme honey, figs, warm koulouri and Greek coffee. In the evening the house cook sets dinner at a sculpted white table above the caldera, using the island's own produce: fava with capers, sun-dried tomatoes, white aubergines, fish from Ammoudi, and Assyrtiko from vines trained into low baskets against the wind.",
      image: images["cyclades-07"],
    },
    wellness: {
      title: "Sea and stone",
      body: "There is no spa, and no need for one. Swim in the pool at first light, or walk down to Ammoudi for the cold, clear water off the rocks. Massages are given on your terrace or in a vaulted treatment cave, using olive oil, sea salt and wild thyme, and the skipper can take you to the warm springs off Palea Kameni.",
      image: images["nature-texture-12"],
    },
    priceFrom: { amount: 1250, currency: "EUR" },
    rooms: 8,
    featured: true,
    seo: {
      title: "Caldera House, Oia",
      description:
        "Eight whitewashed cave suites carved into the caldera cliff at Oia, Santorini, with private terraces, a west-facing pool and boat days from Ammoudi Bay.",
    },
  },

  {
    _type: "property",
    slug: "batu-cliff-villas",
    name: "Batu Cliff Villas",
    destinationSlug: "bali",
    location: "Uluwatu, Bali",
    category: "villa",
    tagline: "Twelve pool villas on the limestone edge",
    summary:
      "Twelve villas of carved paras stone and ironwood along the cliffs of Uluwatu, seventy metres above the Indian Ocean. Each has its own pool and pavilion facing west, so every day ends the same way: surf below, the sky turning lavender, a drink by the water.",
    description: [
      batu.p(
        "The Bukit Peninsula is the dry, stony southern tip of Bali, a limestone plateau that ends abruptly in cliffs above some of the island's finest surf. Batu Cliff Villas runs along a quiet stretch of that edge, between the breaks at Bingin and the temple at Uluwatu, with twelve villas spaced far enough apart that you rarely hear a neighbour.",
      ),
      batu.p(
        "*Batu* means stone, and the villas are built from it: walls of pale paras carved by stonemasons from Batubulan, floors of honed limestone, and roofs of ironwood shingles over open pavilions that let the sea wind through. Gardens of frangipani and bougainvillea are watered with rain gathered in the wet season, which on the Bukit is short and welcome.",
      ),
      batu.h3("The edge"),
      batu.p(
        "Every villa faces west over the ocean, with a pool that runs to the lip of the cliff, a daybed pavilion and a bedroom that opens entirely to the view. A path through the gardens leads to the clifftop pavilion for breakfast, and a stair cut into the rock descends to a small beach that appears only at low tide. Each villa is looked after by a host from the next village, who knows exactly when to stay out of sight.",
      ),
      batu.p(
        "Surfers can be in the water at Uluwatu or Padang Padang within ten minutes, with a guide who has surfed both since childhood. Everyone else tends to spend that hour at the [temple at dusk](/destinations/bali), where the Kecak is performed against the sunset.",
      ),
    ],
    heroImage: images["bali-06"],
    cardImage: images["bali-10"],
    gallery: [
      images["bali-08"],
      images["bali-39"],
      images["interiors-25"],
      images["pools-exteriors-22"],
      images["yachting-ocean-13"],
      images["pools-exteriors-07"],
      images["yachting-ocean-02"],
    ],
    highlights: [
      { label: "Setting", value: "Clifftop above the Indian Ocean, Uluwatu" },
      { label: "Arrival", value: "45 minutes by car from Ngurah Rai Airport" },
      { label: "Signature", value: "West-facing pool villas on the cliff edge" },
      { label: "Season", value: "April to October, the dry season" },
    ],
    amenities: [
      "Private pool in every villa",
      "Villa host day and night",
      "Clifftop pavilion for breakfast and dinner",
      "Cliff stair to a low-tide beach",
      "Surf guiding at Uluwatu and Padang Padang",
      "Open-air spa pavilions",
      "Yoga shala above the ocean",
      "Balinese cooking lessons",
      "Temple visits with a local guide",
      "Airport transfers",
    ],
    suites: [
      {
        id: "batu-cliff-villas-cliff-pool-villa",
        name: "Cliff Pool Villa",
        size: "240 m²",
        guests: 2,
        description:
          "A walled garden of frangipani around a private pool, a cabana daybed shaded in timber and a bedroom pavilion of carved paras stone that opens on three sides to the planting and the sound of the sea.",
        image: images["bali-09"],
        features: ["Private pool", "Cabana daybed", "Outdoor bathtub", "Garden shower"],
      },
      {
        id: "batu-cliff-villas-ocean-edge-villa",
        name: "Ocean Edge Villa",
        size: "320 m²",
        guests: 2,
        description:
          "Set right on the cliff, with teak-panelled rooms that fill with gold in the last hour of light, an infinity pool at the lip of the drop, and nothing but ocean between the bed and the horizon.",
        image: images["interiors-21"],
        features: [
          "Infinity pool on the cliff edge",
          "Sunset-facing bedroom",
          "Outdoor living pavilion",
          "Stone bathtub",
        ],
      },
      {
        id: "batu-cliff-villas-pavilion-residence",
        name: "Pavilion Residence",
        size: "520 m²",
        guests: 4,
        description:
          "Two bedroom pavilions and an open-air living pavilion of slatted timber, raised on stone steps at the top of the cliff, with a long pool, a kitchen for a private chef and room for a family to spread out.",
        image: images["bali-07"],
        features: [
          "Two bedroom pavilions",
          "Open-air living pavilion",
          "Private chef's kitchen",
          "25-metre pool",
        ],
      },
    ],
    dining: {
      title: "Dinner on the cliff",
      body: "The clifftop pavilion serves breakfast in the early cool and dinner under a timber pergola by moonlight. The kitchen buys from the fishermen at Jimbaran each morning: snapper grilled over coconut husk, sate lilit pressed around lemongrass, a raw sambal matah of shallot and lime leaf. On Sundays there is bebek betutu, duck slow-cooked in banana leaves for most of a day.",
      image: images["pools-exteriors-16"],
    },
    wellness: {
      title: "Boreh and salt air",
      body: "The spa is a pair of open-air pavilions on the cliff, curtained against the afternoon sun. Treatments are Balinese: long massages with coconut oil, and boreh, a warming paste of clove, ginger and rice that farmers once used after working the wet fields. Yoga is at seven, in a shala above the ocean, and the only music is the surf.",
      image: images["spa-wellness-03"],
    },
    priceFrom: { amount: 1150, currency: "USD" },
    rooms: 12,
    featured: true,
    seo: {
      title: "Batu Cliff Villas, Uluwatu",
      description:
        "Twelve pool villas of carved stone and ironwood on the cliffs of Uluwatu, Bali, facing west over the Indian Ocean, with surf guiding and an open-air spa.",
    },
  },

  {
    _type: "property",
    slug: "sawah-retreat",
    name: "Sawah Retreat",
    destinationSlug: "bali",
    location: "Ubud, Bali",
    category: "retreat",
    tagline: "Bamboo pavilions above the rice terraces of Ubud",
    summary:
      "Eighteen bamboo and teak pavilions among working rice terraces north of Ubud, where the day follows the subak: water moving between fields, farmers out before seven, offerings on every step. There is a pool above the valley, a kitchen garden, and very little to do but notice.",
    description: [
      sawah.p(
        "*Sawah* is the Indonesian word for a wet rice field, and the retreat is built among them, on a ridge twenty minutes north of Ubud where the terraces fall away into a river valley thick with palms. The fields are still farmed by the families who own them, and early risers share the narrow dykes with farmers already at work.",
      ),
      sawah.p(
        "The rhythm here is set by the *subak*, Bali's thousand-year-old system of shared irrigation. Water is released from a temple upstream and passed from terrace to terrace by agreement, so planting, flooding and harvest move around the retreat in a slow cycle: bright green for weeks, then gold, then flooded mirrors again.",
      ),
      sawah.h3("Built from the valley"),
      sawah.p(
        "The eighteen pavilions are made of petung bamboo grown on the island, raised on stone plinths by bamboo builders from around Ubud, under thatched roofs of alang-alang grass and over floors of reclaimed teak. There are few walls. Woven screens and linen curtains close against the rain and open again to the view. In the wet season, rain on the thatch is the loudest thing you will hear all night.",
      ),
      sawah.p(
        "There is a long pool at the edge of the ridge, a kitchen garden of lemongrass, turmeric and long beans, and a yoga pavilion that faces east over the terraces. Ubud's markets, galleries and the [Campuhan Ridge walk](/destinations/bali) are close enough to reach by car, and far enough to forget.",
      ),
    ],
    heroImage: images["bali-27"],
    cardImage: images["bali-25"],
    gallery: [
      images["bali-26"],
      images["bali-37"],
      images["bali-31"],
      images["bali-43"],
      images["bali-49"],
      images["bali-47"],
      images["bali-34"],
    ],
    highlights: [
      { label: "Setting", value: "Rice terraces on a ridge north of Ubud" },
      { label: "Arrival", value: "90 minutes by car from Ngurah Rai Airport" },
      { label: "Signature", value: "Bamboo pavilions within working rice fields" },
      { label: "Season", value: "April to October; lush and quiet in the rains" },
    ],
    amenities: [
      "Infinity pool above the river valley",
      "Open-air yoga pavilion facing sunrise",
      "Morning walks through the rice fields",
      "Kitchen garden and cooking classes",
      "Jamu bar with fresh herbal tonics",
      "Spa pavilions among the terraces",
      "Offering-making with village women",
      "Bicycles for rides between villages",
      "Daily car to Ubud",
      "Airport transfers",
    ],
    suites: [
      {
        id: "sawah-retreat-sawah-pavilion",
        name: "Sawah Pavilion",
        size: "60 m²",
        guests: 2,
        description:
          "A single pavilion of bamboo and teak on the edge of the terraces, with a covered veranda of sling chairs, a round table for morning coffee and a view that runs over the palms to the hills.",
        image: images["bali-01"],
        features: [
          "Covered veranda",
          "Outdoor rain shower",
          "Four-poster bed with netting",
          "Rice terrace views",
        ],
      },
      {
        id: "sawah-retreat-bamboo-loft",
        name: "Bamboo Loft",
        size: "85 m²",
        guests: 3,
        description:
          "Two floors under a high thatched roof, with a sleeping loft above and a sitting room below. Rattan screens, jute rugs, linen throws and baskets woven from ata grass in Tenganan. A third guest sleeps on the daybed.",
        image: images["interiors-24"],
        features: [
          "Sleeping loft",
          "Daybed for a third guest",
          "Outdoor bathtub",
          "Private garden",
        ],
      },
      {
        id: "sawah-retreat-valley-pool-villa",
        name: "Valley Pool Villa",
        size: "180 m²",
        guests: 2,
        description:
          "At the lowest point of the ridge, a thatched living pavilion stands beside a curved infinity pool above the jungle valley. A stone Ganesha keeps watch, and after rain you can hear the river running below.",
        image: images["bali-24"],
        features: [
          "Private infinity pool",
          "Open-air living pavilion",
          "Bedroom with valley views",
          "Outdoor stone bath",
        ],
      },
    ],
    dining: {
      title: "Megibung",
      body: "Meals are cooked from the kitchen garden and the market in Ubud. Lunch is light: nasi campur with sambal, young jackfruit curry, papaya flower salad. Once a week there is megibung, the Balinese tradition of sharing one great spread laid on banana leaves, with babi guling, lawar and crisp duck, eaten with your hands on mats in the open pavilion.",
      image: images["dining-04"],
    },
    wellness: {
      title: "Jamu and water",
      body: "Wellbeing here draws on Balinese practice rather than a menu. Mornings begin with yoga facing the sunrise and a glass of jamu, turmeric and tamarind pressed fresh. Massages take place in pavilions open to the terraces, and a pemangku from the village can lead melukat, the water blessing, at the spring temple a short walk down the valley.",
      image: images["spa-wellness-07"],
    },
    priceFrom: { amount: 620, currency: "USD" },
    rooms: 18,
    featured: false,
    seo: {
      title: "Sawah Retreat, Ubud",
      description:
        "Eighteen bamboo and teak pavilions among working rice terraces north of Ubud, Bali, with a pool above the river valley, open-air yoga and fresh jamu.",
    },
  },
];
