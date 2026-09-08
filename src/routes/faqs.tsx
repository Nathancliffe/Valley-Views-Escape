import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { faqs } from "@/components/site/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const title = "FAQs | Valley Views Escape, Todber Valley";
const description =
  "Frequently asked questions about staying at Valley Views Escape — booking, check-in, facilities, dogs and what to bring.";

export const Route = createFileRoute("/faqs")({
  component: Faqs,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/faqs" }],
  }),
});

function Faqs() {
  return (
    <main>
      <PageHeader
        eyebrow="FAQs"
        title="Good to know"
        intro="Answers to the questions we hear most often. If you can't find what you're looking for, just get in touch."
      />

      <section className="mx-auto max-w-[86rem] px-5 py-20 sm:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-serif text-xl">
                  <span>
                    <span className="eyebrow mb-1 block !text-[0.65rem]">{faq.category}</span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="border-border mt-14 rounded-sm border p-8 text-center">
            <h2 className="font-serif text-2xl">Still have a question?</h2>
            <p className="text-muted-foreground mt-3">
              Send us a message and we'll get back to you.
            </p>
            <Link
              to="/contact"
              className="link-underline text-primary mt-6 inline-flex items-center gap-2 text-[0.78rem] tracking-[0.2em] uppercase"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
