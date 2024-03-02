import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Button, { ButtonProps } from "@/app/shared/components/atoms/Button";
import LikeButton from "../../atoms/LikeButton";

export interface FeaturedCardProps extends ButtonProps {
  title: string;
  count: number;
  totalCount: string | number;
  image: any;
}

const FeaturedCard: FC<FeaturedCardProps> = ({
  title,
  count,
  totalCount,
  image,
  text,
  icon,
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
      <Button text={text} icon={icon} />
      <div className={styles.featuredCard__image}>
        <Image className={styles.featuredCard__image__img} {...image} />
        <LikeButton />
      </div>
    </div>
  );
};

export default FeaturedCard;
