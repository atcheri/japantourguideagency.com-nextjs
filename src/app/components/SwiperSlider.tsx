"use client";

import "swiper/css/bundle";

import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import ProductCard from "./Products/ProductCard";
import { products } from "./Products/Products";
import { register } from "swiper/element/bundle";

register();

const SwiperSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
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
  );
};

export default SwiperSlider;
