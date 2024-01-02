import { CSSProperties, FC } from "react";
import { IconPlus, IconFile } from "@tabler/icons-react";
import { Button } from "@mantine/core";
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
  return (
    <div style={landingStyles}>
      <Button style={{ color: "white", height: "4rem" }} variant="transparent">
        <div style={simpleflex}>
          <h1>Open file</h1>
          <IconFile size={"3rem"} />
        </div>
      </Button>
      <div style={simpleflex}>
        <Button
          style={{ color: "white", height: "4rem" }}
          variant="transparent"
        >
          <h1>Create file</h1>
          <IconPlus size={"3rem"} />
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
