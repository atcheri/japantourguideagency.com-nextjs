import { create } from "zustand";

type TestimonialModalState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useTestimonialModal = create<TestimonialModalState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
