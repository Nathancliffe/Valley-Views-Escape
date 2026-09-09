import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export type PageHeaderImage = {
  src: string;
  srcSet: string;
  alt: string;
};

export function PageHeader({
  eyebrow,
  title,
  intro,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: PageHeaderImage;
  children?: ReactNode;
}) {
  if (image) {
    return (
      <section className="border-border relative overflow-hidden border-b">
        <img
          src={image.src}
          srcSet={image.srcSet}
          sizes="100vw"
          alt={image.alt}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/60"
        />
        <div className="relative mx-auto max-w-[86rem] px-5 pt-40 pb-20 sm:px-8 sm:pt-48 sm:pb-24 lg:pt-56 lg:pb-28">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-cream/85">{eyebrow}</p>
            <h1 className="text-cream mt-5 font-serif text-4xl leading-[1.06] drop-shadow-sm sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            {intro && (
              <p className="text-cream/85 mt-6 text-lg leading-relaxed">{intro}</p>
            )}
            {children}
          </Reveal>
        </div>
      </section>
    );
  }

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
