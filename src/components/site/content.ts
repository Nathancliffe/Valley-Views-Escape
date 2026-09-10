/**
 * Single source of truth for site content.
 * Structured so it can later be served from a lightweight CMS
 * (pages / faqs / gallery / site settings) without touching components.
 */

export const siteSettings = {
  businessName: "Valley Views Escape",
  strapline: "Beautiful places. Lasting memories.",
  location: "Todber Valley • Gisburn • Ribble Valley",
  /* PLACEHOLDER — replace with the real booking/availability link */
  bookingUrl: "/contact",
  email: "hello@valleyviewsescape.com",
  phone: "07808 084222",
  socials: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61593610795026",
    },
  ] as { label: string; href: string }[],
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "The Caravan", href: "/the-escape" },
  { label: "About Us", href: "/the-dogs" },
  { label: "On The Park", href: "/explore" },
  { label: "Things To Do", href: "/guides" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const headlineFeatures = [
  { title: "Sleeps up to 6", note: "Room for the whole family" },
  { title: "2 bedrooms", note: "Plus a sofa bed in the living area" },
  { title: "Private decking", note: "Your own spot to sit out" },
  { title: "Countryside views", note: "Open fields all around" },
  { title: "Dog friendly", note: "Four-legged family welcome too" },
  { title: "Central heating", note: "Warm and cosy whatever the season" },
  { title: "Double glazed windows", note: "Snug, quiet and well insulated" },
  { title: "Free WiFi", note: "Stay connected if you need to" },
  { title: "Fully equipped kitchen", note: "Everything you need to cook in" },
];


export const practicalFeatures = [
  "Sofa bed",
  "Microwave",
  "Air fryer",
  "Slow cooker",
  "Toastie maker",
  "Comfortable living and dining area",
  "Bathroom with shower",
  "Parking close to the caravan",
];

export const destinations = [
  { name: "Gisburn", note: "Village life on the doorstep" },
  { name: "Clitheroe", note: "Market town in the Ribble Valley" },
  { name: "Skipton", note: "Gateway to the Dales" },
  { name: "Gisburn Forest", note: "Trails and woodland" },
  { name: "Forest of Bowland", note: "Open countryside" },
  { name: "Yorkshire Dales", note: "Wide valleys and drystone walls" },
];

export const parkFacilities = [
  { name: "Shop", note: "On-site shop for everyday essentials" },
  { name: "Bar & restaurant", note: "The Steamer Inn on the park" },
  { name: "Games room", note: "Somewhere for the family on quieter days" },
  { name: "Park", note: "Play area for the little ones" },
  { name: "Football field", note: "Space for a kickabout" },
  { name: "Dog field", note: "A dog walking field for a good run around" },
  { name: "Launderette", note: "Handy for longer stays" },
];


export const guides = [
  {
    title: "Local Walking Guide",
    subtitle: "Walks within 5 miles",
    description:
      "Easy, medium and harder walks close to Todber Valley — riverside paths, pretty villages, wildlife, heritage and big Ribble Valley views, with honest notes for dog walkers.",
    details: ["5 local walks", "Easy to hard", "Dog-walking notes"],
    url: "/guides/guide-local-walks.pdf",
    filename: "valley-views-local-walking-guide.pdf",
  },
  {
    title: "Places to Visit",
    subtitle: "Near Gisburn",
    description:
      "Our favourite days out right on your doorstep — historic towns, charming villages, country pubs and peaceful walks, each with a pub pick and drive time from Gisburn.",
    details: ["12 places to visit", "Pub picks for each", "Drive times included"],
    url: "/guides/guide-places-to-visit.pdf",
    filename: "valley-views-places-to-visit-guide.pdf",
  },
];

export const experiences = [
  "Country pubs and cafés",
  "Scenic walks",
  "Family attractions",
  "Historic villages and market towns",
];

export const dogs = [
  {
    name: "Winnie",
    description: "The little black cockapoo who likes to keep everyone organised.",
  },
  {
    name: "Woody",
    description: "Our apricot cockapoo and, quite simply, daft as a brush.",
  },
  {
    name: "Rory",
    description: "Their ginger spaniel son who loves nothing more than running through the fields.",
  },
];

/**
 * FAQ content.
 */
export const faqs = [
  {
    category: "Accommodation",
    question: "How many guests can stay?",
    answer:
      "The caravan sleeps up to 6 guests across 2 bedrooms plus a sofa bed in the living area.",
  },
  {
    category: "Facilities",
    question: "What is provided in the kitchen?",
    answer:
      "A fully equipped kitchen including a microwave, air fryer, slow cooker and toastie maker.",
  },
  {
    category: "Location",
    question: "Where exactly is Valley Views Escape?",
    answer:
      "At Todber Valley Holiday Park near Gisburn in the Ribble Valley, within easy reach of local towns, attractions and days out.",
  },
  {
    category: "Dogs / pets",
    question: "Can we bring our dog?",
    answer:
      "Yes — well-behaved dogs are very welcome at Valley Views Escape. There's even a dedicated dog walking field on the park for a good run around.",
  },
];
