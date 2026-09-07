import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Leaf } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { useParallax } from "@/components/site/Parallax";
import { siteSettings } from "@/components/site/content";
import hero from "@/assets/decking-dogs.jpg.asset.json";
import landscape from "@/assets/valley-landscape.jpg";
import coffee from "@/assets/morning-coffee.jpg";
import dales from "@/assets/yorkshire-dales.jpg";
import interior from "@/assets/valley-views-5.jpg.asset.json";

const title = "Valley Views Escape | Holiday Caravan at Todber Valley, Gisburn";
const description =
  "Valley Views Escape is a comfortable, dog friendly holiday caravan at Todber Valley near Gisburn in the Ribble Valley. Sleeps 6, private decking and countryside views.";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
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
          email: siteSettings.email,
          telephone: siteSettings.phone,
          sameAs: siteSettings.socials.map((s) => s.href),
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
            "Countryside views",
            "Dog friendly",
            "Central heating",
            "Double glazed windows",
            "Free WiFi",
            "Fully equipped kitchen",
          ].map((name) => ({ "@type": "LocationFeatureSpecification", name })),
        }),
      },
    ],
  }),
});

function Home() {
  const [loaded, setLoaded] = useState(false);
  const viewsParallax = useParallax(46);

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const shown = (extra = "") => `reveal ${loaded ? "is-visible" : ""} ${extra}`.trim();

  return (
    <main>
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
          <p className={shown("eyebrow !text-cream/85")} style={{ transitionDelay: "200ms" }}>
            Todber Valley · Gisburn · Ribble Valley
          </p>
          <h1
            className={shown(
              "text-cream mt-5 max-w-4xl font-serif text-5xl leading-[1.04] sm:text-6xl lg:text-8xl",
            )}
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
            comfortable holiday caravan at Todber Valley, Gisburn, surrounded by beautiful views and
            perfectly placed for exploring the Ribble Valley, Yorkshire Dales and Forest of Bowland.
          </p>
          <div
            className={shown("mt-10 flex flex-col gap-3 sm:flex-row sm:items-center")}
            style={{ transitionDelay: "780ms" }}
          >
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground hover:bg-sage-deep/90 inline-flex h-13 items-center justify-center rounded-sm px-8 py-4 text-[0.75rem] tracking-[0.22em] uppercase transition-transform duration-300 hover:-translate-y-0.5"
            >
              Check availability
            </Link>
            <Link
              to="/the-escape"
              className="border-cream/60 text-cream hover:bg-cream/10 inline-flex h-13 items-center justify-center rounded-sm border px-8 py-4 text-[0.75rem] tracking-[0.22em] uppercase transition-colors duration-300"
            >
              Explore the escape
            </Link>
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
              Whether you're planning a peaceful break, a family getaway or a few days exploring the
              countryside, Valley Views Escape has everything you need to settle in and enjoy your
              stay.
            </p>
            <div className="rule-leaf mt-10 max-w-xs">
              <Leaf className="text-sage h-4 w-4" aria-hidden="true" />
            </div>
          </Reveal>
          <Reveal variant="image" delay={150}>
            <img
              src={coffee}
              alt="A mug of coffee on the decking rail looking out over open countryside"
              width={1280}
              height={960}
              loading="lazy"
              className="aspect-[5/4] w-full rounded-sm object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* ---------------- SECTION LINKS ---------------- */}
      <section className="bg-secondary/45 border-border border-y">
        <div className="mx-auto max-w-[86rem] px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                to: "/the-escape" as const,
                image: interior.url,
                eyebrow: "The escape",
                title: "Your home away from home",
                note: "Sleeps 6, dog friendly, central heating and countryside views.",
              },
              {
                to: "/explore" as const,
                image: dales,
                eyebrow: "Explore",
                title: "The Ribble Valley",
                note: "Gisburn, Clitheroe, Skipton, the Dales and Forest of Bowland.",
              },
              {
                to: "/the-dogs" as const,
                image: hero.url,
                eyebrow: "The family",
                title: "Winnie, Woody & Rory",
                note: "The three dogs behind Valley Views Escape.",
              },
            ].map((card, i) => (
              <Reveal key={card.to} variant="image" delay={i * 120}>
                <Link to={card.to} className="group block overflow-hidden rounded-sm">
                  <div className="relative">
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
                    />
                    <div className="from-ink/80 absolute inset-0 bg-gradient-to-t to-transparent" />
                    <div className="absolute right-5 bottom-5 left-5">
                      <p className="eyebrow !text-cream/80">{card.eyebrow}</p>
                      <h2 className="text-cream mt-2 font-serif text-2xl">{card.title}</h2>
                      <p className="text-cream/80 mt-2 text-sm">{card.note}</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- WAKE UP TO THE VIEWS ---------------- */}
      <section className="relative overflow-hidden">
        <div ref={viewsParallax.ref} className="absolute inset-0 -top-12 -bottom-12">
          <img
            src={landscape}
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
              One of our favourite things about Valley Views Escape is the setting. Step outside onto
              the decking, enjoy your morning coffee and take in the open countryside around Todber
              Valley.
            </p>
            <p className="text-cream/90 mt-4 leading-relaxed">
              It's a lovely place to slow down, switch off and enjoy a different pace of life.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------- TODBER VALLEY ---------------- */}
      <section className="mx-auto max-w-[86rem] px-5 py-20 sm:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal variant="image">
            <img
              src={dales}
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
            <Link
              to="/explore"
              className="link-underline text-primary mt-8 inline-flex items-center gap-2 text-[0.78rem] tracking-[0.2em] uppercase"
            >
              Discover the area
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------- FINAL CTA ---------------- */}
      <section className="bg-primary text-primary-foreground">
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
              <Link
                to="/contact"
                className="bg-cream text-ink inline-flex h-13 items-center justify-center rounded-sm px-8 py-4 text-[0.75rem] tracking-[0.22em] uppercase transition-transform duration-300 hover:-translate-y-0.5"
              >
                Check availability
              </Link>
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
  );
}
