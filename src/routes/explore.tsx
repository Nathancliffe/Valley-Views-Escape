import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, MapPin } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { destinations, experiences, parkFacilities } from "@/components/site/content";
import s1 from "@/assets/site-photo-1.jpg.asset.json";
import s2 from "@/assets/site-photo-2.jpg.asset.json";
import s3 from "@/assets/site-photo-3.jpg.asset.json";
import s4 from "@/assets/site-photo-4.jpg.asset.json";
import s5 from "@/assets/site-photo-5.jpg.asset.json";
import s6 from "@/assets/site-photo-6.jpg.asset.json";
import s7 from "@/assets/site-photo-7.jpg.asset.json";
import s8 from "@/assets/site-photo-8.jpg.asset.json";
import s9 from "@/assets/site-photo-9.jpg.asset.json";

const title = "Explore the Ribble Valley | Valley Views Escape";
const description =
  "Explore the Ribble Valley, Yorkshire Dales and Forest of Bowland from Valley Views Escape, plus Todber Valley's shop, bar and restaurant, games room, park, football field, dog field and launderette.";

export const Route = createFileRoute("/explore")({
  component: Explore,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/explore" }],
  }),
});

const destinationImages = [
  { src: s1.url, alt: "Pendle Hill rising above the fields near Todber Valley" },
  { src: s2.url, alt: "Rolling green hills and hedgerows in the Ribble Valley" },
  { src: s7.url, alt: "The Todber Valley Holiday Park entrance sign with countryside behind" },
  { src: s9.url, alt: "Outdoor seating on the terrace looking out over the valley" },
];

const facilityImages = [
  { src: s8.url, alt: "The Steamer Inn on the park, with reception and shop" },
  { src: s6.url, alt: "The front of The Steamer Inn bar and restaurant" },
  { src: s3.url, alt: "The dog walking area sign on the park's dog field" },
  { src: s5.url, alt: "Winnie, Woody and Rory running in the dog walking field" },
];

function Explore() {
  return (
    <main>
      <PageHeader
        eyebrow="Explore"
        title="The Ribble Valley & beyond"
        intro="There is plenty to do, whether you want a full day out or simply a quiet walk followed by a cosy pub lunch."
      />

      {/* ---------------- DESTINATIONS ---------------- */}
      <section className="mx-auto max-w-[86rem] px-5 py-20 sm:px-8 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Days out</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
            Beautiful places on your doorstep
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((place, i) => (
            <Reveal key={place.name} delay={(i % 3) * 100}>
              <div className="border-border flex items-start gap-4 border-t pt-5">
                <MapPin className="text-sage mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="font-serif text-2xl">{place.name}</h3>
                  <p className="text-muted-foreground mt-1 text-sm">{place.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- IMAGE STRIP ---------------- */}
      <section className="bg-secondary/45 border-border border-y">
        <div className="mx-auto max-w-[86rem] px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {destinationImages.map((image, i) => (
              <Reveal key={image.src} variant="image" delay={i * 100}>
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="aspect-[3/4] w-full rounded-sm object-cover"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- ON THE PARK ---------------- */}
      <section className="mx-auto max-w-[86rem] px-5 py-20 sm:px-8 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">On the park</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
            Everything on your doorstep at Todber Valley
          </h2>
          <p className="text-muted-foreground mt-6 leading-relaxed">
            You don't have to go far for a bite to eat, a walk with the dog or an afternoon with the
            family — the park has plenty to keep everyone happy.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {parkFacilities.map((facility, i) => (
            <Reveal key={facility.name} delay={(i % 3) * 100}>
              <div className="border-border flex items-start gap-4 border-t pt-5">
                <Leaf className="text-sage mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="font-serif text-2xl">{facility.name}</h3>
                  <p className="text-muted-foreground mt-1 text-sm">{facility.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facilityImages.map((image, i) => (
            <Reveal key={image.src} variant="image" delay={i * 100}>
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-sm object-cover"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- GUIDES CALLOUT ---------------- */}
      <section className="bg-secondary/45 border-border border-y">
        <div className="mx-auto max-w-[86rem] px-5 py-16 sm:px-8 lg:py-20">
          <Reveal className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <div className="max-w-xl">
              <p className="eyebrow">Free downloads</p>
              <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
                Take our local guides with you
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Download our walking guide and places-to-visit guide — walks within 5 miles
                of Todber Valley and our favourite days out near Gisburn.
              </p>
            </div>
            <Link
              to="/guides"
              className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3 text-[0.78rem] tracking-[0.2em] uppercase transition-colors"
            >
              View the guides
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------- EXPERIENCES ---------------- */}
      <section className="mx-auto max-w-[86rem] px-5 py-20 sm:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
          <Reveal>
            <Leaf className="text-sage h-5 w-5" aria-hidden="true" strokeWidth={1.2} />
            <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
              Something for every pace
            </h2>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              From long countryside walks to lazy afternoons in a country pub, the area around
              Todber Valley has something for everyone.
            </p>
            <Link
              to="/contact"
              className="link-underline text-primary mt-8 inline-flex items-center gap-2 text-[0.78rem] tracking-[0.2em] uppercase"
            >
              Plan your stay
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {experiences.map((item, i) => (
              <Reveal key={item} delay={i * 100}>
                <div className="border-border bg-secondary/30 h-full rounded-sm border p-6">
                  <p className="font-serif text-xl">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
