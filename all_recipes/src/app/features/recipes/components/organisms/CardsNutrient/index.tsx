import { FC } from "react";
import styles from "./styles.module.scss";

export interface CardsNutrientProps {
  nutrientCards: any;
}

const CardsNutrient: FC<CardsNutrientProps> = ({ nutrientCards }) => {
  return <div className={styles.cardsNutrient}>{nutrientCards}</div>;
};

export default CardsNutrient;
