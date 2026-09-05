import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  BedDouble,
  Users,
  Trees,
  Wifi,
  UtensilsCrossed,
  Mountain,
  Leaf,
  ArrowRight,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Gallery } from "@/components/site/Gallery";
import { useParallax } from "@/components/site/Parallax";
import {
  destinations,
  dogs,
  experiences,
  faqs,
  headlineFeatures,
  practicalFeatures,
  siteSettings,
} from "@/components/site/content";
import hero from "@/assets/decking-dogs.jpg.asset.json";
import landscape from "@/assets/valley-landscape.jpg.asset.json";
import coffee from "@/assets/morning-coffee.jpg.asset.json";
import forest from "@/assets/gisburn-forest.jpg.asset.json";
import town from "@/assets/market-town.jpg.asset.json";
import dales from "@/assets/yorkshire-dales.jpg.asset.json";
import pub from "@/assets/country-pub.jpg.asset.json";
import winnie from "@/assets/winnie.jpg.asset.json";
import woody from "@/assets/woody.jpg.asset.json";
import rory from "@/assets/rory.jpg.asset.json";

const title = "Valley Views Escape | Holiday Caravan at Todber Valley, Gisburn";
const description =
  "Valley Views Escape is a comfortable holiday caravan at Todber Valley near Gisburn in the Ribble Valley. Sleeps 6, private decking and countryside views.";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          name: "Valley Views Escape",
          description,
          slogan: "Beautiful places. Lasting memories.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Gisburn",
            addressRegion: "Ribble Valley, Lancashire",
            addressCountry: "GB",
          },
          amenityFeature: [
            "Sleeps up to 6",
            "2 bedrooms",
            "Private decking",
            "Free WiFi",
            "Fully equipped kitchen",
          ].map((name) => ({ "@type": "LocationFeatureSpecification", name })),
        }),
      },
    ],
  }),
});

const featureIcons = [Users, BedDouble, Trees, Mountain, Wifi, UtensilsCrossed];

const destinationImages = [forest, town, dales, pub];

function Home() {
  const [loaded, setLoaded] = useState(false);
  const viewsParallax = useParallax(46);

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const shown = (extra = "") => `reveal ${loaded ? "is-visible" : ""} ${extra}`.trim();

  return (
    <>
      <Header />
      <main id="top">
        {/* ---------------- HERO ---------------- */}
        <section className="relative flex min-h-[92svh] items-end overflow-hidden">
          <img
            src={hero.url}
            alt="Winnie, Woody and Rory on the decking at Valley Views Escape with open countryside behind"
            width={1150}
            height={706}
            fetchPriority="high"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ${loaded ? "opacity-100" : "opacity-0"}`}
          />
          <div className="from-ink/70 via-ink/25 absolute inset-0 bg-gradient-to-t to-transparent" />

          <div className="relative mx-auto w-full max-w-[86rem] px-5 pt-32 pb-16 sm:px-8 lg:pb-24">
            <p
              className={shown("eyebrow !text-cream/85")}
              style={{ transitionDelay: "200ms" }}
            >
              Todber Valley · Gisburn · Ribble Valley
            </p>
            <h1
              className={shown("text-cream mt-5 max-w-4xl font-serif text-5xl leading-[1.04] sm:text-6xl lg:text-8xl")}
              style={{ transitionDelay: "320ms" }}
            >
              Valley Views Escape
            </h1>
            <p
              className={shown("text-cream/90 mt-4 font-serif text-2xl italic sm:text-3xl")}
              style={{ transitionDelay: "480ms" }}
            >
              Beautiful places. Lasting memories.
            </p>
            <p
              className={shown("text-cream/85 mt-6 max-w-2xl text-base leading-relaxed sm:text-lg")}
              style={{ transitionDelay: "620ms" }}
            >
              Escape to the countryside and enjoy a relaxing stay at Valley Views Escape, our
              comfortable holiday caravan at Todber Valley, Gisburn, surrounded by beautiful views
              and perfectly placed for exploring the Ribble Valley, Yorkshire Dales and Forest of
              Bowland.
            </p>
            <div
              className={shown("mt-10 flex flex-col gap-3 sm:flex-row sm:items-center")}
              style={{ transitionDelay: "780ms" }}
            >
              <a
                href={siteSettings.bookingUrl}
                className="bg-primary text-primary-foreground hover:bg-sage-deep/90 inline-flex h-13 items-center justify-center rounded-sm px-8 py-4 text-[0.75rem] tracking-[0.22em] uppercase transition-transform duration-300 hover:-translate-y-0.5"
              >
                Check availability
              </a>
              <a
                href="#the-escape"
                className="border-cream/60 text-cream hover:bg-cream/10 inline-flex h-13 items-center justify-center rounded-sm border px-8 py-4 text-[0.75rem] tracking-[0.22em] uppercase transition-colors duration-300"
              >
                Explore the escape
              </a>
            </div>
          </div>
        </section>

        {/* ---------------- INTRO ---------------- */}
        <section className="mx-auto max-w-[86rem] px-5 py-20 sm:px-8 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow">A slower pace</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                A countryside escape,
                <br />
                made easy.
              </h2>
              <p className="text-muted-foreground mt-7 max-w-xl text-lg leading-relaxed">
                Whether you're planning a peaceful break, a family getaway or a few days exploring
                the countryside, Valley Views Escape has everything you need to settle in and enjoy
                your stay.
              </p>
              <div className="rule-leaf mt-10 max-w-xs">
                <Leaf className="text-sage h-4 w-4" aria-hidden="true" />
              </div>
            </Reveal>
            <Reveal variant="image" delay={150}>
              <img
                src={coffee.url}
                alt="A mug of coffee on the decking rail looking out over open countryside"
                width={1280}
                height={960}
                loading="lazy"
                className="aspect-[5/4] w-full rounded-sm object-cover"
              />
            </Reveal>
          </div>
        </section>

        {/* ---------------- THE ESCAPE ---------------- */}
        <section id="the-escape" className="bg-secondary/45 border-border border-y">
          <div className="mx-auto max-w-[86rem] px-5 py-20 sm:px-8 lg:py-32">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">The escape</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Your home away from home
              </h2>
              <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
                Our caravan sleeps up to 6 guests and has been set up with comfort and convenience
                in mind.
              </p>
            </Reveal>

            <ul className="mt-14 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
              {headlineFeatures.map((feature, i) => {
                const Icon = featureIcons[i] ?? Leaf;
                return (
                  <Reveal as="li" key={feature.title} delay={i * 90}>
                    <div className="border-border bg-background/70 hover:border-sage/60 h-full border p-8 transition-colors duration-500">
                      <Icon className="text-sage-deep h-6 w-6" aria-hidden="true" strokeWidth={1.3} />
                      <h3 className="mt-6 font-serif text-2xl">{feature.title}</h3>
                      <p className="text-muted-foreground mt-2 text-sm">{feature.note}</p>
                    </div>
                  </Reveal>
                );
              })}
            </ul>

            <Reveal className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-end">
              <p className="font-serif text-2xl leading-snug italic">
                Everything you need for easy breakfasts, lazy evenings and relaxed family meals.
              </p>
              <ul className="text-muted-foreground grid grid-cols-2 gap-x-8 gap-y-3 text-sm sm:grid-cols-3">
                {practicalFeatures.map((item) => (
                  <li key={item} className="border-border/70 border-b pb-3">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <div className="mt-16">
              <Gallery />
            </div>
          </div>
        </section>

        {/* ---------------- WAKE UP TO THE VIEWS ---------------- */}
        <section className="relative overflow-hidden">
          <div ref={viewsParallax.ref} className="absolute inset-0 -top-12 -bottom-12">
            <img
              src={landscape.url}
              alt="Mist over the rolling fields and drystone walls around Todber Valley at sunrise"
              width={1920}
              height={1088}
              loading="lazy"
              style={viewsParallax.style}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="from-ink/75 to-ink/20 absolute inset-0 bg-gradient-to-r via-transparent" />
          <div className="relative mx-auto max-w-[86rem] px-5 py-28 sm:px-8 lg:py-44">
            <Reveal className="max-w-xl">
              <Leaf className="text-cream/70 h-5 w-5" aria-hidden="true" strokeWidth={1.2} />
              <h2 className="text-cream mt-6 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Wake up to the views
              </h2>
              <p className="text-cream/90 mt-6 leading-relaxed">
                One of our favourite things about Valley Views Escape is the setting. Step outside
                onto the decking, enjoy your morning coffee and take in the open countryside around
                Todber Valley.
              </p>
              <p className="text-cream/90 mt-4 leading-relaxed">
                It's a lovely place to slow down, switch off and enjoy a different pace of life.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ---------------- EXPLORE ---------------- */}
        <section id="explore" className="mx-auto max-w-[86rem] px-5 py-20 sm:px-8 lg:py-32">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Explore</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Explore the Ribble Valley
            </h2>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
              Valley Views Escape is a great base for discovering some of the best countryside in
              the North West and Yorkshire.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.slice(0, 4).map((place, i) => (
              <Reveal key={place.name} variant="image" delay={i * 110}>
                <article className="group relative overflow-hidden rounded-sm">
                  <img
                    src={destinationImages[i].url}
                    alt={`Countryside near ${place.name}`}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
                  />
                  <div className="from-ink/80 absolute inset-0 bg-gradient-to-t to-transparent" />
                  <div className="absolute right-5 bottom-5 left-5">
                    <h3 className="text-cream font-serif text-2xl">{place.name}</h3>
                    <p className="text-cream/80 mt-1 text-xs tracking-[0.14em] uppercase">
                      {place.note}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <ul className="grid gap-px sm:grid-cols-2">
              {[...destinations.slice(4).map((d) => d.name), ...experiences].map((item) => (
                <li
                  key={item}
                  className="border-border flex items-center justify-between border-b py-4 text-sm"
                >
                  <span>{item}</span>
                  <span className="bg-sage/60 h-px w-8" aria-hidden="true" />
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground font-serif text-2xl leading-snug italic">
              There is plenty to do, whether you want a full day out or simply a quiet walk followed
              by a cosy pub lunch.
            </p>
          </Reveal>
        </section>

        {/* ---------------- TODBER VALLEY ---------------- */}
        <section className="bg-secondary/45 border-border border-y">
          <div className="mx-auto grid max-w-[86rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20 lg:py-32">
            <Reveal variant="image">
              <img
                src={dales.url}
                alt="Drystone walls and a stone barn in the countryside near Todber Valley"
                width={1024}
                height={1280}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-sm object-cover lg:aspect-[4/5]"
              />
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow">Todber Valley</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                Your countryside base
              </h2>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                The caravan is located at Todber Valley Holiday Park near Gisburn. The park offers a
                peaceful countryside setting while still being within easy reach of local towns,
                attractions and days out.
              </p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                It's ideal for guests who want somewhere comfortable to return to after a day
                exploring.
              </p>
              <a
                href="#explore"
                className="link-underline text-primary mt-8 inline-flex items-center gap-2 text-[0.78rem] tracking-[0.2em] uppercase"
              >
                Discover the area
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </section>

        {/* ---------------- THE DOGS ---------------- */}
        <section id="the-dogs" className="mx-auto max-w-[86rem] px-5 py-20 sm:px-8 lg:py-32">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">The family</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Meet Winnie, Woody &amp; Rory
            </h2>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
              You'll spot Winnie, Woody and Rory throughout Valley Views Escape.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {[winnie, woody, rory].map((image, i) => (
              <Reveal key={dogs[i].name} delay={i * 180}>
                <figure>
                  <img
                    src={image.url}
                    alt={`${dogs[i].name}, one of the Valley Views Escape dogs`}
                    width={600}
                    height={967}
                    loading="lazy"
                    className="aspect-[3/4] w-full rounded-sm object-cover"
                  />
                  <figcaption className="mt-6">
                    <h3 className="font-serif text-3xl">{dogs[i].name}</h3>
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      {dogs[i].description}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 max-w-3xl">
            <p className="font-serif text-2xl leading-snug italic">
              They've become part of the Valley Views Escape family and you may even find a few
              little adventures featuring them during your stay.
            </p>
          </Reveal>
        </section>

        {/* ---------------- LITTLE THINGS ---------------- */}
        <section className="bg-secondary/45 border-border border-y">
          <div className="mx-auto grid max-w-[86rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-20 lg:py-32">
            <Reveal>
              <p className="eyebrow">Extra touches</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                It's the little things
              </h2>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                We want Valley Views Escape to feel easy and welcoming from the moment you arrive.
                That's why we've added practical extras such as the air fryer, slow cooker and
                toastie maker, as well as free WiFi and a comfortable space where you can relax
                together.
              </p>
              <p className="mt-4 font-serif text-2xl italic">
                It's the little things that make a stay feel more like home.
              </p>
            </Reveal>
            <Reveal variant="image" delay={140}>
              <img
                src={forest.url}
                alt="A quiet woodland path near Gisburn Forest"
                width={1024}
                height={1280}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-sm object-cover lg:aspect-[4/5]"
              />
            </Reveal>
          </div>
        </section>

        {/* ---------------- FAQS ---------------- */}
        <section id="faqs" className="mx-auto max-w-[86rem] px-5 py-20 sm:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow">Good to know</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                Frequently asked questions
              </h2>
              <p className="text-muted-foreground mt-6 text-sm">
                Some answers below are placeholders and will be confirmed before the site goes live.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq) => (
                  <AccordionItem key={faq.question} value={faq.question}>
                    <AccordionTrigger className="py-6 text-left font-serif text-xl hover:no-underline">
                      <span>
                        <span className="eyebrow mb-2 block">{faq.category}</span>
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>

        {/* ---------------- CONTACT / BOOKING ---------------- */}
        <section id="contact" className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-[86rem] px-5 py-24 text-center sm:px-8 lg:py-36">
            <Reveal>
              <p className="eyebrow !text-primary-foreground/70">Book your stay</p>
              <h2 className="text-cream mx-auto mt-6 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Ready for a countryside escape?
              </h2>
              <p className="text-primary-foreground/85 mx-auto mt-6 max-w-xl leading-relaxed">
                Get in touch to check availability and prices for your preferred dates.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={siteSettings.bookingUrl}
                  className="bg-cream text-ink inline-flex h-13 items-center justify-center rounded-sm px-8 py-4 text-[0.75rem] tracking-[0.22em] uppercase transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Check availability
                </a>
                <a
                  href={`mailto:${siteSettings.email}`}
                  className="border-cream/50 text-cream hover:bg-cream/10 inline-flex h-13 items-center justify-center rounded-sm border px-8 py-4 text-[0.75rem] tracking-[0.22em] uppercase transition-colors duration-300"
                >
                  Get in touch
                </a>
              </div>
              <p className="text-primary-foreground/70 mt-8 text-xs tracking-[0.14em] uppercase">
                Email: {siteSettings.email} · Phone: {siteSettings.phone}
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
