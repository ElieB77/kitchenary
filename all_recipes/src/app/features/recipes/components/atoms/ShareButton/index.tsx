import Image from "next/image";
import styles from "./styles.module.scss";
import { FC, useState } from "react";
import { ImageType } from "@/app/shared/types";

export interface ShareButtonProps {
  shareIcon: ImageType;
  shareBtnOnClick: () => void;
}

const ShareButton: FC<ShareButtonProps> = ({ shareIcon, shareBtnOnClick }) => {
  return (
    <button onClick={shareBtnOnClick} className={styles.shareButton}>
      <Image {...shareIcon} />
    </button>
  );
};

export default ShareButton;
