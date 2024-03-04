"use client";
import { FC } from "react";
import styles from "./styles.module.scss";
import Input from "@/app/shared/components/atoms/Input";
import Button from "@/app/shared/components/atoms/Button";
import { ebGaramond } from "@/app/(routes)/layout";

interface ForgotPasswordPageProps {
  title: string;
  infoText: string;
  inputId: string;
  inputLabel: string;
  inputType: string;
  btnText: string;
}

const ForgotPasswordPage: FC<ForgotPasswordPageProps> = ({
  title,
  infoText,
  inputId,
  inputLabel,
  inputType,
  btnText,
}) => {
  return (
    <div className={styles.forgotPasswordPage}>
      <h1
        className={`${ebGaramond.className} ${styles.forgotPasswordPage__title}`}
      >
        {title}
      </h1>
      <p className={styles.forgotPasswordPage__info}>{infoText}</p>
      <Input id={inputId} label={inputLabel} type={inputType} />
      <Button text={btnText} />
    </div>
  );
};

export default ForgotPasswordPage;
