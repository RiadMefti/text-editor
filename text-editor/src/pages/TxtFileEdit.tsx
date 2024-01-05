import { FC } from "react";

import TextEditor from "../components/TextEditor";
import { useFileStore } from "../stores/FileStore";
import { FileExtension } from "../service/FileService";
import CodeEditor from "../components/CodeEditor";
interface TxtFileEditProps {}

const TxtFileEdit: FC<TxtFileEditProps> = ({}) => {
  const { selectedFile } = useFileStore();
  if (!selectedFile) return <div>no file selected</div>;
  if (FileExtension(selectedFile.path) === "txt") return <TextEditor />;
  return <CodeEditor />;
};

export default TxtFileEdit;
