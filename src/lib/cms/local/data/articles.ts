import type { Article } from "../../types";
import { images } from "./images";
import { createPortableText } from "./portable-text";

/**
 * Journal articles. Reading times are calculated from the body copy at roughly
 * 220 words a minute and stored as plain numbers, as they would be in the CMS.
 */

function theArtOfSlowArrival(): Article {
  const { p, h2, bullet, image, imagePair, pullQuote } = createPortableText("art-slow-arrival");

  return {
    _type: "article",
    slug: "the-art-of-slow-arrival",
    title: "The Art of Slow Arrival",
    dek: "We have become very good at getting somewhere quickly and rather poor at actually arriving. A case for the longer last leg, the unhurried threshold and the first hour left deliberately empty.",
    category: "Journeys",
    author: { name: "Clara Ashdown", role: "Editor" },
    publishedAt: "2026-08-28",
    readingTime: 5,
    heroImage: images["marrakech-05"],
    featured: true,
    body: [
      p(
        "The tarmac gives out a little over half an hour south-west of Marrakech. After that the car slows to a crawl and the Agafay opens up on either side: not sand but stone, a rolling plateau of pale rubble and bare hills the colour of weak tea. On a clear afternoon in January the High Atlas stands along the whole southern horizon, snow on its upper ridges, and seems to come no closer however long you drive.",
      ),
      p(
        "My driver, a quiet man named Youssef who has made the journey several thousand times, stopped the car a kilometre short of [Kasbah Agafay](/stays/kasbah-agafay) and asked whether I would like to walk the rest. It was not a service anyone had requested. He had simply noticed, over the years, that guests who arrived on foot tended to sit out longer after dinner, and to sleep better that night.",
      ),
      p(
        "It is a small idea with deep roots. For most of the history of travel, the pace of the journey and the pace of the mind were roughly the same. You arrived at the speed of a horse, a ship or a slow train easing into a provincial station, and by the time you stepped down you had watched the place assemble itself around you. The jet broke that arrangement. We now deliver the body in an afternoon and leave the attention somewhere over the sea, to follow a day or two later.",
      ),
      h2("The last leg, taken slowly"),
      p(
        "Nobody is proposing a return to the steamship. The long-haul flight is a fact of modern life, and a perfectly civil one if you let it be. The opportunity lies in the final stretch: the last hour or two of a journey, where speed is nearly always available and very rarely necessary.",
      ),
      p(
        "Consider Ravello. From Naples airport a car will have you at the door in about ninety minutes, most of them spent on the autostrada and the tight bends of the coast road. Alternatively, take the train to Salerno and, between spring and autumn, the ferry west along the coast to Amalfi. It is a little over half an hour on the water. The majolica dome of Vietri slides past, then Cetara, whose fishing boats still go out for anchovies, then Maiori and Minori, each wedged into the mouth of its own ravine. You see Ravello long before you reach it: a line of pale walls and dark cypress some 350 metres above the sea. The drive up from Amalfi takes twenty minutes, and by then you know exactly where you are.",
      ),
      p(
        "In Kyoto the equivalent is the Randen, the single-carriage tram that rattles west from Shijo-Omiya through back gardens and level crossings to Arashiyama. It is no faster than a taxi and costs a few hundred yen. Get off at the terminus, cross the Togetsukyo bridge over the wide, shallow river, and walk the last few hundred metres to [Hoshizora](/stays/hoshizora-ryokan) with the forested hills darkening above you.",
      ),
      p(
        "In Patagonia the long way is the only way, and the better for it. Fly to Punta Arenas and the road north to Puerto Natales runs for three hours across open steppe: estancia fences, the odd rhea sprinting alongside the car, wind laying the grass flat in long silver waves. Another two hours bring you into Torres del Paine and along the water to Lago Grey Lodge. Nobody arrives there still composing emails in their head. The distance has done the work.",
      ),
      image(images["patagonia-33"], {
        caption:
          "Horses grazing near Río Serrano, on the southern road into Torres del Paine, with the mountains still wrapped in cloud.",
        layout: "wide",
      }),
      h2("Thresholds"),
      p(
        "Old buildings understood arrival better than most new ones. A riad in the Marrakech medina is entered through a plain door in a blank wall, and then a short passage that turns once, sometimes twice, before it lets you into the house. The bend was built for privacy, so that no one in the lane could see inside. Its side effect is theatre. You leave the heat and clatter of the alley, pass through a few metres of cool half-dark, and then the courtyard opens above you: an orange tree, the sound of water, a square of sky.",
      ),
      p(
        "A ryokan performs the same trick by other means. At the *genkan* the floor steps up, the shoes come off, and the outside world is left, quite literally, a level below. The corridor beyond is dim and polished and slightly longer than it needs to be, as if to give you time to lower your voice.",
      ),
      imagePair(
        images["marrakech-29"],
        images["kyoto-26"],
        "Thresholds in two cities: a sequence of arches inside the Menara pavilion in Marrakech, and the tatami hall at Shisen-do in Kyoto, giving onto its garden.",
      ),
      p(
        "These are not decorative flourishes. They are pieces of architecture designed to slow a person down at the precise moment they are most inclined to hurry, and they work on almost everyone.",
      ),
      pullQuote(
        "We now deliver the body in an afternoon and leave the attention somewhere over the sea, to follow a day or two later.",
      ),
      h2("The first hour"),
      p(
        "Which brings us to the part that hotels most often get wrong. A traveller who has been in motion for fourteen hours is met with a desk, a form, a card machine, a tour of the light switches and a briefing on breakfast times. All of it is well meant. None of it is what the body wants.",
      ),
      p(
        "Across our houses we have spent a good deal of time unlearning that sequence. The paperwork is settled before you land. Luggage goes one way and guests another. There is tea, or cold water, or in Patagonia something considerably warmer, taken sitting down. The room is shown once, briefly, and then left alone. We have come to believe that the quality of a whole stay is often settled in that first unstructured hour, and that the most useful thing a host can do with it is very little.",
      ),
      p("A few habits worth borrowing, wherever you happen to be going:"),
      bullet(
        "Land in daylight if you can. Arriving somewhere new after dark means meeting it twice.",
      ),
      bullet("Take the final leg on foot, by water or on the slowest reasonable train."),
      bullet("Leave the first evening unplanned. A table can nearly always be found."),
      bullet("Unpack one thing only: whatever you need to walk outside before dinner."),
      p(
        "At Agafay that evening I walked in with the light going, the earth walls of the kasbah turning from ochre to rose and the hills beyond going grey-violet, a dog trotting out to inspect me and then losing interest. Nobody asked me for anything. Someone handed me a glass of mint tea, and I sat on a low wall and watched the Atlas fade into the dark. Of everything on that trip, it is the moment I remember first, and still the most clearly.",
      ),
    ],
    seo: {
      title: "The Art of Slow Arrival: On Journeys and Thresholds",
      description:
        "Why the last leg of a journey matters: walking into the Agafay, the Randen tram to Arashiyama, and the first unhurried hour at a Solenne house.",
    },
  };
}

function theLemonKeepersOfRavello(): Article {
  const { p, h2, image, imagePair, pullQuote } = createPortableText("art-lemon-keepers");

  return {
    _type: "article",
    slug: "the-lemon-keepers-of-ravello",
    title: "The Lemon Keepers of Ravello",
    dek: "On the terraces above the Amalfi Coast, a handful of families still tend lemon groves by hand, beneath chestnut pergolas their grandparents built. A season with the growers who keep the old way standing.",
    category: "Craft",
    author: { name: "Tommaso Serra", role: "Contributing Editor" },
    publishedAt: "2026-08-12",
    readingTime: 5,
    // Placeholder until dedicated Amalfi lemon-terrace photography is curated.
    heroImage: images["dining-14"],
    relatedDestinationSlug: "amalfi-coast",
    featured: false,
    body: [
      p(
        "At half past six on a June morning, Aniello Ruocco is standing on the roof of a lemon grove. Not a roof in any ordinary sense, but the lattice of chestnut poles that covers the terrace like a low, open ceiling, a little over two metres above the ground. He moves across it in rubber-soled shoes, stepping only where the poles cross, tying back a loose length of netting with twine he keeps looped around one wrist. He is seventy-four. Below him, in green shade, the lemons hang at head height in their hundreds.",
      ),
      p(
        "The terraces fall away beneath [Villa Limonaia](/stays/villa-limonaia) towards Minori, eleven of them, each a strip of soil a few metres deep held up by a dry-stone wall. On this coast the walls are called *macere*, and nobody can say with confidence how old the oldest ones are. What is certain is that almost every square metre of cultivable land here was made by hand, the stone levered from the mountainside and the soil carried up in baskets, and that it has been planted with citrus for centuries. Aniello's grandfather began working these particular terraces in the 1920s, for whichever family happened to own the house above, and the Ruoccos have kept them ever since.",
      ),
      h2("The spindle lemon"),
      p(
        "The fruit in question is the *sfusato amalfitano*, and growers will tell you, with some justification, that it is not quite the lemon you buy at a supermarket. It is long and tapered at both ends, its name taken from *fuso*, a spindle. The skin is thick, pitted and heavily scented, the pith mild enough to eat, the juice bright but never harsh. Cut one on a warm afternoon and the oil in the rind will mist the air in front of the knife.",
      ),
      p(
        "It is also a demanding tree. The *sfusato* dislikes wind, and the coast is windy. It dislikes cold, and in January the tramontana comes down off the Lattari mountains with a real edge to it. So the growers built pergolas: frames of chestnut cut from the woods above Tramonti, lashed together with wire and, each winter, roofed over with straw matting or, in recent decades, dark netting. The covering holds in a little warmth, breaks the wind and, crucially, slows the fruit. A well-managed grove, held back under cover, can be picked from February into October.",
      ),
      p(
        "Every March the whole roof is re-tied by hand, pole by pole. The poles themselves last ten or twelve years before they need replacing. Aniello cuts and sets his own, as his father did before him, and has firm views on growers who buy theirs in.",
      ),
      pullQuote(
        "You can buy the poles now, of course. But then you have to trust someone else's wood.",
        "Aniello Ruocco, grower, Ravello",
      ),
      h2("Carrying the coast"),
      p(
        "For most of the last century nearly every lemon grown on the [Amalfi Coast](/destinations/amalfi-coast) left the terraces on someone's back. There were no roads to most of the groves, and to many there still are not. Porters, a good number of them women, carried wooden crates of fruit down the stepped paths to the coast road and the boats, fifty kilos and more at a time, several times a day. Aniello's mother was one of them. He remembers her leaving the house before it was light and coming home in the evening with her shoulders worn raw by the straps.",
      ),
      p(
        "Today there is a monorail of sorts: a single steel rail that climbs the terraces at an alarming angle, hauling a small motorised cart. It saves his knees. It has not changed much else. The picking is still done by hand, with clippers, one fruit at a time, because a lemon pulled from the branch tears at the stem and will not keep. The fruit is still sorted by eye on the terrace: the best for the table, the rest for *limoncello*, marmalade and the pastry kitchens of the coast.",
      ),
      image(images["amalfi-01"], {
        caption:
          "Amalfi from the water. For centuries the coast's lemons left by sea, loaded onto boats in harbours like this one.",
        layout: "wide",
      }),
      h2("Keeping it standing"),
      p(
        "The arithmetic is not encouraging. A grove on a slope this steep needs several times the labour of an orchard on flat ground, and the fruit, however fine, competes on price with lemons grown far more cheaply elsewhere. Over the past half century many terraces on the coast have been abandoned. Once a grove is left, the pergola collapses within a few winters, the *macere* begin to slump, and after a heavy autumn rain the soil goes down the mountain with them.",
      ),
      p(
        "The families who stay have found their own ways to make it work. Alongside the villa's groves the Ruoccos keep a few terraces of their own lower down, and sell what they grow to a handful of restaurants in Ravello and Amalfi, to a pastry maker in Salerno and, increasingly, to visitors, who walk down through the grove, eat lunch at the long table under the pergola and leave with a bag of fruit and a clearer idea of what it costs to grow. Aniello's granddaughter Chiara, who studied agronomy at Portici, has begun replanting the lowest terraces with young trees grafted onto bitter-orange rootstock, the traditional way.",
      ),
      // Placeholder pair until Amalfi table photography is curated.
      imagePair(
        images["dining-12"],
        images["dining-31"],
        "Lunch under the pergola: tomatoes from the lower terrace with burrata and torn bread, and something cold and bittersweet, poured before anyone sits down.",
      ),
      p(
        "At the villa, guests can spend a morning in the grove with Aniello and stay on for that lunch, which Rosaria, the cook, lays under the pergola at one and rarely clears before four. It is not a demonstration. It is simply the work, and anyone who wants to is welcome to carry a crate.",
      ),
      p(
        "By nine the sun has cleared the mountains to the east and found its way through the netting in coins of light. Aniello climbs down, slowly, one pole at a time, and hands me a lemon still cool from the shade. He watches me smell it. 'Now,' he says. 'Now you understand why we bother.'",
      ),
    ],
    seo: {
      title: "The Lemon Keepers of Ravello: Amalfi's Pergola Growers",
      description:
        "Beneath chestnut pergolas above the Amalfi Coast, a few families still grow the sfusato lemon by hand. A season on the terraces of Ravello.",
    },
  };
}

function aKyotoKitchenBeforeDawn(): Article {
  const { p, h2, image, imagePair, pullQuote } = createPortableText("art-kyoto-kitchen");

  return {
    _type: "article",
    slug: "a-kyoto-kitchen-before-dawn",
    title: "A Kyoto Kitchen Before Dawn",
    dek: "At four on a summer morning, before any guest stirs, the kitchen at Hoshizora is already at work: kombu soaking, rice washed, the day's fish on its way from the market.",
    category: "Table",
    author: { name: "Emi Hayashida", role: "Contributing Writer, Kyoto" },
    publishedAt: "2026-07-30",
    readingTime: 5,
    heroImage: images["kyoto-29"],
    relatedDestinationSlug: "kyoto",
    featured: false,
    body: [
      p(
        "The first light in the kitchen at Hoshizora comes on at ten to four. It is a single strip above the sinks, and for the next half hour it is the only one. Ryosuke Hanabusa, the head chef, who trained for eleven years in Gion before coming to the river, prefers it that way. At this hour, he says, a cook should be able to hear the water, and he is right: the loudest sounds in the room are a tap running into a steel bowl of rice and, beyond the open window, the river moving over its stones in the dark.",
      ),
      p(
        "The rice is washed first, always. Three changes of cold water, the grains turned with the fingertips rather than scrubbed, until the water runs almost clear. It will rest for an hour before it is cooked in a heavy clay *donabe* in time for breakfast. Beside it, in a wide pan, two long sheets of Rishiri kombu have been soaking in soft Kyoto water since the end of last night's service. Nearly everything the kitchen cooks today will depend on what happens to them next.",
      ),
      h2("Water, then everything else"),
      p(
        "[Kyoto](/destinations/kyoto) cooking is often described as subtle, which is true but not especially useful. It is more accurate to say that it is built on water. The city sits above a vast natural reservoir, fed by the mountains that enclose it on three sides, and its groundwater is notably soft. It draws flavour gently from kombu, from tea, from tofu and rice, and it is the reason, the chef argues, that a Kyoto dashi tastes the way it does. 'The same kombu somewhere else,' he says, 'is a different soup.'",
      ),
      p(
        "At a quarter past four the kombu goes onto a low flame. The water must not boil. He holds it at around sixty degrees for the best part of an hour, checking it with a thermometer and then, more often, with the back of a finger against the side of the pan. When the kombu is lifted out, the liquid is barely coloured and tastes at first of almost nothing, then faintly of the sea, then of something long and savoury that stays at the back of the palate. Only then does the katsuobushi go in: a handful of translucent bonito shavings, cut minutes earlier on a wooden box plane, left to steep for less than a minute and strained through cloth. There is no pressing and no squeezing. Anything forced through, he says, will cloud the broth by lunchtime.",
      ),
      h2("What the river and the hills send"),
      p(
        "By five the sky over Arashiyama has paled to a grainy blue, and the deliveries begin. July is the month of *hamo*, the pike conger, which Kyoto has eaten through the heat of summer for centuries, reputedly because it was one of the few fish hardy enough to survive the journey inland alive. This morning's arrive from the city's wholesale market in a box packed with ice. The chef's second, a quietly exact young cook named Aoi Tsuji, lays the first on a board and begins the *honegiri*: cutting through the fine bones with a heavy, square-ended knife, twenty-four strokes to every three centimetres, without once severing the skin beneath. The sound is soft and regular, like rain on a paper screen.",
      ),
      p(
        "The vegetables come from closer to hand. A farmer from Kamigamo, in the north of the city, brings round Kamo aubergines the size of a fist, glossy and nearly black, along with a crate of slender Manganji peppers. A tofu maker in Saga, ten minutes' walk away, sends blocks still faintly warm, to be simmered for breakfast. Later in the morning, if the river has been kind, there will be *ayu* from the Hozu, small sweetfish to be grilled whole on skewers and eaten head and all with a sharp green vinegar made from *tade*, the water pepper that grows along the banks.",
      ),
      image(images["kyoto-25"], {
        caption:
          "Looking up through the bamboo on the hillside above Arashiyama, a few minutes' walk from the kitchen door.",
        layout: "full",
      }),
      h2("Breakfast, taken seriously"),
      p(
        "It would be easy to assume that all this is for dinner, the long seasonal *kaiseki* that most guests come to [Hoshizora](/stays/hoshizora-ryokan) to eat. A great deal of it is. But the chef's real preoccupation at this hour is the morning meal, which he considers the harder of the two to get right, because there is nowhere for a mistake to hide.",
      ),
      pullQuote(
        "A guest remembers breakfast longer than dinner. Dinner, they expect to be good.",
        "Ryosuke Hanabusa, head chef at Hoshizora",
      ),
      p(
        "Breakfast arrives in the room on a single lacquered tray at half past seven. There is the rice, glossy and just firm, turned out of its clay pot at the table; a pale, sweet white miso soup made with the morning's dashi; a *dashimaki* omelette rolled so full of stock that it trembles; a fillet of salted mackerel grilled over charcoal; a small pot of the Saga tofu, simmered in kombu water; and three pickles from a shop in Nishiki Market, one of them the purple *shibazuke* of Ohara. Nothing on the tray is complicated. All of it depends on the hours before.",
      ),
      imagePair(
        images["dining-13"],
        images["kyoto-27"],
        "Knife work begins before first light. The water it all depends on comes down from the cedar-covered hills that ring the city.",
      ),
      p(
        "At a little after six, with the dashi strained, the fish boned and the rice resting, the chef does something he has done every morning since his apprenticeship. He warms a rough, pale bowl, whisks a thin *usucha* for each of his four cooks, and they drink it standing by the open window, not talking, while the light comes up over the hills and somewhere down the corridor the first guests begin to stir.",
      ),
    ],
    seo: {
      title: "A Kyoto Kitchen Before Dawn: Dashi, Hamo and Breakfast",
      description:
        "Four in the morning in the kitchen at Hoshizora, Arashiyama: soft water, kombu dashi, summer hamo and a ryokan breakfast built in the hours before light.",
    },
  };
}

function winterLightInPatagonia(): Article {
  const { p, h2, bullet, image, imagePair, pullQuote } = createPortableText("art-winter-light");

  return {
    _type: "article",
    slug: "winter-light-in-patagonia",
    title: "Winter Light in Patagonia",
    dek: "In midwinter Torres del Paine empties, the wind drops and the sun stays low all day. A season of long golden light, puma tracks in fresh snow and almost no one else.",
    category: "Places",
    author: { name: "Owen Harcourt", role: "Photographer and Writer" },
    publishedAt: "2026-07-09",
    readingTime: 5,
    heroImage: images["patagonia-18"],
    relatedDestinationSlug: "patagonia",
    featured: false,
    body: [
      p(
        "The sun rose at a few minutes before ten. I know this because I had been awake since seven, sitting at the window of my room at [Lago Grey Lodge](/stays/lago-grey-lodge) with a pot of coffee, watching the lake turn from black to pewter to a pale, milky grey, and waiting. When the sun came it did not so much rise as slide in sideways, low over the Paine massif to the north-east, and for about four minutes it lit the far end of the lake, where the glacier comes down to the water, before a bank of cloud took it away again.",
      ),
      p(
        "This is the thing about Patagonia in winter that no one quite prepares you for. At fifty-one degrees south, in the weeks around the June solstice, the sun never climbs much more than fifteen degrees above the horizon. There are fewer than eight hours between sunrise and sunset, and all of them look like late afternoon. The light arrives raking and golden and stays that way: long shadows at noon, the grass on the steppe lit from the side so that every stem shows, the pale granite of the Cuernos turning apricot at lunchtime and rose by four.",
      ),
      h2("The empty season"),
      p(
        "For most of its visitors [Torres del Paine](/destinations/patagonia) is a summer place. Between November and March the trails are busy, the refugios are full, and the famous wind, which can gust well beyond a hundred kilometres an hour, sends hikers bracing against their poles on the exposed passes. By late April most of that has gone. Many campsites close. The lodges that stay open do so with a fraction of their summer guests, and the wind, for reasons the local guides explain with varying degrees of confidence, largely drops.",
      ),
      p(
        "What remains is extraordinarily still. On a morning drive from the lodge towards Laguna Amarga we passed one other vehicle in three hours. Guanacos stood in the road and declined to move. A pair of Andean condors turned slowly over the ridge above Lago Sarmiento, and a grey fox trotted along the verge with the unhurried air of an animal that had not seen a car for days.",
      ),
      pullQuote(
        "Winter here does not drain the colour from the landscape. It lays it on sideways, and holds it there all day.",
      ),
      h2("Tracking the puma"),
      p(
        "The other reason to come now is the puma. Torres del Paine has one of the densest populations of wild pumas anywhere, and in winter, when the guanacos move to lower ground and the cats follow, the chances of seeing one improve considerably. Snow helps. A fresh fall overnight turns the steppe into a written record of everything that crossed it in the dark.",
      ),
      p(
        "Our tracker, Rodrigo, grew up on an estancia near Cerro Castillo and has followed the cats in this part of the park for sixteen years. He reads the ground like a morning paper. Here a puma crossed at a walk, perhaps four hours ago; here it stopped and lay down; here the prints of a guanaco begin to lengthen and then, abruptly, end. We found the cat herself a little after two in the afternoon, a young female stretched out on a rock shelf in the hills near Laguna Amarga, her flank lit gold by the low sun, watching us watch her from about three hundred metres. Nobody spoke for twenty minutes. Then she stood, stretched, and walked over the ridge, and Rodrigo quietly poured the coffee.",
      ),
      imagePair(
        images["patagonia-30"],
        images["patagonia-36"],
        "Estancia life, the world many of the park's guides grew up in: gauchos working stock in a wooden corral, and a horse in the last of the afternoon sun.",
      ),
      h2("Ice, and what it keeps"),
      p(
        "Grey Glacier, at the northern end of the lake, is a different presence in winter too. Very few people visit it now, usually on a guided day that begins by boat where the weather allows and continues on foot, with crampons, onto the ice. At this time of year the ice is at its bluest. Without strong sun the surface stays hard and clean, and the crevasses, where it is safe to look into them, fall away through every shade from turquoise to a blue so dense it reads almost as black.",
      ),
      p(
        "Standing in front of it, you become aware of time in a way that is hard to describe without sounding grand. The ice under your boots fell as snow on the Southern Patagonian Ice Field centuries ago and has been creeping towards this lake ever since. In winter the glacier front is quieter than in summer, with less meltwater and fewer collapses, and the sounds it does make, a low creak and now and then a deep internal crack, carry a remarkably long way across the water.",
      ),
      image(images["patagonia-34"], {
        caption:
          "A blue iceberg run aground on the shore of Lago Grey, carried down the lake from the glacier front, with the Paine peaks beyond.",
        layout: "wide",
      }),
      p("**If you go.** A few practical notes for the winter months:"),
      bullet(
        "June and July bring the shortest days and the stillest weather. Daytime temperatures hover between freezing and five degrees; nights are colder.",
      ),
      bullet(
        "Out of season, several of the longer trails may only be walked with a registered guide, and some close after heavy snow.",
      ),
      bullet(
        "Flights from Santiago to Punta Arenas run daily all year. From there it is about five hours by road to the lodge.",
      ),
      p(
        "On my last evening the cloud cleared completely for the first time in a week. The sun went down at a quarter to six behind the ice field, and for a long moment after it had gone the snow on the far peaks held a colour I have only ever seen in Patagonia, somewhere between rose and ash. Then the lake went dark, the lodge lights came on one by one, and someone in the main hall put another log on the long stone hearth.",
      ),
    ],
    seo: {
      title: "Winter Light in Torres del Paine, Patagonia",
      description:
        "Midwinter in Torres del Paine: low golden light, still air, puma tracking in fresh snow and Grey Glacier with almost no one else. Notes from Lago Grey.",
    },
  };
}

function zelligeAMosaicOfPatience(): Article {
  const { p, h2, image, imagePair, pullQuote } = createPortableText("art-zellige");

  return {
    _type: "article",
    slug: "zellige-a-mosaic-of-patience",
    title: "Zellige: A Mosaic of Patience",
    dek: "In a workshop beyond the Marrakech medina walls, a master and his apprentices cut glazed clay into thousands of tiny stars and petals, then assemble them face down, blind. An art measured in years.",
    category: "Craft",
    author: { name: "Camille Aubert-Ziani", role: "Design Correspondent" },
    publishedAt: "2026-06-21",
    readingTime: 4,
    heroImage: images["marrakech-02"],
    relatedDestinationSlug: "marrakech",
    featured: false,
    body: [
      p(
        "The sound reaches you before the workshop does: a dry, patient tapping, forty or fifty small blows a minute, coming from a courtyard beyond the northern walls of the medina, not far from Bab el-Khemis. Inside, six men sit in a row on low stools, each holding a square of glazed tile in one hand and a small, heavy hammer in the other. Around their feet the floor is ankle-deep in shards of green, white, black and honey-coloured clay, and the air smells faintly of wet plaster.",
      ),
      p(
        "The hammer is called a *menqach*. It has two sharpened edges, and in practised hands it cuts fired, glazed clay with a precision that is hard to believe even while you are watching it. Each cutter holds a paper template against the glazed face, traces its outline and then chips away the waste in a series of angled blows, bevelling the edge back towards the unglazed side so that every finished piece is wider at its face than at its base. The shape that emerges might be a star, a lozenge or a curved petal no bigger than a fingernail. The traditional repertoire runs to several hundred such shapes, and each one has a name.",
      ),
      h2("Twelve years to a maâlem"),
      p(
        "The workshop belongs to Maâlem Abdellah Senhaji, who is sixty-one and began as an apprentice in Fez at the age of eleven. *Maâlem* means master, and it is not a title anyone formally awards. It is simply what the other craftsmen begin to call you, at some point, once it has become obvious that you know. For Abdellah that took twelve years. First he swept. Then he cut the simplest shapes, squares and triangles, for panels that other men had designed. Only after a decade did he begin to lay out patterns of his own.",
      ),
      pullQuote(
        "The hand learns quickly. The eye takes longer. The eye has to learn to see a pattern that does not exist yet.",
        "Maâlem Abdellah Senhaji",
      ),
      p(
        "The clay still comes from Fez, from the grey, dense earth of the hills around the city, which has been worked into tiles there since at least the fourteenth century. It is soaked, trodden, rolled out into squares roughly ten centimetres across, dried in the sun, fired, glazed and fired again, traditionally in kilns fed with the crushed pits left over from pressing olives. By the time a square of colour reaches Abdellah's workshop in [Marrakech](/destinations/marrakech), it has been months in the making.",
      ),
      h2("Working blind"),
      p(
        "The strangest part of the process comes at the end. Once the pieces for a panel have been cut, they are laid out on the floor face down, glaze against the ground, by a craftsman working from a drawing and from memory. He cannot see the colours. He places each piece by its shape alone, building outwards from the centre of the pattern in rings, so tightly that the joints between them are scarcely a millimetre wide. When the design is complete, a thin wash of mortar is poured over the backs, then a thicker layer, and the whole thing is left to set. Only when the panel is lifted and turned over does anyone see whether it is right.",
      ),
      p(
        "It nearly always is. Abdellah's youngest apprentice, Hamza, who is nineteen, laid his first panel last spring: a modest eight-pointed star in black and white, about the size of a dinner plate. It contained, the master points out, a single piece set the wrong way up, its bare clay back facing the room. The panel hangs by the workshop door, unrepaired, as a reminder to everyone.",
      ),
      image(images["marrakech-06"], {
        caption:
          "The courtyard of the Ben Youssef Madrasa, completed in the 1560s: carved cedar, stucco and zellige arranged around a single long pool.",
        layout: "full",
      }),
      h2("Tile for living with"),
      p(
        "Walk through the medina and it is easy to think of zellige as a thing of palaces and madrasas, and the great monuments certainly show what the craft can do at its most ambitious. Around the courtyard of the Ben Youssef Madrasa, the tiled dados run unbroken for metre after metre, the geometry so dense that it seems to shimmer in the heat. But most zellige was never made for monuments. It was made for houses: for fountain walls and courtyard floors, the steps of a bath, the low bench where the family took tea. It is a surface meant to be touched, walked on, splashed and scrubbed, and it improves with all of it, the glazes softening a little over decades of use.",
      ),
      imagePair(
        images["marrakech-10"],
        images["marrakech-15"],
        "The medina's other patient crafts: carved plaster rising above an arch at the Ben Youssef Madrasa, and pierced brass lanterns in a workshop in Souk Haddadine.",
      ),
      p(
        "That is how it is used at [Riad Assoura](/stays/riad-assoura), in the Mouassine quarter, where Abdellah's workshop spent the better part of a year restoring the orange-tree courtyard. Its fountain of green and white zellige, cracked and patched with cement at some point in the last century, was taken down piece by piece, numbered and relaid, with new tiles cut to replace those that could not be saved. The new pieces are a shade brighter than the old. Give it twenty years, Abdellah says, and no one will be able to tell.",
      ),
      p(
        "Before I leave he picks a single offcut from the floor and presses it into my hand: a small green petal with a bevelled edge, its glaze crazed finely across the face. It weighs almost nothing. It took, by his reckoning, about four seconds to cut, and fifty years to learn how.",
      ),
    ],
    seo: {
      title: "Zellige: Inside a Marrakech Mosaic Workshop",
      description:
        "Inside a Marrakech zellige workshop, where a maâlem and his apprentices cut glazed clay by hand and assemble every panel face down, from memory.",
    },
  };
}

function theQuietScienceOfRest(): Article {
  const { p, h2, image, imagePair, pullQuote } = createPortableText("art-quiet-rest");

  return {
    _type: "article",
    slug: "the-quiet-science-of-rest",
    title: "The Quiet Science of Rest",
    dek: "Rest is less the absence of activity than a set of conditions: darkness, cool air, warm water, quiet, something green. What the research suggests, and how to build around it.",
    category: "Wellbeing",
    author: { name: "Maud Ellery", role: "Wellbeing Editor" },
    publishedAt: "2026-06-02",
    readingTime: 5,
    heroImage: images["people-lifestyle-03"],
    featured: false,
    body: [
      p(
        "Most people who check into a hotel hoping to rest do not sleep especially well on the first night. This is rarely the fault of the mattress. Sleep researchers have a name for it, the first-night effect, and a rather elegant explanation. In an unfamiliar room, part of the brain appears to keep a lighter watch than usual during deep sleep, staying more responsive to unexpected sounds. It is probably very old equipment, sensibly designed for animals that sleep in places where things might go wrong. It is also one reason a two-night stay so often feels like one.",
      ),
      p(
        "It is a useful place to begin, because it makes a point that the wellness industry tends to hurry past. Rest is not something that can be applied to a person, like a treatment. It is something the body does by itself, reliably and well, when the conditions allow, and rather badly when they do not. The work, for anyone who wants to rest or to help others do so, lies mostly in getting those conditions right.",
      ),
      h2("Light, and the lack of it"),
      p(
        "The most powerful of those conditions is light. The body's internal clock takes its cue chiefly from it, above all from bright light in the morning and darkness in the evening. Daylight outdoors, even under cloud, is many times brighter than a well-lit room, and it tells the clock, in effect, that the day has begun. Artificial light after dark, particularly the bluish light of screens and cool-white bulbs, does the opposite, delaying the evening rise of melatonin, the hormone that helps signal to the body that night has come.",
      ),
      p(
        "In practice this comes down to two things that sound almost too simple: go outside early, and let the evenings grow properly dim. At [Sawah Retreat](/stays/sawah-retreat), above the rice terraces outside Ubud, the lamps along the paths are warm, low and set close to the ground, and after sunset the lighting in the pavilions is lowered in stages through the evening. Breakfast is taken on open verandas, where the morning comes straight in off the fields. Guests notice the dim evenings at once. The effect of the bright mornings takes longer, usually until the third night, when they realise they have been asleep before ten.",
      ),
      h2("Cool rooms, warm water"),
      p(
        "The second condition is temperature, and here the science offers a pleasing paradox. To fall asleep, the body's core temperature needs to drop by around a degree. One of the more dependable ways to encourage that is to get warm first. A bath or shower at about forty degrees, taken an hour or two before bed, draws blood towards the hands and feet, where heat escapes more easily, and the core cools more quickly afterwards. Reviews that have pooled the results of such studies suggest it helps people fall asleep noticeably sooner.",
      ),
      p(
        "The bedroom, meanwhile, should be cool. Most sleep guidance suggests somewhere between sixteen and nineteen degrees, with bedding that breathes. Linen and cotton do this well. Heavy synthetic duvets do not.",
      ),
      imagePair(
        images["nature-texture-07"],
        images["interiors-18"],
        "Both ends of a well-made evening: cool, breathable linen, and a deep bath an hour or two before bed.",
      ),
      p(
        "Japanese bathing culture arrived at the first half of this long ago, without any need for the word thermoregulation. At [Hoshizora](/stays/hoshizora-ryokan) in Arashiyama, guests bathe in their own hinoki tubs before dinner and, if they choose, once more an hour before bed, then return to a tatami room where the futon has been laid on the floor and a window left open a crack to the night air off the river.",
      ),
      pullQuote(
        "The body knows perfectly well how to rest. What it needs from a house is the right conditions, and then to be left alone.",
      ),
      h2("Quiet, and something green"),
      p(
        "The last two conditions are harder to measure, and the evidence around them is younger, but they will be familiar to anyone who has spent a week somewhere truly quiet. Noise fragments sleep even when it does not wake us, and the sounds that disturb us most are the irregular ones: a door, a voice, a motorbike on a distant road. Steady natural sound, running water or rain on a roof, seems to trouble us far less, and many people find it actively soothing.",
      ),
      p(
        "Then there is the question of what we look at. Environmental psychologists have long argued that natural scenes, leaves moving, water, the slow drift of cloud, hold the attention gently without demanding anything of it, giving the parts of the mind responsible for effortful concentration a chance to recover. The Japanese practice of *shinrin-yoku*, or forest bathing, named in the early 1980s, rests on a similar intuition. You need not take a view on the precise mechanisms to recognise the experience of sitting in front of a moss garden for twenty minutes and standing up with the sense that something has been quietly put back in order.",
      ),
      image(images["kyoto-40"], {
        caption:
          "Sunlight on the moss at Gio-ji, in Kyoto's Sagano district: slender trunks, soft green and nothing at all that asks for your attention.",
        layout: "wide",
      }),
      p(
        "None of this requires a spa menu. It requires a room that gets properly dark, a bath that gets properly hot, a window that opens, a bed dressed in something that breathes and a view with something living in it. Perhaps most of all, it requires a host prepared to do less: fewer announcements, fewer activities, fewer reasons to look at a screen after dinner.",
      ),
      p(
        "A useful test, I have come to think, is to notice what happens on the fourth morning of a stay. If you wake before the alarm, in daylight, and lie there a while listening to something that is not traffic, the house has done its job. Everything else is detail.",
      ),
    ],
    seo: {
      title: "The Quiet Science of Rest: Light, Warmth and Sleep",
      description:
        "What sleep research suggests about rest, from the first-night effect to warm baths and morning light, and how a house can be designed around it.",
    },
  };
}

export const articles: Article[] = [
  theArtOfSlowArrival(),
  theLemonKeepersOfRavello(),
  aKyotoKitchenBeforeDawn(),
  winterLightInPatagonia(),
  zelligeAMosaicOfPatience(),
  theQuietScienceOfRest(),
];
