import {create} from "zustand/react";

type UIState = {
  isCartOpen: boolean;
  toggleCart: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isCartOpen: false,
  toggleCart: () => set((s) => ({isCartOpen: !s.isCartOpen})),
}));
