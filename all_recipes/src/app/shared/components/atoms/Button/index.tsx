import { FC } from "react";
import { RIGHT_ARROW_ICON } from "../../../constants";
import { ImageType } from "../../../types";
import styles from "./styles.module.scss";
import Image from "next/image";

export interface ButtonProps {
  text: string | undefined;
  icon: ImageType;
}

const Button: FC<ButtonProps> = ({ text, icon }) => {
  return (
    <button className={styles.button}>
      <p>{text}</p>
      <Image {...icon} />
    </button>
  );
};

export default Button;
