import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroReactResponsiveCarousel = () => {
  return (
    <Carousel
      autoPlay={true}
      showArrows={true}
      showThumbs={false}
      swipeable={true}
      // showIndicators={false}
      // emulateTouch={true}
      infiniteLoop={true}
      //   onChange={onChange}
      //   onClickItem={onClickItem}
      //   onClickThumb={onClickThumb}
    >
      <div>
        <Image
          src="https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1953&q=80"
          width={100}
          height={100}
          alt="..."
        />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src="https://picsum.photos/1920/1200" />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src="https://picsum.photos/1920/1200" />
        {/* <p className="legend">Legend 3</p> */}
      </div>
      <div>
        <img src="https://picsum.photos/1920/1200" />
        {/* <p className="legend">Legend 4</p> */}
      </div>
      <div>
        <img src="https://picsum.photos/1920/1200" />
        {/* <p className="legend">Legend 5</p> */}
      </div>
      <div>
        <img src="https://picsum.photos/1920/1200" />
        {/* <p className="legend">Legend 6</p> */}
      </div>
    </Carousel>
  );
};

export default HeroReactResponsiveCarousel;
