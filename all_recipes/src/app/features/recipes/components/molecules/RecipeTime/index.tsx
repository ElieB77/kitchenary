import { FC } from "react";
import styles from "./styles.module.scss";
import { ebGaramond } from "@/app/(routes)/layout";
import Image from "next/image";
import { ImageType } from "@/app/shared/types";

export interface RecipeTimeProps {
  totalTimeIcon: ImageType;
  totalTime: string;
  preparationText: string;
  preparationTime: string;
  cookingText: string;
  cookingTime: string;
  estimation: string;
}

const RecipeTime: FC<RecipeTimeProps> = ({
  totalTime,
  preparationText,
  preparationTime,
  cookingText,
  cookingTime,
  estimation,
  totalTimeIcon,
}) => {
  return (
    <div className={styles.recipeTime}>
      <div className={styles.recipeTime__total}>
        <Image {...totalTimeIcon} />
        <h2>{totalTime}</h2>
      </div>
      <p>
        {preparationText}
        <span className={styles.recipeTime__time}>{preparationTime}</span>
      </p>
      <p>
        {cookingText}
        <span className={styles.recipeTime__time}>{cookingTime}</span>
      </p>
      <h5
        className={`${ebGaramond.className} ${styles.recipeTime__estimation}`}
      >
        {estimation}
      </h5>
    </div>
  );
};

export default RecipeTime;
