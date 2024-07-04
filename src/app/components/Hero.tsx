import Link from "next/link";
import { STORE_ROUTES } from "@/constants/routes";
import { Button } from "@/components/ui/button";

const heading = "Create everlasting memories of Japan";

const ClickToAction = () => {
  return (
    <div className="flex flex-col gap-2 sm:gap-6 text-primary">
      <h1 className="text-xl sm:text-3xl font-bold md:text-4xl xl:text-5xl max-w-40 xl:max-w-96">
        {heading}
      </h1>
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
      <div className="bg-cover bg-center bg-hero-pattern 2xl:bg-fixed min-[1792px]:bg-contain min-[1792px]:bg-no-repeat">
        <div className="pl-12 pt-72 pb-12 sm:pl-20 sm:pt-96 md:pl-28 lg:pl-40 xl:pl-52 2xl:pl-80 2xl:h-screen 2xl:flex 2xl:items-center">
          <ClickToAction />
        </div>
      </div>
    </section>
  );
};

export default Hero;
