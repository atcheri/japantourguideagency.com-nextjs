import { create } from "zustand";

type ContactResponseDialogModalState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useContactResponseDialogModal =
  create<ContactResponseDialogModalState>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
  }));
