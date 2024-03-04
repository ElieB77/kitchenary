import { ebGaramond } from "@/app/(routes)/layout";
import styles from "./styles.module.scss";
import { FC } from "react";

interface InputProps {
  id: string;
  label: string;
  type: string;
}

const Input: FC<InputProps> = ({ id, label, type }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{label}</label>
      <input className={ebGaramond.className} id={id} type={type} />
    </div>
  );
};

export default Input;
