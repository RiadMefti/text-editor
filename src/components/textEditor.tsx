import { FC, useEffect } from "react";
import { getHotkeyHandler, useHotkeys } from "@mantine/hooks";
import { RichTextEditor, Link } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Superscript from "@tiptap/extension-superscript";
import SubScript from "@tiptap/extension-subscript";
import { TxtFile } from "../types/types";
import { saveTxtFile } from "../service/FileService";
import { useFileStore } from "../stores/FileStore";
interface textEditorProps {}

const TextEditor: FC<textEditorProps> = ({}) => {
  const { selectedFile } = useFileStore();

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content: selectedFile?.content,
  });
  const save = async () => {
    if (!selectedFile) return;
    const newFile: TxtFile = {
      path: selectedFile.path,
      content: editor!.getHTML(), // get the current content from the editor
    };
    await saveTxtFile(newFile);
  };
  useEffect(() => {
    if (editor && selectedFile) {
      editor.commands.setContent(selectedFile.content);
    }
  }, [selectedFile, editor]);

  useEffect(() => {
    const autoSave = async () => {
      await save();
    };

    autoSave();
  }, [editor?.view.state]);
  useHotkeys([["mod+s", save]]);
  if (!selectedFile) return <div>no file selected</div>;

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <RichTextEditor editor={editor} style={{ height: "100%" }}>
        <RichTextEditor.Toolbar sticky>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
            <RichTextEditor.Strikethrough />
            <RichTextEditor.ClearFormatting />
            <RichTextEditor.Highlight />
            <RichTextEditor.Code />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.H1 />
            <RichTextEditor.H2 />
            <RichTextEditor.H3 />
            <RichTextEditor.H4 />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Blockquote />
            <RichTextEditor.Hr />
            <RichTextEditor.BulletList />
            <RichTextEditor.OrderedList />
            <RichTextEditor.Subscript />
            <RichTextEditor.Superscript />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Link />
            <RichTextEditor.Unlink />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.AlignLeft />
            <RichTextEditor.AlignCenter />
            <RichTextEditor.AlignJustify />
            <RichTextEditor.AlignRight />
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content
          onKeyDown={getHotkeyHandler([["mod+s", async () => await save()]])}
        />
      </RichTextEditor>
    </div>
  );
};

export default TextEditor;
