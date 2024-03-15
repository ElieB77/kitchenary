import { FC } from "react";
import { ImageType } from "../../../types";
import styles from "./styles.module.scss";
import Image from "next/image";
import { ebGaramond } from "@/app/(routes)/layout";

export interface ButtonProps {
  btnText: string | undefined;
  btnIcon?: ImageType;
  btnOnClick: () => void;
}

const Button: FC<ButtonProps> = ({ btnText, btnIcon, btnOnClick }) => {
  return (
    <button
      onClick={btnOnClick}
      className={`${styles.button} ${ebGaramond.className}`}
    >
      <p>{btnText}</p>
      {btnIcon && <Image {...btnIcon} />}
    </button>
  );
};

export default Button;
