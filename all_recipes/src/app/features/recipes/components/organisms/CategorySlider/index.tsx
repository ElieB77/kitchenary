import { FC } from "react";
import styles from "./styles.module.scss";
import Title from "@/app/shared/components/atoms/Title";

export interface CategorySliderProps {
  cards: any;
}

const CategorySlider: FC<CategorySliderProps> = ({ cards }) => {
  return (
    <div className={styles.categorySlider}>
      <div className={styles.categorySlider__slider}>{cards}</div>
    </div>
  );
};

export default CategorySlider;
