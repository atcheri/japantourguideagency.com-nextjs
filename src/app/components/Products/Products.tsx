import { FC } from "react";
import ProductCard from "./ProductCard";
import { products } from "@/helpers/products";

const Products: FC = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-flow-col auto-cols-[20rem] snap snap-x snap-mandatory overflow-x-auto">
          {/*Pour un horizontal snap slide il faut dans un component enfant: flex-none snap-center snap-always*/}
          {products.map(({ id, imageSrc, name, href, text, imageAlt }) => (
            <ProductCard
              key={id}
              image={imageSrc}
              name={name}
              href={href}
              text={text}
              alt={imageAlt}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
