import { FC } from "react";
import styles from "./styles.module.scss";
import Card from "../Card";
import { PANCAKE_IMG } from "../../../constants";
import { RIGHT_ARROW_ICON } from "@/app/shared/constants";
import Button from "@/app/shared/components/atoms/Button";

export interface CardsProps {
  cards: any;
  cardsBtnText: string;
  cardsBtnIcon: any;
}

const Cards: FC<CardsProps> = ({ cards, cardsBtnText, cardsBtnIcon }) => {
  return (
    <div className={styles.cards}>
      {cards}
      <Button text={cardsBtnText} icon={cardsBtnIcon} />
    </div>
  );
};

export default Cards;
