"use client";
import Button, { ButtonProps } from "@/app/shared/components/atoms/Button";
import styles from "./styles.module.scss";
import Input from "@/app/shared/components/atoms/Input";
import { ebGaramond } from "@/app/(routes)/layout";
import { CheckBoxProps } from "../../atoms/CheckBox";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import FormErrorMessage, {
  FormErrorMessageProps,
} from "../../molecules/FormErrorMessage";

interface AuthPageProps
  extends ButtonProps,
    CheckBoxProps,
    FormErrorMessageProps {
  infoTitle: string;
  title: string;
  emailId: string;
  emailLabel: string;
  emailType: string;
  emailOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  emailValue: string;
  passwordId: string;
  passwordLabel: string;
  passwordType: string;
  passwordValue: string;
  passwordOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isLogin: boolean;
  forgotPasswordLinkText?: string;
  forgotPasswordLinkHref?: string;
  bottomLinkText: string;
  bottomLinkHref: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const AuthPage: FC<AuthPageProps> = ({
  infoTitle,
  title,
  emailId,
  emailLabel,
  emailType,
  emailOnChange,
  emailValue,
  passwordId,
  passwordLabel,
  passwordType,
  passwordValue,
  passwordOnChange,
  isLogin,
  btnText,
  btnOnClick,
  bottomLinkText,
  bottomLinkHref,
  forgotPasswordLinkText,
  forgotPasswordLinkHref,
  onSubmit,
  errorMessage,
  errorIcon,
}) => {
  return (
    <div className={styles.authPage}>
      <form
        className={`${styles.authPage__container} ${
          isLogin ? styles.isLogin : ""
        }`}
        onSubmit={onSubmit}
      >
        <div className={styles.authPage__container__head}>
          <h3
            className={`${ebGaramond.className} ${styles.authPage__container__head__infoTitle}`}
          >
            {infoTitle}
          </h3>
          <h1 className={styles.authPage__container__head__title}>{title}</h1>

          {errorMessage && (
            <div className={styles.authPage__container__head__error}>
              <FormErrorMessage
                errorIcon={errorIcon}
                errorMessage={errorMessage}
              />
            </div>
          )}
        </div>

        <Input
          id={emailId}
          label={emailLabel}
          type={emailType}
          onChange={emailOnChange}
          value={emailValue}
        />
        <Input
          id={passwordId}
          label={passwordLabel}
          type={passwordType}
          onChange={passwordOnChange}
          value={passwordValue}
        />

        {!isLogin && (
          <div className={styles.authPage__container__passwordInfo}>
            <Image
              src={"/icons/info-icon.png"}
              alt={"info"}
              width={25}
              height={25}
            />
            <p>
              Password must have 8 characters with 1 uppercase, 1 lowercase, and
              1 number.
            </p>
          </div>
        )}

        {isLogin && (
          <div className={styles.authPage__container__rememberMe}>
            {/* <CheckBox label={label} /> */}
            <Link
              className={`${ebGaramond.className} ${styles.authPage__container__forgotPassword}`}
              href={forgotPasswordLinkHref!}
            >
              {forgotPasswordLinkText}
            </Link>
          </div>
        )}

        <Button btnText={btnText} btnOnClick={btnOnClick} />
        <Link className={ebGaramond.className} href={bottomLinkHref}>
          {bottomLinkText}
        </Link>
      </form>
    </div>
  );
};

export default AuthPage;
