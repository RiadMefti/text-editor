import { CSSProperties, FC } from "react";
import { IconFile, IconPlus, IconFolder } from "@tabler/icons-react";
import { Button } from "@mantine/core";

import { useNavigate } from "react-router-dom";

const landingStyles: CSSProperties = {
  display: "flex",
  justifyContent: "center",

  height: "100%",
  flexDirection: "column",
  gap: "2rem",
};

const simpleflex: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
};
interface LandingPageProps {}

const LandingPage: FC<LandingPageProps> = ({}) => {
  const navigate = useNavigate();
  const openFolder = async () => {
    navigate("/txtFile");
  };
  const openFile = async () => {
    navigate("/txtFile");
  };

  return (
    <div style={landingStyles}>
      <Button
        onClick={async () => {}}
        style={{ color: "white", height: "4rem" }}
        variant="transparent"
      >
        <div style={simpleflex}>
          <h1>Create file</h1>
          <IconPlus size={"3rem"} />
        </div>
      </Button>
      <Button
        style={{ color: "white", height: "4rem" }}
        variant="transparent"
        onMouseUp={openFolder}
      >
        <div style={simpleflex}>
          <h1>Open Folder</h1>
          <IconFolder size={"3rem"} />
        </div>
      </Button>

      <Button
        onClick={async () => {
          await openFile();
        }}
        style={{ color: "white", height: "4rem" }}
        variant="transparent"
      >
        <div style={simpleflex}>
          <h1>Open file</h1>
          <IconFile size={"3rem"} />
        </div>
      </Button>
    </div>
  );
};

export default LandingPage;
