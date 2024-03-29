import { FC } from "react";
import styles from "./styles.module.scss";

interface StepProps {
  stepText: string;
  handleStepClick: () => void;
  isChecked: boolean;
}

const Step: FC<StepProps> = ({ stepText, handleStepClick, isChecked }) => {
  return (
    <p
      onClick={handleStepClick}
      className={`${styles.step} ${isChecked ? styles.checked : ""}`}
    >
      {stepText}
    </p>
  );
};

export default Step;
