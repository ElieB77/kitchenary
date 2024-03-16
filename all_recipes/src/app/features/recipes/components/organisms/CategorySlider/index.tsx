import { FC } from "react";
import styles from "./styles.module.scss";

export interface CategorySliderProps {
  roundedCards: JSX.Element[];
}

const CategorySlider: FC<CategorySliderProps> = ({ roundedCards }) => {
  return (
    <div className={styles.categorySlider}>
      <div className={styles.categorySlider__slider}>{roundedCards}</div>
    </div>
  );
};

export default CategorySlider;
