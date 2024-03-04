import { FC } from "react";
import styles from "./styles.module.scss";
import Button from "@/app/shared/components/atoms/Button";
import { ImageType } from "@/app/shared/types";

export interface CardsProps {
  cards: JSX.Element;
  cardsBtnText: string;
  cardsBtnIcon: ImageType;
  hasBtn: boolean;
}

const Cards: FC<CardsProps> = ({
  cards,
  cardsBtnText,
  cardsBtnIcon,
  hasBtn,
}) => {
  return (
    <div className={styles.cards}>
      {cards}
      {hasBtn && <Button text={cardsBtnText} icon={cardsBtnIcon} />}
    </div>
  );
};

export default Cards;
