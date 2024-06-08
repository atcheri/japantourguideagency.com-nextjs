import Link from "next/link";
import { STORE_ROUTES } from "@/constants/routes";
import { Button } from "@/components/ui/button";

const heading = "Create everlasting memories of Japan";
const message = "And experience unforgettable moments of life";

const Hero = () => {
  return (
    <section className="h-[50vh] md:h-screen md:bg-fixed bg-cover bg-hero-pattern">
      <div className="flex items-center container mx-auto h-full">
        {/* <div className="flex flex-col gap-5 rounded-md text-primary-foreground bg-black/5 backdrop-filter backdrop-blur-md p-2 max-w-xs"> */}
        <div className="flex flex-col gap-5 text-primary-foreground pl-2 max-w-xs">
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
  );
};

export default Hero;
