import { FC } from "react";
import styles from "./styles.module.scss";

interface RecipeIngredientListItemProps {
  amount: string;
  ingredientName: string;
}

const RecipeIngredientListItem: FC<RecipeIngredientListItemProps> = ({
  amount,
  ingredientName,
}) => {
  return (
    <li className={styles.recipeIngredientListItem}>
      <span className={styles.recipeIngredientListItem__amount}>{amount}</span>
      <span>{ingredientName}</span>
    </li>
  );
};

export default RecipeIngredientListItem;
