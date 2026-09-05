import logo from "@/assets/valley-views-logo.png.asset.json";
import { navigation, siteSettings } from "./content";

export function Footer() {
  return (
    <footer className="border-border bg-secondary/50 border-t">
      <div className="mx-auto grid max-w-[86rem] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr] lg:py-20">
        <div>
          <img
            src={logo.url}
            alt="Valley Views Escape logo"
            width={72}
            height={72}
            loading="lazy"
            className="h-16 w-16 rounded-full object-cover"
          />
          <p className="mt-5 font-serif text-2xl">Valley Views Escape</p>
          <p className="text-muted-foreground mt-2 text-sm tracking-[0.16em] uppercase">
            {siteSettings.location}
          </p>
          <p className="text-muted-foreground mt-4 font-serif text-lg italic">
            {siteSettings.strapline}
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="eyebrow">Explore the site</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="link-underline hover:text-primary">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href={siteSettings.bookingUrl} className="link-underline text-primary">
                Check availability
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow">Get in touch</h2>
          <ul className="text-muted-foreground mt-5 space-y-3 text-sm">
            <li>Email: {siteSettings.email}</li>
            <li>Phone: {siteSettings.phone}</li>
            <li>Todber Valley Holiday Park, Gisburn, Ribble Valley</li>
          </ul>
        </div>
      </div>

      <div className="border-border border-t">
        <div className="text-muted-foreground mx-auto max-w-[86rem] px-5 py-6 text-xs sm:px-8">
          © {new Date().getFullYear()} Valley Views Escape. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
