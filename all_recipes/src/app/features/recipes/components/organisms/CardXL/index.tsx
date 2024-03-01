import { FC } from "react";
import styles from "./styles.module.scss";
import { NOODLES_IMG } from "../../../constants";
import Image from "next/image";
import { RIGHT_ARROW_ICON } from "@/app/shared/constants";
import { ImageType } from "@/app/shared/types";
import RoundedButton, {
  RoundedButtonProps,
} from "@/app/shared/components/atoms/RoundedButton";

interface CardXLProps extends RoundedButtonProps {
  image: ImageType;
  title: string;
  description: string;
  footerText: string;
}

const CardXL: FC<CardXLProps> = ({
  image,
  title,
  description,
  footerText,
  icon,
}) => {
  return (
    <div className={styles.cardXL}>
      <div className={styles.cardXL__image}>
        <Image {...NOODLES_IMG} />
      </div>
      <div className={styles.cardXL__description}>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className={styles.cardXL__description__footer}>
          <p>{footerText}</p>
          <RoundedButton icon={icon} />
        </div>
      </div>
    </div>
  );
};

export default CardXL;
