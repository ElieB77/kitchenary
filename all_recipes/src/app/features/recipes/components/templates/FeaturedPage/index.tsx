"use client";
import { FC } from "react";
import styles from "./styles.module.scss";
import Title from "@/app/shared/components/atoms/Title";
import Button, { ButtonProps } from "@/app/shared/components/atoms/Button";

export interface FeaturedPageProps extends ButtonProps {
  titleFirstWord: string;
  titleSecondWord: string;
  featuredCards: JSX.Element[] | null;
}

const FeaturedPage: FC<FeaturedPageProps> = ({
  titleFirstWord,
  titleSecondWord,
  featuredCards,
  btnText,
  btnIcon,
}) => {
  return (
    <div className={styles.featuredPage}>
      <Title firstWord={titleFirstWord} secondWord={titleSecondWord} />
      <div className={styles.featuredPage__cards}>{featuredCards}</div>
      <Button btnText={btnText} />
    </div>
  );
};

export default FeaturedPage;
