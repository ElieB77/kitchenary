import { FC } from "react";
import styles from "./styles.module.scss";

interface IngredientListItemProps {
  ingredientAmount: string;
  ingredientName: string;
}

const IngredientListItem: FC<IngredientListItemProps> = ({
  ingredientAmount,
  ingredientName,
}) => {
  return (
    <li className={styles.ingredientListItem}>
      <span className={styles.ingredientListItem__amount}>
        {ingredientAmount}
      </span>
      <span>{ingredientName}</span>
    </li>
  );
};

export default IngredientListItem;
