import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, FileText } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { guides } from "@/components/site/content";

const title = "Guest Guides & Downloads | Valley Views Escape";
const description =
  "Free downloadable guides from Valley Views Escape — local walks within 5 miles of Todber Valley and our favourite places to visit near Gisburn in the Ribble Valley.";

export const Route = createFileRoute("/guides")({
  component: Guides,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/guides" }],
  }),
});

function Guides() {
  return (
    <main>
      <PageHeader
        eyebrow="Guest guides"
        title="Guides to download"
        intro="We've put together a few little guides to help you make the most of your stay, local walks from the doorstep and our favourite places to visit nearby. Download them before you arrive or browse them over a brew."
      />

      <section className="mx-auto max-w-[86rem] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {guides.map((guide, i) => (
            <Reveal
              key={guide.title}
              delay={i * 120}
              className="border-border flex flex-col rounded-sm border p-8 sm:p-10"
            >
              <div className="text-primary flex items-center gap-3">
                <FileText className="h-5 w-5" aria-hidden="true" />
                <span className="eyebrow !text-[0.65rem]">{guide.subtitle}</span>
              </div>
              <h2 className="mt-4 font-serif text-3xl leading-tight">{guide.title}</h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                {guide.description}
              </p>
              <ul className="text-muted-foreground mt-6 space-y-2 text-sm">
                {guide.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2">
                    <span className="bg-primary h-1 w-1 rounded-full" aria-hidden="true" />
                    {detail}
                  </li>
                ))}
              </ul>
              <a
                href={guide.url}
                download={guide.filename}
                target="_blank"
                rel="noopener"
                className="bg-primary text-primary-foreground hover:bg-primary/90 mt-8 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-[0.78rem] tracking-[0.2em] uppercase transition-colors"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download PDF
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="bg-primary text-primary-foreground mt-16 px-8 py-14 text-center sm:px-12 sm:py-16">
          <p className="eyebrow !text-primary-foreground/70">Keep exploring</p>
          <h2 className="!text-primary-foreground mx-auto mt-4 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">
            Planning your days out?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed opacity-80">
            There's plenty more to see in the Ribble Valley, take a look at the area
            around Todber Valley.
          </p>
          <Link
            to="/explore"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-[0.78rem] tracking-[0.2em] uppercase transition-colors"
          >
            Explore the area
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
