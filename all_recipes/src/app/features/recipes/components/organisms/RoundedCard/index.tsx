import { ImageType } from "@/app/shared/types";
import { NOODLES_IMG } from "../../../constants";
import styles from "./styles.module.scss";
import Image from "next/image";
import { FC } from "react";

interface RoundedCardProps {
  image: ImageType;
  title: string;
}

const RoundedCard: FC<RoundedCardProps> = ({ image, title }) => {
  return (
    <div className={styles.roundedCard}>
      <div className={styles.roundedCard__image}>
        <Image {...image} />
      </div>
      <h2 className={styles.roundedCard__title}>{title}</h2>
    </div>
  );
};

export default RoundedCard;
