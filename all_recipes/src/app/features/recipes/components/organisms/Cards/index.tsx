import { FC } from "react";
import styles from "./styles.module.scss";
import Button, { ButtonProps } from "@/app/shared/components/atoms/Button";

export interface CardsProps extends ButtonProps {
  cards: JSX.Element | JSX.Element[];
  hasBtn: boolean;
}

const Cards: FC<CardsProps> = ({
  cards,
  btnText,
  btnIcon,
  hasBtn,
  btnOnClick,
}) => {
  return (
    <div className={styles.cards}>
      {cards}
      {hasBtn && (
        <Button btnText={btnText} btnIcon={btnIcon} btnOnClick={btnOnClick} />
      )}
    </div>
  );
};

export default Cards;
