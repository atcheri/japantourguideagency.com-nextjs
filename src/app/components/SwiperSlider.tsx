"use client";

import "swiper/css/bundle";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";
import ProductCard from "./Products/ProductCard";
import { products } from "./Products/Products";
import { register } from "swiper/element/bundle";

register();

const SwiperSlider = () => {
  return (
    <section className="sm:text-lg container mx-auto">
      <Swiper
        modules={[Pagination]}
        // spaceBetween={50}
        slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        // navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        {products.map(({ id, imageSrc, name, text, imageAlt }) => (
          <SwiperSlide key={id} className="ml-10">
            {/* <ProductCard
              image={imageSrc}
              name={name}
              text={text}
              alt={imageAlt}
            /> */}
            <img
              key={id}
              className="h-96 w-72 object-cover transition-transform duration-500 group-hover:scale-[120%]"
              src={imageSrc}
              alt={imageAlt}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SwiperSlider;
