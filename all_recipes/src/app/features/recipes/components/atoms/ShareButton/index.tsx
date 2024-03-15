import Image from "next/image";
import styles from "./styles.module.scss";
import { FC } from "react";
import { ImageType } from "@/app/shared/types";

export interface ShareButtonProps {
  shareIcon: ImageType;
}

const ShareButton: FC<ShareButtonProps> = ({ shareIcon }) => {
  return (
    <button className={styles.shareButton}>
      <Image {...shareIcon} />
    </button>
  );
};

export default ShareButton;
