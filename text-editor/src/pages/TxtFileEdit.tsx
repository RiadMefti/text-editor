import { FC } from "react";

import { useFileStore } from "../stores/FileStore";

import TextEditor from "../components/textEditor";
interface TxtFileEditProps {}

const TxtFileEdit: FC<TxtFileEditProps> = ({}) => {
  const { selectedFile } = useFileStore();

  return selectedFile && <TextEditor content={selectedFile.content} path={selectedFile.path}/>;
};

export default TxtFileEdit;
