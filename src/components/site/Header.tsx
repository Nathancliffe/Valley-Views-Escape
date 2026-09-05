import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/valley-views-logo.png.asset.json";
import { navigation, siteSettings } from "./content";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled || open
          ? "bg-background/92 border-b border-border backdrop-blur-sm"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[86rem] items-center justify-between gap-6 px-5 sm:px-8 lg:h-20">
        <a href="#top" className="flex items-center gap-3" aria-label="Valley Views Escape, home">
          <img
            src={logo.url}
            alt="Valley Views Escape logo"
            width={48}
            height={48}
            className="h-10 w-10 rounded-full object-cover lg:h-12 lg:w-12"
          />
          <span className="hidden sm:block">
            <span className="block font-serif text-lg leading-none tracking-tight lg:text-xl">
              Valley Views Escape
            </span>
            <span className="mt-1 block text-[0.6rem] tracking-[0.24em] text-muted-foreground uppercase">
              Todber Valley · Gisburn
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navigation.slice(1).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline text-[0.82rem] tracking-[0.14em] text-foreground/80 uppercase transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href={siteSettings.bookingUrl}
            className="bg-primary text-primary-foreground hover:bg-sage-deep/90 inline-flex h-10 items-center rounded-sm px-5 text-[0.72rem] tracking-[0.2em] uppercase transition-all duration-300 hover:-translate-y-px"
          >
            Check availability
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="border-border text-foreground inline-flex h-11 w-11 items-center justify-center rounded-sm border lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="bg-background border-border max-h-[calc(100dvh-4rem)] overflow-y-auto border-t lg:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-5 py-6">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-border/70 hover:text-primary border-b py-4 font-serif text-2xl"
            >
              {item.label}
            </a>
          ))}
          <a
            href={siteSettings.bookingUrl}
            onClick={() => setOpen(false)}
            className="bg-primary text-primary-foreground mt-6 inline-flex h-14 items-center justify-center rounded-sm text-sm tracking-[0.2em] uppercase"
          >
            Check availability
          </a>
        </nav>
      </div>
    </header>
  );
}
