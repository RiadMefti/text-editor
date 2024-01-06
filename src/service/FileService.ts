import { dialog, fs } from "@tauri-apps/api";
import { BinFile, OpenFile, TxtFile } from "../types/types";



export async function openFile(): Promise<OpenFile | undefined> {
    const selectedFile = await dialog.open({
        multiple: false,


    })
    if (selectedFile) {



        let dirPath = "";

        if (selectedFile.includes("/")) {
            const dirPathArray = (selectedFile as string).split('/');
            dirPath = dirPathArray.splice(0, dirPathArray.length - 1).join('/');
        }
        else {
            const dirPathArray = (selectedFile as string).split('\\');
            dirPath = dirPathArray.splice(0, dirPathArray.length - 1).join('\\');
        }
        const content = await openFileFromPath(selectedFile as string)
        const file = {
            path: selectedFile as string,
            content
        } as unknown as File;
        return {
            dir: dirPath,
            file
        } as unknown as OpenFile

    }
}

export function FileExtension(file: string) {
    const fileExtension = file.split('.').pop()
    return fileExtension

}

export async function openFileFromPath(selectedFile: string): Promise<TxtFile | undefined | BinFile> {

    const extention = FileExtension(selectedFile)
    if (extention === 'png' || extention === 'jpg' || extention === 'jpeg' || extention === 'gif') {
        const content = await fs.readBinaryFile(selectedFile as string)
        return {
            path: selectedFile as string,
            content
        } as BinFile
    }

    const content = await fs.readTextFile(selectedFile as string)

    return {
        path: selectedFile as string,
        content
    } as TxtFile



}

export async function saveTxtFile(file: TxtFile) {

    if (!file) return
    await fs.writeFile({
        path: file.path,
        contents: file.content
    })

}
export async function listAllFilesDir() {
    const selectDir = await dialog.open({
        multiple: false,
        directory: true,


    });

    if (selectDir) {
        const entries = await fs.readDir(selectDir as string, { recursive: true });
        const files = processEntries(entries);

        return {
            name: selectDir as string,
            files
        };
    }


}



export function processEntries(entries: any): any[] {
    let files: any[] = [];

    for (const entry of entries) {
        if (entry.children) {
            entry.children = processEntries(entry.children);
        }
        files.push(entry);
    }

    return files;
}