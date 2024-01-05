import { FC, useEffect } from "react";

import TextEditor from "../components/textEditor";
import { useFileStore } from "../stores/FileStore";
import { FileExtension } from "../service/FileService";
import CodeEditor from "../components/CodeEditor";
import { useWindowEvent } from "@mantine/hooks";
import { useSidePannelStore } from "../stores/SidePannelStore";

import ImageEditor from "../components/ImageEditor";
import { useNavigate } from "react-router-dom";
interface TxtFileEditProps {}

const TxtFileEdit: FC<TxtFileEditProps> = ({}) => {
  const { selectedFile } = useFileStore();
  const { toggle, selectedFolder, LoadFolder } = useSidePannelStore();
  const navigate = useNavigate();
  useWindowEvent("keydown", async (event) => {
    console.log(event);
    if (event.code === "KeyB" && (event.ctrlKey || event.metaKey)) {
      toggle();
    }
    if (event.code === "KeyO" && (event.ctrlKey || event.metaKey)) {
      await LoadFolder();
      navigate("/txtFile");
    }
  });
  useEffect(() => {
    if (!selectedFolder) {
      navigate("/");
    }
  }, []);

  if (!selectedFile) return <div>no file selected</div>;
  if (FileExtension(selectedFile.path) === "txt") return <TextEditor />;
  if (
    FileExtension(selectedFile.path) === "png" ||
    FileExtension(selectedFile.path) === "jpg" ||
    FileExtension(selectedFile.path) === "jpeg" ||
    FileExtension(selectedFile.path) === "gif"
  )
    return <ImageEditor />;
  return <CodeEditor />;
};

export default TxtFileEdit;
