import Title, { TitleProps } from "@/app/shared/components/atoms/Title";
import styles from "./styles.module.scss";
import { CircularProgress } from "@mui/material";
import { FC } from "react";
import Button, { ButtonProps } from "@/app/shared/components/atoms/Button";

interface VerifyPageProps extends TitleProps, ButtonProps {
  isExpired: boolean;
  errorMessage: string;
  loaderSize: number;
}

const VerifyPage: FC<VerifyPageProps> = ({
  firstWord,
  secondWord,
  isExpired,
  errorMessage,
  loaderSize,
  btnText,
  btnOnClick,
}) => {
  return (
    <div className={styles.verifyPage}>
      <Title firstWord={firstWord} secondWord={secondWord} />
      {isExpired ? (
        <>
          <p>{errorMessage}</p>
          <Button btnText={btnText} btnOnClick={btnOnClick} />
        </>
      ) : (
        <CircularProgress size={loaderSize} />
      )}
    </div>
  );
};

export default VerifyPage;
