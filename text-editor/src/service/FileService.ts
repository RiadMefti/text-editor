import { dialog, fs } from "@tauri-apps/api";
import { TxtFile } from "../types/types";



export async function openTxtFile(): Promise<TxtFile | undefined> {
    const selectedFile = await dialog.open({
        multiple: false,
        filters: [{
            name: 'Texte',
            extensions: ['txt']
        }]

    })
    if (selectedFile) {
        const content = await fs.readTextFile(selectedFile as string)
        return {
            path: selectedFile as string,
            content
        } as TxtFile

    }
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
        console.log(files); // Log the list of all files and their children
        return files;
    }

    function processEntries(entries: any): any[] {
        let files: any[] = [];
      
        for (const entry of entries) {
          if (entry.children) {
            entry.children = processEntries(entry.children);
          }
          files.push(entry);
        }
      
        return files;
      }
}

