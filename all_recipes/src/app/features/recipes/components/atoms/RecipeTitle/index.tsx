import { FC } from "react";
import styles from "./styles.module.scss";
import { ebGaramond, montserrat } from "@/app/(routes)/layout";

interface RecipeTitleProps {
  firstWord: string;
  secondWord: string;
}

const RecipeTitle: FC<RecipeTitleProps> = ({ firstWord, secondWord }) => {
  return (
    <h1 className={`${ebGaramond.className} ${styles.recipeTitle}`}>
      {firstWord}
      <span className={montserrat.className}> {secondWord}</span>
    </h1>
  );
};

export default RecipeTitle;
