import { create } from "zustand";
import { TxtFile } from "../types/types";

interface FileStore {
    selectedFile: TxtFile | undefined;
    setFile: (file: TxtFile) => void;
}

export const useFileStore = create<FileStore>((set) => ({
    selectedFile: undefined,
    setFile: (selectedFile) => set({ selectedFile }),
}));