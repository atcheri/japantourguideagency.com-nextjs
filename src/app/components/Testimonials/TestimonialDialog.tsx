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
        <DialogContent className="max-h-[50%]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
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
        <ScrollArea className="h-72">
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription>{description}</DrawerDescription>
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
