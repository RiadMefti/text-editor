import { FC } from "react";
import useCommandPaletteStore from "../../stores/CommandPaletteStore";
import { Modal } from "@mantine/core";

interface CommandPaletteProps {}

const CommandPalette: FC<CommandPaletteProps> = ({}) => {
  const { openCommandPalette, setOpenCommandPalette } =
    useCommandPaletteStore();

  const handleClose = () => {
    setOpenCommandPalette(false);
  };

  return (
    <Modal
      opened={openCommandPalette}
      onClose={handleClose}
      title="Authentication"
    >
      {/* Modal content */}
    </Modal>
  );
};

export default CommandPalette;
