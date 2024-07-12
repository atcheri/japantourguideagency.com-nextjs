"use client";

import { useMedia } from "react-use";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogClose,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useTestimonialModal } from "./hooks/useTestimonialModal";

export const TestimonialDialog = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const isDesktop = useMedia("(min-width: 640px)");
  const { isOpen, onClose } = useTestimonialModal();

  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-h-[66%] min-w-[640px]">
          <DialogHeader className="px-4 space-y-6">
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription className="leading-loose text-lg">
              {description}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer
      open={isOpen}
      onOpenChange={(opened) => !opened && onClose()}
      direction="bottom"
    >
      <DrawerContent>
        <ScrollArea className="h-96">
          <DrawerHeader className="px-8 space-y-4">
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription className="text-start text-md leading-loose whitespace-pre-line">
              {description}
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button onClick={onClose} variant="outline">
                Close
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
};
