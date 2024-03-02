import { RIGHT_ARROW_ICON } from "@/app/shared/constants";
import { HEART_ICON, NOODLES_IMG } from "../../../constants";
import LikeButton from "../../atoms/LikeButton";
import styles from "./styles.module.scss";
import Image from "next/image";
import { FC } from "react";

interface CardProps {
  image: any;
  title: string;
  subtitle: string;
  descriptionIcon: any;
  hasLikeButton: boolean;
}

const Card: FC<CardProps> = ({
  image,
  title,
  subtitle,
  descriptionIcon,
  hasLikeButton,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <Image className={styles.card__image__img} {...image} />
        {hasLikeButton && <LikeButton />}
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
