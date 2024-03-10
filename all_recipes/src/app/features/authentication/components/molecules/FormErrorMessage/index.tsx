import { ImageType } from "@/app/shared/types";
import styles from "./styles.module.scss";
import Image from "next/image";
import { FC } from "react";

export interface FormErrorMessageProps {
  errorIcon: ImageType;
  errorMessage: string;
}

const FormErrorMessage: FC<FormErrorMessageProps> = ({
  errorIcon,
  errorMessage,
}) => {
  return (
    <div className={styles.formErrorMessage}>
      <Image {...errorIcon} />
      <p>{errorMessage}</p>
    </div>
  );
};

export default FormErrorMessage;
