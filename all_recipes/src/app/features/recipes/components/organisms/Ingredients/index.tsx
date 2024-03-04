import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { ImageType } from "@/app/shared/types";

export interface IngredientsProps {
  servingsIcon: ImageType;
  servingsText: string;
  ingredients: any;
}

const Ingredients: FC<IngredientsProps> = ({
  servingsIcon,
  servingsText,
  ingredients,
}) => {
  return (
    <div className={styles.ingredients}>
      <div className={styles.ingredients__servings}>
        <div className={styles.ingredients__servings__icon}>
          <Image {...servingsIcon} />
        </div>
        <p>{servingsText}</p>
      </div>

      <ul className={styles.ingredients__list}>{ingredients}</ul>
    </div>
  );
};

export default Ingredients;
