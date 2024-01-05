import { create } from "zustand";
import { BinFile, TxtFile } from "../types/types";

interface FileStore {
    selectedFile: TxtFile | undefined | BinFile;
    setFile: (file: TxtFile | BinFile) => void;
}

export const useFileStore = create<FileStore>((set) => ({
    selectedFile: undefined,
    setFile: (selectedFile) => set({ selectedFile }),
}));