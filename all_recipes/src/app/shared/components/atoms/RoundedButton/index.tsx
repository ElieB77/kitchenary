import { ImageType } from "@/app/shared/types";
import styles from "./styles.module.scss";
import Image from "next/image";
import { FC } from "react";

export interface RoundedButtonProps {
  icon: ImageType;
  onClick: any;
}

const RoundedButton: FC<RoundedButtonProps> = ({ icon, onClick }) => {
  return (
    <button onClick={onClick} className={styles.roundedButton}>
      <Image {...icon} />
    </button>
  );
};

export default RoundedButton;
