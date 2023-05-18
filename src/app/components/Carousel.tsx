"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { FC } from "react";
import Image from "next/image";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";

const Carousel: FC = () => {
  return (
    <ResponsiveCarousel
      autoPlay={true}
      swipeable={true}
      emulateTouch={true}
      showThumbs={false}
      infiniteLoop={true}
    >
      <Image
        src="https://picsum.photos/1920/480"
        alt="alt la"
        width={1920}
        height={480}
      />
      <Image
        src="https://picsum.photos/1920/480"
        alt="alt la"
        width={1920}
        height={480}
      />
      <Image
        src="https://picsum.photos/1920/480"
        alt="alt la"
        width={1920}
        height={480}
      />
    </ResponsiveCarousel>
  );
};

export default Carousel;
