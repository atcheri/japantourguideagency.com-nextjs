import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";

export const TestimonialDialog = ({
  title,
  description,
  open,
  toggleShow,
}: {
  title: string;
  description: string;
  open: boolean;
  toggleShow: () => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={toggleShow}>
      <DialogContent>
        <DialogHeader>{title}</DialogHeader>
        <DialogDescription>{description}</DialogDescription>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
