import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import v1 from "@/assets/valley-views-1.jpg";
import v2 from "@/assets/valley-views-2.jpg";
import v3 from "@/assets/valley-views-3.jpg";
import v4 from "@/assets/valley-views-4.jpg";
import v5 from "@/assets/valley-views-5.jpg";
import v6 from "@/assets/valley-views-6.jpg";
import v7 from "@/assets/valley-views-7.jpg";
import v8 from "@/assets/valley-views-8.jpg";
import v9 from "@/assets/valley-views-9.jpg";
import v10 from "@/assets/valley-views-10.jpg";

const slides = [
  { src: v5, alt: "Corner sofa in the living area with countryside views through the windows" },
  { src: v8, alt: "View from the living area out over the decking and open fields" },
  { src: v4, alt: "Living and dining area with fireplace and mustard velvet dining chairs" },
  { src: v1, alt: "Glass dining table with four mustard velvet chairs beside the window" },
  { src: v2, alt: "Sage green kitchen with oven, hob, sink and fridge freezer" },
  { src: v6, alt: "Kitchen worktop with kettle, toaster and air fryer" },
  { src: v10, alt: "Main bedroom with double bed and bedside lamps" },
  { src: v7, alt: "Second bedroom with two single beds and countryside outlook" },
  { src: v3, alt: "Bathroom with walk-in shower, basin and toilet" },
  { src: v9, alt: "Private decking running alongside the caravan with fields beyond" },
];

export function CaravanCarousel() {
  return (
    <Carousel opts={{ loop: true, align: "start" }} className="w-full">
      <CarouselContent className="-ml-3 sm:-ml-4">
        {slides.map((slide) => (
          <CarouselItem
            key={slide.src}
            className="basis-[82%] pl-3 sm:basis-1/2 sm:pl-4 lg:basis-[38%]"
          >
            <img
              src={slide.src}
              alt={slide.alt}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-sm object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="border-border/70 bg-background/90 -left-3 hidden h-11 w-11 sm:flex" />
      <CarouselNext className="border-border/70 bg-background/90 -right-3 hidden h-11 w-11 sm:flex" />
    </Carousel>
  );
}
