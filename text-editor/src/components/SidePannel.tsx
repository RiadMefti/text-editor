import { FC, useState } from "react";
import { useSidePannelStore } from "../stores/SidePannelStore";
import { openFileFromPath } from "../service/FileService";
import { IconFile } from "@tabler/icons-react";
import { IconFolder } from "@tabler/icons-react";
import { useFileStore } from "../stores/FileStore";

interface SidePannelProps {}

interface FileProps {
  file: any;
}

const File: FC<FileProps> = ({ file }) => {
  const isDirectory = file.children && file.children.length > 0;
  const [isExpanded, setIsExpanded] = useState(false); // State to track if the folder is expanded
  const { setFile } = useFileStore();

  const toggleExpand = () => {
    if (isDirectory) {
      setIsExpanded(!isExpanded); // Toggle the expanded state
    }
  };

  const openFile = async () => {
    if (!isDirectory && file.path) {
      const newFile = await openFileFromPath(file.path);

      if (newFile) {
        setFile(newFile);
      }
    }
  };

  return (
    <div style={{ padding: "0.2rem" }} onClick={openFile}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          cursor: isDirectory ? "pointer" : "default",
        }}
        onClick={toggleExpand}
      >
        {isDirectory ? <IconFolder /> : <IconFile />}
        <span style={{ marginLeft: "0.5rem" }}>{file.name}</span>
      </div>
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
  const { isOpen, files, selectedFolder } = useSidePannelStore();

  return (
    <div>
      {isOpen && (
        <div
          style={{
            width: "20vw",
            padding: "2rem",
            backgroundColor: "#3335",
            height: "100vh",
          }}
        >
          <h2 style={{ marginBottom: "1rem" }}>{selectedFolder}</h2>
          <div>
            {files.length > 0 ? (
              files.map((file, index) => <File key={index} file={file} />)
            ) : (
              <div>loading</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SidePannel;
