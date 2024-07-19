import { create } from "zustand";

type MobileNavBarState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const mobileNavBarState = create<MobileNavBarState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
