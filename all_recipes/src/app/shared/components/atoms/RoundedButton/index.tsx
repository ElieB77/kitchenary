import { ImageType } from "@/app/shared/types";
import styles from "./styles.module.scss";
import Image from "next/image";
import { FC } from "react";

export interface RoundedButtonProps {
  icon: ImageType;
}

const RoundedButton: FC<RoundedButtonProps> = ({ icon }) => {
  return (
    <button className={styles.roundedButton}>
      <Image {...icon} />
    </button>
  );
};

export default RoundedButton;
