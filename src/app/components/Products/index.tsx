"use client";

import "swiper/css/bundle";

import { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { FC } from "react";
import ProductCard from "./ProductCard";
import { Tour } from "@/types/tour";
import { register } from "swiper/element/bundle";

register();

const Products: FC<{ tours: Tour[] }> = ({ tours }) => {
  if (!tours) {
    return null;
  }

  return (
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 px-3 sm:text-lg">
      <div className="mx-auto">
        <div className="flex flex-col gap-2 mb-16">
          <h2 className="text-3xl font-semibold">Our Popular Tours</h2>
          <p className="text-xl text-slate-600">
            The best destinations to discover Japan.
          </p>
        </div>
        <Swiper
          modules={[Pagination, EffectCoverflow]}
          centeredSlides={true}
          spaceBetween={20}
          grabCursor={true}
          loop={true}
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          slidesPerView={1.15}
          breakpoints={{
            480: {
              slidesPerView: 1.35,
            },
            640: {
              slidesPerView: 1.6,
            },
            768: {
              slidesPerView: 2,
            },
            960: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          // pagination={{ clickable: true }}
        >
          {tours.map(({ id, imageSrc, name, href, text }) => (
            <SwiperSlide key={id}>
              <ProductCard
                image={imageSrc}
                name={name}
                text={text}
                href={href}
                alt={name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Products;
