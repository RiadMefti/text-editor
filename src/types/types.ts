export type TxtFile = {
    path: string;
    content: string;
}
export type BinFile = {
    path: string;
    content: Uint8Array;
}

export type File = TxtFile | BinFile;
export interface OpenFile {
    dir: string;
    file: File;

}

export type Notification = {
    message: string;
    type: 'success' | 'error';
    id: number;
};
