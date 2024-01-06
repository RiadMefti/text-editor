import { useEffect, useRef, useState } from "react";
import { EditorState } from "@codemirror/state";
import { javascript } from "@codemirror/lang-javascript";
import { basicSetup, EditorView } from "codemirror";
import { useFileStore } from "../stores/FileStore";
import { oneDark } from "@codemirror/theme-one-dark";
import { keymap } from "@codemirror/view";
import { getHotkeyHandler } from "@mantine/hooks";
import { TxtFile } from "../types/types";
import { saveTxtFile } from "../service/FileService";

const CodeEditor = () => {
  const editorViewRef = useRef<EditorView | null>(null);
  const editorContainerRef = useRef<HTMLDivElement | null>(null);
  const { selectedFile } = useFileStore();

  const [editorContent, setEditorContent] = useState("");

  useEffect(() => {
    if (editorContainerRef.current && selectedFile) {
      const updateListener = EditorView.updateListener.of((update) => {
        if (update.docChanged) {
          const currentContent = update.state.doc.toString();
          setEditorContent(currentContent);
          // Optional: Call a save function or perform other actions
          saveTxtFile({ path: selectedFile.path, content: currentContent });
        }
      });

      const state = EditorState.create({
        doc: selectedFile.content as string,
        extensions: [
          basicSetup,
          oneDark,
          javascript(),
          keymap.of([
            // ... your keymaps
          ]),
          EditorView.lineWrapping,
          updateListener, // Add the update listener to the editor state
        ],
      });

      editorViewRef.current = new EditorView({
        state,
        parent: editorContainerRef.current,
      });

      return () => editorViewRef.current?.destroy();
    }
  }, [selectedFile]);
  useEffect(() => {
    const autoSave = async () => {
      await save();
    };

    autoSave();
  }, [editorContent]);
  const save = async () => {
    const newFile: TxtFile = {
      path: selectedFile!.path,
      content: editorContent,
    };
    await saveTxtFile(newFile);
  };

  // You can call `saveCurrentContent` to save the editor's content
  // This can be triggered by a button, shortcut, etc.

  return (
    <div
      onKeyDown={getHotkeyHandler([["mod+s", async () => await save()]])}
      ref={editorContainerRef}
      style={{ height: "100vh", width: "100%" }}
    />
  );
};

export default CodeEditor;
