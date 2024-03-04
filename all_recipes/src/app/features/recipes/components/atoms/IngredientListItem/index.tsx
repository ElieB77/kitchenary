import { FC } from "react";
import styles from "./styles.module.scss";

interface IngredientListItemProps {
  ingredient: string;
}

const IngredientListItem: FC<IngredientListItemProps> = ({ ingredient }) => {
  return (
    <li className={styles.ingredientListItem}>
      <span className={styles.ingredientListItem__amount}>{ingredient}</span>
    </li>
  );
};

export default IngredientListItem;
