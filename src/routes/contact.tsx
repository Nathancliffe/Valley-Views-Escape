import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Facebook, Mail, Phone } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { siteSettings } from "@/components/site/content";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const title = "Contact & Check Availability | Valley Views Escape";
const description =
  "Get in touch to check availability and prices for your stay at Valley Views Escape, Todber Valley, Gisburn. Email, phone or send an enquiry.";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const dates = String(data.get("dates") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`Booking enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPreferred dates: ${dates}\n\n${message}`,
    );
    window.location.href = `mailto:${siteSettings.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <main>
      <PageHeader
        eyebrow="Contact"
        title="Check availability"
        intro="Get in touch to check availability and prices for your preferred dates — we'd love to hear from you."
      />

      <section className="mx-auto max-w-[86rem] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          {/* ---------------- DETAILS ---------------- */}
          <Reveal>
            <h2 className="font-serif text-3xl">Ways to reach us</h2>
            <ul className="mt-8 space-y-6">
              <li className="flex items-start gap-4">
                <Mail className="text-sage mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="eyebrow">Email</p>
                  <a
                    href={`mailto:${siteSettings.email}`}
                    className="link-underline hover:text-primary mt-1 inline-block"
                  >
                    {siteSettings.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="text-sage mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="eyebrow">Phone</p>
                  <a
                    href={`tel:${siteSettings.phone.replace(/\s/g, "")}`}
                    className="link-underline hover:text-primary mt-1 inline-block"
                  >
                    {siteSettings.phone}
                  </a>
                </div>
              </li>
              {siteSettings.socials[0] && (
                <li className="flex items-start gap-4">
                  <Facebook className="text-sage mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="eyebrow">Facebook</p>
                    <a
                      href={siteSettings.socials[0].href}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline hover:text-primary mt-1 inline-block"
                    >
                      Follow Valley Views Escape
                    </a>
                  </div>
                </li>
              )}
            </ul>
            <p className="text-muted-foreground mt-10 text-sm leading-relaxed">
              {siteSettings.location}
            </p>
          </Reveal>

          {/* ---------------- FORM ---------------- */}
          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="border-border bg-secondary/30 rounded-sm border p-6 sm:p-10"
            >
              <h2 className="font-serif text-3xl">Send an enquiry</h2>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                Fill in a few details and it will open in your email app, ready to send to us.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name">Your name</Label>
                  <Input id="name" name="name" required autoComplete="name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Your email</Label>
                  <Input id="email" name="email" type="email" required autoComplete="email" />
                </div>
                <div className="grid gap-2 sm:col-span-2">
                  <Label htmlFor="dates">Preferred dates</Label>
                  <Input id="dates" name="dates" placeholder="e.g. 12–16 June" />
                </div>
                <div className="grid gap-2 sm:col-span-2">
                  <Label htmlFor="message">Your message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us a little about your stay — how many guests, any dogs joining you, and anything else we should know."
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-sage-deep/90 mt-8 inline-flex h-13 w-full items-center justify-center rounded-full px-8 py-4 text-[0.75rem] tracking-[0.22em] uppercase transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
              >
                Send enquiry
              </button>
              {sent && (
                <p className="text-muted-foreground mt-4 text-sm">
                  Your email app should now be open with your enquiry ready to send. If not, you
                  can email us directly at {siteSettings.email}.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
