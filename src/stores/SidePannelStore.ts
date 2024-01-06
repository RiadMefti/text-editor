import { create } from "zustand";
import { listAllFilesDir, processEntries, openFile, openFileFromPath } from "../service/FileService"; // Import the function

import { fs } from "@tauri-apps/api";
import { useFileStore } from "./FileStore";
interface SidePannelStore {
  isOpen: boolean;
  selectedFolder: string;
  files: any[];
  setSelectedFolder: (folder: string) => void;
  setFiles: (files: any[]) => void;
  toggle: () => void;
  LoadFolder: () => Promise<void>; // Add handleClick to the interface
  LoadFile: () => Promise<void>;
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
    const path = filesData!.name.replace(/\\/g, '/').split('/').pop();
    set({ selectedFolder: path });
  },
  LoadFile: async () => {
    const openedFile = await openFile();
    const entries = await fs.readDir(openedFile!.dir as string, { recursive: true });
    const files = processEntries(entries);
    set({ files: files });
    const newFile = await openFileFromPath(openedFile!.file.path);
    set({ selectedFolder: openedFile!.dir.replace(/\\/g, '/').split('/').pop() });
    useFileStore.setState({ selectedFile: newFile });






  }
}));