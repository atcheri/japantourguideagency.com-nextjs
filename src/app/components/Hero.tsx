import Link from "next/link";
import { STORE_ROUTES } from "@/constants/routes";

const heading = "Create everlasting memories of Japan";
const message = "And experience unforgettable moments of life";

const Hero = () => {
  return (
    <section>
      <div className="absolute w-full h-full bg-fixed bg-center bg-cover bg-hero-pattern" />
      <div className="container mx-auto px-3">
        <div className="flex items-center h-screen">
          <div className="flex flex-col max-w-xl gap-5 z-[2] text-white">
            <h1 className="text-3xl font-bold md:text-5xl">{heading}</h1>
            <h2 className="text-xl text-slate-300 md:text-2xl font-semibold">
              {message}
            </h2>
            <Link href={STORE_ROUTES.STORE.path}>
              <button className="font-semibold py-2 px-4 border rounded-md transition ease-in-out hover:scale-105 hover:bg-blue-800 hover:text-white hover:border-transparent">
                Discover now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
