import { FC, useEffect, useState } from "react";
import { Image } from "@mantine/core";

interface ImageEditorProps {}

const ImageEditor: FC<ImageEditorProps> = ({}) => {
  const [src, setSrc] = useState<string>("");

  return (
    <div>
      {" "}
      <Image src={src} alt="img" />
    </div>
  );
};

export default ImageEditor;
