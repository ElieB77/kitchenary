import { FC } from "react";
import styles from "./styles.module.scss";
import Card from "../../molecules/Card";
import { PANCAKE_IMG } from "../../../constants";
import { RIGHT_ARROW_ICON } from "@/app/shared/constants";
import Button from "@/app/shared/components/atoms/Button";

export interface CardsProps {
  cards: any;
  cardsBtnText: string;
  cardsBtnIcon: any;
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
