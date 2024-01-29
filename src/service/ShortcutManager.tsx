import { FC } from "react";
import { useHotkeys } from "@mantine/hooks";

interface ShortcutManagerProps {
  children?: React.ReactNode;
}

const ShortcutManager: FC<ShortcutManagerProps> = ({ children }) => {
  useHotkeys(
    [
      ["mod+shift+C", () => console.log("Create new file")],
      ["mod+O", () => console.log("Create new directory")],
      ["mod+shift+O", () => console.log("Open file")],
      ["mod+s", () => console.log("Save file")],
      ["shift+ tab", () => console.log("change tab")],
      ["mod+P", () => console.log("Open command palette")],
    ],
    []
  );
  return children as JSX.Element;
};

export default ShortcutManager;
