import { FC } from "react";
import { useHotkeys } from "@mantine/hooks";
import useCommandPaletteStore from "../stores/CommandPaletteStore";

interface ShortcutManagerProps {
  children?: React.ReactNode;
}

const ShortcutManager: FC<ShortcutManagerProps> = ({ children }) => {
  const { setOpenCommandPalette } = useCommandPaletteStore();
  useHotkeys(
    [
      ["mod+shift+C", () => console.log("Create new file")],
      ["mod+O", () => console.log("Create new directory")],
      ["mod+shift+O", () => console.log("Open file")],
      ["mod+s", () => console.log("Save file")],
      ["shift+ tab", () => console.log("change tab")],
      ["mod+P", () => setOpenCommandPalette(true)],
    ],
    []
  );
  return children as JSX.Element;
};

export default ShortcutManager;
