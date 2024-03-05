"use client";
import { FC } from "react";
import styles from "./styles.module.scss";
import SearchBar, { SearchBarProps } from "../../molecules/SearchBar";
import { ebGaramond, montserrat } from "@/app/(routes)/layout";
import Cards, {
  CardsProps,
} from "@/app/features/recipes/components/organisms/Cards";

interface SearchPageProps extends SearchBarProps, CardsProps {
  searchLabel: string;
  query: string | null;
}

const SearchPage: FC<SearchPageProps> = ({
  searchLabel,
  query,
  placeholder,
  icon,
  onChange,
  onSubmit,
  cards,
  cardsBtnText,
  cardsBtnIcon,
  hasBtn,
}) => {
  return (
    <div className={styles.searchPage}>
      <div className={styles.searchPage__header}>
        <h2 className={montserrat.className}>
          {searchLabel}
          <p className={ebGaramond.className}>{query}</p>
        </h2>
        <SearchBar
          placeholder={placeholder}
          icon={icon}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </div>

      <div className={styles.searchPage__cards}>
        <Cards
          cards={cards}
          cardsBtnText={cardsBtnText}
          cardsBtnIcon={cardsBtnIcon}
          hasBtn={hasBtn}
        />
      </div>
    </div>
  );
};

export default SearchPage;
