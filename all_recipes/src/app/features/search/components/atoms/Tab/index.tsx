import { FC } from "react";
import styles from "./styles.module.scss";

interface TabProps {
  text: string;
}

const Tab: FC<TabProps> = ({ text }) => {
  return <div className={styles.tab}>{text}</div>;
};

export default Tab;
