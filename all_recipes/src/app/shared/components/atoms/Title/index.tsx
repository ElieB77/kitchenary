"use client";
import { FC } from "react";
import styles from "./styles.module.scss";
import { ebGaramond } from "@/app/(routes)/layout";
import { SPLASH_IMG } from "@/app/shared/constants";
import Image from "next/image";

export interface TitleProps {
  firstWord: string;
  secondWord: string;
}

const Title: FC<TitleProps> = ({ firstWord, secondWord }) => {
  return (
    <h1 className={styles.title}>
      {firstWord}
      <span className={ebGaramond.className}>{secondWord}</span>
      <Image className={styles.title__img} {...SPLASH_IMG} />
    </h1>
  );
};

export default Title;
