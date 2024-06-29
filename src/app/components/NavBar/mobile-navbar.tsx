import Link from "next/link";

import { useMobileNavbar } from "./hooks/use-mobile-navbar";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

import { ROUTES } from "@/constants/routes";
import { navBarMenu } from "@/helpers/constants";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

export const MobileNavbar = () => {
  const { isOpen, onClose } = useMobileNavbar();
  console.log("mobile navbar", isOpen);
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="pl-8">
        <ScrollArea className="h-screen w-full">
          <SheetHeader className="py-4">
            <SheetClose asChild>
              <Link
                href={ROUTES.HOME.path}
                className="font-medium hover:underline"
              >
                Home
              </Link>
            </SheetClose>
          </SheetHeader>
          <Separator />
          <Accordion type="single" collapsible>
            {navBarMenu.map((menu, index) => (
              <AccordionItem key={menu.menuTitle} value={menu.menuTitle}>
                <AccordionTrigger className="flex justify-center sm:justify-between">
                  {menu.menuTitle}
                </AccordionTrigger>
                <AccordionContent>
                  {menu.menuItems.map((item) => (
                    <AccordionContent key={item.name}>
                      <Link href={item.href}>
                        <p className="font-semibold">{item.name}</p>
                        <p className="line-clamp-2">{item.description}</p>
                      </Link>
                    </AccordionContent>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <SheetHeader className="py-4">
            <SheetClose asChild>
              <Link
                href={ROUTES.CONTACT.path}
                className="font-medium hover:underline"
              >
                Contact us
              </Link>
            </SheetClose>
          </SheetHeader>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
