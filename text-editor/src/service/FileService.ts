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

