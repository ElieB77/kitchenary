import { ebGaramond } from "@/app/(routes)/layout";
import styles from "./styles.module.scss";
import { FC } from "react";

export interface InputProps {
  id: string;
  label: string;
  type: string;
  onChange: any;
  value: any;
  disabled?: boolean;
}

const Input: FC<InputProps> = ({
  id,
  label,
  type,
  onChange,
  value,
  disabled,
}) => {
  return (
    <div className={`${styles.input} ${disabled ? styles.disabled : ""}`}>
      <label htmlFor={id}>{label}</label>
      <input
        className={ebGaramond.className}
        onChange={onChange}
        id={id}
        type={type}
        value={value}
        required
      />
    </div>
  );
};

export default Input;
