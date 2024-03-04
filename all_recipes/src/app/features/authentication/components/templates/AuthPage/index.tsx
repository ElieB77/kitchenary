"use client";
import Button, { ButtonProps } from "@/app/shared/components/atoms/Button";
import styles from "./styles.module.scss";
import Input from "@/app/shared/components/atoms/Input";
import { ebGaramond } from "@/app/(routes)/layout";
import CheckBox, { CheckBoxProps } from "../../atoms/CheckBox";
import { FC } from "react";
import Link from "next/link";

interface AuthPageProps extends ButtonProps, CheckBoxProps {
  infoTitle: string;
  title: string;
  emailId: string;
  emailLabel: string;
  emailType: string;
  passwordId: string;
  passwordLabel: string;
  passwordType: string;
  isLogin: boolean;
  forgotPasswordLinkText?: string;
  forgotPasswordLinkHref?: string;
  bottomLinkText: string;
  bottomLinkHref: string;
}

const AuthPage: FC<AuthPageProps> = ({
  infoTitle,
  title,
  emailId,
  emailLabel,
  emailType,
  passwordId,
  passwordLabel,
  passwordType,
  isLogin,
  text,
  bottomLinkText,
  bottomLinkHref,
  forgotPasswordLinkText,
  forgotPasswordLinkHref,
  label,
}) => {
  return (
    <div className={styles.authPage}>
      <div
        className={`${styles.authPage__container} ${
          isLogin ? styles.isLogin : ""
        }`}
      >
        <div className={styles.authPage__container__title}>
          <h3
            className={`${ebGaramond.className} ${styles.authPage__container__title__infoTitle}`}
          >
            {infoTitle}
          </h3>
          <h1 className={styles.authPage__container__title__title}>{title}</h1>
        </div>
        <Input id={emailId} label={emailLabel} type={emailType} />
        <Input id={passwordId} label={passwordLabel} type={passwordType} />
        {isLogin && (
          <>
            <CheckBox label={label} />
            <Link
              className={`${ebGaramond.className} ${styles.authPage__container__forgotPassword}`}
              href={forgotPasswordLinkHref!}
            >
              {forgotPasswordLinkText}
            </Link>
          </>
        )}
        <Button text={text} />
        <Link className={ebGaramond.className} href={bottomLinkHref}>
          {bottomLinkText}
        </Link>
      </div>
    </div>
  );
};

export default AuthPage;
