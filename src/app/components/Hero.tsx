import Link from "next/link";
import { STORE_ROUTES } from "@/constants/routes";
import { Button } from "@/components/ui/button";

const heading = "Create everlasting memories of Japan";
const message = "And experience unforgettable moments of life";

const ClickToAction = () => {
  return (
    <div className="flex flex-col gap-6 text-primary">
      <h1 className="text-3xl font-bold md:text-4xl lg:text-6xl md:max-w-72">
        {heading}
      </h1>
      <h2 className="text-lg font-semibold md:text-2xl lg:text-3xl md:max-w-72">
        {message}
      </h2>
      <Link href={STORE_ROUTES.STORE.path} className="self-start">
        <Button
          size="lg"
          variant="shine"
          className="text-md text-primary font-semibold border border-slate-100"
        >
          Disover now
        </Button>
      </Link>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="2xl:container mx-auto">
      <div className="bg-cover bg-center bg-hero-pattern lg:bg-fixed lg:h-screen">
        <div className="max-w-sm pl-16 pt-48 pb-8 sm:pl-24 sm:pt-80 md:pl-36 xl:pl-44 2xl:pl-52 lg:h-screen lg:flex lg:items-center ">
          <ClickToAction />
        </div>
      </div>
      {/* <section className="max-lg:hidden">
        <div className="relative h-screen contain mx-auto">
            src={hero}
            alt="Fuji Momiji Landscape"
            fill
            sizes="100vw"
            className="z-[-1] container"
            style={{
              objectFit: "cover",
            }}
            quality={100}
          />
          <div className="bg-red-500/50 absolute container">
            <ClickToAction />
          </div>
        </div>
      </section> */}
    </section>
    /*
    <section className="max-md:relative md:h-screen">
    <Image src={hero} alt="fuji momiji landscape" style={{objectFit: "cover"}} quality={100} placeholder="blur">
      <section className="h-[50vh] md:h-screen md:bg-fixed bg-cover bg-hero-pattern">
      <div className="max-md:absolute max-w-fit max-md:hidden mx-auto">
      </div>
      <div className="flex items-center container h-full">
        <div className="flex flex-col gap-5 rounded-lg text-primary-foreground bg-black/5 backdrop-filter backdrop-blur-md p-2 max-w-xs md:max-w-fit">
          <h1 className="text-3xl font-bold md:text-6xl md:max-w-xs">
            {heading}
          </h1>
          <h2 className="text-xl font-semibold md:text-2xl md:max-w-sm">
            {message}
          </h2>
          <Link href={STORE_ROUTES.STORE.path} className="self-start">
            <Button
              size="lg"
              variant="shine"
              className="text-md font-semibold border border-slate-100"
            >
              Disover now
            </Button>
          </Link>
        </div>
      </div>
    </section>
    */
  );
};

export default Hero;
