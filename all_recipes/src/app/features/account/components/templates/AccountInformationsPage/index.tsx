import Title, { TitleProps } from "@/app/shared/components/atoms/Title";
import styles from "./styles.module.scss";
import Input, { InputProps } from "@/app/shared/components/atoms/Input";
import { ebGaramond } from "@/app/(routes)/layout";
import Button, { ButtonProps } from "@/app/shared/components/atoms/Button";
import { FC } from "react";

interface AccountInformationsPageProps
  extends TitleProps,
    ButtonProps,
    InputProps {
  subtitle: string;
  changePasswordTitle: string;
  changePasswordDescription: string;
}

const AccountInformationsPage: FC<AccountInformationsPageProps> = ({
  subtitle,
  id,
  label,
  type,
  onChange,
  value,
  changePasswordTitle,
  changePasswordDescription,
  btnText,
  btnOnClick,
  firstWord,
  secondWord,
  disabled,
}) => {
  return (
    <div className={styles.accountInformationsPage}>
      <Title firstWord={firstWord} secondWord={secondWord} />
      <div className={styles.accountInformationsPage__container}>
        <h1
          className={`${ebGaramond.className} ${styles.accountInformationsPage__container__title}`}
        >
          {subtitle}
        </h1>
        <Input
          id={id}
          label={label}
          type={type}
          onChange={onChange}
          value={value}
          disabled={disabled}
        />
        <div
          className={styles.accountInformationsPage__container__changePassword}
        >
          <h2
            className={`${ebGaramond.className} ${styles.accountInformationsPage__container__changePassword__title}`}
          >
            {changePasswordTitle}
          </h2>
          <p>{changePasswordDescription}</p>
          <Button btnText={btnText} btnOnClick={btnOnClick} />
        </div>
      </div>
    </div>
  );
};

export default AccountInformationsPage;
