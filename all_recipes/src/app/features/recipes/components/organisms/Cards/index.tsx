import { FC } from "react";
import styles from "./styles.module.scss";
import Button, { ButtonProps } from "@/app/shared/components/atoms/Button";

export interface CardsProps {
  cards: JSX.Element | JSX.Element[];
}

const Cards: FC<CardsProps> = ({ cards }) => {
  return <div className={styles.cards}>{cards}</div>;
};

export default Cards;
