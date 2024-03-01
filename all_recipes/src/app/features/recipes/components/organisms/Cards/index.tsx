import { FC } from "react";
import styles from "./styles.module.scss";
import Card from "../Card";
import { PANCAKE_IMG } from "../../../constants";
import { RIGHT_ARROW_ICON } from "@/app/shared/constants";

interface CardsProps {}

const Cards: FC<CardsProps> = ({}) => {
  return (
    <div className={styles.cards}>
      <Card
        image={PANCAKE_IMG}
        title={"dessert"}
        subtitle={"strawberry syrup pancake"}
        descriptionIcon={RIGHT_ARROW_ICON}
      />
      <Card
        image={PANCAKE_IMG}
        title={"dessert"}
        subtitle={"strawberry syrup pancake"}
        descriptionIcon={RIGHT_ARROW_ICON}
      />
      <Card
        image={PANCAKE_IMG}
        title={"dessert"}
        subtitle={"strawberry syrup pancake"}
        descriptionIcon={RIGHT_ARROW_ICON}
      />
      <Card
        image={PANCAKE_IMG}
        title={"dessert"}
        subtitle={"strawberry syrup pancake"}
        descriptionIcon={RIGHT_ARROW_ICON}
      />
      <Card
        image={PANCAKE_IMG}
        title={"dessert"}
        subtitle={"strawberry syrup pancake"}
        descriptionIcon={RIGHT_ARROW_ICON}
      />
      <Card
        image={PANCAKE_IMG}
        title={"dessert"}
        subtitle={"strawberry syrup pancake"}
        descriptionIcon={RIGHT_ARROW_ICON}
      />
      <Card
        image={PANCAKE_IMG}
        title={"dessert"}
        subtitle={"strawberry syrup pancake"}
        descriptionIcon={RIGHT_ARROW_ICON}
      />
    </div>
  );
};

export default Cards;
