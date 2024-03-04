import { FC } from "react";
import styles from "./styles.module.scss";

interface StepProps {
  stepText: string;
}

const Step: FC<StepProps> = ({ stepText }) => {
  return <p className={styles.step}>{stepText}</p>;
};

export default Step;
