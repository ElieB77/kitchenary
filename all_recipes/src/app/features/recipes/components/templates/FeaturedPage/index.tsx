"use client";
import { FC } from "react";
import styles from "./styles.module.scss";
import Title from "@/app/shared/components/atoms/Title";
import Button, { ButtonProps } from "@/app/shared/components/atoms/Button";

export interface FeaturedPageProps extends ButtonProps {
  titleFirstWord: string;
  titleSecondWord: string;
  featuredCards: JSX.Element[] | undefined;
}

const FeaturedPage: FC<FeaturedPageProps> = ({
  titleFirstWord,
  titleSecondWord,
  featuredCards,
  btnText,
  btnIcon,
  btnOnClick,
}) => {
  return (
    <div className={styles.featuredPage}>
      <Title firstWord={titleFirstWord} secondWord={titleSecondWord} />
      <div className={styles.featuredPage__cards}>{featuredCards}</div>
      <Button btnText={btnText} btnIcon={btnIcon} btnOnClick={btnOnClick} />
    </div>
  );
};

export default FeaturedPage;
