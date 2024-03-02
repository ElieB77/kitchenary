"use client";
import { FC } from "react";
import styles from "./styles.module.scss";
import Title from "@/app/shared/components/atoms/Title";

interface FeaturedPageProps {
  titleFirstWord: string;
  titleSecondWord: string;
  featuredCards: any;
}

const FeaturedPage: FC<FeaturedPageProps> = ({
  titleFirstWord,
  titleSecondWord,
  featuredCards,
}) => {
  return (
    <div className={styles.featuredPage}>
      <Title firstWord={titleFirstWord} secondWord={titleSecondWord} />
      <div className={styles.featuredPage__cards}>{featuredCards}</div>
    </div>
  );
};

export default FeaturedPage;
