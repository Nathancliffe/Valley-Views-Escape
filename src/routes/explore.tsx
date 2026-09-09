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
  "Valley Views Escape is perfectly placed for exploring the Ribble Valley, Yorkshire Dales and Forest of Bowland — Gisburn, Clitheroe, Skipton, country pubs, walks and family days out.";

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
