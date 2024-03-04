import { FC, useState } from "react";
import styles from "./styles.module.scss";

export interface CheckBoxProps {
  label?: string;
}

const CheckBox: FC<CheckBoxProps> = ({ label }) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <label className={styles.checkBox}>
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <span className={styles.checkBox__checkmark}></span>
      {label}
    </label>
  );
};

export default CheckBox;
