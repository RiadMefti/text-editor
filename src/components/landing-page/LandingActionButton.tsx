import { Button, Kbd } from "@mantine/core";
import { CSSProperties, FC } from "react";

const simpleflex: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
};

const ButtonStyle: CSSProperties = { color: "white", cursor: "pointer" };

const kbdStyle: CSSProperties = { margin: "0 0.5rem" }; // Add some margin to the Kbd component

interface LandingActionButtonProps {
  title: string;
  icon: JSX.Element;
  shortcut: string;
  onClick: () => void;
}

const processShortcut = (shortcut: string) => {
  const keys = shortcut.split("+");

  return keys.map((key, index) => (
    <Kbd key={index} style={kbdStyle}>
      {key}
    </Kbd> // Use the Kbd component directly
  ));
};

const LandingActionButton: FC<LandingActionButtonProps> = ({
  title,
  icon,
  shortcut,
  onClick,
}) => {
  return (
    <Button onClick={onClick} style={ButtonStyle} variant="transparent">
      <div style={simpleflex}>
        {icon}
        <h1>{title}</h1>
        <div>{processShortcut(shortcut)}</div>
      </div>
    </Button>
  );
};

export default LandingActionButton;
