import React, { useEffect, useRef } from "react";
import { EditorState } from "@codemirror/state";
import { javascript } from "@codemirror/lang-javascript";

import { basicSetup, EditorView } from "codemirror";
import { useFileStore } from "../stores/FileStore";
import { oneDark } from "@codemirror/theme-one-dark";
// import { html } from "@codemirror/lang-html";
// import { css } from "@codemirror/lang-css";

import { keymap } from "@codemirror/view";
import { defaultKeymap, indentWithTab ,blockComment ,blockUncomment  } from "@codemirror/commands";

const CodeEditor = () => {
  const editorContainerRef = useRef(null);
  const { selectedFile } = useFileStore();

  useEffect(() => {
    if (editorContainerRef.current && selectedFile) {
      const state = EditorState.create({
        doc: selectedFile.content,
        extensions: [
          basicSetup,
          oneDark,
          javascript(), // JavaScript language support
          keymap.of([
            ...defaultKeymap,
            indentWithTab,
            { key: "Mod-k Mod-c", run: blockComment },    // Cmd/Ctrl + K, C
            { key: "Mod-k Mod-u", run: blockUncomment },  // Cmd/Ctrl + K, U
          ]),

          EditorView.lineWrapping,
        ],
      });

      const view = new EditorView({
        state,
        parent: editorContainerRef.current,
      });

      return () => view.destroy();
    }
  }, [selectedFile]);

  return (
    <div ref={editorContainerRef} style={{ height: "100vh", width: "100%" }} />
  );
};

export default CodeEditor;
