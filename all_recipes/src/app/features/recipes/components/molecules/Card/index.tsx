import LikeButton, { LikeButtonProps } from "../../atoms/LikeButton";
import styles from "./styles.module.scss";
import Image from "next/image";
import { FC } from "react";
import { ImageType } from "@/app/shared/types";

interface CardProps extends LikeButtonProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  descriptionIcon: ImageType;
  hasLikeButton: boolean;
  onClick: () => void;
}

const Card: FC<CardProps> = ({
  imageSrc,
  title,
  subtitle,
  descriptionIcon,
  hasLikeButton,
  likeIcon,
  secondaryColor,
  onClick,
  handleLikeBtnClick,
  isSaved,
}) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.card__image}>
        <Image
          className={styles.card__image__img}
          src={imageSrc}
          alt={title}
          fill
        />
        {hasLikeButton && (
          <LikeButton
            secondaryColor={secondaryColor}
            likeIcon={likeIcon}
            handleLikeBtnClick={handleLikeBtnClick}
            isSaved={isSaved}
          />
        )}
      </div>
      <div className={styles.card__description}>
        <div>
          <h5 className={styles.card__description__title}>{title}</h5>
          <h3 className={styles.card__description__subtitle}>{subtitle}</h3>
        </div>
        <Image {...descriptionIcon} />
      </div>
    </div>
  );
};

export default Card;
