import Image from "next/image";
import styles from "./styles.module.scss";
import { FC } from "react";
import { ImageType } from "@/app/shared/types";
import { HEART_FILLED_ICON } from "../../../constants";

export interface LikeButtonProps {
  secondaryColor: boolean;
  likeIcon: ImageType;
  handleLikeBtnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isSaved: boolean;
}

const LikeButton: FC<LikeButtonProps> = ({
  secondaryColor,
  likeIcon,
  handleLikeBtnClick,
  isSaved,
}) => {
  const isSavedOrNotIcon = isSaved ? HEART_FILLED_ICON : likeIcon;
  return (
    <button
      onClick={handleLikeBtnClick}
      className={`${styles.likeButton} ${
        secondaryColor ? styles.secondaryColor : ""
      } ${isSaved ? styles.isSaved : ""}`}
    >
      <Image {...isSavedOrNotIcon} />
    </button>
  );
};

export default LikeButton;
