import { FC } from "react";
import { useHotkeys } from "@mantine/hooks";
import useCommandPaletteStore from "../stores/CommandPaletteStore";
import { createNewFile } from "./FileService";
import { useNavigate } from "react-router-dom";
import { useSidePannelStore } from "../stores/SidePannelStore";

interface ShortcutManagerProps {
  children?: React.ReactNode;
}

const ShortcutManager: FC<ShortcutManagerProps> = ({ children }) => {
  const { setOpenCommandPalette } = useCommandPaletteStore();
  const { LoadFolder, LoadFile } = useSidePannelStore();
  const navigate = useNavigate();
  const openFolder = async () => {
    await LoadFolder();
    navigate("/txtFile");
  };
  const openFile = async () => {
    await LoadFile();
    navigate("/txtFile");
  };
  useHotkeys(
    [
      [
        "mod+shift+C",
        async () => {
          await createNewFile();
        },
      ],
      [
        "mod+O",
        async () => {
          await openFolder();
        },
      ],
      [
        "mod+shift+O",
        async () => {
          await openFile();
        },
      ],
      ["mod+s", () => console.log("Save file")],
      ["shift+ tab", () => console.log("change tab")],
      ["mod+P", () => setOpenCommandPalette(true)],
    ],
    []
  );
  return children as JSX.Element;
};
export default ShortcutManager;