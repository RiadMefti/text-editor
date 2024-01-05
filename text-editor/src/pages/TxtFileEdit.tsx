import { FC } from "react";

import TextEditor from "../components/textEditor";
import { useFileStore } from "../stores/FileStore";
import { FileExtension } from "../service/FileService";
import CodeEditor from "../components/CodeEditor";
import { useWindowEvent } from "@mantine/hooks";
import { useSidePannelStore } from "../stores/SidePannelStore";
interface TxtFileEditProps {}

const TxtFileEdit: FC<TxtFileEditProps> = ({}) => {
  const { selectedFile } = useFileStore();
  const { toggle } = useSidePannelStore();
  useWindowEvent("keydown", (event) => {
    console.log(event);
    if (event.code === "KeyB" && (event.ctrlKey || event.metaKey)) {
      toggle();
    }
  });

  if (!selectedFile) return <div>no file selected</div>;
  if (FileExtension(selectedFile.path) === "txt") return <TextEditor />;
  return <CodeEditor />;
};

export default TxtFileEdit;
