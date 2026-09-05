import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Reveal } from "./Reveal";
import decking from "@/assets/decking-dogs.jpg.asset.json";
import landscape from "@/assets/valley-landscape.jpg.asset.json";
import coffee from "@/assets/morning-coffee.jpg.asset.json";

const images = [
  { src: decking.url, alt: "Winnie, Woody and Rory sitting on the private decking at Valley Views Escape" },
  { src: landscape.url, alt: "Rolling Ribble Valley countryside in soft morning light" },
  { src: coffee.url, alt: "A mug of coffee resting on the decking rail with countryside beyond" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
        {images.map((image, i) => (
          <Reveal
            key={image.src}
            variant="image"
            delay={i * 120}
            className={i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group block h-full w-full overflow-hidden rounded-sm"
              aria-label={`Enlarge photo: ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:h-full sm:min-h-[14rem]"
              />
            </button>
          </Reveal>
        ))}
      </div>

      <p className="text-muted-foreground mt-5 text-xs tracking-[0.14em] uppercase">
        [Placeholder gallery — interior photography of the caravan to be supplied]
      </p>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">Photo</DialogTitle>
          {active !== null && (
            <img
              src={images[active].src}
              alt={images[active].alt}
              className="h-auto w-full rounded-sm object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
