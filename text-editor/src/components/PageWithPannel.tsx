import { FC } from "react";
import SidePannel from "./SidePannel";

interface PageWithPannelProps {
  page: JSX.Element;
}

const PageWithPannel: FC<PageWithPannelProps> = ({ page }) => {
  return (
    <div style={{ display: "flex" }}>
      <SidePannel />
      {page}
    </div>
  );
};

export default PageWithPannel;
