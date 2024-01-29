import { FC, useState } from "react";

import { IconFile } from "@tabler/icons-react";
import { IconFolder } from "@tabler/icons-react";

import { Button } from "@mantine/core";
interface SidePannelProps {}

interface FileProps {
  file: any;
}

const File: FC<FileProps> = ({ file }) => {
  const isDirectory = file.children && file.children.length > 0;
  const [isExpanded, setIsExpanded] = useState(false); // State to track if the folder is expanded

  const toggleExpand = () => {
    if (isDirectory) {
      setIsExpanded(!isExpanded); // Toggle the expanded state
    }
  };

  if (file.name === ".DS_Store") return <></>;
  return (
    <div style={{ padding: "0.2rem" }}>
      <Button
        variant="subtle"
        style={{
          display: "flex",
          alignItems: "center",
          cursor: isDirectory ? "pointer" : "pointer",
          overflow: "hidden",
          color: "white",
          width: "100%",
        }}
        onClick={toggleExpand}
      >
        {isDirectory ? <IconFolder /> : <IconFile />}
        <span style={{ marginLeft: "0.5rem" }}>{file.name}</span>
      </Button>
      {isDirectory && isExpanded && (
        <div style={{ marginLeft: "1rem" }}>
          {file.children.map((child: any, index: number) => (
            <File key={index} file={child} />
          ))}
        </div>
      )}
    </div>
  );
};

const SidePannel: FC<SidePannelProps> = ({}) => {
  return (
    <div>
      <div
        style={{
          width: "20vw",
          padding: "2rem",
          backgroundColor: "#3335",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <h2 style={{ marginBottom: "1rem" }}>{}</h2>
        <div></div>
      </div>
    </div>
  );
};

export default SidePannel;
