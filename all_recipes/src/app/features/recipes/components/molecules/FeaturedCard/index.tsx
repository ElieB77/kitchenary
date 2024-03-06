import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Button, { ButtonProps } from "@/app/shared/components/atoms/Button";
import LikeButton, { LikeButtonProps } from "../../atoms/LikeButton";
import { ImageType } from "@/app/shared/types";

export interface FeaturedCardProps extends ButtonProps, LikeButtonProps {
  title: string;
  count: number;
  totalCount: string | number;
  imageSrc: string;
}

const FeaturedCard: FC<FeaturedCardProps> = ({
  title,
  count,
  totalCount,
  imageSrc,
  btnText,
  btnIcon,
  likeIcon,
  btnOnClick,
}) => {
  return (
    <div className={styles.featuredCard}>
      <div className={styles.featuredCard__heading}>
        <div className={styles.featuredCard__heading__count}>
          <h2>{count}</h2>
          <span>{totalCount}</span>
        </div>
        <h2>{title}</h2>
      </div>
      <Button btnText={btnText} btnIcon={btnIcon} btnOnClick={btnOnClick} />
      <div className={styles.featuredCard__image}>
        <Image
          src={imageSrc}
          className={styles.featuredCard__image__img}
          fill
          alt={title}
        />
        <LikeButton secondaryColor={false} likeIcon={likeIcon} />
      </div>
    </div>
  );
};

export default FeaturedCard;
