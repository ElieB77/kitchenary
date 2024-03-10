"use client";
import { FC } from "react";
import styles from "./styles.module.scss";
import Input, { InputProps } from "@/app/shared/components/atoms/Input";
import Button, { ButtonProps } from "@/app/shared/components/atoms/Button";
import { ebGaramond } from "@/app/(routes)/layout";
import FormErrorMessage, {
  FormErrorMessageProps,
} from "../../molecules/FormErrorMessage";

interface ForgotResetPasswordPageProps
  extends InputProps,
    ButtonProps,
    FormErrorMessageProps {
  title: string;
  infoText: string;
  onSubmit: any;
}

const ForgotResetPasswordPage: FC<ForgotResetPasswordPageProps> = ({
  title,
  infoText,
  id,
  label,
  type,
  onChange,
  value,
  btnText,
  btnOnClick,
  onSubmit,
  errorMessage,
  errorIcon,
}) => {
  return (
    <form onSubmit={onSubmit} className={styles.forgotPasswordPage}>
      <div>
        <h1
          className={`${ebGaramond.className} ${styles.forgotPasswordPage__title}`}
        >
          {title}
        </h1>
        <p className={styles.forgotPasswordPage__info}>{infoText}</p>
        {errorMessage && (
          <FormErrorMessage errorIcon={errorIcon} errorMessage={errorMessage} />
        )}
      </div>
      <Input
        id={id}
        label={label}
        type={type}
        onChange={onChange}
        value={value}
      />
      <Button btnText={btnText} btnOnClick={btnOnClick} />
    </form>
  );
};

export default ForgotResetPasswordPage;
