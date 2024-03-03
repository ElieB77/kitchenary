import { FC } from "react";
import styles from "./styles.module.scss";
import RecipeStep from "../../atoms/RecipeStep";

export interface RecipeStepsProps {
  steps: any;
}

const RecipeSteps: FC<RecipeStepsProps> = ({ steps }) => {
  return <div className={styles.recipeSteps}>{steps}</div>;
};

export default RecipeSteps;
