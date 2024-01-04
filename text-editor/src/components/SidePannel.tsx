import { FC } from "react";
import { useSidePannelStore } from "../stores/SidePannelStore";
import { Button } from "@mantine/core";
import { listAllFilesDir } from "../service/FileService";

interface SidePannelProps {}

const SidePannel: FC<SidePannelProps> = ({}) => {
  const { isOpen, toggle } = useSidePannelStore();
  const handleClick = async () => {
    console.log(await listAllFilesDir());
  };
  return (
    <div>
      {isOpen && (
        <div
          style={{
            width: "30vh",
            padding: "5rem",
            backgroundColor: "#3335",
            height: "100%",
          }}
          onClick={handleClick}
        >
          SidePannel
        </div>
      )}
    </div>
  );
};

export default SidePannel;
