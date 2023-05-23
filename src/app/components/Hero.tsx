import Link from "next/link";
import { STORE_ROUTES } from "@/constants/routes";

const heading = "Create everlasting memories of Japan";
const message = "And experience unforgettable moments of life";

const Hero = () => {
  return (
    <section className="bg-fixed bg-center bg-cover bg-hero-pattern">
      <div className="container mx-auto px-3">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
        <div className="flex items-center h-screen">
          <div className="flex flex-col max-w-xl gap-5 z-[2] text-white">
            <h1 className="text-3xl font-bold md:text-5xl">{heading}</h1>
            <h2 className="text-xl text-slate-300 md:text-2xl font-semibold">
              {message}
            </h2>
            <Link href={STORE_ROUTES.STORE.path}>
              <button className="px-8 py-2 border">Here</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
