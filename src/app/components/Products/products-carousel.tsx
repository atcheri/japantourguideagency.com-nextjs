import { use } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { fetchProducts } from "@/helpers/products";
import { ProductCard } from "./product-card";

const ProductsCarousel = () => {
  const tours = use(fetchProducts());

  return (
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 px-3 sm:text-lg">
      <div className="container mx-auto">
        <div className="flex flex-col gap-2 mb-12">
          <h2 className="text-3xl font-semibold">Our Tours</h2>
          <p className="text-xl text-slate-600">
            The best destinations to discover Japan.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-6xl"
          >
            <CarouselContent>
              {tours.map(({ imageSrc, href, id, name, text }) => (
                <CarouselItem
                  key={id}
                  className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <ProductCard
                    image={imageSrc}
                    name={name}
                    text={text}
                    href={href}
                    alt={name}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProductsCarousel;
