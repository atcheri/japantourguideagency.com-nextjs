import { HiCheck } from "react-icons/hi2";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useContactResponseDialogModal } from "./hooks/useContactResponseDialogModal";

export const ContactResponseDialog = () => {
  const { isOpen, onClose } = useContactResponseDialogModal();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader className="space-y-6">
          <DialogTitle className="flex items-center jsutify-between gap-x-4">
            <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
              <HiCheck className="h-5 w-5" />
            </div>
            Thank you for contacting us.
          </DialogTitle>
          <DialogDescription>
            Please give us 2 - 3 business days to process your request.
          </DialogDescription>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
