import { FC } from "react";
import { useHotkeys } from "@mantine/hooks";

interface ShortcutManagerProps {
  children?: React.ReactNode;
}

const ShortcutManager: FC<ShortcutManagerProps> = ({ children }) => {
  useHotkeys([
    ["mod+J", () => console.log("Toggle color scheme")],
    ["ctrl+K", () => console.log("Trigger search")],
    ["alt+mod+shift+X", () => console.log("Rick roll")],
  ]);
  return children as JSX.Element;
};

export default ShortcutManager;
