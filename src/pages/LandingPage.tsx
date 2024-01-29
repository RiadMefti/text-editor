import { CSSProperties, FC } from "react";
import {
  IconFile,
  IconPlus,
  IconFolder,
  IconCommand,
} from "@tabler/icons-react";

import { useNavigate } from "react-router-dom";
import LandingActionButton from "../components/landing-page/LandingActionButton";
import LandingTitle from "../components/landing-page/LandingTitle";
import useCommandPaletteStore from "../stores/CommandPaletteStore";

const landingStyles: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  height: "100%",
  flexDirection: "column",
  gap: "2rem",
  alignItems: "center",
};

interface LandingPageProps {}

const LandingPage: FC<LandingPageProps> = ({}) => {
  const { setOpenCommandPalette } = useCommandPaletteStore();
  const navigate = useNavigate();
  const openFolder = async () => {
    navigate("/txtFile");
  };
  const openFile = async () => {
    navigate("/txtFile");
  };

  return (
    <div style={landingStyles}>
      <div>
        {" "}
        <LandingTitle />
      </div>

      <LandingActionButton
        icon={<IconPlus size="2rem" />}
        onClick={() => {}}
        title="new File"
        shortcut="cmd+shift+C"
      ></LandingActionButton>

      <LandingActionButton
        icon={<IconFolder size="2rem" />}
        onClick={openFolder}
        title="open Folder"
        shortcut="cmd+O"
      ></LandingActionButton>

      <LandingActionButton
        icon={<IconFile size="2rem" />}
        onClick={openFile}
        title="open File"
        shortcut="cmd+shift+O"
      ></LandingActionButton>
      <LandingActionButton
        icon={<IconCommand size="2rem" />}
        onClick={() => setOpenCommandPalette(true)}
        title="Command Palette"
        shortcut="cmd+P"
      ></LandingActionButton>
    </div>
  );
};

export default LandingPage;
