import { ebGaramond } from "@/app/(routes)/layout";
import Button, { ButtonProps } from "../../atoms/Button";
import styles from "./styles.module.scss";
import { FC } from "react";

interface ErrorPageProps extends ButtonProps {
  status: string;
  message: string;
}

const ErrorPage: FC<ErrorPageProps> = ({
  status,
  message,
  btnText,
  btnOnClick,
}) => {
  return (
    <div className={styles.errorPage}>
      <h1 className={`${styles.errorPage__status} ${ebGaramond.className}`}>
        {status}
      </h1>
      <p className={styles.errorPage__message}>{message}</p>
      <Button btnText={btnText} btnOnClick={btnOnClick} />
    </div>
  );
};

export default ErrorPage;
