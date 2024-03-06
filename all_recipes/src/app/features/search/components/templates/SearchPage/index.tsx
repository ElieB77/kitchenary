"use client";
import { FC } from "react";
import styles from "./styles.module.scss";
import SearchBar, { SearchBarProps } from "../../molecules/SearchBar";
import { ebGaramond, montserrat } from "@/app/(routes)/layout";
import Cards, {
  CardsProps,
} from "@/app/features/recipes/components/organisms/Cards";
import PaginationButtons, {
  PaginationButtonsProps,
} from "../../molecules/PaginationButtons";

interface SearchPageProps
  extends SearchBarProps,
    CardsProps,
    PaginationButtonsProps {
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
  btnText,
  btnIcon,
  btnOnClick,
  hasBtn,
  totalPages,
  currentPage,
  content,
  onClick,
  value,
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
          value={value}
        />
      </div>

      <div className={styles.searchPage__cards}>
        <Cards
          cards={cards}
          btnText={btnText}
          btnIcon={btnIcon}
          hasBtn={hasBtn}
          btnOnClick={btnOnClick}
        />
      </div>

      {totalPages > 1 && (
        <div className={styles.searchPage__pagination}>
          <PaginationButtons
            totalPages={totalPages}
            currentPage={currentPage}
            content={content}
            onClick={onClick}
          />
        </div>
      )}
    </div>
  );
};

export default SearchPage;
