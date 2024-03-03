import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { ImageType } from "@/app/shared/types";

export interface RecipeIngredientsProps {
  servingsIcon: ImageType;
  servingsText: string;
  ingredients: any;
}

const RecipeIngredients: FC<RecipeIngredientsProps> = ({
  servingsIcon,
  servingsText,
  ingredients,
}) => {
  return (
    <div className={styles.recipeIngredients}>
      <div className={styles.recipeIngredients__servings}>
        <div className={styles.recipeIngredients__servings__icon}>
          <Image {...servingsIcon} />
        </div>
        <p>{servingsText}</p>
      </div>

      <ul className={styles.recipeIngredients__list}>{ingredients}</ul>
    </div>
  );
};

export default RecipeIngredients;
