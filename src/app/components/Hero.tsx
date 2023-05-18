import Link from "next/link";
import { STORE_ROUTES } from "@/constants/routes";

const heading = "Let's experience Japan";
const message = "sub-title here";

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover bg-hero-pattern">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="flex flex-col gap-3 text-white z-[2]">
        <h1 className="text-2xl font-bold md:text-5xl">{heading}</h1>
        <p className="text-xl md:text-2xl font-semibold">{message}</p>
        <Link href={STORE_ROUTES.STORE.path}>
          <button className="px-8 py-2 border">Here</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
