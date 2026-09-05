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
  bookingUrl: "#contact",
  /* PLACEHOLDER — replace with the real enquiry email address */
  email: "[email address to be supplied]",
  /* PLACEHOLDER — replace with the real contact number */
  phone: "[phone number to be supplied]",
  /* Add social links here once supplied — none are shown while empty */
  socials: [] as { label: string; href: string }[],
};

export const navigation = [
  { label: "Home", href: "#top" },
  { label: "The Escape", href: "#the-escape" },
  { label: "Explore", href: "#explore" },
  { label: "The Dogs", href: "#the-dogs" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export const headlineFeatures = [
  { title: "Sleeps up to 6", note: "Room for the whole family" },
  { title: "2 bedrooms", note: "Plus a sofa bed in the living area" },
  { title: "Private decking", note: "Your own spot to sit out" },
  { title: "Countryside views", note: "Open fields all around" },
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
 * FAQ content — PLACEHOLDER QUESTIONS ONLY.
 * Replace each answer with the real wording before the site goes live.
 */
export const faqs = [
  {
    category: "Booking",
    question: "How do I check availability and book?",
    answer: "[Placeholder — booking process to be supplied.]",
  },
  {
    category: "Check-in / check-out",
    question: "What are the check-in and check-out times?",
    answer: "[Placeholder — check-in and check-out times to be supplied.]",
  },
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
    answer: "[Placeholder — pet policy to be supplied.]",
  },
  {
    category: "What to bring",
    question: "What should we bring with us?",
    answer: "[Placeholder — details of what is and isn't provided to be supplied.]",
  },
];
