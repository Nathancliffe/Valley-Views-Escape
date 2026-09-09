import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Gallery } from "@/components/site/Gallery";
import { headlineFeatures, practicalFeatures } from "@/components/site/content";
import v4 from "@/assets/valley-views-4.jpg";
import v10 from "@/assets/valley-views-10.jpg";

const title = "The Escape | Valley Views Escape, Todber Valley";
const description =
  "Inside Valley Views Escape: sleeps up to 6 across 2 bedrooms, dog friendly, private decking, countryside views, central heating, free WiFi and a fully equipped kitchen.";

export const Route = createFileRoute("/the-escape")({
  component: TheEscape,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/the-escape" }],
  }),
});

function TheEscape() {
  return (
    <main>
      <PageHeader
        eyebrow="The escape"
        title="Your home away from home"
        intro="Valley Views Escape is set up for comfort, whether you're staying for a weekend or a longer break. Take a look around."
      />

      {/* ---------------- FEATURES ---------------- */}
      <section className="mx-auto max-w-[86rem] px-5 py-20 sm:px-8 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">What's included</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
            Everything you need for easy breakfasts, lazy evenings and relaxed family meals.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {headlineFeatures.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 100}>
              <div className="border-border bg-secondary/30 h-full rounded-sm border p-6">
                <h3 className="font-serif text-xl">{feature.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {feature.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={100}>
          <div className="border-border mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 rounded-sm border px-6 py-5">
            <span className="eyebrow">Also included</span>
            {practicalFeatures.map((item) => (
              <span key={item} className="text-muted-foreground text-sm">
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ---------------- LOOK AROUND ---------------- */}
      <section className="bg-secondary/45 border-border border-y">
        <div className="mx-auto max-w-[86rem] px-5 py-20 sm:px-8 lg:py-28">
          <Reveal className="mb-12 max-w-2xl">
            <p className="eyebrow">Take a look around</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">Inside & out</h2>
          </Reveal>
          <Gallery />
        </div>
      </section>

      {/* ---------------- COSY ALL YEAR ---------------- */}
      <section className="mx-auto max-w-[86rem] px-5 py-20 sm:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal variant="image">
            <img
              src={v4.url}
              alt="Living and dining area with fireplace and mustard velvet dining chairs"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-sm object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Comfort whatever the season</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Warm in winter, bright in summer
            </h2>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              With central heating and double glazed windows, the caravan stays snug, quiet and
              well insulated whatever the weather — and the private decking is the perfect spot
              when the sun is out.
            </p>
            <div className="rule-leaf mt-8 max-w-xs">
              <Leaf className="text-sage h-4 w-4" aria-hidden="true" />
            </div>
          </Reveal>
        </div>
        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="lg:order-2" variant="image">
            <img
              src={v10.url}
              alt="Main bedroom with double bed and bedside lamps"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-sm object-cover"
            />
          </Reveal>
          <Reveal delay={120} className="lg:order-1">
            <p className="eyebrow">A good night's sleep</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Room for everyone
            </h2>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              Two bedrooms plus a sofa bed in the living area means there's space for up to six
              guests — ideal for families or a few friends getting away together. Dogs are
              welcome too.
            </p>
            <Link
              to="/contact"
              className="link-underline text-primary mt-8 inline-flex items-center gap-2 text-[0.78rem] tracking-[0.2em] uppercase"
            >
              Check availability
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
