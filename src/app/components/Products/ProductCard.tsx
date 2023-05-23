import React from "react";

type ProductCardProps = {
  image: string;
  name: string;
  text: string;
  alt: string;
};

const ProductCard = ({ image, name, text, alt }: ProductCardProps) => {
  return (
    <div className="rounded-md group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-black/30">
      <div className="h-full w-full">
        <img
          className="h-96 min-w-full object-cover transition-transform duration-500 group-hover:scale-[120%]"
          src={image}
          alt={alt}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 group-hover:from-black/10 group-hover:via-black/30 group-hover:to-black/50"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-8">
        <h1 className="font-dmserif text-3xl font-bold text-white">{name}</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {text}
        </p>
        <button className="rounded-full bg-transparent py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
          See More
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
