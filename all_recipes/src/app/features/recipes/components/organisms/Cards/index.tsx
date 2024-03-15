import { FC } from "react";
import styles from "./styles.module.scss";

export interface CardsProps {
  cards: JSX.Element | JSX.Element[];
}

const Cards: FC<CardsProps> = ({ cards }) => {
  return <div className={styles.cards}>{cards}</div>;
};

export default Cards;
