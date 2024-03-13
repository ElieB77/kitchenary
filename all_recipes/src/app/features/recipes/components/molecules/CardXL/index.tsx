"use client";
import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { ImageType } from "@/app/shared/types";
import RoundedButton, {
  RoundedButtonProps,
} from "@/app/shared/components/atoms/RoundedButton";
import { ebGaramond } from "@/app/(routes)/layout";

export interface CardXLProps extends RoundedButtonProps {
  image: ImageType;
  title: string;
  description: string;
  footerText: string;
  onClick: () => void;
}

const CardXL: FC<CardXLProps> = ({
  image,
  title,
  description,
  footerText,
  icon,
  onClick,
}) => {
  return (
    <div className={styles.cardXL}>
      <div className={styles.cardXL__image}>
        <Image {...image} />
      </div>
      <div className={styles.cardXL__description}>
        <h1 className={ebGaramond.className}>{title}</h1>
        <p>{description}</p>
        <div onClick={onClick} className={styles.cardXL__description__footer}>
          <p>{footerText}</p>
          <RoundedButton icon={icon} onClick={undefined!} />
        </div>
      </div>
    </div>
  );
};

export default CardXL;
