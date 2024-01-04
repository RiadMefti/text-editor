import { create } from "zustand";


interface SidePannelStore {
    isOpen: boolean;
    toggle: () => void;
}

export const useSidePannelStore = create<SidePannelStore>((set) => ({
    isOpen: true,
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
