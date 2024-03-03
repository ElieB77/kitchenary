import { FC } from "react";
import styles from "./styles.module.scss";

interface RecipeStepProps {
  stepText: string;
}

const RecipeStep: FC<RecipeStepProps> = ({ stepText }) => {
  return <p className={styles.recipeStep}>{stepText}</p>;
};

export default RecipeStep;
