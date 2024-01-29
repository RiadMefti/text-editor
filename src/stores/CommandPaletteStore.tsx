import { create } from "zustand";

interface CommandPaletteStore {
  openCommandPalette: boolean;
  setOpenCommandPalette: (open: boolean) => void;
}

const useCommandPaletteStore = create<CommandPaletteStore>((set) => ({
  openCommandPalette: false,
  setOpenCommandPalette: (openCommandPalette) => set({ openCommandPalette }),
}));

export default useCommandPaletteStore;
