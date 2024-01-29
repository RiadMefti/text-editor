import { Title } from "@mantine/core";
import { FC } from "react";
const LandingTitle: FC = () => {
  return (
    <Title
      style={{
        fontSize: "4rem",
        marginBottom: "20vh",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <div>The Text Editor</div>{" "}
    </Title>
  );
};
1;

export default LandingTitle;