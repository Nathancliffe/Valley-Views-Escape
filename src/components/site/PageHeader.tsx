import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-border bg-secondary/40 border-b">
      <div className="mx-auto max-w-[86rem] px-5 pt-28 pb-14 sm:px-8 lg:pt-40 lg:pb-20">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 font-serif text-4xl leading-[1.06] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed">{intro}</p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
