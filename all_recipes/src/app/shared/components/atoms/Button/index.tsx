import { FC } from "react";
import { RIGHT_ARROW_ICON } from "../../../constants";
import { ImageType } from "../../../types";
import styles from "./styles.module.scss";
import Image from "next/image";

export interface ButtonProps {
  btnText: string | undefined;
  btnIcon?: ImageType;
}

const Button: FC<ButtonProps> = ({ btnText, btnIcon }) => {
  return (
    <button className={styles.button}>
      <p>{btnText}</p>
      {btnIcon && <Image {...btnIcon} />}
    </button>
  );
};

export default Button;
