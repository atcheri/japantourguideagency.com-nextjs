import Link from "next/link";
import { STORE_ROUTES } from "@/constants/routes";
import { Button } from "@/components/ui/button";

const heading = "Create everlasting memories of Japan";

const ClickToAction = () => {
  return (
    <div className="flex flex-col gap-6 text-primary">
      <h1 className="text-xl md:text-3xl font-bold lg:text-4xl 2xl:text-5xl max-w-72 xl:max-w-96">
        {heading}
      </h1>
      <Link href={STORE_ROUTES.STORE.path} className="self-start">
        <Button
          size="lg"
          variant="shine"
          className="text-md text-primary font-semibold border border-slate-100 bg-white/30"
        >
          Disover now
        </Button>
      </Link>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="bg-hero-background bg-center bg-cover">
      <div className="container h-[50vh] md:h-[60vh] xl:h-screen flex items-center justify-center py-4">
        <div className="w-3/5 h-1/2 sm:h-2/5 place-self-end">
          <ClickToAction />
        </div>
      </div>
    </section>
  );
};

export default Hero;
