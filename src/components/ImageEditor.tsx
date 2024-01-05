import { FC, useEffect, useState } from "react";
import { useFileStore } from "../stores/FileStore";
import { Image } from "@mantine/core";
import { FileExtension } from "../service/FileService";

interface ImageEditorProps {}

const ImageEditor: FC<ImageEditorProps> = ({}) => {
  const { selectedFile } = useFileStore();

  const [src, setSrc] = useState<string>("");

  useEffect(() => {
    const blob = new Blob([selectedFile?.content as Uint8Array], {
      type: `image/${FileExtension(selectedFile?.path as string)}`,
    });
    const url = URL.createObjectURL(blob);
    setSrc(url);

    // Clean up URL object
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [selectedFile]);

  return (
    <div>
      {" "}
      <Image src={src} alt="img" />
    </div>
  );
};

export default ImageEditor;
