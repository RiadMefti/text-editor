import { CSSProperties, FC} from "react";
import { IconPlus, IconFile } from "@tabler/icons-react";
import { Button } from "@mantine/core";
import { TxtFile } from "../types/types";
import { openTxtFile } from "../service/FileService";
import { useFileStore } from "../stores/FileStore";
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
  const { setFile } = useFileStore();
  const navigate = useNavigate();
  const open = async () => {
    const txtFile: TxtFile | undefined = await openTxtFile();
    if (txtFile) {
      setFile(txtFile);
      navigate("/txtFile");
    }
  };

  return (
    <div style={landingStyles}>
      <Button
        style={{ color: "white", height: "4rem" }}
        variant="transparent"
        onMouseUp={open}
      >
        <div style={simpleflex}>
          <h1>Open</h1>
          <IconFile size={"3rem"} />
        </div>
      </Button>

      <Button style={{ color: "white", height: "4rem" }} variant="transparent">
        <div style={simpleflex}>
          <h1>Create file</h1>
          <IconPlus size={"3rem"} />
        </div>
      </Button>
    </div>
  );
};

export default LandingPage;