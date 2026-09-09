import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Reveal } from "./Reveal";
import group from "@/assets/valley-views-header.jpeg.asset.json";
import v1 from "@/assets/valley-views-1.jpg.asset.json";
import v2 from "@/assets/valley-views-2.jpg.asset.json";
import v3 from "@/assets/valley-views-3.jpg.asset.json";
import v4 from "@/assets/valley-views-4.jpg.asset.json";
import v5 from "@/assets/valley-views-5.jpg.asset.json";
import v6 from "@/assets/valley-views-6.jpg.asset.json";
import v7 from "@/assets/valley-views-7.jpg.asset.json";
import v8 from "@/assets/valley-views-8.jpg.asset.json";
import v9 from "@/assets/valley-views-9.jpg.asset.json";
import v10 from "@/assets/valley-views-10.jpg.asset.json";

const images = [
  {
    src: group.url,
    alt: "Winnie, Woody and Rory sitting together in a grassy field with rolling countryside behind",
  },
  { src: v5.url, alt: "Corner sofa in the living area with countryside views through the windows" },
  { src: v8.url, alt: "View from the living area out over the decking and open fields" },
  { src: v4.url, alt: "Living and dining area with fireplace and mustard velvet dining chairs" },
  { src: v1.url, alt: "Glass dining table with four mustard velvet chairs beside the window" },
  { src: v2.url, alt: "Sage green kitchen with oven, hob, sink and fridge freezer" },
  { src: v6.url, alt: "Kitchen worktop with kettle, toaster and air fryer" },
  { src: v10.url, alt: "Main bedroom with double bed and bedside lamps" },
  { src: v7.url, alt: "Second bedroom with two single beds and countryside outlook" },
  { src: v3.url, alt: "Bathroom with walk-in shower, basin and toilet" },
  { src: v9.url, alt: "Private decking running alongside the caravan with fields beyond" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0">
        {images.map((image, i) => (
          <Reveal
            key={image.src}
            variant="image"
            delay={(i % 3) * 120}
            className={`w-[78vw] shrink-0 snap-center sm:w-auto ${i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}
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

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">Photo</DialogTitle>
          {active !== null && (
            <img
              src={images[active]?.src}
              alt={images[active]?.alt}
              className="h-auto w-full rounded-sm object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
