import { create } from "zustand";
import { listAllFilesDir } from "../service/FileService"; // Import the function

interface SidePannelStore {
  isOpen: boolean;
  selectedFolder: string;
  files: any[];
  setSelectedFolder: (folder: string) => void;
  setFiles: (files: any[]) => void;
  toggle: () => void;
  LoadFolder: () => Promise<void>; // Add handleClick to the interface
}

export const useSidePannelStore = create<SidePannelStore>((set) => ({
  isOpen: true,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  selectedFolder: '',
  files: [],
  setSelectedFolder: (folder: string) => set({ selectedFolder: folder }),
  setFiles: (files: any[]) => set({ files: files }),
  LoadFolder: async () => { // Add handleClick to the store
    const filesData = await listAllFilesDir();
    set({ files: filesData!.files });
    set({ selectedFolder: filesData!.name.split('/').pop() });
  },
}));