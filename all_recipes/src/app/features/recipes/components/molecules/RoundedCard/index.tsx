import { ImageType } from "@/app/shared/types";
import styles from "./styles.module.scss";
import Image from "next/image";
import { FC } from "react";

interface RoundedCardProps {
  image: ImageType;
  title: string;
  onClick: () => void;
}

const RoundedCard: FC<RoundedCardProps> = ({ image, title, onClick }) => {
  return (
    <div onClick={onClick} className={styles.roundedCard}>
      <div className={styles.roundedCard__image}>
        <Image {...image} />
      </div>
      <h3 className={styles.roundedCard__title}>{title}</h3>
    </div>
  );
};

export default RoundedCard;
