import Image from "next/image";
import styles from "./styles.module.scss";
import { FC } from "react";
import { ImageType } from "@/app/shared/types";

export interface LikeButtonProps {
  secondaryColor: boolean;
  likeIcon: ImageType;
}

const LikeButton: FC<LikeButtonProps> = ({ secondaryColor, likeIcon }) => {
  return (
    <button
      className={`${styles.likeButton} ${
        secondaryColor ? styles.secondaryColor : ""
      }`}
    >
      <Image {...likeIcon} />
    </button>
  );
};

export default LikeButton;
