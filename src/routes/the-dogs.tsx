import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, FileText, Leaf } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { dogs } from "@/components/site/content";
import winnie from "@/assets/winnie.jpg";
import woody from "@/assets/woody.jpg";
import rory from "@/assets/rory.jpg";

import headerFull from "@/assets/valley-views-header.jpeg";
import headerTablet from "@/assets/valley-views-header-1024.jpg";
import headerMobile from "@/assets/valley-views-header-640.jpg";

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

const dogImages = [winnie, woody, rory];

function TheDogs() {
  return (
    <main>
      <PageHeader
        eyebrow="The family"
        title="Meet Winnie, Woody & Rory"
        intro="Valley Views Escape wouldn't be the same without these three. Here's a little introduction to the real stars of the show."
        image={{
          src: headerFull,
          srcSet: `${headerMobile} 640w, ${headerTablet} 1024w, ${headerFull} 1584w`,
          alt: "Winnie, Woody and Rory sitting together in a grassy field with views over the Ribble Valley hills",
        }}
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
                  className="aspect-[4/5] w-full rounded-sm object-cover object-[50%_30%]"
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

        {/* ---------------- STORYBOOK DOWNLOAD ---------------- */}
        <Reveal
          delay={120}
          className="border-border mx-auto mt-16 flex max-w-3xl flex-col rounded-sm border p-8 sm:p-10"
        >
          <div className="text-primary flex items-center gap-3">
            <FileText className="h-5 w-5" aria-hidden="true" />
            <span className="eyebrow !text-[0.65rem]">A little story about the three</span>
          </div>
          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
            Three Mischievous Tales
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            A little book all about Winnie, Woody and Rory — three mischievous tales from
            their adventures around Todber Valley. Perfect bedtime reading for younger
            guests, or a lovely keepsake from your stay.
          </p>
          <ul className="text-muted-foreground mt-6 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="bg-primary h-1 w-1 rounded-full" aria-hidden="true" />
              Three original stories
            </li>
            <li className="flex items-center gap-2">
              <span className="bg-primary h-1 w-1 rounded-full" aria-hidden="true" />
              Featuring Winnie, Woody & Rory
            </li>
            <li className="flex items-center gap-2">
              <span className="bg-primary h-1 w-1 rounded-full" aria-hidden="true" />
              Free to download and keep
            </li>
          </ul>
          <a
            href="/guides/three-mischievous-tales.pdf"
            download="valley-views-three-mischievous-tales.pdf"
            target="_blank"
            rel="noopener"
            className="bg-primary text-primary-foreground hover:bg-primary/90 mt-8 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-[0.78rem] tracking-[0.2em] uppercase transition-colors"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download the storybook
          </a>
        </Reveal>
      </section>

      {/* ---------------- DOG FRIENDLY ---------------- */}
      <section className="bg-secondary/45 border-border border-y">
        <div className="mx-auto grid max-w-[86rem] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-28">
          <Reveal variant="image">
            <img
              src={headerFull}
              alt="Winnie, Woody and Rory sitting together in a grassy field with rolling countryside behind"
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
