import { useEffect, useRef } from "react";
import { EditorState } from "@codemirror/state";
import { javascript } from "@codemirror/lang-javascript";
import { basicSetup, EditorView } from "codemirror";
import { useFileStore } from "../stores/FileStore";
import { oneDark } from "@codemirror/theme-one-dark";
import { keymap } from "@codemirror/view";
import {
  defaultKeymap,
  indentWithTab,
  blockComment,
  blockUncomment,
} from "@codemirror/commands";
import { getHotkeyHandler } from "@mantine/hooks";
import { TxtFile } from "../types/types";
import { saveTxtFile } from "../service/FileService";

const CodeEditor = () => {
  const editorViewRef = useRef<EditorView | null>(null);
  const editorContainerRef = useRef<HTMLDivElement | null>(null);
  const { selectedFile } = useFileStore();

  useEffect(() => {
    if (editorContainerRef.current && selectedFile) {
      const state = EditorState.create({
        doc: selectedFile.content as string,
        extensions: [
          basicSetup,
          oneDark,
          javascript(), // JavaScript language support
          keymap.of([
            ...defaultKeymap,
            indentWithTab,
            { key: "Mod-k Mod-c", run: blockComment }, // Cmd/Ctrl + K, C
            { key: "Mod-k Mod-u", run: blockUncomment }, // Cmd/Ctrl + K, U
          ]),
          EditorView.lineWrapping,
        ],
      });

      editorViewRef.current = new EditorView({
        state,
        parent: editorContainerRef.current,
      });

      return () => editorViewRef.current?.destroy();
    }
  }, [selectedFile]);

  const save = async () => {
    if (editorViewRef.current) {
      const currentContent = editorViewRef.current.state.doc.toString();

      const newFile: TxtFile = {
        path: selectedFile!.path,
        content: currentContent,
      };
      await saveTxtFile(newFile);
    }
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
