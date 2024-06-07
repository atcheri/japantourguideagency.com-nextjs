import Link from "next/link";
import { STORE_ROUTES } from "@/constants/routes";
import { Button } from "@/components/ui/button";

const heading = "Create everlasting memories of Japan";
const message = "And experience unforgettable moments of life";

const Hero = () => {
  return (
    <section>
      <div className="absolute w-full h-full bg-fixed bg-cover overflow-hidden bg-hero-pattern" />
      <div className="container mx-auto pt-8">
        <div className="flex items-center h-screen">
          <div className="flex flex-col max-w-xl gap-5 z-[2] text-primary-foreground">
            <h1 className="text-3xl font-bold md:text-6xl md:max-w-xs">
              {heading}
            </h1>
            <h2 className="text-xl font-semibold md:text-2xl md:max-w-sm">
              {message}
            </h2>
            <Link href={STORE_ROUTES.STORE.path}>
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
      </div>
    </section>
  );
};

export default Hero;
