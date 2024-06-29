import { create } from "zustand";

type MobileNavbarState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useMobileNavbar = create<MobileNavbarState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
