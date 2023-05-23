"use client";

import "swiper/css/bundle";

import { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import ProductCard from "./Products/ProductCard";
import { products } from "@/helpers/products";
import { register } from "swiper/element/bundle";

register();

const SwiperSlider = () => {
  return (
    <section className="sm:text-lg container mx-auto">
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
        slidesPerView={1}
        breakpoints={{
          480: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        pagination={{ clickable: true }}
      >
        {products.map(({ id, imageSrc, name, text, imageAlt }) => (
          <SwiperSlide key={id}>
            <ProductCard
              image={imageSrc}
              name={name}
              text={text}
              alt={imageAlt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SwiperSlider;
