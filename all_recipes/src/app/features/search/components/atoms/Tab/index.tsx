import { FC } from "react";
import styles from "./styles.module.scss";
import { ebGaramond } from "@/app/(routes)/layout";

interface TabProps {
  text: string;
  onClick: () => void;
}

const Tab: FC<TabProps> = ({ text, onClick }) => {
  return (
    <div onClick={onClick} className={`${styles.tab} ${ebGaramond.className}`}>
      {text}
    </div>
  );
};

export default Tab;
