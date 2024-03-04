import { FC } from "react";
import styles from "./styles.module.scss";
import { ebGaramond } from "@/app/(routes)/layout";

interface CardNutrientProps {
  nutrientName: string;
  nutrientAmount: number;
  nutrientUnit: string;
  nutrientPercent: string;
}

const CardNutrient: FC<CardNutrientProps> = ({
  nutrientName,
  nutrientAmount,
  nutrientUnit,
  nutrientPercent,
}) => {
  return (
    <div className={styles.cardNutrient}>
      <span>{nutrientName}</span>
      <span className={ebGaramond.className}>
        {nutrientAmount}
        {nutrientUnit}
      </span>
      <hr />
      <span className={ebGaramond.className}>{nutrientPercent}</span>
    </div>
  );
};

export default CardNutrient;
