import { FC, useEffect } from "react";
import styles from "./styles.module.scss";
import { CUISINES, DIETS, INGREDIENTS, MEALS } from "@/app/shared/constants";
import Link from "next/link";
import SearchBar, {
  SearchBarProps,
} from "@/app/features/search/components/molecules/SearchBar";

export interface MenuProps extends SearchBarProps {
  isOpen: boolean;
  firstTitle: string;
  secondTitle: string;
  thirdTitle: string;
  fourthTitle: string;
  meals: any;
  cuisines: any;
  ingredients: any;
  diets: any;
}

const Menu: FC<MenuProps> = ({
  isOpen,
  firstTitle,
  secondTitle,
  thirdTitle,
  fourthTitle,
  meals,
  cuisines,
  ingredients,
  diets,
  placeholder,
  icon,
}) => {
  return (
    isOpen && (
      <div className={styles.menu}>
        <SearchBar placeholder={placeholder} icon={icon} />

        <div className={styles.menu__list}>
          <h3>{firstTitle}</h3>
          {meals}
        </div>

        <div className={styles.menu__list}>
          <h3>{secondTitle}</h3>
          {cuisines}
        </div>

        <div className={styles.menu__list}>
          <h3>{thirdTitle}</h3>
          {ingredients}
        </div>

        <div className={styles.menu__list}>
          <h3>{fourthTitle}</h3>
          {diets}
        </div>
      </div>
    )
  );
};

export default Menu;
