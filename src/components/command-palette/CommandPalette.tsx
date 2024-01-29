import { FC } from "react";
import useCommandPaletteStore from "../../stores/CommandPaletteStore";
import { Modal } from "@mantine/core";
import { Kbd } from "@mantine/core";
interface Commands {
  name: string;
  shortcut: string;
}

const commands: Commands[] = [
  { name: "Create new file", shortcut: "mod+shift+C" },
  { name: "Create new directory", shortcut: "mod+O" },
  { name: "Open file", shortcut: "mod+shift+O" },
  { name: "Save file", shortcut: "mod+s" },
  { name: "Change tab", shortcut: "shift+tab" },
  { name: "Open command palette", shortcut: "mod+P" },
];

const CommandPalette: FC = () => {
  const { openCommandPalette, setOpenCommandPalette } =
    useCommandPaletteStore();

  const handleClose = () => {
    setOpenCommandPalette(false);
  };
  const processShortcut = (shortcut: string) => {
    const keys = shortcut.split("+");

    return keys.map((key, index) => (
      <Kbd key={index}>{key}</Kbd> // Use the Kbd component directly
    ));
  };
  return (
    <Modal
      opened={openCommandPalette}
      onClose={handleClose}
      title="Command Palette"
      size="xl"
      
    >
      <div style={{height:'70vh'}}>
        {commands.map((command) => (
          <div>
            <span>{command.name}</span>
            <span>{processShortcut(command.shortcut)}</span>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default CommandPalette;
