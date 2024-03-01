import { FC } from "react";
import styles from "./styles.module.scss";
import { ebGaramond } from "@/app/(routes)/layout";

interface TabProps {
  text: string;
}

const Tab: FC<TabProps> = ({ text }) => {
  return <div className={`${styles.tab} ${ebGaramond.className}`}>{text}</div>;
};

export default Tab;
