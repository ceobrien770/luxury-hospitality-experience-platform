/**
 * GROQ queries. Projections reshape documents close to the app's content
 * types so mappers in ./index.ts only resolve assets and references.
 */
const image = /* groq */ `{
  alt,
  credit,
  hotspot,
  asset->{ _id, url, metadata { lqip, dimensions, palette } }
}`;

const seo = /* groq */ `seo{ title, description, "image": image ${image} }`;

const chapter = /* groq */ `{ "id": _key, eyebrow, title, body, "image": image ${image} }`;

export const siteSettingsQuery = /* groq */ `*[_type == "siteSettings"][0]{
  name,
  tagline,
  description,
  "primaryNavigation": primaryNavigation[]{ label, href, "image": image ${image} },
  "secondaryNavigation": secondaryNavigation[]{ label, href },
  "legalNavigation": legalNavigation[]{ label, href },
  contact,
  social[]{ label, href },
  "defaultSeoImage": defaultSeoImage ${image}
}`;

const destinationFields = /* groq */ `
  "slug": slug.current,
  name,
  country,
  region,
  tagline,
  intro,
  "heroImage": heroImage ${image},
  "cardImage": cardImage ${image},
  "gallery": gallery[] ${image},
  facts[]{ label, value },
  bestSeason,
  "chapters": chapters[] ${chapter},
  "coordinates": { "lat": location.lat, "lng": location.lng },
  ${seo}
`;

export const destinationsQuery = /* groq */ `*[_type == "destination" && defined(slug.current)] | order(orderRank asc, name asc){ ${destinationFields} }`;

export const destinationQuery = /* groq */ `*[_type == "destination" && slug.current == $slug][0]{ ${destinationFields} }`;

const propertyFields = /* groq */ `
  "slug": slug.current,
  name,
  "destinationSlug": destination->slug.current,
  location,
  category,
  tagline,
  summary,
  description,
  "heroImage": heroImage ${image},
  "cardImage": cardImage ${image},
  "gallery": gallery[] ${image},
  highlights[]{ label, value },
  amenities,
  "suites": suites[]{ "id": _key, name, size, guests, description, features, "image": image ${image} },
  "dining": dining{ title, body, "image": image ${image} },
  "wellness": wellness{ title, body, "image": image ${image} },
  priceFrom{ amount, currency },
  rooms,
  "featured": coalesce(featured, false),
  ${seo}
`;

export const propertiesQuery = /* groq */ `*[_type == "property" && defined(slug.current)] | order(orderRank asc, name asc){ ${propertyFields} }`;

export const propertyQuery = /* groq */ `*[_type == "property" && slug.current == $slug][0]{ ${propertyFields} }`;

export const experiencesQuery = /* groq */ `*[_type == "experience" && defined(slug.current)] | order(orderRank asc, title asc){
  "slug": slug.current,
  title,
  "destinationSlug": destination->slug.current,
  category,
  duration,
  summary,
  "image": image ${image}
}`;

const articleFields = /* groq */ `
  "slug": slug.current,
  title,
  dek,
  category,
  "author": author->{ name, role },
  publishedAt,
  // ~200 words per minute, ~5 characters per word
  "readingTime": round(length(pt::text(body)) / 5 / 200),
  "heroImage": heroImage ${image},
  "body": body[]{
    ...,
    _type == "imageBlock" => { _type, _key, caption, layout, "image": image ${image} },
    _type == "imagePair" => { _type, _key, caption, "images": images[] ${image} },
    _type == "pullQuote" => { _type, _key, quote, attribution }
  },
  "relatedDestinationSlug": relatedDestination->slug.current,
  "featured": coalesce(featured, false),
  ${seo}
`;

export const articlesQuery = /* groq */ `*[_type == "article" && defined(slug.current) && publishedAt <= now()] | order(publishedAt desc){ ${articleFields} }`;

export const articleQuery = /* groq */ `*[_type == "article" && slug.current == $slug][0]{ ${articleFields} }`;

export const homePageQuery = /* groq */ `*[_type == "homePage"][0]{
  "hero": hero{
    "intervalMs": coalesce(intervalMs, 7000),
    "slides": slides[]{
      "id": _key,
      eyebrow,
      title,
      href,
      "image": image ${image},
      "video": select(defined(video.asset) => {
        "src": video.asset->url,
        "srcMobile": videoMobile.asset->url,
        "poster": image ${image},
        "width": coalesce(videoWidth, 1920),
        "height": coalesce(videoHeight, 1080)
      })
    }
  },
  intro{ eyebrow, statement, cta{ label, href } },
  "destinations": destinations{ eyebrow, title, "slugs": items[]->slug.current },
  "story": story{ eyebrow, title, "chapters": chapters[] ${chapter} },
  "parallax": parallax{ quote, attribution, "images": images[] ${image} },
  "featuredStays": featuredStays{ eyebrow, title, "slugs": items[]->slug.current },
  "experiences": experiences{ eyebrow, title, "slugs": items[]->slug.current },
  "press": press[]{ "id": _key, outlet, quote },
  "testimonials": testimonials[]{ "id": _key, quote, author, context },
  journal{ eyebrow, title },
  "inquiry": inquiry{ eyebrow, title, body, "image": image ${image}, cta{ label, href } },
  ${seo}
}`;
