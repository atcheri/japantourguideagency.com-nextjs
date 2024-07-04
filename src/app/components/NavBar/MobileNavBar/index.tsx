import Link from "next/link";
import { X } from "lucide-react";

import { mobileNavBarState } from "./mobileNavBarState";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
} from "@/components/ui/drawer";
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

export const MobileNavBar = () => {
  const { isOpen, onClose } = mobileNavBarState();

  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      onOpenChange={(opened) => !opened && onClose()}
      direction="right"
    >
      <DrawerContent>
        <ScrollArea className="h-screen w-full">
          <DrawerHeader>
            <DrawerClose
              asChild
              className="absolute right-8 top-8 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
            >
              <X className="cursor-pointer h-6 w-6" />
            </DrawerClose>
          </DrawerHeader>
          <DrawerHeader className="py-4">
            <DrawerClose asChild>
              <Link
                href={ROUTES.HOME.path}
                className="font-medium hover:underline"
              >
                Home
              </Link>
            </DrawerClose>
          </DrawerHeader>
          <Separator />
          <Accordion type="single" collapsible>
            {navBarMenu.map((menu, index) => (
              <AccordionItem key={menu.menuTitle} value={menu.menuTitle}>
                <AccordionTrigger className="flex justify-center sm:justify-between sm:p-4">
                  {menu.menuTitle}
                </AccordionTrigger>
                <AccordionContent>
                  {menu.menuItems.map((item) => (
                    <AccordionContent key={item.name} className="p-4 pl-8">
                      <DrawerClose asChild>
                        <Link href={item.href}>
                          <p className="font-semibold">{item.name}</p>
                          <p className="line-clamp-2">{item.description}</p>
                        </Link>
                      </DrawerClose>
                    </AccordionContent>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <DrawerHeader className="py-4">
            <DrawerClose asChild>
              <Link
                href={ROUTES.CONTACT.path}
                className="font-medium hover:underline"
              >
                Contact us
              </Link>
            </DrawerClose>
          </DrawerHeader>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
};
