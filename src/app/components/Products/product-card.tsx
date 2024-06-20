import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";

type ProductCardProps = {
  image: string;
  name: string;
  href: string;
  text: string;
  alt: string;
};

export const ProductCard = ({
  alt,
  href,
  image,
  name,
  text,
}: ProductCardProps) => {
  return (
    <Link href={href} target="_blank">
      <Card className="flex flex-col border-2 overflow-hidden min-h-full gap-2">
        <CardHeader className="p-0">
          <Image src={image} alt={alt} width={620} height={620} />
        </CardHeader>
        <CardContent className="px-2 pb-0 grow">
          <CardTitle className="text-lg leading-6 line-clamp-2 mb-3">
            {name}
          </CardTitle>
          <CardDescription className="text-muted-foreground line-clamp-2">
            {text}
          </CardDescription>
        </CardContent>
        <CardFooter className="px-2 pb-2">
          <Button
            variant="expandIcon"
            Icon={ArrowRightIcon}
            iconPlacement="right"
            className="bg-slate-50 hover:bg-slate-100 text-muted-foreground text-sm w-full lg:w-auto"
          >
            Discover
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};
