import Carousel from "./Carousel";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

const heading = "Let's experience Japan";
const message = "sub-title here";

const Hero = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-hero-pattern">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
        <div className="flex flex-col gap-3 text-white z-[2] mt-[-10rem]">
          <h2 className="text-5xl font-bold">{heading}</h2>
          <p className="text-xl">{message}</p>
          <Link href={ROUTES.STORE.path}>
            <button className="px-8 py-2 border">Here</button>
          </Link>
        </div>
      </div>
      <Carousel />
    </>
  );
};

export default Hero;
