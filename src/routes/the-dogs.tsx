import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { dogs } from "@/components/site/content";
import winnie from "@/assets/winnie.jpg.asset.json";
import woody from "@/assets/woody.jpg.asset.json";
import rory from "@/assets/rory.jpg.asset.json";
import decking from "@/assets/decking-dogs.jpg.asset.json";

const title = "Meet Winnie, Woody & Rory | Valley Views Escape";
const description =
  "Meet the three dogs behind Valley Views Escape — Winnie the black cockapoo, Woody the apricot cockapoo and Rory the ginger spaniel.";

export const Route = createFileRoute("/the-dogs")({
  component: TheDogs,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/the-dogs" }],
  }),
});

const dogImages = [winnie.url, woody.url, rory.url];

function TheDogs() {
  return (
    <main>
      <PageHeader
        eyebrow="The family"
        title="Meet Winnie, Woody & Rory"
        intro="Valley Views Escape wouldn't be the same without these three. Here's a little introduction to the real stars of the show."
      />

      {/* ---------------- DOG PROFILES ---------------- */}
      <section className="mx-auto max-w-[86rem] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-10 sm:grid-cols-3 lg:gap-12">
          {dogs.map((dog, i) => (
            <Reveal key={dog.name} variant="image" delay={i * 150}>
              <figure>
                <img
                  src={dogImages[i]}
                  alt={`${dog.name}, one of the Valley Views Escape dogs`}
                  loading="lazy"
                  className="aspect-[4/5] w-full rounded-sm object-cover"
                />
                <figcaption className="mt-5">
                  <h2 className="font-serif text-3xl">{dog.name}</h2>
                  <p className="text-muted-foreground mt-3 leading-relaxed">{dog.description}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-20 max-w-2xl text-center">
          <div className="rule-leaf mx-auto max-w-xs">
            <Leaf className="text-sage h-4 w-4" aria-hidden="true" />
          </div>
          <p className="text-muted-foreground mt-8 text-lg leading-relaxed">
            They've become part of the Valley Views Escape family and you may even find a few
            little adventures featuring them during your stay.
          </p>
        </Reveal>
      </section>

      {/* ---------------- DOG FRIENDLY ---------------- */}
      <section className="bg-secondary/45 border-border border-y">
        <div className="mx-auto grid max-w-[86rem] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-28">
          <Reveal variant="image">
            <img
              src={decking.url}
              alt="Winnie, Woody and Rory sitting together on the private decking"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-sm object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Four-legged guests welcome</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Bring your best friend
            </h2>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              Valley Views Escape is dog friendly, so your four-legged family members can enjoy
              the countryside too — the surrounding fields and trails are made for happy dogs.
            </p>
            <Link
              to="/contact"
              className="link-underline text-primary mt-8 inline-flex items-center gap-2 text-[0.78rem] tracking-[0.2em] uppercase"
            >
              Book a dog friendly stay
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
