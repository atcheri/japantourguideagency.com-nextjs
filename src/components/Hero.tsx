import { Carousel } from "flowbite-react";
import Image from "next/image";
import HeroCarousel from "./Hero/HeroCarousel";
import HeroReactResponsiveCarousel from "./Hero/HeroCarouselReactResponsive";

const Hero = () => {
  return (
    <>
      <HeroReactResponsiveCarousel />
    </>
  );
};

export default Hero;
