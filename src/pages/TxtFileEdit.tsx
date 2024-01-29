import { FC, useEffect } from "react";

import TextEditor from "../components/textEditor";

import CodeEditor from "../components/CodeEditor";
import { useWindowEvent } from "@mantine/hooks";

import ImageEditor from "../components/ImageEditor";
import { useNavigate } from "react-router-dom";
interface TxtFileEditProps {}

const TxtFileEdit: FC<TxtFileEditProps> = ({}) => {
  const navigate = useNavigate();

  if (false) return <TextEditor />;
  if (true) return <ImageEditor />;
  return <CodeEditor />;
};

export default TxtFileEdit;
