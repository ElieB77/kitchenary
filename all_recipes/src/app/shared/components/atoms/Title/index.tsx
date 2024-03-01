import { FC } from "react";
import styles from "./styles.module.scss";

export interface TitleProps {
  firstWord: string;
  secondWord: string;
}

const Title: FC<TitleProps> = ({ firstWord, secondWord }) => {
  return (
    <h1 className={styles.title}>
      {firstWord} <span>{secondWord}</span>
    </h1>
  );
};

export default Title;
