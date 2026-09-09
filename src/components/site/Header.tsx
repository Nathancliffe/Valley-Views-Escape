import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/valley-views-logo.png.asset.json";
import { navigation, siteSettings } from "./content";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open || !onHome;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        solid ? "bg-background/92 border-border border-b backdrop-blur-sm" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[86rem] items-center justify-between gap-6 px-5 sm:px-8 lg:h-20">
        <Link to="/" className="flex items-center gap-3" aria-label="Valley Views Escape, home">
          <img
            src={logo.url}
            alt="Valley Views Escape logo"
            width={48}
            height={48}
            className="h-10 w-10 rounded-full object-cover lg:h-12 lg:w-12"
          />
          <span className="hidden sm:block">
            <span
              className={cn(
                "block font-serif text-lg leading-none tracking-tight lg:text-xl",
                solid ? "text-foreground" : "text-cream",
              )}
            >
              Valley Views Escape
            </span>
            <span
              className={cn(
                "mt-1 block text-[0.6rem] tracking-[0.24em] uppercase",
                solid ? "text-muted-foreground" : "text-cream/75",
              )}
            >
              Todber Valley · Gisburn
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navigation.slice(1).map((item) => (
            <Link
              key={item.href}
              to={item.href}
              activeProps={{ className: "!text-primary" }}
              className={cn(
                "link-underline text-[0.82rem] tracking-[0.14em] uppercase transition-colors",
                solid ? "text-foreground/80 hover:text-foreground" : "text-cream/90 hover:text-cream",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground hover:bg-sage-deep/90 inline-flex h-10 items-center rounded-full px-5 text-[0.72rem] tracking-[0.2em] uppercase transition-all duration-300 hover:-translate-y-px"
          >
            Check availability
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-full border lg:hidden",
            solid ? "border-border text-foreground" : "border-cream/50 text-cream",
          )}
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
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              className="border-border/70 hover:text-primary border-b py-4 font-serif text-2xl"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="bg-primary text-primary-foreground mt-6 inline-flex h-14 items-center justify-center rounded-full text-sm tracking-[0.2em] uppercase"
          >
            Check availability
          </Link>
          <a
            href={siteSettings.socials[0]?.href}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground mt-4 text-center text-xs tracking-[0.2em] uppercase"
          >
            Follow on Facebook
          </a>
        </nav>
      </div>
    </header>
  );
}
