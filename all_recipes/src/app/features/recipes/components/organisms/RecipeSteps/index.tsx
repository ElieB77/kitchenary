import { FC } from "react";
import styles from "./styles.module.scss";

export interface RecipeStepsProps {
  steps: JSX.Element[];
}

const RecipeSteps: FC<RecipeStepsProps> = ({ steps }) => {
  return <div className={styles.recipeSteps}>{steps}</div>;
};

export default RecipeSteps;
