import { FC } from "react";
import styles from "./styles.module.scss";
import SearchBar, {
  SearchBarProps,
} from "@/app/features/search/components/molecules/SearchBar";

export interface MenuProps extends SearchBarProps {
  isOpen: boolean;
  firstTitle: string;
  secondTitle: string;
  thirdTitle: string;
  fourthTitle: string;
  meals: JSX.Element[];
  cuisines: JSX.Element[];
  ingredients: JSX.Element[];
  diets: JSX.Element[];
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
  searchBarIcon,
  value,
  type,
  onChange,
  onSubmit,
}) => {
  return (
    isOpen && (
      <div className={styles.menu}>
        <div className={styles.menu__wrapper}>
          <SearchBar
            placeholder={placeholder}
            searchBarIcon={searchBarIcon}
            onChange={onChange}
            onSubmit={onSubmit}
            value={value}
            type={type}
          />

          <div className={styles.menu__wrapper__list}>
            <h3>{firstTitle}</h3>
            {meals}
          </div>

          <div className={styles.menu__wrapper__list}>
            <h3>{secondTitle}</h3>
            {cuisines}
          </div>

          <div className={styles.menu__wrapper__list}>
            <h3>{thirdTitle}</h3>
            {ingredients}
          </div>

          <div className={styles.menu__wrapper__list}>
            <h3>{fourthTitle}</h3>
            {diets}
          </div>
        </div>
      </div>
    )
  );
};

export default Menu;
